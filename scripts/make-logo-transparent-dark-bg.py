#!/usr/bin/env python3
"""Rebuild maple_logo_no_bg.png with true transparency and solid, readable branding."""
from __future__ import annotations

import pathlib
import sys
from collections import deque

import numpy as np
from PIL import Image
from scipy.ndimage import binary_dilation, distance_transform_edt, label

ROOT = pathlib.Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/shared/maple_logo_no_bg_source.png"
OUT = ROOT / "public/images/shared/maple_logo_no_bg.png"
VENV_SITE = ROOT / ".venv-logo/lib"

TEXT_SPLIT_RATIO = 0.36
MAPLE_LINE_Y = 515


def chroma(rgb: np.ndarray) -> np.ndarray:
    return rgb.max(axis=-1).astype(np.int16) - rgb.min(axis=-1).astype(np.int16)


def dilate(mask: np.ndarray, iterations: int = 1) -> np.ndarray:
    out = mask
    for _ in range(iterations):
        out = binary_dilation(out)
    return out


def flood_zone_edges(zone: np.ndarray, passable: np.ndarray) -> np.ndarray:
    h, w = zone.shape
    flooded = np.zeros((h, w), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    zone_cols = np.flatnonzero(zone.any(axis=0))
    zone_left = int(zone_cols[0]) if zone_cols.size else 0
    zone_right = int(zone_cols[-1]) if zone_cols.size else w - 1

    for y in range(h):
        for x in range(w):
            if not zone[y, x] or not passable[y, x]:
                continue
            on_edge = (
                y == 0
                or y == h - 1
                or x == zone_left
                or x == zone_right
                or x == 0
            )
            if on_edge:
                flooded[y, x] = True
                queue.append((y, x))

    while queue:
        y, x = queue.popleft()
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            ny, nx = y + dy, x + dx
            if (
                0 <= ny < h
                and 0 <= nx < w
                and zone[ny, nx]
                and passable[ny, nx]
                and not flooded[ny, nx]
            ):
                flooded[ny, nx] = True
                queue.append((ny, nx))

    return flooded


def rembg_alpha(rgb: np.ndarray) -> np.ndarray | None:
    """Return rembg alpha channel when the local venv is available."""
    for version_dir in sorted(VENV_SITE.glob("python*/site-packages"), reverse=True):
        if str(version_dir) not in sys.path:
            sys.path.insert(0, str(version_dir))

    try:
        from rembg import remove
    except ImportError:
        return None

    result = np.array(remove(Image.fromarray(rgb, mode="RGB")).convert("RGBA"))
    return result[:, :, 3]


def tech_ink_mask(
    tech_zone: np.ndarray,
    lum: np.ndarray,
    sat: np.ndarray,
    matte: np.ndarray,
) -> np.ndarray:
    """Solid Technologies lettering with transparent counters."""
    tech_ink = tech_zone & (lum >= 72) & (lum <= 160) & (sat >= 6) & ~matte
    tech_keep = np.zeros_like(tech_ink)
    labeled, count = label(tech_ink)

    for index in range(1, count + 1):
        component = labeled == index
        if component.sum() < 36:
            tech_keep |= component
            continue

        dist = distance_transform_edt(component)
        # Remove enclosed counter fill while keeping solid strokes on bars like T, l, i.
        counter_fill = component & (dist > 4.2) & (lum < 108)
        tech_keep |= component & ~counter_fill

    return tech_keep


def text_mask(
    text_zone: np.ndarray,
    maple_zone: np.ndarray,
    tech_zone: np.ndarray,
    lum: np.ndarray,
    sat: np.ndarray,
    matte: np.ndarray,
) -> np.ndarray:
    """Solid Maple AI + Technologies ink with transparent counters and matte."""
    maple_ink = maple_zone & (lum < 65) & (sat > 6)
    tech_keep = tech_ink_mask(tech_zone, lum, sat, matte)

    flooded = flood_zone_edges(text_zone, text_zone & matte)
    return (maple_ink | tech_keep) & ~matte & ~flooded


def icon_mask(
    icon_zone: np.ndarray,
    lum: np.ndarray,
    sat: np.ndarray,
    matte: np.ndarray,
    checker_tint: np.ndarray,
    rembg: np.ndarray | None,
) -> np.ndarray:
    """Keep the full maple leaf, including white circuit traces."""
    leaf_body = icon_zone & (sat > 32) & ~matte & ~checker_tint
    flooded = flood_zone_edges(icon_zone, icon_zone & (matte | checker_tint))
    leaf_keep = leaf_body & ~flooded

    white_traces = (
        icon_zone
        & matte
        & (lum > 232)
        & dilate(leaf_body, iterations=3)
        & ~flooded
    )

    icon_keep = leaf_keep | white_traces

    if rembg is not None:
        rembg_leaf = icon_zone & (rembg >= 175) & ~matte & ~checker_tint & ~flooded
        icon_keep |= rembg_leaf & dilate(leaf_body, iterations=2)

    icon_keep &= ~flooded

    if icon_keep.any():
        dense = icon_keep & ((lum < 205) | (sat > 55))
        if dense.any():
            core_bottom = int(np.where(dense)[0].max())
            icon_keep &= np.arange(lum.shape[0])[:, None] <= core_bottom + 2

    labeled, count = label(icon_keep)
    if count > 0:
        sizes = np.bincount(labeled.ravel())
        sizes[0] = 0
        icon_keep = labeled == int(sizes.argmax())

    for y in range(lum.shape[0]):
        edge_cols = np.flatnonzero(icon_keep[y])
        if edge_cols.size:
            icon_keep[y, int(edge_cols.max()) + 2 :] = False

    return icon_keep


def main() -> None:
    im = Image.open(SRC).convert("RGB")
    rgb = np.array(im)
    h, w, _ = rgb.shape
    lum = rgb.mean(axis=-1)
    sat = chroma(rgb)
    xs = np.broadcast_to(np.arange(w), (h, w))
    ys = np.arange(h)[:, None]

    matte = (lum > 165) & (sat < 30)
    checker_tint = (lum > 145) & (sat < 55)
    text_zone = xs >= int(w * TEXT_SPLIT_RATIO)
    icon_zone = ~text_zone

    maple_zone = text_zone & (ys < MAPLE_LINE_Y)
    tech_zone = text_zone & (ys >= MAPLE_LINE_Y)

    rembg = rembg_alpha(rgb)
    text_keep = text_mask(text_zone, maple_zone, tech_zone, lum, sat, matte)
    icon_keep = icon_mask(icon_zone, lum, sat, matte, checker_tint, rembg)

    keep = text_keep | icon_keep

    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, :3] = rgb
    rgba[:, :, 3] = np.where(keep, 255, 0).astype(np.uint8)

    Image.fromarray(rgba, mode="RGBA").save(OUT, "PNG", optimize=True)

    alpha = rgba[:, :, 3]
    tech_opaque = int((alpha > 0).sum() and ((alpha > 0) & tech_zone).sum())
    ys_idx, xs_idx = np.where((alpha > 0) & tech_zone)
    if xs_idx.size:
        tech_fill = (
            alpha[ys_idx.min() : ys_idx.max() + 1, xs_idx.min() : xs_idx.max() + 1] > 0
        ).mean()
    else:
        tech_fill = 0.0

    artifacts = int(((alpha > 0) & (matte | checker_tint)).sum())
    print(
        f"Wrote {OUT.relative_to(ROOT)} — transparent "
        f"{round((alpha == 0).sum() / alpha.size * 100, 1)}%, "
        f"technologies fill {round(tech_fill * 100, 1)}%, "
        f"artifact pixels {artifacts}, "
        f"rembg {'yes' if rembg is not None else 'no'}"
    )


if __name__ == "__main__":
    main()
