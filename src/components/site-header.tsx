"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { clientSuccessStories } from "@/content/client-success";
import { headerServicesDropdown } from "@/content/header-nav-links";

const tailNavLinks: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blogs" },
];

function navLinkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkInactive =
  "whitespace-nowrap text-[11px] font-medium leading-5 transition-colors xl:text-[12px] 2xl:text-[13px] text-[#314158] hover:text-[#155DFC]";
const navLinkActive =
  "whitespace-nowrap text-[11px] font-medium leading-5 transition-colors xl:text-[12px] 2xl:text-[13px] text-[#155DFC]";

const dropdownPanelClass =
  "min-w-[15rem] rounded-xl border border-slate-200 bg-white py-2 shadow-lg shadow-slate-200/90";

function ChevronCompact({ open }: { open?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
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
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<null | "services" | "case-studies">(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const caseStudiesActive =
    pathname === "/case-studies" || pathname.startsWith("/case-studies/");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-2 px-4 py-1 sm:px-6 sm:py-1.5">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 leading-[0]"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/maple-ai-logo-navbar.png"
            alt="Maple AI Technologies"
            width={908}
            height={412}
            className="block h-16 max-h-[80px] w-auto max-w-[min(440px,calc(100vw-20rem))] object-contain object-left align-middle sm:h-[4.5rem] md:h-20 xl:max-w-[min(440px,calc(100vw-30rem))]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex xl:gap-3 2xl:gap-4">
          <Link href="/" className={pathname === "/" ? navLinkActive : navLinkInactive}>
            Home
          </Link>

          <div className="group relative flex items-center">
            <Link
              href="/services"
              aria-haspopup="true"
              aria-expanded={false}
              className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-2 ${servicesActive ? navLinkActive : navLinkInactive}`}
            >
              Services
              <ChevronCompact />
            </Link>
            <div
              className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100"
              role="menu"
              aria-label="Services"
            >
              <div className={dropdownPanelClass}>
                {headerServicesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    role="menuitem"
                    href={item.href}
                    className="block px-4 py-2.5 text-[12px] font-medium leading-snug text-[#314158] transition hover:bg-slate-50 hover:text-[#155DFC] 2xl:text-[13px]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className={
              navLinkIsActive(pathname, "/portfolio") ? navLinkActive : navLinkInactive
            }
          >
            Portfolio
          </Link>

          <div className="group relative flex items-center">
            <Link
              href="/case-studies"
              aria-haspopup="true"
              className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-2 ${caseStudiesActive ? navLinkActive : navLinkInactive}`}
            >
              Case Studies
              <ChevronCompact />
            </Link>
            <div
              className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100"
              role="menu"
              aria-label="Case studies"
            >
              <div className={dropdownPanelClass}>
                <Link
                  role="menuitem"
                  href="/case-studies"
                  className="block px-4 py-2.5 text-[12px] font-semibold leading-snug text-[#0F172A] transition hover:bg-slate-50 hover:text-[#155DFC] 2xl:text-[13px]"
                >
                  All case studies
                </Link>
                <div className="mx-3 border-t border-slate-100" />
                {clientSuccessStories.map((story) => (
                  <Link
                    key={story.slug}
                    role="menuitem"
                    href={`/case-studies#${story.slug}`}
                    className="block px-4 py-2.5 text-[12px] font-medium leading-snug text-[#314158] transition hover:bg-slate-50 hover:text-[#155DFC] 2xl:text-[13px]"
                  >
                    <span className="block">{story.client}</span>
                    <span className="mt-0.5 block text-[11px] font-normal leading-4 text-slate-500">
                      {story.outcome}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={navLinkIsActive(pathname, "/about") ? navLinkActive : navLinkInactive}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={navLinkIsActive(pathname, "/blog") ? navLinkActive : navLinkInactive}
          >
            Blogs
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-[#155DFC]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <Link
            href="/contact"
            className="rounded-full bg-[#155DFC] px-5 py-2 text-[13px] font-semibold leading-5 text-white transition hover:bg-[#1447E6] xl:px-6 xl:text-[14px]"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-[#155DFC]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-[#155DFC]"
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

      {searchOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 sm:px-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
              }
            }}
            className="mx-auto flex max-w-[1280px] items-center gap-3"
          >
            <input
              autoFocus
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, industries, case studies..."
              className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-[14px] text-slate-800 outline-none ring-blue-400 transition focus:ring-2"
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
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] font-medium text-slate-600 transition hover:border-slate-300"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="grid gap-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-[14px] font-medium leading-5 transition ${
                pathname === "/"
                  ? "bg-blue-50 text-[#155DFC]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#155DFC]"
              }`}
            >
              Home
            </Link>

            <div className="rounded-lg border border-transparent">
              <button
                type="button"
                aria-expanded={mobileSection === "services"}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[14px] font-medium leading-5 transition ${
                  servicesActive
                    ? "bg-blue-50 text-[#155DFC]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#155DFC]"
                }`}
                onClick={() =>
                  setMobileSection((prev) => (prev === "services" ? null : "services"))
                }
              >
                Services
                <ChevronCompact open={mobileSection === "services"} />
              </button>
              {mobileSection === "services" && (
                <div className="border-l-2 border-slate-100 pl-2 ml-2 mt-1 grid gap-0.5 pb-1">
                  <Link
                    href="/services"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileSection(null);
                    }}
                    className="rounded-md px-3 py-2 text-[13px] font-semibold text-[#0F172A] hover:bg-slate-50"
                  >
                    All services
                  </Link>
                  {headerServicesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileSection(null);
                      }}
                      className="rounded-md px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#155DFC]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-[14px] font-medium leading-5 transition ${
                navLinkIsActive(pathname, "/portfolio")
                  ? "bg-blue-50 text-[#155DFC]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#155DFC]"
              }`}
            >
              Portfolio
            </Link>

            <div className="rounded-lg border border-transparent">
              <button
                type="button"
                aria-expanded={mobileSection === "case-studies"}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[14px] font-medium leading-5 transition ${
                  caseStudiesActive
                    ? "bg-blue-50 text-[#155DFC]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#155DFC]"
                }`}
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
                <div className="border-l-2 border-slate-100 pl-2 ml-2 mt-1 grid gap-0.5 pb-1">
                  <Link
                    href="/case-studies"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileSection(null);
                    }}
                    className="rounded-md px-3 py-2 text-[13px] font-semibold text-[#0F172A] hover:bg-slate-50"
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
                      className="rounded-md px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#155DFC]"
                    >
                      {story.client}
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
                  className={`rounded-lg px-3 py-2.5 text-[14px] font-medium leading-5 transition ${
                    active
                      ? "bg-blue-50 text-[#155DFC]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#155DFC]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 border-t border-slate-100 pt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#155DFC] px-5 py-3 text-[14px] font-semibold leading-5 text-white transition hover:bg-[#1447E6]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
