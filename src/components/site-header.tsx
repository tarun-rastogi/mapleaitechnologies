"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { clientSuccessStories } from "@/content/client-success";
import { MapleBrandLockup } from "@/components/maple-brand-lockup";
import { NavMegaIcon } from "@/components/nav-mega-icon";
import { headerServicesNavGroups } from "@/content/header-nav-links";
import { productNavGroups } from "@/content/products";
import { useHeaderOnDark } from "@/hooks/use-header-on-dark";

const tailNavLinks: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blogs" },
];

function navLinkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkInactive =
  "maple-nav-link maple-nav-link--inactive whitespace-nowrap text-[14px] font-medium leading-snug transition-colors md:text-[14px] lg:text-[15px] xl:text-[16px]";
const navLinkActive =
  "maple-nav-link maple-nav-link--active whitespace-nowrap text-[14px] font-medium leading-snug transition-colors md:text-[14px] lg:text-[15px] xl:text-[16px]";

const productsMegaPanelClass =
  "maple-nav-dropdown__panel maple-nav-dropdown__panel--mega maple-nav-dropdown__panel--products";
const servicesMegaPanelClass =
  "maple-nav-dropdown__panel maple-nav-dropdown__panel--mega maple-nav-dropdown__panel--services";
const caseStudiesMegaPanelClass =
  "maple-nav-dropdown__panel maple-nav-dropdown__panel--mega maple-nav-dropdown__panel--cases";

function mobileTriggerClass(active: boolean) {
  return `maple-mobile-nav-trigger ${active ? "maple-mobile-nav-trigger--active" : "maple-mobile-nav-trigger--idle"}`;
}

function mobileLinkClass(active: boolean) {
  return `maple-mobile-nav-link ${active ? "maple-mobile-nav-link--active" : "maple-mobile-nav-link--idle"}`;
}

function ChevronCompact({ open }: { open?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`shrink-0 transition-colors maple-nav-chevron ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const onDark = useHeaderOnDark(pathname === "/");
  const headerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<
    null | "services" | "case-studies" | "products"
  >(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const productsMenuOpen = mobileSection === "products";
  const productsActive =
    pathname === "/products" || pathname.startsWith("/products/");
  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const caseStudiesActive =
    pathname === "/case-studies" || pathname.startsWith("/case-studies/");

  /* Keep --maple-header-height equal to the real sticky bar so page-1 hero
     fills the first fold exactly (no night-sky sliver underneath). */
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeaderHeight = () => {
      const height = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--maple-header-height",
        `${height}px`,
      );
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    window.addEventListener("resize", syncHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeaderHeight);
    };
  }, [isOpen, searchOpen, mobileSection]);

  return (
    <header
      ref={headerRef}
      className="maple-header sticky top-0 z-50"
      data-on-dark={onDark ? "true" : undefined}
    >
      <div className="maple-header-glass maple-header__bar">
        <div className="mx-auto grid w-full maple-content-width grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-2 px-4 py-1 sm:gap-x-3 sm:px-6 sm:py-1.5">
          <MapleBrandLockup onNavigate={() => setIsOpen(false)} />

          {/* Desktop nav — visible from md (768px); compact until xl */}
          <nav className="maple-header-nav hidden min-w-0 items-center justify-center md:flex">
          <div className="group relative flex items-center">
            <Link
              href="/products"
              aria-haspopup="true"
              aria-expanded={false}
              className={`maple-nav-item inline-flex items-center gap-0.5 rounded-md py-1.5 lg:py-2 ${productsActive ? navLinkActive : navLinkInactive}`}
            >
              Products
              <ChevronCompact />
            </Link>
            <div
              className="invisible absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility,transform] duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
              role="menu"
              aria-label="Products"
            >
              <div className={productsMegaPanelClass}>
                <div className="maple-mega-menu">
                  <div className="maple-mega-menu__columns">
                    {productNavGroups.map((group) => (
                      <div key={group.heading} className="maple-mega-menu__column">
                        <h3 className="maple-mega-menu__heading">{group.heading}</h3>
                        <ul className="maple-mega-menu__list">
                          {group.items.map((item) => (
                            <li key={item.slug}>
                              <Link
                                role="menuitem"
                                href={item.href}
                                className="maple-mega-item"
                              >
                                <NavMegaIcon name={item.slug} />
                                <span className="maple-mega-item__copy">
                                  <span className="maple-mega-item__title">{item.label}</span>
                                  <span className="maple-mega-item__blurb">{item.blurb}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <aside className="maple-mega-featured">
                    <p className="maple-mega-featured__eyebrow">Featured</p>
                    <p className="maple-mega-featured__title">
                      Ship AI products in{" "}
                      <em className="maple-mega-featured__em">weeks, not quarters</em>
                    </p>
                    <p className="maple-mega-featured__body">
                      Enterprise-ready agents and industry suites — built to plug into your stack.
                    </p>
                    <Link role="menuitem" href="/products" className="maple-mega-featured__cta">
                      Explore all products
                      <span aria-hidden="true">→</span>
                    </Link>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative flex items-center">
            <Link
              href="/services"
              aria-haspopup="true"
              aria-expanded={false}
              className={`maple-nav-item inline-flex items-center gap-0.5 rounded-md py-1.5 lg:py-2 ${servicesActive ? navLinkActive : navLinkInactive}`}
            >
              Services
              <ChevronCompact />
            </Link>
            <div
              className="invisible absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility,transform] duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
              role="menu"
              aria-label="Services"
            >
              <div className={servicesMegaPanelClass}>
                <div className="maple-mega-menu">
                  <div className="maple-mega-menu__columns">
                    {headerServicesNavGroups.map((group) => (
                      <div key={group.heading} className="maple-mega-menu__column">
                        <h3 className="maple-mega-menu__heading">{group.heading}</h3>
                        <ul className="maple-mega-menu__list">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                role="menuitem"
                                href={item.href}
                                className="maple-mega-item"
                              >
                                <NavMegaIcon name={item.icon} />
                                <span className="maple-mega-item__copy">
                                  <span className="maple-mega-item__title">{item.label}</span>
                                  <span className="maple-mega-item__blurb">{item.blurb}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <aside className="maple-mega-featured">
                    <p className="maple-mega-featured__eyebrow">Featured</p>
                    <p className="maple-mega-featured__title">
                      From MVP to enterprise —{" "}
                      <em className="maple-mega-featured__em">one delivery partner</em>
                    </p>
                    <p className="maple-mega-featured__body">
                      Web, mobile, AI, and cloud — scoped to outcomes, not hours.
                    </p>
                    <Link role="menuitem" href="/services" className="maple-mega-featured__cta">
                      View all services
                      <span aria-hidden="true">→</span>
                    </Link>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className={`maple-nav-item rounded-md py-1.5 lg:py-2 ${
              navLinkIsActive(pathname, "/portfolio") ? navLinkActive : navLinkInactive
            }`}
          >
            Portfolio
          </Link>

          <div className="group relative flex items-center">
            <Link
              href="/case-studies"
              aria-haspopup="true"
              className={`maple-nav-item inline-flex items-center gap-0.5 rounded-md py-1.5 lg:py-2 ${caseStudiesActive ? navLinkActive : navLinkInactive}`}
            >
              Case Studies
              <ChevronCompact />
            </Link>
            <div
              className="invisible absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility,transform] duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
              role="menu"
              aria-label="Case studies"
            >
              <div className={caseStudiesMegaPanelClass}>
                <div className="maple-mega-menu maple-mega-menu--single">
                  <div className="maple-mega-menu__column">
                    <h3 className="maple-mega-menu__heading">Client success stories</h3>
                    <ul className="maple-mega-menu__list">
                      {clientSuccessStories.map((story) => (
                        <li key={story.slug}>
                          <Link
                            role="menuitem"
                            href={`/case-studies#${story.slug}`}
                            className="maple-mega-item"
                          >
                            <NavMegaIcon name="case-study" />
                            <span className="maple-mega-item__copy">
                              <span className="maple-mega-item__title">{story.client}</span>
                              <span className="maple-mega-item__blurb">{story.outcome}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <aside className="maple-mega-featured">
                    <p className="maple-mega-featured__eyebrow">Featured</p>
                    <p className="maple-mega-featured__title">
                      Measurable outcomes from{" "}
                      <em className="maple-mega-featured__em">real engagements</em>
                    </p>
                    <p className="maple-mega-featured__body">
                      Named results — shipping speed, adoption, and operational impact.
                    </p>
                    <Link
                      role="menuitem"
                      href="/case-studies"
                      className="maple-mega-featured__cta"
                    >
                      Browse all case studies
                      <span aria-hidden="true">→</span>
                    </Link>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={`maple-nav-item rounded-md py-1.5 lg:py-2 ${navLinkIsActive(pathname, "/about") ? navLinkActive : navLinkInactive}`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`maple-nav-item rounded-md py-1.5 lg:py-2 ${navLinkIsActive(pathname, "/blog") ? navLinkActive : navLinkInactive}`}
          >
            Blogs
          </Link>
        </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 md:flex lg:gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
                className="maple-header-icon-btn flex h-9 w-9 items-center justify-center rounded-full border transition"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>

              <Link
                href="/contact"
                className="maple-header-cta rounded-full bg-[#155DFC] px-3 py-1.5 text-[13px] font-semibold leading-6 text-white transition hover:bg-[#1447E6] lg:px-4 lg:text-[14px] xl:px-5 xl:text-[15px]"
              >
                Talk to us
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="maple-header-icon-btn flex h-9 w-9 items-center justify-center rounded-full border transition"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="maple-header-menu-btn flex h-9 w-9 items-center justify-center rounded-lg border transition"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
            </button>
            </div>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="maple-header-panel border-t border-slate-200/60 px-4 py-3 sm:px-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
              }
            }}
            className="mx-auto flex maple-content-width items-center gap-3"
          >
            <input
              autoFocus
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, industries, case studies..."
              className="flex-1 rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-[14px] text-[#1C2340] placeholder-[#94A3B8] outline-none ring-[#4361EE] transition focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#155DFC] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#1447E6]"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] font-medium text-[#475569] transition hover:border-slate-300 hover:text-[#1C2340]"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {isOpen && (
        <div className="maple-header-panel maple-header-mobile-panel border-t border-slate-200/60 px-4 pb-4 pt-2 md:hidden">
          <nav className="grid gap-0.5">
            <div>
              <button
                type="button"
                aria-expanded={productsMenuOpen}
                className={mobileTriggerClass(productsActive)}
                onClick={() =>
                  setMobileSection((prev) => (prev === "products" ? null : "products"))
                }
              >
                Products
                <ChevronCompact open={productsMenuOpen} />
              </button>
              {productsMenuOpen && (
                <div className="maple-mobile-submenu maple-mobile-submenu--tall">
                  <Link
                    href="/products"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileSection(null);
                    }}
                    className="maple-mobile-submenu__link maple-mobile-submenu__link--strong"
                  >
                    All products
                  </Link>
                  {productNavGroups.map((group) => (
                    <div key={group.heading}>
                      <h3 className="maple-mobile-submenu__heading">{group.heading}</h3>
                      {group.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={item.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileSection(null);
                          }}
                          className="maple-mobile-submenu__link maple-mobile-submenu__link--rich"
                        >
                          <span className="maple-mobile-submenu__title">{item.label}</span>
                          <span className="maple-mobile-submenu__blurb">{item.blurb}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                aria-expanded={mobileSection === "services"}
                className={mobileTriggerClass(servicesActive)}
                onClick={() =>
                  setMobileSection((prev) => (prev === "services" ? null : "services"))
                }
              >
                Services
                <ChevronCompact open={mobileSection === "services"} />
              </button>
              {mobileSection === "services" && (
                <div className="maple-mobile-submenu maple-mobile-submenu--tall">
                  <Link
                    href="/services"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileSection(null);
                    }}
                    className="maple-mobile-submenu__link maple-mobile-submenu__link--strong"
                  >
                    All services
                  </Link>
                  {headerServicesNavGroups.map((group) => (
                    <div key={group.heading}>
                      <h3 className="maple-mobile-submenu__heading">{group.heading}</h3>
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileSection(null);
                          }}
                          className="maple-mobile-submenu__link maple-mobile-submenu__link--rich"
                        >
                          <span className="maple-mobile-submenu__title">{item.label}</span>
                          <span className="maple-mobile-submenu__blurb">{item.blurb}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass(navLinkIsActive(pathname, "/portfolio"))}
            >
              Portfolio
            </Link>

            <div>
              <button
                type="button"
                aria-expanded={mobileSection === "case-studies"}
                className={mobileTriggerClass(caseStudiesActive)}
                onClick={() =>
                  setMobileSection((prev) =>
                    prev === "case-studies" ? null : "case-studies",
                  )
                }
              >
                Case Studies
                <ChevronCompact open={mobileSection === "case-studies"} />
              </button>
              {mobileSection === "case-studies" && (
                <div className="maple-mobile-submenu">
                  <Link
                    href="/case-studies"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileSection(null);
                    }}
                    className="maple-mobile-submenu__link maple-mobile-submenu__link--strong"
                  >
                    All case studies
                  </Link>
                  {clientSuccessStories.map((story) => (
                    <Link
                      key={story.slug}
                      href={`/case-studies#${story.slug}`}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileSection(null);
                      }}
                      className="maple-mobile-submenu__link maple-mobile-submenu__link--rich"
                    >
                      <span className="maple-mobile-submenu__title">{story.client}</span>
                      <span className="maple-mobile-submenu__blurb">{story.outcome}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {tailNavLinks.map((item) => {
              const active = navLinkIsActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(active)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-3 border-t border-slate-200 pt-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#155DFC] px-4 py-2 text-[14px] font-semibold leading-6 text-white transition hover:bg-[#1447E6]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
