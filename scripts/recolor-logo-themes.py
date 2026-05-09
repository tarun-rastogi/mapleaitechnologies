#!/usr/bin/env python3
"""Recolor maple-ai-technologies-linkedin-logo.png while preserving pixel geometry."""

from __future__ import annotations

import colorsys
from pathlib import Path

from PIL import Image


def rgb_to_hsv(rgb: tuple[int, int, int]) -> tuple[float, float, float]:
    r, g, b = rgb[0] / 255.0, rgb[1] / 255.0, rgb[2] / 255.0
    return colorsys.rgb_to_hsv(r, g, b)


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def mix_rgb(
    c1: tuple[int, int, int], c2: tuple[int, int, int], t: float
) -> tuple[int, int, int]:
    t = max(0.0, min(1.0, t))
    return (
        int(lerp(c1[0], c2[0], t)),
        int(lerp(c1[1], c2[1], t)),
        int(lerp(c1[2], c2[2], t)),
    )


def classify_source(rgb: tuple[int, int, int]) -> str:
    """Label original artwork: white backdrop, blue side, or grey side of the M."""
    h, s, v = rgb_to_hsv(rgb)
    if v > 0.94 and s < 0.06:
        return "w"
    r, g, b = rgb
    # Same circuit M as linkedin export: blue is saturated vs cool grey strokes
    if b > r + 18 and b > g + 12 and s > 0.16:
        return "b"
    return "g"


def recolor_pixel(
    rgb: tuple[int, int, int],
    *,
    y: int,
    bg: tuple[int, int, int],
    icon_left: tuple[int, int, int],
    icon_right: tuple[int, int, int],
    text_color: tuple[int, int, int],
    text_y_min: int,
) -> tuple[int, int, int]:
    h, s, v = rgb_to_hsv(rgb)
    label = classify_source(rgb)
    if label == "w":
        return bg

    is_text_band = y >= text_y_min

    # Wordmark in source is grey-only (no blue split)
    if is_text_band:
        edge = max(0.0, min(1.0, (1.0 - v) * 1.05 + s * 0.35))
        return mix_rgb(bg, text_color, edge)

    # Icon: keep the original blue-vs-grey partition; strength from value/sat for AA
    if label == "b":
        t = max(0.0, min(1.0, s * 0.85 + (1.0 - v) * 0.55 + 0.12))
        return mix_rgb(bg, icon_right, t)
    t = max(0.0, min(1.0, (1.0 - v) * 1.05 + s * 0.28))
    return mix_rgb(bg, icon_left, t)


def process(src: Path, dest: Path, theme: dict) -> None:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    text_y_min = int(theme["text_y_min_ratio"] * h)
    bg = theme["bg"]
    px = im.load()
    out = Image.new("RGB", (w, h))
    ox = out.load()
    for y in range(h):
        for x in range(w):
            ox[x, y] = recolor_pixel(
                px[x, y],
                y=y,
                bg=bg,
                icon_left=theme["icon_left"],
                icon_right=theme["icon_right"],
                text_color=theme["text_color"],
                text_y_min=text_y_min,
            )
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, "PNG", optimize=True)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = root / "public" / "images" / "maple-ai-technologies-linkedin-logo.png"
    out_dir = root / "public" / "images"

    themes = {
        "maple-ai-technologies-logo-sovereign-gold.png": {
            "bg": (11, 20, 38),  # #0B1426 midnight navy
            "icon_left": (201, 162, 39),  # metallic gold
            "icon_right": (255, 171, 0),  # electric amber
            "text_color": (244, 232, 201),  # warm cream / saffron-kissed
            "text_y_min_ratio": 0.56,
        },
        "maple-ai-technologies-logo-precision-forge.png": {
            "bg": (26, 29, 33),  # #1A1D21 rich charcoal
            "icon_left": (139, 21, 56),  # deep crimson
            "icon_right": (230, 232, 235),  # silver-white
            "text_color": (230, 232, 235),
            "text_y_min_ratio": 0.56,
        },
    }

    for filename, spec in themes.items():
        process(src, out_dir / filename, spec)
        print("Wrote", out_dir / filename)


if __name__ == "__main__":
    main()
