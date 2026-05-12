#!/usr/bin/env python3
"""Render Maple AI Technologies visiting card PNG (two-column template layout)."""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1050, 600
STRIPE_W = 18
LEFT_EDGE = 48
RIGHT_CONTENT_RIGHT = W - STRIPE_W - 40
MID_GAP = 56
# Vertical divider between columns (logo column ends around here)
SPLIT_X = 400

_SCRIPT_DIR = Path(__file__).resolve().parent
_MAPLE_ROOT = _SCRIPT_DIR.parent
LOGO_PATH = _MAPLE_ROOT / "assets" / "maple-ai-logo-from-digital-card.jpg"
OUT_PATH = _MAPLE_ROOT / "maple-ai-visiting-card.png"

# Brand (accent: cyan → purple on stripe; template-style key text uses brand orange alternative)
CYAN = (0, 180, 216)
PURPLE = (124, 58, 237)
NAVY = (28, 35, 64)
GREY = (100, 116, 139)
GREY_LIGHT = (148, 163, 184)
ACCENT_TEXT = (0, 180, 216)  # company first line
SQUARE_FILL = (234, 88, 12)  # small icon squares (template orange; readable on white)


def truetype(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = []
    if bold:
        candidates = [
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/System/Library/Fonts/Helvetica.ttc",
            "/Library/Fonts/Arial Bold.ttf",
        ]
    else:
        candidates = [
            "/System/Library/Fonts/Supplemental/Arial Italic.ttf",
            "/System/Library/Fonts/Supplemental/Arial.ttf",
            "/Library/Fonts/Arial.ttf",
        ]
    for p in candidates:
        if os.path.isfile(p):
            try:
                if p.endswith(".ttc"):
                    return ImageFont.truetype(p, size, index=1 if bold else 0)
                return ImageFont.truetype(p, size)
            except OSError:
                continue
    return ImageFont.load_default()


def draw_vertical_gradient_stripe(draw: ImageDraw.ImageDraw, x0: int, width: int) -> None:
    for y in range(H):
        t = y / max(H - 1, 1)
        r = int(CYAN[0] + t * (PURPLE[0] - CYAN[0]))
        g = int(CYAN[1] + t * (PURPLE[1] - CYAN[1]))
        b = int(CYAN[2] + t * (PURPLE[2] - CYAN[2]))
        draw.line([(x0, y), (x0 + width - 1, y)], fill=(r, g, b))


def center_x_in_region(left: int, right: int, text: str, font: ImageFont.ImageFont) -> int:
    try:
        bbox = font.getbbox(text)
        tw = bbox[2] - bbox[0]
    except AttributeError:
        tw, _ = font.getsize(text)
    return left + max(0, (right - left - tw) // 2)


def main() -> None:
    img = Image.new("RGB", (W, H), (255, 255, 255))
    draw = ImageDraw.Draw(img)

    draw_vertical_gradient_stripe(draw, W - STRIPE_W, STRIPE_W)

    # ── Fonts (+50% vs typical base except name per prior requests) ──
    font_name = truetype(44, bold=True)  # Tarun Rastogi — not upscaled 50%
    font_title = truetype(24, bold=False)
    font_company_big = truetype(33, bold=True)
    font_company_sub = truetype(18, bold=True)
    font_tagline = truetype(18, bold=False)  # italic path attempted
    font_services = truetype(21, bold=False)
    font_contact = truetype(21, bold=False)
    font_contact_sm = truetype(19, bold=False)

    # Right column Y positions (compute first so logo top aligns with services text)
    name_y = 64
    title_y = name_y + 52
    services_y = title_y + 48

    # ── Load & place logo (left column, centered; top aligns with "Web, ..." block) ──
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 240  # large presence (~doubled+30% style)
    aspect = logo.width / logo.height
    logo_w = int(logo_h * aspect)
    logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

    left_region_right = SPLIT_X - MID_GAP // 2
    lx = LEFT_EDGE + max(0, (left_region_right - LEFT_EDGE - logo_w) // 2)
    ly = services_y
    img.paste(logo, (lx, ly), logo)

    # Company block under logo
    y = ly + logo_h + 28
    line1 = "Maple AI"
    line2 = "TECHNOLOGIES"
    tagline = "Built by AI Agents"

    x1 = center_x_in_region(LEFT_EDGE, left_region_right, line1, font_company_big)
    draw.text((x1, y), line1, font=font_company_big, fill=ACCENT_TEXT)
    y += 38
    x2 = center_x_in_region(LEFT_EDGE, left_region_right, line2, font_company_sub)
    draw.text((x2, y), line2, font=font_company_sub, fill=NAVY)
    y += 30
    x3 = center_x_in_region(LEFT_EDGE, left_region_right, tagline, font_tagline)
    draw.text((x3, y), tagline, font=font_tagline, fill=GREY_LIGHT)

    # ── Right column ──
    rx = SPLIT_X + MID_GAP // 2
    draw.text((rx, name_y), "Tarun Rastogi", font=font_name, fill=NAVY)
    draw.text((rx, title_y), "Founder & CEO", font=font_title, fill=GREY)
    ry = services_y

    services = "Web, Mobile, Enterprise\nand AI Products"
    draw.multiline_text((rx, ry), services, font=font_services, fill=GREY, spacing=8)
    sb = draw.multiline_textbbox((0, 0), services, font=font_services, spacing=8)
    services_block_h = sb[3] - sb[1]
    ry = services_y + services_block_h + 24

    # Contact rows with squares
    def contact_row(y: int, label: str) -> int:
        sq = 20
        draw.rectangle([rx, y + 2, rx + sq, y + 2 + sq], fill=SQUARE_FILL)
        draw.text((rx + sq + 14, y + 1), label, font=font_contact, fill=NAVY)
        return y + 38

    ry = contact_row(ry, "+91 9619060302")
    ry = contact_row(ry, "tarunrastogi@mapleaitechnologies.com")
    ry = contact_row(ry, "www.mapleaitechnologies.com")

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT_PATH, "PNG", dpi=(300, 300))
    print(f"Wrote {OUT_PATH}")


if __name__ == "__main__":
    main()
