import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Maple AI Agent Studio | How we build with AI agents",
  description:
    "Explore Maple AI Agent Studio: specialist AI agents, end-to-end delivery, orchestration, and how agents make intelligent decisions—plus human oversight at every gate.",
};

const specialistAgents = [
  {
    name: "Discovery & alignment agent",
    focus: "Turns goals into a crisp product brief",
    does:
      "Captures outcomes, constraints, and stakeholders; proposes scope slices, risks, and success metrics so engineering starts with a shared picture.",
  },
  {
    name: "Architecture & technical design agent",
    focus: "Shapes systems that scale",
    does:
      "Proposes services, data flows, APIs, and security boundaries; checks against your non-functional needs (latency, compliance, cost) and produces reviewable design artifacts.",
  },
  {
    name: "Experience specification agent",
    focus: "Defines what users see and do",
    does:
      "Translates requirements into flows, states, and component-level UI specs—aligned to your brand and accessibility expectations—so build work is unambiguous.",
  },
  {
    name: "Build & integration agent",
    focus: "Ships incrementally",
    does:
      "Generates and refactors application code, wires integrations, and opens PRs with tests; follows your repo conventions and tracks dependencies across workstreams.",
  },
  {
    name: "Quality & reliability agent",
    focus: "Catches issues before users do",
    does:
      "Runs static checks, tests, and exploratory scenarios; flags regressions, proposes fixes, and maintains traceability from requirement to verification.",
  },
  {
    name: "Release & observability agent",
    focus: "Operates with signal",
    does:
      "Supports deployment automation, feature flags, dashboards, and alert paths so production behaviour stays understandable and recoverable.",
  },
];

const deliveryPhases = [
  {
    phase: "Design the product",
    summary:
      "Agents work from your goals and constraints to produce briefs, architecture options, and experience specs. Humans approve direction before heavy build.",
  },
  {
    phase: "Develop in iterations",
    summary:
      "Parallel streams implement slices of scope with continuous integration. Agents keep code, docs, and tickets aligned so progress stays auditable.",
  },
  {
    phase: "Deliver with confidence",
    summary:
      "Quality gates, stakeholder demos, and staged release strategies ensure what ships matches what was agreed—with observability ready from day one.",
  },
];

const orchestrationPrinciples = [
  {
    title: "Central coordination",
    body:
      "A single orchestration graph sequences work: which agent runs when, what inputs each step requires, and where outputs must be validated before the next handoff.",
  },
  {
    title: "Parallel workstreams",
    body:
      "Independent tracks (for example, API work and UI polish) run concurrently when dependencies allow—then merge through shared contracts and integration checkpoints.",
  },
  {
    title: "Human-in-the-loop gates",
    body:
      "Reviews are first-class states. Escalation is automatic when confidence is low, policies trigger, or you explicitly designate an approval step. Nothing reaches production without the gates you define.",
  },
];

const decisionMechanisms = [
  {
    title: "Grounded context",
    detail:
      "Agents pull from approved sources—your brief, prior decisions, design system, and repository state—before proposing changes, reducing guesswork.",
  },
  {
    title: "Policies & guardrails",
    detail:
      "Rules encode commercial, security, and brand constraints so proposals that violate them are blocked or routed for human judgment.",
  },
  {
    title: "Evaluation & comparison",
    detail:
      "Multiple options can be scored against acceptance criteria, test suites, and cost or performance budgets so trade-offs are explicit.",
  },
  {
    title: "Transparent rationale",
    detail:
      "Key outputs include why a path was chosen, what alternatives were considered, and what would change the recommendation—so your team stays in control.",
  },
];

export default function AgentStudioPage() {
  return (
    <div className="relative overflow-x-clip bg-[#F8FAFC]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[24rem] bg-[radial-gradient(circle_at_12%_10%,rgba(0,180,216,0.08),transparent_42%),radial-gradient(circle_at_88%_20%,rgba(67,97,238,0.08),transparent_40%),linear-gradient(to_bottom,#fbfdff_0%,#f8fafc_70%)]" />

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-4 pb-6 pt-14 sm:px-6 sm:pb-8 sm:pt-16 md:pt-20">
        <div className="flagship-showcase-shell relative">
          <div className="relative z-[1] p-6 sm:p-8 md:p-10">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B4D8] sm:text-[11px]">
                <span className="h-px w-8 bg-[#00B4D8] sm:w-10" aria-hidden />
                Maple AI Agent Studio
              </div>
              <h1
                className="mt-5 max-w-3xl font-serif text-[26px] font-bold leading-tight text-white sm:text-[32px] md:text-[38px]"
                style={{ letterSpacing: "-0.02em" }}
              >
                How our AI agents design, build, and deliver your product—together with your team
              </h1>
              <p className="mt-5 max-w-3xl text-[14px] leading-[26px] text-[#B8C4DB] sm:text-[15px] sm:leading-[28px]">
                Maple AI Agent Studio is our delivery framework: specialist agents, clear orchestration, and
                human checkpoints at every critical step. This page walks through the agents we operate, how
                they chain together, and how they make decisions you can audit and override.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#00B4D8] px-6 py-3 text-[14px] font-semibold text-[#0B1020] transition hover:brightness-110"
                  style={{ boxShadow: "0 8px 24px rgba(0, 180, 216, 0.35)" }}
                >
                  Start a build conversation →
                </Link>
                <Link
                  href="/#platform"
                  className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Back to homepage spotlight
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specialist agents */}
      <section className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
            Specialist agents
          </h2>
          <p
            className="mt-3 max-w-2xl text-[20px] font-bold leading-snug text-[#0F172A] sm:text-[22px] md:text-[26px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            The agent roles we run inside Agent Studio
          </p>
          <p className="mt-4 max-w-3xl text-[14px] leading-[26px] text-[#475569] sm:text-[15px]">
            Each agent owns a slice of the lifecycle. They are not generic chatbots—they are specialised runners
            with tools, templates, and reviews wired to your project. Human experts step in for approvals,
            judgment calls, and client-specific nuance.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-slate-200/90 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {specialistAgents.map((agent, index) => (
            <Reveal key={agent.name} delayMs={index * 40}>
              <div className="grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-8 sm:p-6 md:p-7">
                <div className="flex gap-4 sm:block">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F7FB] text-[13px] font-bold tabular-nums text-[#0077A3] sm:h-12 sm:w-12 sm:text-[14px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 sm:mt-3">
                    <h3 className="text-[15px] font-semibold text-[#0F172A] sm:text-[16px]">{agent.name}</h3>
                    <p className="mt-1 text-[12px] font-medium uppercase tracking-wide text-[#1447E6] sm:text-[13px]">
                      {agent.focus}
                    </p>
                  </div>
                </div>
                <p className="text-[13px] leading-[24px] text-[#475569] sm:text-[14px] sm:leading-[26px]">
                  {agent.does}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* End-to-end delivery */}
      <section
        className="border-y border-slate-200/80 px-4 py-12 sm:px-6 sm:py-16"
        style={{
          background: "linear-gradient(180deg, rgba(241,245,249,0.65) 0%, rgba(248,250,252,0.95) 100%)",
        }}
      >
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
              End-to-end delivery
            </h2>
            <p
              className="mt-3 max-w-2xl text-[20px] font-bold leading-snug text-[#0F172A] sm:text-[22px] md:text-[26px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              How agents move your idea from definition to shipped software
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-5">
            {deliveryPhases.map((item, index) => (
              <Reveal key={item.phase} delayMs={index * 70}>
                <article className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#7C3AED]">
                    Phase {index + 1}
                  </span>
                  <h3 className="mt-3 text-[17px] font-semibold text-[#0F172A]">{item.phase}</h3>
                  <p className="mt-3 text-[13px] leading-[24px] text-[#475569] sm:text-[14px] sm:leading-[26px]">
                    {item.summary}
                  </p>
                  {index < deliveryPhases.length - 1 ? (
                    <span
                      className="absolute right-[-1.125rem] top-1/2 hidden h-px w-9 -translate-y-1/2 bg-gradient-to-r from-[#00B4D8]/40 to-[#4361EE]/25 lg:block"
                      aria-hidden
                    />
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Orchestration */}
      <section className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
            Orchestration
          </h2>
          <p
            className="mt-3 max-w-2xl text-[20px] font-bold leading-snug text-[#0F172A] sm:text-[22px] md:text-[26px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            How agents are coordinated—not left to wander
          </p>
          <p className="mt-4 max-w-3xl text-[14px] leading-[26px] text-[#475569] sm:text-[15px]">
            Orchestration is what keeps many agents productive instead of chaotic. We treat your engagement as a
            managed graph of tasks: dependencies, inputs, outputs, and explicit review states.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {orchestrationPrinciples.map((block, index) => (
            <Reveal key={block.title} delayMs={index * 60} highlight>
              <article className="attention-tile interactive-lift h-full rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)] p-6 sm:p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1C2340] text-[13px] font-bold text-[#00B4D8]">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-[#0F172A]">{block.title}</h3>
                <p className="mt-3 text-[13px] leading-[24px] text-[#475569] sm:text-[14px]">
                  {block.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intelligent decisions */}
      <section className="mx-auto max-w-[1280px] px-4 pb-16 pt-2 sm:px-6 sm:pb-24">
        <div className="rounded-2xl border border-slate-200 bg-[#1C2340] px-6 py-10 text-white sm:px-10 sm:py-12">
          <Reveal>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7DD3FC] sm:text-[12px]">
              Intelligent decisions
            </h2>
            <p
              className="mt-4 max-w-2xl text-[20px] font-bold leading-snug sm:text-[24px] md:text-[28px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              How agents choose actions you can trust—and challenge
            </p>
            <p className="mt-4 max-w-3xl text-[14px] leading-[26px] text-[#C5D0E8] sm:text-[15px]">
              “Intelligence” here means structured reasoning over your context: retrieval, checks, scoring, and
              escalation—not opaque magic. The goal is speed with accountability.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {decisionMechanisms.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 50}>
                <li className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#00B4D8]/40 text-[12px] font-bold text-[#00B4D8]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white sm:text-[16px]">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-[23px] text-[#A8B8D6] sm:text-[14px] sm:leading-[24px]">
                      {item.detail}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 border-t border-white/10 pt-8">
            <Reveal>
              <p className="max-w-2xl text-[14px] leading-[26px] text-[#C5D0E8]">
                Want this operating model on your product? We will map Agent Studio to your stack, compliance
                needs, and release culture in a discovery session.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#00B4D8] px-6 py-3 text-[14px] font-semibold text-[#0B1020] transition hover:brightness-110"
                >
                  Book a session →
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex rounded-full border border-white/25 px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10"
                >
                  Read case studies
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
