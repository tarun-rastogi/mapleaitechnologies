import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { DemoRequestForm } from "@/components/demo-request-form";
import { clientSuccessStories } from "@/content/client-success";

export const metadata: Metadata = {
  title: "Maple AI Technologies | Enterprise AI & Product Engineering",
  description:
    "Maple AI Technologies builds mobile and web software, AI products, and enterprise applications — delivered 24/7 by AI agents with humans in the loop.",
};

/* ─── Section 3: Flagship Platform ─────────────────────────────────── */
const platformFeatures = [
  {
    title: "AI Agent Orchestration",
    description:
      "Multi-step AI agents that plan, reason, and execute across your systems — from data ingestion to automated delivery.",
  },
  {
    title: "Intelligent Product Layer",
    description:
      "Voice, chat, recommendation, prediction, and document-AI capabilities embedded directly into your product.",
  },
  {
    title: "Rapid Build Pipeline",
    description:
      "From discovery to production in weeks — design systems, APIs, and cloud infrastructure provisioned by AI tooling.",
  },
  {
    title: "Continuous Evaluation",
    description:
      "Built-in quality gates, model monitoring, and human-in-the-loop review to keep AI behaviour reliable and on-brand.",
  },
];

/* ─── Section 4: Services We Offer ─────────────────────────────────── */
const services = [
  {
    icon: "🤖",
    title: "AI Application Development",
    description:
      "Voice AI, Chat AI, Recommendation, Prediction, Analytics, Document AI, Vision AI, and Agentic workflow systems built for your business domain.",
  },
  {
    icon: "🌐",
    title: "Web Application Development",
    description:
      "Full-stack web apps, marketing sites, and SaaS platforms — responsive, fast, and engineered for enterprise scale.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native iOS & Android and cross-platform apps with smooth UX, offline support, and deep system integrations.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design & Product Design",
    description:
      "Research-led product design, design systems, and component libraries that convert visitors and delight users.",
  },
  {
    icon: "☁️",
    title: "Cloud Architecture & DevOps",
    description:
      "Cloud-native infrastructure, CI/CD pipelines, and production operations with high availability SLAs.",
  },
  {
    icon: "🤝",
    title: "IT Staff Augmentation",
    description:
      "Embed senior engineers and AI specialists directly into your team — on-demand, without hiring overhead.",
  },
];

/* ─── Section 5: Industry Domains ──────────────────────────────────── */
const industries = [
  {
    name: "Fintech & Banking",
    description: "Payments, lending, compliance automation, fraud detection, and personal finance AI.",
  },
  {
    name: "Healthcare & MedTech",
    description: "Clinical workflows, patient engagement, AI triage, telehealth, and HIPAA-compliant platforms.",
  },
  {
    name: "SaaS & Technology",
    description: "Product-led growth tools, B2B dashboards, API platforms, and AI-augmented SaaS features.",
  },
  {
    name: "Retail & E-commerce",
    description: "Shopping experiences, inventory intelligence, personalisation engines, and omnichannel platforms.",
  },
  {
    name: "Logistics & Supply Chain",
    description: "Fleet tracking, route optimisation, warehouse automation, and last-mile visibility systems.",
  },
  {
    name: "Education & EdTech",
    description: "Learning management systems, AI tutors, admissions automation, and student engagement platforms.",
  },
  {
    name: "Real Estate & PropTech",
    description: "Property search, valuation AI, lease management, and smart building integrations.",
  },
  {
    name: "Manufacturing & Industry",
    description: "Quality inspection vision AI, predictive maintenance, ERP integrations, and factory dashboards.",
  },
];

/* ─── Homepage Section 7 — testimonials copy ───────────────────────────────── */
const testimonials = [
  {
    quote:
      "Maple AI Technologies felt like an extension of our executive product team. Their speed and quality changed our trajectory.",
    author: "Chief Product Officer",
    company: "Series C SaaS Company",
  },
  {
    quote:
      "They merged strategy, design, and engineering better than any partner we have worked with in the last decade.",
    author: "VP Digital Transformation",
    company: "Enterprise Retail Group",
  },
  {
    quote:
      "From architecture to user experience, they delivered a world-class platform that our customers immediately trusted.",
    author: "Head of Technology",
    company: "Global Fintech",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-[#F8FAFC]">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="hero-section relative flex items-center overflow-hidden bg-[#020618]">
        <Image
          src="/images/hero-bg.png"
          alt="Maple AI Technologies — AI-native engineering studio"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Tints use flagship palette (#0A0F2E, #020618, #041830) at the same overlay strengths as before */}
        <div className="absolute inset-0 bg-[rgba(10,15,46,0.82)] md:hidden" />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,15,46,1) 30%, rgba(2,6,24,0.75) 61%, rgba(2,6,24,0) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,15,46,0.4) 0%, rgba(2,6,24,0) 50%, rgba(4,24,48,0.35) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
          <Reveal>
            {/* Studio badge */}
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-3 py-1.5 backdrop-blur-[8px] sm:px-4">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#51A2FF]" />
              <span className="text-[11px] font-semibold uppercase leading-4 tracking-[0.14em] text-[#8EC5FF] sm:text-[12px] sm:tracking-[0.18em]">
                Enterprise AI &amp; Product Engineering Studio
              </span>
            </div>

            <h1
              className="mt-5 max-w-[672px] font-serif font-bold text-white sm:mt-7"
              style={{ letterSpacing: "-0.025em" }}
            >
              <span className="block text-[30px] leading-tight sm:text-[40px] sm:leading-[1.1] md:text-[52px] md:leading-[56px] lg:text-[60px] lg:leading-[64.8px]">
                Accelerating Innovation with AI
              </span>
            </h1>

            <p
              className="mt-4 max-w-[576px] text-[15px] leading-[26px] text-[#CAD5E2] sm:mt-6 sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[30px]"
              style={{ textAlign: "justify" }}
            >
              Maple AI Technologies is an AI-native company that builds intelligent digital products 24/7 — powered by AI agents with humans in the loop — delivering web, mobile, and enterprise applications with inbuilt AI features that help businesses automate operations, accelerate growth, and make smarter decisions at scale.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="w-full rounded-full px-6 py-3 text-center text-[14px] font-semibold leading-5 text-white transition sm:w-auto sm:px-7 sm:py-3.5"
                style={{
                  background: "linear-gradient(180deg, rgba(59,130,246,1) 0%, rgba(37,99,235,1) 100%)",
                  border: "1px solid rgba(148,163,184,0.3)",
                  boxShadow:
                    "0px 10px 24px 0px rgba(37,99,235,0.25), inset 0px -1px 0px 1px rgba(15,23,42,0.18), inset 0px 1px 0px 1px rgba(255,255,255,0.32)",
                }}
              >
                Get a Free Consultation →
              </Link>
              <Link
                href="/case-studies"
                className="w-full rounded-full px-6 py-3 text-center text-[14px] font-semibold leading-5 text-white transition hover:bg-white/20 sm:w-auto sm:px-7 sm:py-3.5"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(148,163,184,0.3)",
                  boxShadow: "0px 1px 2px 0px rgba(2,6,23,0.05)",
                  backdropFilter: "blur(8px)",
                }}
              >
                See Client Results
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — FLAGSHIP PLATFORM (distinct dark showcase; not a card grid)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="platform"
        className="flagship-platform-section relative z-[1] -mt-px px-4 pt-2 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10"
      >
        <div className="relative mx-auto w-full max-w-[1280px]">
          <div className="flagship-showcase-shell relative">
            <div className="relative z-[1] grid gap-6 p-5 sm:gap-8 sm:p-6 lg:grid-cols-12 lg:gap-10 lg:p-8">
              {/* Left: narrative + CTA */}
              <div className="flex flex-col justify-center lg:col-span-5">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span
                      className="h-px w-8 shrink-0 bg-[#00B4D8] sm:w-10"
                      aria-hidden
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00B4D8] sm:text-[11px]">
                      Flagship platform
                    </span>
                  </div>
                  <h2
                    className="mt-4 font-serif text-[22px] font-bold leading-tight text-white sm:mt-5 sm:text-[26px] lg:text-[30px] lg:leading-[1.15]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Maple AI Agent Studio
                  </h2>
                  <p className="mt-3 text-[13px] leading-[22px] text-[#A8B3CC] sm:text-[14px] sm:leading-[24px]">
                    Our AI-native delivery framework — agent orchestration, intelligent product layers, and rapid build
                    pipelines so production-ready web, mobile, and AI apps ship in weeks.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-wide text-[#7DD3FC] sm:text-[12px]">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#00B4D8]" />
                      AI-first
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#7C3AED]" />
                      24/7 agents
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#4361EE]" />
                      Humans in the loop
                    </span>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <Link
                      href="/agent-studio"
                      className="inline-flex rounded-full bg-[#00B4D8] px-5 py-2.5 text-[13px] font-semibold text-[#0B1020] transition hover:brightness-110 sm:px-6 sm:py-3 sm:text-[14px]"
                      style={{ boxShadow: "0 8px 22px rgba(0, 180, 216, 0.35)" }}
                    >
                      See the platform in action →
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right: vertical pipeline (not service-style tiles) */}
              <div className="relative lg:col-span-7">
                <div
                  className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00B4D8]/50 via-[#4361EE]/35 to-[#7C3AED]/25 sm:left-[17px]"
                  aria-hidden
                />
                <ol className="relative space-y-0">
                  {platformFeatures.map((feature, index) => (
                    <Reveal key={feature.title} delayMs={index * 45}>
                      <li
                        className={`relative flex gap-4 pb-5 sm:gap-5 sm:pb-6 ${index === platformFeatures.length - 1 ? "pb-0 sm:pb-0" : ""}`}
                      >
                        <div className="relative z-[1] flex shrink-0 flex-col items-center pt-0.5">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00B4D8]/40 bg-[#0f1729]/90 text-[11px] font-bold tabular-nums text-[#00B4D8] shadow-[0_0_0_4px_rgba(28,35,64,0.95)] sm:h-9 sm:w-9 sm:text-[12px]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <h3 className="text-[14px] font-semibold leading-snug text-white sm:text-[15px]">
                            {feature.title}
                          </h3>
                          <p className="mt-1 text-[12px] leading-[18px] text-[#94A3B8] sm:text-[13px] sm:leading-[20px]">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — SERVICES WE OFFER
      ═══════════════════════════════════════════════════════════════ */}
      <section id="services" className="flex justify-center px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
              Services We Offer
            </p>
            <h2
              className="mt-3 max-w-[720px] font-bold text-[#0F172A]"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="block text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[46px]">
                Every capability you need to build, ship, and scale
              </span>
            </h2>
            <p className="mt-4 max-w-[640px] text-[14px] leading-[26px] text-[#475569] sm:text-[15px] sm:leading-[28px] md:text-[16px]">
              From a standalone AI feature to a full enterprise platform — we staff the right skills, right approach, and right team for your stage.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delayMs={index * 60} highlight>
                <article
                  id={
                    service.title === "AI Application Development"
                      ? "ai-products"
                      : undefined
                  }
                  className={`attention-tile interactive-lift sky-surface flex h-full flex-col rounded-2xl border border-slate-200 p-6 sm:p-7${
                    service.title === "AI Application Development"
                      ? " scroll-mt-28"
                      : ""
                  }`}
                >
                  <span className="text-[28px] leading-none">{service.icon}</span>
                  <h3 className="mt-4 text-[16px] font-semibold leading-[24px] text-[#0F172B] sm:text-[17px] md:text-[18px] md:leading-[28px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-[24px] text-[#475569] sm:text-[14px] sm:leading-[26px]">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/services"
              className="inline-flex rounded-full border border-[#CAD5E2] bg-white px-5 py-2.5 text-[13px] font-semibold leading-5 text-[#020618] transition hover:border-blue-300 hover:text-blue-700 sm:px-6 sm:py-3 sm:text-[14px]"
            >
              View all services in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — INDUSTRY DOMAINS WE SERVE
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="industries"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
        style={{
          background: "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(241,245,249,1) 100%)",
        }}
      >
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
              Industry Domains We Serve
            </p>
            <h2
              className="mt-3 max-w-[720px] font-bold text-[#0F172A]"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="block text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[46px]">
                Deep expertise across eight verticals
              </span>
            </h2>
            <p className="mt-4 max-w-[640px] text-[14px] leading-[26px] text-[#475569] sm:text-[15px] sm:leading-[28px] md:text-[16px]">
              We build for regulated, high-growth, and complexity-heavy industries where software quality and domain fluency are non-negotiable.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delayMs={index * 45} highlight>
                <article
                  className="attention-tile interactive-lift flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                  style={{ boxShadow: "0px 1px 3px rgba(15,23,42,0.06)" }}
                >
                  <h3 className="text-[15px] font-semibold leading-[22px] text-[#0F172B] sm:text-[16px] sm:leading-[24px]">
                    {industry.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-[22px] text-[#475569] sm:text-[14px] sm:leading-[24px]">
                    {industry.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — CLIENT SUCCESS STORIES
      ═══════════════════════════════════════════════════════════════ */}
      <section id="success-stories" className="flex justify-center px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
              Client Success Stories
            </p>
            <h2
              className="mt-3 max-w-[720px] font-bold text-[#0F172A]"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="block text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[46px]">
                Measurable outcomes from real engagements
              </span>
            </h2>
            <p className="mt-4 max-w-[640px] text-[14px] leading-[26px] text-[#475569] sm:text-[15px] sm:leading-[28px] md:text-[16px]">
              Each story below is a real client engagement with named results — not projections.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {clientSuccessStories.map((story, index) => (
              <Reveal key={story.client} delayMs={index * 70} highlight>
                <article
                  id={story.slug}
                  className="attention-tile interactive-lift sky-surface flex h-full scroll-mt-28 flex-col rounded-2xl border border-slate-200 p-6 sm:p-7 md:p-8"
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
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/case-studies"
              className="inline-flex rounded-full border border-[#CAD5E2] bg-white px-5 py-2.5 text-[13px] font-semibold leading-5 text-[#020618] transition hover:border-blue-300 hover:text-blue-700 sm:px-6 sm:py-3 sm:text-[14px]"
            >
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — CLIENT TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="testimonials"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
        style={{ background: "#F1F5F9" }}
      >
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
              Client Testimonials
            </p>
            <h2
              className="mt-3 font-bold text-[#0F172A]"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="block text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[46px]">
                What leaders say about working with us
              </span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {testimonials.map((item, index) => (
              <Reveal key={item.author} delayMs={index * 70} highlight>
                <article className="attention-tile interactive-lift sky-surface flex h-full flex-col rounded-2xl border border-slate-200 p-6 sm:p-7 md:p-8">
                  {/* Quote mark */}
                  <svg
                    width="28" height="20" viewBox="0 0 28 20" fill="none"
                    className="mb-4 shrink-0 opacity-40"
                    aria-hidden="true"
                  >
                    <path d="M0 20V12.667C0 5.733 4.267 1.333 12.8 0L14 2.533C10.133 3.467 8.267 5.6 8 9.333H12V20H0ZM16 20V12.667C16 5.733 20.267 1.333 28.8 0L30 2.533C26.133 3.467 24.267 5.6 24 9.333H28V20H16Z" fill="#1447E6" />
                  </svg>
                  <p className="flex-1 text-[14px] leading-[26px] text-[#314158] sm:text-[15px] sm:leading-[28px] md:text-[16px]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-[13px] font-semibold leading-5 text-[#0F172B] sm:text-[14px]">
                      {item.author}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-4 text-[#62748E] sm:text-[13px]">
                      {item.company}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — CONTACT / DEMO REQUEST
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
        style={{ background: "#020618" }}
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Left — Copy */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(56,189,248,0.3)] bg-[rgba(56,189,248,0.08)] px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7DD3FC] sm:text-[12px]">
                  Book a Demo
                </span>
              </div>

              <h2
                className="mt-5 font-bold text-white"
                style={{ letterSpacing: "-0.025em" }}
              >
                <span className="block text-[26px] leading-tight sm:text-[32px] sm:leading-[1.1] lg:text-[40px] lg:leading-[46px]">
                  Ready to build the product your market cannot ignore?
                </span>
              </h2>

              <p className="mt-5 text-[15px] leading-[28px] text-[#94A3B8] sm:text-[16px] sm:leading-[30px]">
                Book a free 30-minute discovery call. We will listen to your challenge, share relevant examples, and outline a practical path forward — no commitment required.
              </p>

              <ul className="mt-8 grid gap-4 sm:gap-5">
                {[
                  { label: "Response time", value: "Within 1 business day" },
                  { label: "Discovery call", value: "30 minutes, no obligation" },
                  { label: "First deliverable", value: "Scoped proposal in 3 days" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#155DFC]">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <path d="M1 4l3 3L9 1" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      <span className="text-[14px] font-semibold text-white">{item.label}:</span>
                      <span className="ml-1.5 text-[14px] text-[#94A3B8]">{item.value}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="mailto:hello@mapleaitechnologies.com"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#7DD3FC] transition hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  hello@mapleaitechnologies.com
                </a>
              </div>
            </Reveal>

            {/* Right — Form */}
            <Reveal delayMs={80}>
              <DemoRequestForm />
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
