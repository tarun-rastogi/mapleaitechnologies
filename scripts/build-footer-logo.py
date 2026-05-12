#!/usr/bin/env python3
"""Build public/images/maple-ai-logo-footer.png from maple-ai-logo-navbar.png.

The navbar asset uses navy fills for lettering (for a white header). On the dark
footer, those fills disappear and only fragmented white halos remain. This
script recolors connected wordmark regions to solid light text and cleans stray
halo blobs. Re-run after updating the navbar logo source.
"""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/maple-ai-logo-navbar.png"
OUT = ROOT / "public/images/maple-ai-logo-footer.png"


def bbox(cells: list[tuple[int, int]]) -> tuple[int, int, int, int]:
    xs = [p[0] for p in cells]
    ys = [p[1] for p in cells]
    return min(xs), min(ys), max(xs), max(ys)


def dark_text(px, x: int, y: int) -> bool:
    r, g, b, a = px[x, y]
    if a < 200:
        return False
    return (r + g + b) / 3 < 95 and r < 55 and g < 75


def connected_components(
    w: int, h: int, predicate
) -> list[list[tuple[int, int]]]:
    visited = [[False] * w for _ in range(h)]
    out: list[list[tuple[int, int]]] = []
    for y in range(h):
        for x in range(w):
            if visited[y][x] or not predicate(x, y):
                continue
            q = deque([(x, y)])
            visited[y][x] = True
            cells: list[tuple[int, int]] = []
            while q:
                cx, cy = q.popleft()
                cells.append((cx, cy))
                for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                    nx, ny = cx + dx, cy + dy
                    if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx] and predicate(nx, ny):
                        visited[ny][nx] = True
                        q.append((nx, ny))
            out.append(cells)
    return out


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    w, h = im.size
    px = im.load()
    out_im = im.copy()
    opx = out_im.load()

    # 1) Recolor navy letterform components (wordmark area)
    def is_dark(x: int, y: int) -> bool:
        return dark_text(px, x, y)

    components = connected_components(w, h, is_dark)
    word: list[list[tuple[int, int]]] = []
    for c in components:
        x0, y0, x1, y1 = bbox(c)
        if len(c) > 200 and x0 >= 350:
            word.append(c)
        elif len(c) > 500 and x0 >= 380:
            word.append(c)
    for c in word:
        for x, y in c:
            opx[x, y] = (252, 253, 255, 255)

    # 2) Anti-aliased / gray strokes in word rectangle → solid fill
    for y in range(110, 290):
        for x in range(410, 905):
            r, g, b, a = opx[x, y]
            if a < 200:
                continue
            if (r + g + b) / 3 < 115 and r < 110 and g < 115 and b < 125:
                opx[x, y] = (252, 253, 255, 255)

    # 3) Remove tiny bright halo fragments (left / top noise)
    def bright(x: int, y: int) -> bool:
        r, g, b, a = opx[x, y]
        return a > 200 and (r + g + b) / 3 > 242

    visited = [[False] * w for _ in range(h)]
    for y in range(h):
        for x in range(w):
            if visited[y][x] or not bright(x, y):
                continue
            q = deque([(x, y)])
            visited[y][x] = True
            cells: list[tuple[int, int]] = []
            while q:
                cx, cy = q.popleft()
                cells.append((cx, cy))
                for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                    nx, ny = cx + dx, cy + dy
                    if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx] and bright(nx, ny):
                        visited[ny][nx] = True
                        q.append((nx, ny))
            x0, y0, x1, y1 = bbox(cells)
            area = len(cells)
            if area < 350 and x1 < 400 and y1 < 160:
                for cx, cy in cells:
                    opx[cx, cy] = (0, 0, 0, 0)
            elif area < 60:
                for cx, cy in cells:
                    opx[cx, cy] = (0, 0, 0, 0)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    out_im.save(OUT)
    print(f"Wrote {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
