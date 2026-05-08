/**
 * Service taxonomy: three dimensions visitors should understand.
 * D1 — What we build (capabilities). D2 — AI product patterns. D3 — Outcomes we commit to.
 */

export const dimension1Groups = [
  {
    title: "Applications & platforms",
    items: [
      "Mobile app development (native and hybrid)",
      "Web app development & progressive web apps",
      "Website development & marketing sites",
      "Custom software & line-of-business systems",
      "Cross-platform development (shared codebases, design systems)",
    ],
  },
  {
    title: "Experience & product design",
    items: [
      "UI/UX design & product discovery",
      "Design systems & accessibility-aligned interfaces",
    ],
  },
  {
    title: "Delivery, operations & talent",
    items: [
      "Managed IT services & production support",
      "IT staff augmentation & embedded engineering pods",
    ],
  },
] as const;

export const dimension2AiProducts = [
  {
    title: "Voice AI",
    description:
      "Speech interfaces, IVR modernization, and hands-free workflows tuned to your brand and compliance needs.",
  },
  {
    title: "Chat AI",
    description:
      "Assistants, copilots, and conversational front-ends with guardrails, routing, and human handoff.",
  },
  {
    title: "Recommendation AI",
    description:
      "Personalized feeds, next-best-action, and ranking models that respect privacy and business rules.",
  },
  {
    title: "Prediction AI",
    description:
      "Forecasting, scoring, and classification models for operations, risk, and planning.",
  },
  {
    title: "Analytics AI",
    description:
      "Automated insights, anomaly detection, and decision-support dashboards over your data estate.",
  },
  {
    title: "Summarizer AI",
    description:
      "Abstractive and extractive summaries for documents, meetings, tickets, and threads—tuned for length, audience, and policy.",
  },
  {
    title: "Search & knowledge AI",
    description:
      "Semantic search, RAG, and enterprise knowledge bases so teams find answers in one place.",
  },
  {
    title: "Document & content AI",
    description:
      "Intelligent document processing, extraction, form understanding, and contract-aware workflows.",
  },
  {
    title: "Vision AI",
    description:
      "Image and video understanding for inspection, cataloging, accessibility, and quality.",
  },
  {
    title: "Agentic & workflow AI",
    description:
      "Multi-step automations and tool-using agents that connect to your systems safely.",
  },
] as const;

export const dimension3OutcomeCategories = [
  {
    headline: "Reduce support load with AI-powered response automation",
    detail:
      "Deflect repetitive tickets, draft accurate replies, and escalate cleanly—measured by handle time and CSAT.",
    metricHint: "Example: substantial reduction in manual support workload",
  },
  {
    headline: "Ship faster with platform modernization",
    detail:
      "Move from slow release trains to weekly—or continuous—delivery without trading off safety.",
    metricHint: "Example: monthly → weekly release cadence",
  },
  {
    headline: "Grow revenue through UX & funnel optimization",
    detail:
      "Structured experiments, clearer journeys, and performance so more visitors become customers.",
    metricHint: "Example: double-digit lift in conversion",
  },
  {
    headline: "Protect reliability at scale",
    detail:
      "Architecture, observability, and runbooks aimed at sustained uptime under real traffic.",
    metricHint: "Example: 99.98%+ for high-traffic ecosystems",
  },
  {
    headline: "Operational efficiency & cost discipline",
    detail:
      "Automate back-office workflows, reduce toil, and make unit economics visible earlier.",
    metricHint: "ROI-led automation roadmaps",
  },
  {
    headline: "Risk, compliance & audit readiness",
    detail:
      "Controls, traceability, and documentation suitable for regulated and security-conscious environments.",
    metricHint: "Governance baked into delivery",
  },
] as const;

export const partnershipDimensions = [
  {
    label: "Software & platforms",
    title: "Build & operate",
    description:
      "Mobile and web apps, custom systems, cross-platform delivery, UI/UX, managed IT, and embedded teams.",
    href: "/services",
    cta: "Explore capabilities",
  },
  {
    label: "AI products",
    title: "Ship intelligent systems",
    description:
      "Voice, chat, recommendations, prediction, analytics, summarizers, and adjacent intelligent systems aligned to your stack.",
    href: "/#ai-products",
    cta: "See AI patterns",
  },
  {
    label: "Outcomes first",
    title: "Start from the result",
    description:
      "Name the business result—cost, speed, revenue, reliability—and we propose the right software path.",
    href: "/#outcome-led",
    cta: "How outcome-led works",
  },
] as const;

export const homeCapabilityTeasers = [
  {
    title: "Mobile, web & custom software",
    description:
      "End-to-end product builds—apps, sites, and internal platforms—with cross-platform options when it fits.",
    impact: "Engineering-led delivery",
  },
  {
    title: "Design systems & UX",
    description:
      "Product design that converts and scales: research, UI, and component libraries aligned to your roadmap.",
    impact: "Faster, consistent releases",
  },
  {
    title: "Managed IT & augmentation",
    description:
      "Run production systems with clear SLAs, or embed our people with yours for velocity without hiring lag.",
    impact: "Operational continuity",
  },
] as const;
