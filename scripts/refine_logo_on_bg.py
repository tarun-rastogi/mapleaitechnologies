#!/usr/bin/env python3
"""
Rebuild the Maple AI logo composited cleanly on #020618:
  - Flood-fill background + stem-drop shadow suppression
  - Leaf edge: erode/feather FG matte (removes white keying halos)
  - Text forced to crisp white via luminance-based coverage in bbox
"""
from __future__ import annotations

import pathlib

import cv2
import numpy as np

SOURCE = pathlib.Path(__file__).resolve().parents[1] / "assets" / "maple-ai-logo-from-digital-card.jpg"
OUT_MAIN = pathlib.Path(__file__).resolve().parents[1] / "assets" / "maple-ai-logo-bg-020618.png"
OUT_JPEG = pathlib.Path(__file__).resolve().parents[1] / "assets" / "maple-ai-logo-bg-020618.jpg"


def build_bg_mask(rgb: np.ndarray, bgr: np.ndarray) -> np.ndarray:
    h, w = rgb.shape[:2]
    combined = np.zeros((h, w), np.uint8)
    flags = cv2.FLOODFILL_FIXED_RANGE | 4 | (255 << 8)
    lo_diff = (18, 18, 22)
    up_diff = (18, 18, 22)
    seeds = [
        (0, 0),
        (w - 1, 0),
        (0, h - 1),
        (w - 1, h - 1),
        (w // 2, 0),
        (0, h // 2),
        (w // 2, h - 1),
    ]
    for sx, sy in seeds:
        mm = np.zeros((h + 2, w + 2), np.uint8)
        seed = bgr.copy()
        cv2.floodFill(
            seed, mm, (int(sx), int(sy)), 0, loDiff=lo_diff, upDiff=up_diff, flags=flags
        )
        combined = np.maximum(combined, mm[1:-1, 1:-1])

    flood_bg = combined > 0

    xs = np.outer(np.ones(h, dtype=np.float32), np.arange(w, dtype=np.float32))
    ys = np.outer(np.arange(h, dtype=np.float32), np.ones(w, dtype=np.float32))

    r = rgb[..., 0].astype(np.int16)
    g = rgb[..., 1].astype(np.int16)
    bch = rgb[..., 2].astype(np.int16)
    lum = (r.astype(np.float32) + g.astype(np.float32) + bch.astype(np.float32)) / 3.0
    sat = (
        np.maximum(np.maximum(r, g), bch) - np.minimum(np.minimum(r, g), bch)
    ).astype(np.float32)

    cx, cy = 317.0, 528.0
    rx, ry = 90.0, 40.0
    ell = (((xs - cx) ** 2) / (rx**2) + ((ys - cy) ** 2) / (ry**2)) <= 1.0

    purple_shadow = ell & (
        (lum > 160.0)
        & (lum < 254.9)
        & (sat < 95.0)
        & ((bch + g.astype(np.float32) - 2.0 * r.astype(np.float32)) > -20.0)
        & ((bch + g.astype(np.float32) - 2.0 * r.astype(np.float32)) < 140.0)
    )
    dark_text = lum < 115.0
    stem_shadow = purple_shadow.astype(bool) & (~dark_text)

    k41 = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (41, 41))
    stem_shadow = cv2.dilate(stem_shadow.astype(np.uint8) * 255, k41, iterations=1) > 0

    return flood_bg | stem_shadow


def main() -> None:
    bgr = cv2.imread(str(SOURCE), cv2.IMREAD_COLOR)
    if bgr is None:
        raise SystemExit(f"Could not read: {SOURCE}")

    rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB).astype(np.float32)
    h, w = rgb.shape[:2]

    final_bg_bool = build_bg_mask(rgb.astype(np.uint8), bgr)
    fg_bool = ~final_bg_bool

    fg_u8 = fg_bool.astype(np.uint8) * 255
    xs_grid = np.broadcast_to(np.arange(w, dtype=np.int32), (h, w))

    cols_with_text_fg = np.where(np.any(fg_bool & (xs_grid >= 478), axis=0))[0]
    split_x = int(cols_with_text_fg.min()) if cols_with_text_fg.size > 0 else 478

    leaf_only = fg_u8.copy()
    leaf_only[:, split_x:] = 0

    k13 = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (13, 13))
    leaf_er = cv2.erode(leaf_only, k13, iterations=2).astype(np.float32) / 255.0
    leaf_a = cv2.GaussianBlur(leaf_er, (0, 0), sigmaX=2.38, sigmaY=2.38)

    text_alpha_full = fg_bool.astype(np.float32)
    alpha = np.where(xs_grid >= (split_x - 2), text_alpha_full, leaf_a.astype(np.float32))
    alpha = cv2.GaussianBlur(alpha.astype(np.float32), (0, 0), sigmaX=1.08)
    alpha = np.clip(alpha, 0.0, 1.0)

    bg_rgb = np.array([2.0, 6.0, 24.0], dtype=np.float32)
    comp = rgb * alpha[..., None] + bg_rgb * (1.0 - alpha[..., None])
    comp = np.clip(comp, 0.0, 255.0).astype(np.float32)

    comp_lum = np.mean(comp, axis=-1, dtype=np.float32)
    fringe_kill = (
        (xs_grid < (split_x - 6))
        & (alpha > 0.02)
        & (alpha < 0.88)
        & (comp_lum > 205.5)
    )
    if np.any(fringe_kill):
        fk = fringe_kill[..., None].astype(np.float32)
        spill = fk * 0.82
        comp = comp * (1.0 - spill) + bg_rgb * spill

    lum_in = np.mean(rgb, axis=-1)

    fg_text_seed = fg_bool & (xs_grid >= 482)
    if not np.any(fg_text_seed):
        raise SystemExit("Could not derive text segmentation from foreground mask.")

    yt, xt = np.where(fg_text_seed)
    pad_y = 10
    pad_x = 12
    y0 = max(0, int(yt.min()) - pad_y)
    y1 = min(h - 1, int(yt.max()) + pad_y)
    x0 = max(0, int(xt.min()) - pad_x)
    x1 = min(w - 1, int(xt.max()) + pad_x)

    text_roi = np.zeros_like(fg_bool)
    text_roi[y0 : y1 + 1, x0 : x1 + 1] = True

    # Solid white glyphs (navy + mid-gray originals), soft falloff only near the old outer matte fringe
    bright_edge = 252.5
    mid_knee = 205.8
    lum_v = lum_in.astype(np.float32)
    halo = np.clip((bright_edge - lum_v) / (bright_edge - mid_knee), 0.0, 1.0)
    coverage = np.where(lum_v < mid_knee, 1.0, halo.astype(np.float32))

    fg_paint = fg_bool & text_roi.astype(bool)
    wm = (coverage * text_roi.astype(np.float32)) * fg_paint.astype(np.float32)
    wm = cv2.GaussianBlur(wm, (0, 0), sigmaX=0.82)

    wm = np.clip(wm, 0.0, 1.0)

    white_px = np.array([255.0, 255.0, 255.0], dtype=np.float32)
    blended = wm[..., None] * white_px + (1.0 - wm[..., None]) * bg_rgb
    roi_mask = wm > 0.008

    comp = np.where(roi_mask[..., None], blended, comp)

    out_uint8 = np.clip(comp.astype(np.float32), 0.0, 255.0).astype(np.uint8)
    cv2.imwrite(str(OUT_MAIN), cv2.cvtColor(out_uint8, cv2.COLOR_RGB2BGR))
    cv2.imwrite(str(OUT_JPEG), cv2.cvtColor(out_uint8, cv2.COLOR_RGB2BGR), [int(cv2.IMWRITE_JPEG_QUALITY), 93])
    print("Wrote", OUT_MAIN.resolve())
    print("Wrote", OUT_JPEG.resolve())


if __name__ == "__main__":
    main()
