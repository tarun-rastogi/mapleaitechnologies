"use client";

import { useEffect, useState } from "react";

const DARK_ZONE_SELECTOR = '[data-maple-header-contrast="dark"]';

function getHeaderBandRootMargin(): string {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--maple-header-height")
    .trim();
  const headerHeight = Number.parseFloat(raw) || 88;
  const band = Math.ceil(headerHeight);
  return `0px 0px -${Math.max(0, window.innerHeight - band)}px 0px`;
}

function collectDarkZones(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(DARK_ZONE_SELECTOR));
}

/**
 * True when a `[data-maple-header-contrast="dark"]` section overlaps the sticky header band.
 */
export function useHeaderOnDark(enabled: boolean) {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setOnDark(false);
      return;
    }

    const visible = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    const sync = () => setOnDark(visible.size > 0);

    const attach = () => {
      observer?.disconnect();
      visible.clear();

      const zones = collectDarkZones();
      if (zones.length === 0) {
        sync();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visible.add(entry.target);
            } else {
              visible.delete(entry.target);
            }
          });
          sync();
        },
        {
          root: null,
          rootMargin: getHeaderBandRootMargin(),
          threshold: 0,
        },
      );

      zones.forEach((zone) => observer?.observe(zone));
    };

    attach();
    window.addEventListener("resize", attach);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", attach);
    };
  }, [enabled]);

  return onDark;
}
