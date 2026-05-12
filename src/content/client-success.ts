export type ClientSuccessStory = {
  slug: string;
  client: string;
  outcome: string;
  detail: string;
  tags: string[];
};

/** Shared across homepage success stories and nav / case studies anchors. */
export const clientSuccessStories: ClientSuccessStory[] = [
  {
    slug: "global-b2b-saas",
    client: "Global B2B SaaS",
    outcome: "38% reduction in onboarding drop-off",
    detail:
      "Rebuilt the product activation journey with behavioural analytics and adaptive AI-driven onboarding in 10 weeks.",
    tags: ["SaaS", "AI", "UX"],
  },
  {
    slug: "healthcare-network",
    client: "Healthcare Network",
    outcome: "17,000+ operations hours saved annually",
    detail:
      "Deployed AI-assisted triage and internal automation pipelines with full HIPAA compliance and human oversight.",
    tags: ["Healthcare", "AI Automation"],
  },
  {
    slug: "fintech-leader",
    client: "Fintech Leader",
    outcome: "New platform shipped in 14 weeks",
    detail:
      "Modernised a legacy monolith into a secure cloud-native architecture with zero-downtime migration and regulatory controls.",
    tags: ["Fintech", "Cloud", "Compliance"],
  },
];
