import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { dimension1Groups } from "@/content/service-taxonomy";

/** Anchor targets for the site header Services dropdown */
const serviceCardAnchorByTitle: Record<string, string> = {
  "Web app development & progressive web apps": "web-applications",
  "Mobile app development (native and hybrid)": "mobile-applications",
  "UI/UX design & product discovery": "design",
  "Managed IT services & production support": "cloud",
  "IT staff augmentation & embedded engineering pods": "staff-augmentation",
};

export const metadata: Metadata = {
  title: "Services | Maple AI Technologies",
  description:
    "Mobile and web development, custom software, UI/UX, cross-platform delivery, managed IT, and staff augmentation—built for enterprise outcomes.",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-x-clip bg-[#F8FAFC]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_18%_12%,rgba(148,163,184,0.18),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.1),transparent_40%),linear-gradient(to_bottom,#fbfdff_0%,#f8fafc_65%)]" />

      <section className="mx-auto max-w-[1280px] px-4 pb-8 pt-16 sm:px-6 md:pt-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
          Services
        </p>
        <h1
          className="mt-4 max-w-[720px] font-bold text-[#0F172A]"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="block text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[46px]">
            Engineering, design, and operations for the software you already envision
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-[14px] leading-[26px] text-[#475569] sm:text-[15px] sm:leading-[28px] md:text-[16px]">
          When you know you need an app, a site, internal tools, or dedicated talent,
          this is our core delivery surface—paired elsewhere on the site with{" "}
          <Link href="/#ai-products" className="font-semibold text-[#1447E6] underline-offset-4 hover:underline">
            AI products
          </Link>{" "}
          and{" "}
          <Link href="/#outcome-led" className="font-semibold text-[#1447E6] underline-offset-4 hover:underline">
            outcome-led engagements
          </Link>{" "}
          when the right technology is still an open question.
        </p>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-24 sm:px-6">
        <div className="grid gap-12 lg:gap-14">
          {dimension1Groups.map((group) => (
            <div key={group.title}>
              <h2
                className="text-[20px] font-bold text-[#0F172A] sm:text-[22px] md:text-2xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                {group.title}
              </h2>
              <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                {group.items.map((item, index) => (
                  <Reveal key={item.title} delayMs={index * 50} highlight>
                    <article
                      id={serviceCardAnchorByTitle[item.title]}
                      className="attention-tile interactive-lift sky-surface service-card-home-match flex h-full scroll-mt-28 flex-col rounded-2xl border p-6 sm:p-7"
                    >
                      <span className="text-[28px] leading-none">{item.icon}</span>
                      <h3 className="mt-4 text-[16px] font-semibold leading-[24px] text-[#0F172B] sm:text-[17px] md:text-[18px] md:leading-[28px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[13px] leading-[24px] text-[#475569] sm:text-[14px] sm:leading-[26px]">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-950">
            Need outcomes first, product definition second?
          </h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            If your north star is a KPI—not a spec—we often begin with an outcome-led
            discovery. Explore how we frame that work on the homepage, then bring us a
            goal in a discovery call.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/#outcome-led"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              See outcome-led engagements
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
