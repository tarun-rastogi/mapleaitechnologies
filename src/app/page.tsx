import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  dimension2AiProducts,
  dimension3OutcomeCategories,
  homeCapabilityTeasers,
  partnershipDimensions,
} from "@/content/service-taxonomy";

export const metadata: Metadata = {
  title: "Maple AI Technologies | Enterprise AI & Product Engineering",
  description:
    "Maple AI Technologies builds mobile and web software, AI products, and outcome-led engagements—from known roadmaps to KPI-first discovery.",
};

const stats = [
  { label: "Products Delivered", value: "320+" },
  { label: "Enterprise Clients", value: "110+" },
  { label: "Avg. Time-To-MVP", value: "6 Weeks" },
  { label: "Revenue Influenced", value: "$180M+" },
];

const trustSignals = [
  "Fintech",
  "Healthcare",
  "SaaS",
  "Retail",
  "Logistics",
  "Education",
];

const processSteps = [
  {
    step: "01",
    title: "Strategy Sprint",
    description:
      "We align business goals, user journeys, and technical constraints into a delivery blueprint.",
  },
  {
    step: "02",
    title: "Rapid Execution",
    description:
      "Cross-functional pods ship in short cycles with weekly demos, transparent progress, and measurable outcomes.",
  },
  {
    step: "03",
    title: "Scale & Optimize",
    description:
      "We instrument analytics, optimize performance, and evolve your platform for sustained growth.",
  },
];

const caseHighlights = [
  {
    company: "Global B2B SaaS",
    result: "Reduced onboarding drop-off by 38%",
    details:
      "Rebuilt the product activation journey with behavioral analytics and adaptive onboarding.",
  },
  {
    company: "Healthcare Network",
    result: "Saved 17,000+ ops hours annually",
    details:
      "Launched AI-assisted triage and internal automation pipelines with strict compliance standards.",
  },
  {
    company: "Fintech Leader",
    result: "Shipped new platform in 14 weeks",
    details:
      "Modernized legacy stack into a secure, cloud-native architecture with zero-downtime migration.",
  },
];

const testimonials = [
  {
    quote:
      "Maple AI Technologies felt like an extension of our executive product team. Their speed and quality changed our trajectory.",
    author: "Chief Product Officer, Series C SaaS",
  },
  {
    quote:
      "They merged strategy, design, and engineering better than any partner we have worked with in the last decade.",
    author: "VP Digital Transformation, Enterprise Retail",
  },
  {
    quote:
      "From architecture to user experience, they delivered a world-class platform that our customers immediately trusted.",
    author: "Head of Technology, Global Fintech",
  },
];

const designRules = [
  {
    rule: "Visual Hierarchy",
    detail:
      "Large headings, focused contrast, and clear CTA prominence guide the eye from value proposition to action.",
  },
  {
    rule: "Proximity and Chunking",
    detail:
      "Content is grouped into meaningful blocks so users scan quickly without cognitive overload.",
  },
  {
    rule: "Aesthetic-Usability Effect",
    detail:
      "Subtle premium visuals increase trust and perceived quality while preserving clarity and usability.",
  },
  {
    rule: "Motion with Intent",
    detail:
      "Animations are short, calm, and contextual so every reveal highlights relevance instead of causing distraction.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* ── HERO ── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        {/* Full-bleed background photo */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        {/* Left-to-right gradient overlay: opaque on left, fully transparent on right */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 from-30% via-slate-950/75 via-55% to-transparent" />
        {/* Subtle top-bottom vignette for depth */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/50" />

        <div className="mx-auto w-full max-w-7xl px-6 py-28 md:py-36">
          <Reveal>
            {/* Badge */}
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Enterprise AI &amp; Product Engineering Studio
            </p>

            {/* Heading — single line intent, left-aligned */}
            <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Accelerating Innovation with AI
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              Maple AI Technologies is an AI-native company that builds intelligent digital products 24/7 — powered by AI agents with humans in the loop — delivering web, mobile, and enterprise applications with inbuilt AI features that help businesses automate operations, accelerate growth, and make smarter decisions at scale.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="interactive-lift attention-tile sky-button rounded-full px-7 py-3.5 text-sm font-semibold text-white hover:brightness-110"
              >
                Book a Discovery Call →
              </Link>
              <Link
                href="/case-studies"
                className="interactive-lift attention-tile rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Explore Case Outcomes
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delayMs={index * 60} highlight>
              <article className="attention-tile interactive-lift sky-surface rounded-2xl border border-slate-200/80 p-6 backdrop-blur">
                <p className="text-3xl font-extrabold text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-6">
        <Reveal highlight className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Trusted by teams across industries
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="attention-tile rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-700"
              >
                {signal}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal highlight className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Three ways we work with enterprise teams
          </p>
          <h2 className="bw-heading mt-4 text-2xl font-bold md:text-3xl">
            Develop software, ship AI products, or start from the business outcome
          </h2>
          <p className="bw-body mt-4 max-w-3xl leading-8 text-slate-600">
            Visitors often arrive with one of these entry points. Each dimension is
            described in more detail below—so you can recognize the path that matches
            how you are thinking about the problem.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {partnershipDimensions.map((dim, index) => (
              <Reveal key={dim.title} delayMs={index * 70} highlight>
                <article className="attention-tile interactive-lift flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {dim.label}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{dim.title}</h3>
                  <p className="bw-body mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {dim.description}
                  </p>
                  <Link
                    href={dim.href}
                    className="interactive-link mt-5 text-sm font-semibold text-blue-700"
                  >
                    {dim.cta} →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <h2 className="bw-heading text-3xl font-bold md:text-4xl">
            Platform & product engineering
          </h2>
          <p className="bw-body mt-5 max-w-3xl leading-8">
            When you already know you need software—customer-facing or internal—we
            staff design, build, and operate. The full capability list lives on our
            services page; here is a concise view of how we show up.
          </p>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {homeCapabilityTeasers.map((service, index) => (
              <Reveal key={service.title} delayMs={index * 80} highlight>
                <article className="attention-tile interactive-lift sky-surface rounded-2xl border border-slate-200 p-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="bw-body mt-4 text-sm leading-7">
                    {service.description}
                  </p>
                  <p className="mt-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {service.impact}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-blue-300 hover:text-blue-700"
            >
              Full list of engineering & operations services →
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal highlight>
            <article className="attention-tile sky-surface rounded-3xl border border-slate-200 p-4">
              <Image
                src="/images/ai-flow.svg"
                alt="AI workflow orchestration visual"
                width={820}
                height={520}
                className="h-auto w-full rounded-2xl"
              />
            </article>
          </Reveal>
          <Reveal highlight delayMs={80}>
            <article className="attention-tile sky-surface rounded-3xl border border-slate-200 p-4">
              <Image
                src="/images/product-strategy.svg"
                alt="Product strategy dashboard visual"
                width={820}
                height={520}
                className="h-auto w-full rounded-2xl"
              />
            </article>
          </Reveal>
        </div>
      </section>

      <section id="ai-products" className="mx-auto max-w-7xl px-6 pb-24 scroll-mt-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            AI products & intelligent systems
          </p>
          <h2 className="bw-heading mt-3 text-3xl font-bold md:text-4xl">
            Intelligent products beyond a single model
          </h2>
          <p className="bw-body mt-5 max-w-3xl leading-8">
            Voice, chat, recommendations, prediction, analytics, and summarizers are
            the core patterns most teams ask for first. We also design adjacent
            capabilities—search over your knowledge base, document automation, vision,
            and agentic workflows—with governance and evaluation built in.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dimension2AiProducts.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 40} highlight>
                <article className="attention-tile interactive-lift sky-surface h-full rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="bw-body mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal className="rounded-3xl bg-slate-950 px-8 py-14 text-slate-100 md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            Delivery framework
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            A proven model from strategy to scale
          </h2>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="attention-tile interactive-lift rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
              >
                <p className="text-sm font-semibold text-blue-300">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="outcome-led" className="mx-auto max-w-7xl px-6 pb-24 scroll-mt-24">
        <Reveal highlight className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            Outcome-led engagements
          </p>
          <h2 className="bw-heading mt-4 text-3xl font-bold md:text-4xl">
            You define success; we propose the software path
          </h2>
          <p className="bw-body mt-5 max-w-3xl leading-8 text-slate-600">
            Problem-first discovery is the default here: we align on metrics,
            constraints, and risk before locking stack choices. Typical outcome
            categories include efficiency, velocity, revenue, reliability, cost, and
            compliance—expressed as measurable targets, not feature wishlists.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {dimension3OutcomeCategories.map((item, index) => (
              <Reveal key={item.headline} delayMs={index * 50} highlight>
                <article className="attention-tile rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{item.headline}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-blue-700">
                    {item.metricHint}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <h2 className="bw-heading text-3xl font-bold md:text-4xl">
            Representative results from recent work
          </h2>
          <p className="bw-body mt-4 max-w-3xl text-slate-600">
            Short vignettes illustrating how outcome-led and engineering engagements
            show up in practice—not a guarantee of future numbers for your program.
          </p>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {caseHighlights.map((item, index) => (
              <Reveal key={item.company} delayMs={index * 70} highlight>
                <article className="attention-tile interactive-lift sky-surface rounded-2xl border border-slate-200 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                    {item.company}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">
                    {item.result}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.details}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <h2 className="bw-heading text-3xl font-bold md:text-4xl">
            What leaders say about working with us
          </h2>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.author} delayMs={index * 70} highlight>
                <article className="attention-tile interactive-lift sky-surface rounded-2xl border border-slate-200 p-8">
                  <p className="text-base leading-7 text-slate-700">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-5 text-sm font-semibold text-slate-900">
                    {item.author}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <h2 className="bw-heading text-3xl font-bold md:text-4xl">
            Product design rules we apply in every section
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {designRules.map((item, index) => (
              <Reveal key={item.rule} delayMs={index * 70} highlight>
                <article className="attention-tile interactive-lift sky-surface rounded-2xl border border-slate-200 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                    {item.rule}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal
          highlight
          className="rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-600 to-blue-700 px-8 py-16 text-white md:px-12"
        >
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            Ready to build the product your market cannot ignore?
          </h2>
          <p className="mt-4 max-w-2xl text-blue-50">
            Bring us your vision, roadmap, or existing platform. We will turn it
            into a high-performing digital product with enterprise-grade execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="interactive-lift attention-tile sky-surface rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Get a Transformation Plan
            </Link>
            <Link
              href="/services"
              className="interactive-lift attention-tile rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Services in Detail
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
