import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
];

const services = [
  "AI Product Development",
  "Web Development",
  "Mobile Applications",
  "Cloud Architecture",
];

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "X / Twitter" },
  { href: "#", label: "Dribbble" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 pt-14">
        <div className="mb-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-7 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight">Makers AI Labs</p>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Partner with senior engineers and product thinkers to launch digital
              experiences your market remembers.
            </p>
          </div>
          <Link
            href="/contact"
            className="interactive-lift mt-5 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 md:mt-0"
          >
            Start a Project
          </Link>
        </div>

        <div className="grid w-full gap-10 pb-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xl font-bold tracking-tight">Makers AI Labs</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            We build enterprise-grade AI and digital experiences engineered for
            scale, performance, and measurable growth.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-slate-400">
              hello@makersailabs.com
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="interactive-link text-slate-100 hover:text-blue-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Core Services
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="interactive-lift rounded-full border border-slate-700 px-3 py-1.5 hover:border-blue-400 hover:text-blue-300"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} Makers AI Labs. All rights reserved.
      </div>
    </footer>
  );
}
