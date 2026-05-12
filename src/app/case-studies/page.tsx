import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { clientSuccessStories } from "@/content/client-success";

export const metadata: Metadata = {
  title: "Case Studies | Maple AI Technologies",
  description:
    "Read case studies from Maple AI Technologies showing measurable gains in growth, conversion, reliability, and operational efficiency.",
};

export default function CaseStudiesPage() {
  return (
    <div className="relative overflow-x-clip bg-[#F8FAFC]">
      <PageShell
        eyebrow="Case Studies"
        title="Proven outcomes across industries"
        description="Our engagement model focuses on impact. Every delivery is aligned to business KPIs such as growth, cost reduction, reliability, and customer lifetime value."
        bullets={[
          "Reduced support workload by 42% through AI-powered response automation",
          "Cut release cycles from monthly to weekly with platform modernization",
          "Increased conversion rates by 31% through UX and funnel optimization",
          "Improved system uptime to 99.98% for a high-traffic client ecosystem",
        ]}
      />

      <section className="border-t border-slate-200/80 px-6 pb-20 pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <h2
              className="text-xl font-bold text-[#0F172A] sm:text-[22px] md:text-2xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Featured engagements
            </h2>
            <p className="mt-3 text-[14px] leading-[26px] text-[#475569] sm:text-[15px] sm:leading-[28px]">
              Deep dives aligned with our{" "}
              <Link href="/#success-stories" className="font-semibold text-[#1447E6] underline-offset-4 hover:underline">
                client success stories
              </Link>{" "}
              on the homepage.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {clientSuccessStories.map((story) => (
              <article
                key={story.slug}
                id={story.slug}
                className="attention-tile interactive-lift sky-surface scroll-mt-28 flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 md:p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1447E6] sm:text-[12px]">
                  {story.client}
                </p>
                <h3 className="mt-3 text-[18px] font-bold leading-[26px] text-[#020618] sm:text-[20px] sm:leading-[28px]">
                  {story.outcome}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-[24px] text-[#45556C] sm:text-[14px] sm:leading-[26px]">
                  {story.detail}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-semibold leading-4 text-[#1447E6] sm:text-[12px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10">
            <h2 className="text-xl font-bold text-slate-950">
              Discuss a comparable outcome on your roadmap
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Bring a KPI—we will map capabilities, timelines, and a delivery approach that fits your stack and governance.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#155DFC] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1447E6]"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
