/**
 * Service taxonomy: three dimensions visitors should understand.
 * D1 — What we build (capabilities). D2 — AI product patterns. D3 — Outcomes we commit to.
 */

/** Detailed /services page tiles — aligned with homepage “Services we offer” card styling & copy. */
export type ServiceDetailCard = {
  icon: string;
  title: string;
  description: string;
};

export const dimension1Groups: { title: string; items: ServiceDetailCard[] }[] = [
  {
    title: "Applications & platforms",
    items: [
      {
        icon: "📱",
        title: "Mobile app development (native and hybrid)",
        description:
          "Native iOS & Android and cross-platform apps with smooth UX, offline support, and deep system integrations — engineered for app-store quality, device capabilities, and your release cadence.",
      },
      {
        icon: "🌐",
        title: "Web app development & progressive web apps",
        description:
          "Full-stack web apps and SaaS platforms — responsive, fast, and built for enterprise scale — including progressive web apps for installable, offline-capable experiences where they fit your roadmap.",
      },
      {
        icon: "🌐",
        title: "Website development & marketing sites",
        description:
          "High-performance marketing sites, landing experiences, and content-led properties — fast, SEO-conscious, and conversion-oriented, with the same engineering discipline we apply to product code.",
      },
      {
        icon: "⚙️",
        title: "Custom software & line-of-business systems",
        description:
          "Bespoke internal platforms, workflow automation, and integrations that match your domains, permissions model, and reliability bar — from greenfield builds to careful extension of what you already run.",
      },
      {
        icon: "🔧",
        title: "Cross-platform development (shared codebases, design systems)",
        description:
          "One coherent design system and shared codebase strategy across iOS, Android, and web — so your team ships consistently without maintaining three divergent products.",
      },
    ],
  },
  {
    title: "Experience & product design",
    items: [
      {
        icon: "🎨",
        title: "UI/UX design & product discovery",
        description:
          "Research-led product design and discovery that derisks the build — flows, prototyping, and UX decisions that convert visitors, clarify scope, and align stakeholders before engineering locks in.",
      },
      {
        icon: "🎨",
        title: "Design systems & accessibility-aligned interfaces",
        description:
          "Design systems, component libraries, and accessibility-aligned interfaces that scale with your roadmap — so every release stays on-brand, consistent, and inclusive by default.",
      },
    ],
  },
  {
    title: "Delivery, operations & talent",
    items: [
      {
        icon: "☁️",
        title: "Managed IT services & production support",
        description:
          "Cloud-native infrastructure, CI/CD pipelines, and production operations with clear runbooks, observability, and high-availability practices — so releases stay safe and incidents stay short.",
      },
      {
        icon: "🤝",
        title: "IT staff augmentation & embedded engineering pods",
        description:
          "Embed senior engineers and specialists directly into your team — on-demand capacity without hiring lag, with workflow and communication patterns that feel like an extension of your org.",
      },
    ],
  },
];

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
