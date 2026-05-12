"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delayMs?: number;
  highlight?: boolean;
};

export function Reveal({
  children,
  className,
  style,
  delayMs = 0,
  highlight = false,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`${className ?? ""} ${highlight ? "reveal-highlight" : ""}`.trim()}
      data-visible={isVisible ? "true" : "false"}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 620ms ease ${delayMs}ms, transform 620ms ease ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
