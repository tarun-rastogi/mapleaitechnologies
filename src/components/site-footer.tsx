"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { MapleBrandLockup } from "@/components/maple-brand-lockup";

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
      <p className="maple-footer__success">
        You are subscribed. Watch your inbox for insights.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="maple-footer__newsletter-form">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="maple-footer__newsletter-input"
      />
      <button type="submit" className="maple-footer__newsletter-btn">
        Subscribe
      </button>
    </form>
  );
}

export function SiteFooter() {
  return (
    <footer className="maple-footer">
      <div className="maple-footer__backdrop" aria-hidden="true">
        <div className="maple-footer__glow maple-footer__glow--cyan" />
        <div className="maple-footer__glow maple-footer__glow--purple" />
      </div>

      <div className="maple-footer__glass">
        <div className="maple-footer__inner mx-auto maple-content-width px-4 pt-14 sm:px-6 sm:pt-16 lg:pt-20">
          <div className="maple-footer__top grid gap-10 border-b pb-12 md:grid-cols-2 md:gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <MapleBrandLockup className="maple-footer__brand" />
              <p className="maple-footer__lede mt-3 max-w-[360px]">
                An AI-native product engineering studio that builds web, mobile, and AI applications
                — delivered 24/7 by AI agents with humans in the loop.
              </p>
              <p className="maple-footer__email mt-4">hello@mapleaitechnologies.com</p>

              <div className="mt-5 flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="maple-footer__social"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="maple-footer__heading">Get AI &amp; product insights in your inbox</p>
              <p className="maple-footer__copy mt-1.5">
                Monthly digest: case studies, AI engineering trends, and product strategy. No spam.
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="maple-footer__sitemap grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-10">
            {sitemapColumns.map((col) => (
              <div key={col.heading}>
                <p className="maple-footer__column-title">{col.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="maple-footer__link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="maple-footer__bar border-t px-4 py-5 sm:px-6 sm:py-6">
          <div className="mx-auto flex maple-content-width flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="maple-footer__legal">
              &copy; 2026 Maple AI Technologies. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Link href="/privacy" className="maple-footer__legal-link">
                Privacy
              </Link>
              <Link href="/terms" className="maple-footer__legal-link">
                Terms
              </Link>
              <Link href="/cookies" className="maple-footer__legal-link">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
