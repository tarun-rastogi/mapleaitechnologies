"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  workShowcaseHeadlines,
  workShowcaseProducts,
  type WorkShowcaseProduct,
} from "@/content/work-showcase";

function AiRevealHeadlines() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const sparklesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const orbit = orbitRef.current;
    const sparkles = sparklesRef.current;
    if (!wrap || !orbit) return;

    const lines = Array.from(wrap.querySelectorAll<HTMLElement>(".maple-ai-line"));
    const wordGroups = lines.map((line) =>
      Array.from(line.querySelectorAll<HTMLElement>(".maple-ai-word"))
    );
    const stageCount = lines.length;

    wrap.style.setProperty("--maple-ai-stage-count", String(stageCount));

    if (sparkles && sparkles.childElementCount === 0) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < 40; i += 1) {
        const spark = document.createElement("span");
        spark.className = "maple-ai-sparkle";
        spark.style.left = `${(Math.random() * 100).toFixed(2)}%`;
        spark.style.top = `${(Math.random() * 100).toFixed(2)}%`;
        spark.style.setProperty("--maple-sp-delay", `${(Math.random() * 1.5).toFixed(2)}s`);
        const size = (Math.random() * 2.5 + 1).toFixed(2);
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        spark.style.opacity = (Math.random() * 0.5 + 0.2).toFixed(2);
        fragment.appendChild(spark);
      }
      sparkles.appendChild(fragment);
    }

    let ticking = false;

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - viewport)));
      const stageFloat = progress * stageCount;
      const activeStage = Math.min(stageCount - 1, Math.floor(stageFloat));
      const stageProgress = stageFloat - activeStage;

      wordGroups.forEach((words, lineIndex) => {
        if (activeStage > lineIndex) {
          words.forEach((word) => {
            word.classList.remove("is-in");
            word.classList.add("is-out");
          });
          return;
        }

        if (activeStage < lineIndex) {
          words.forEach((word) => {
            word.classList.remove("is-in");
            word.classList.remove("is-out");
          });
          return;
        }

        words.forEach((word) => word.classList.remove("is-out"));
        const visibleCount = Math.ceil(
          Math.max(0, Math.min(1, (stageProgress - 0.08) / 0.55)) * words.length
        );
        words.forEach((word, wordIndex) => {
          if (wordIndex < visibleCount) {
            word.classList.add("is-in");
          } else {
            word.classList.remove("is-in");
          }
        });
      });

      const orbitOpacity = progress < 0.2 ? 1 : progress < 0.26 ? 1 - (progress - 0.2) / 0.06 : 0;
      const orbitScale = 0.7 + progress;
      orbit.style.transform = `translate(-50%, -50%) scale(${orbitScale.toFixed(3)})`;
      orbit.style.opacity = orbitOpacity.toFixed(2);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="maple-ai-reveal-wrap"
      data-maple-header-contrast="dark"
      aria-labelledby="maple-ai-reveal-heading"
    >
      <section
        className="maple-ai-reveal"
        aria-label="AI transformation, in shipped products"
      >
        <div ref={orbitRef} className="maple-orbit-bg" aria-hidden="true">
          <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
            <g className="maple-orbit-group maple-orbit-group--reverse">
              <circle className="maple-orbit-ring maple-orbit-ring--violet" cx="0" cy="0" r="95" />
              <circle className="maple-orbit-ring maple-orbit-ring--bright" cx="0" cy="0" r="86" />
            </g>
            <g className="maple-orbit-group">
              <circle className="maple-orbit-ring" cx="0" cy="0" r="78" />
              <circle className="maple-orbit-ring" cx="0" cy="0" r="70" />
              <circle className="maple-orbit-ring maple-orbit-ring--bright" cx="0" cy="0" r="62" />
              <circle className="maple-orbit-ring" cx="0" cy="0" r="54" />
              <circle className="maple-orbit-ring" cx="0" cy="0" r="46" />
              <circle className="maple-orbit-ring maple-orbit-ring--bright" cx="0" cy="0" r="38" />
              <circle className="maple-orbit-ring" cx="0" cy="0" r="30" />
              <circle className="maple-orbit-ring" cx="0" cy="0" r="22" />
              <circle className="maple-orbit-ring" cx="0" cy="0" r="14" />
              <circle className="maple-orbit-ring maple-orbit-ring--violet" cx="0" cy="0" r="6" />
            </g>
          </svg>
        </div>

        <div ref={sparklesRef} className="maple-ai-sparkles" aria-hidden="true" />

        <h2 id="maple-ai-reveal-heading" className="sr-only">
          AI transformation, in shipped products
        </h2>

        <div className="maple-ai-wrap">
          <div className="maple-ai-stage">
            {workShowcaseHeadlines.map((headline, index) => (
              <div key={headline} className="maple-ai-line" data-stage={index}>
                <h2>
                  {headline.split(/\s+/).map((word, wordIndex) => (
                    <span key={`${index}-${wordIndex}`} className="maple-ai-word">
                      {word}
                    </span>
                  ))}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkShowcaseProductCard({
  item,
  index,
}: {
  item: WorkShowcaseProduct;
  index: number;
}) {
  return (
    <Link
      href={item.href}
      className={`maple-work-card maple-work-card--${item.align}`}
    >
      <div className="maple-work-card__visual" data-maple-header-contrast="dark">
        <div
          className="maple-work-card__bg"
          style={{ backgroundImage: `url('${item.backgroundImage}')` }}
          aria-hidden="true"
        />
        <Image
          src={item.foregroundImage}
          alt={item.imageAlt}
          width={800}
          height={600}
          className="maple-work-card__fg"
          sizes="(max-width: 720px) 100vw, 1024px"
          priority={index < 2}
        />
      </div>

      <div className="maple-work-card__body">
        <div className="maple-work-card__meta">
          <span className="maple-work-card__dot" aria-hidden="true" />
          <span className="maple-work-card__name">{item.name}</span>
          <span>{item.suite}</span>
        </div>

        <h3 className="maple-work-card__title">{item.title}</h3>

        {item.blurb ? (
          <p className="maple-work-card__blurb">{item.blurb}</p>
        ) : null}
      </div>
    </Link>
  );
}

export function WorkShowcase() {
  return (
    <>
      <AiRevealHeadlines />

      <section id="work-showcase" className="maple-work-cases" aria-label="Our products">
        <div className="maple-content-width px-4 sm:px-6">
          <div className="maple-work-grid">
            {workShowcaseProducts.map((item, index) => (
              <WorkShowcaseProductCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="maple-work-intro__actions maple-work-intro__actions--cases">
            <Link href="/products" className="maple-work-viewall">
              <span className="maple-work-viewall__label">View all products</span>
              <span className="maple-work-viewall__arr" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
