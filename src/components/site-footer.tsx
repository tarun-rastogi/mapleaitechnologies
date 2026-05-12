"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const sitemapColumns = [
  {
    heading: "Services",
    links: [
      { label: "AI Application Development", href: "/services/ai-applications" },
      { label: "Web App Development", href: "/services/web-applications" },
      { label: "Mobile App Development", href: "/services/mobile-applications" },
      { label: "UI/UX Design", href: "/services/design" },
      { label: "Cloud & DevOps", href: "/services/cloud" },
      { label: "IT Staff Augmentation", href: "/services/staff-augmentation" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Fintech & Banking", href: "/industries/fintech" },
      { label: "Healthcare & MedTech", href: "/industries/healthcare" },
      { label: "SaaS & Technology", href: "/industries/saas" },
      { label: "Retail & E-commerce", href: "/industries/retail" },
      { label: "Logistics & Supply Chain", href: "/industries/logistics" },
      { label: "Education & EdTech", href: "/industries/education" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Maple AI Agent Studio", href: "/agent-studio" },
      { label: "Careers", href: "/careers" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/maple-ai-technologies",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4.5 6.5v5M4.5 4.5v.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7.5 11.5V9a1.5 1.5 0 0 1 3 0v2.5M7.5 6.5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/mapleaitech",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 2l5.5 6.5L2 14h1.5l4.5-4.5L12 14h2L8.5 7.5 14 2h-1.5L7.5 6 4 2H2Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/maple-ai-technologies",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1a7 7 0 0 0-2.213 13.641c.35.064.478-.152.478-.337v-1.18c-1.944.424-2.354-.937-2.354-.937-.318-.808-.776-1.023-.776-1.023-.635-.433.048-.424.048-.424.701.049 1.07.72 1.07.72.623 1.067 1.634.759 2.033.58.063-.45.244-.758.443-.932-1.551-.176-3.181-.775-3.181-3.451 0-.762.272-1.385.718-1.874-.072-.177-.311-.886.068-1.847 0 0 .585-.187 1.917.714A6.673 6.673 0 0 1 8 5.42c.593.003 1.19.08 1.748.235 1.33-.901 1.914-.714 1.914-.714.38.961.14 1.67.069 1.847.447.489.717 1.112.717 1.874 0 2.683-1.633 3.273-3.188 3.445.25.217.473.642.473 1.293v1.917c0 .187.127.405.482.337A7.001 7.001 0 0 0 8 1Z" fill="currentColor" />
      </svg>
    ),
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-[13px] font-medium text-emerald-400">
        You are subscribed. Watch your inbox for insights.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 min-w-0 rounded-xl border border-[#1D293D] bg-[rgba(255,255,255,0.05)] px-3.5 py-2.5 text-[13px] text-white placeholder-[#64748B] outline-none ring-[#155DFC] transition focus:ring-1"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-[#155DFC] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#1447E6]"
      >
        Subscribe
      </button>
    </form>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="border-t"
      style={{ background: "#020618", borderColor: "#1D293D" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 pt-14 sm:px-6 sm:pt-16 lg:pt-20">

        {/* Top row: Brand + Newsletter */}
        <div className="grid gap-10 border-b pb-12 md:grid-cols-2 md:gap-16 lg:grid-cols-5"
          style={{ borderColor: "#1D293D" }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block max-w-full leading-none" aria-label="Maple AI Technologies home">
              <Image
                src="/images/maple-ai-footer-brand.png"
                alt="Maple AI Technologies"
                width={901}
                height={385}
                className="block h-44 w-auto max-w-full object-contain object-left sm:h-48 md:h-[13.75rem] md:max-w-[min(100%,52rem)]"
              />
            </Link>
            <p className="mt-3 max-w-[360px] text-[13px] leading-[22px] text-[#64748B] sm:text-[14px] sm:leading-[24px]">
              An AI-native product engineering studio that builds web, mobile, and AI applications — delivered 24/7 by AI agents with humans in the loop.
            </p>
            <p
              className="mt-4 text-[11px] uppercase text-[#64748B] sm:text-[12px]"
              style={{ letterSpacing: "0.12em" }}
            >
              hello@mapleaitechnologies.com
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1D293D] text-[#64748B] transition hover:border-[#2D4A70] hover:text-[#8EC5FF]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <p className="text-[14px] font-semibold text-[#F1F5F9]">
              Get AI & product insights in your inbox
            </p>
            <p className="mt-1.5 text-[13px] leading-[22px] text-[#64748B]">
              Monthly digest: case studies, AI engineering trends, and product strategy. No spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Sitemap columns */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-10">
          {sitemapColumns.map((col) => (
            <div key={col.heading}>
              <p
                className="text-[11px] font-semibold uppercase text-[#94A3B8] sm:text-[12px]"
                style={{ letterSpacing: "0.08em" }}
              >
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] leading-5 text-[#94A3B8] transition hover:text-[#F1F5F9] sm:text-[14px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 py-5 sm:px-6 sm:py-6"
        style={{ borderColor: "#1D293D" }}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[11px] leading-4 text-[#475569] sm:text-[12px]">
            &copy; 2026 Maple AI Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link href="/privacy" className="text-[11px] text-[#475569] transition hover:text-[#94A3B8] sm:text-[12px]">
              Privacy
            </Link>
            <Link href="/terms" className="text-[11px] text-[#475569] transition hover:text-[#94A3B8] sm:text-[12px]">
              Terms
            </Link>
            <Link href="/cookies" className="text-[11px] text-[#475569] transition hover:text-[#94A3B8] sm:text-[12px]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
