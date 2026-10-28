import {
  dimension1Groups,
  dimension2AiProducts,
  dimension3OutcomeCategories,
} from "@/content/service-taxonomy";

/** Homepage-aligned service cards — source of truth for marketing chat answers. */
export const marketingServices = [
  {
    id: "ai-applications",
    title: "AI Application Development",
    description:
      "Voice AI, Chat AI, Recommendation, Prediction, Analytics, Document AI, Vision AI, and Agentic workflow systems built for your business domain.",
    href: "/#ai-products",
    keywords: [
      "ai",
      "artificial intelligence",
      "voice",
      "chatbot",
      "copilot",
      "recommendation",
      "prediction",
      "analytics",
      "document ai",
      "vision",
      "agentic",
      "machine learning",
      "llm",
      "rag",
    ],
  },
  {
    id: "web-applications",
    title: "Web Application Development",
    description:
      "Full-stack web apps, marketing sites, and SaaS platforms — responsive, fast, and engineered for enterprise scale.",
    href: "/services#web-applications",
    keywords: ["web", "website", "saas", "full-stack", "frontend", "backend", "pwa", "portal"],
  },
  {
    id: "mobile-applications",
    title: "Mobile App Development",
    description:
      "Native iOS & Android and cross-platform apps with smooth UX, offline support, and deep system integrations.",
    href: "/services#mobile-applications",
    keywords: ["mobile", "ios", "android", "app store", "cross-platform", "react native", "flutter"],
  },
  {
    id: "design",
    title: "UI/UX Design & Product Design",
    description:
      "Research-led product design, design systems, and component libraries that convert visitors and delight users.",
    href: "/services#design",
    keywords: ["ui", "ux", "design", "figma", "prototype", "design system", "user experience"],
  },
  {
    id: "cloud",
    title: "Cloud Architecture & DevOps",
    description:
      "Cloud-native infrastructure, CI/CD pipelines, and production operations with high availability SLAs.",
    href: "/services#cloud",
    keywords: ["cloud", "devops", "aws", "azure", "gcp", "kubernetes", "ci/cd", "infrastructure", "sla"],
  },
  {
    id: "staff-augmentation",
    title: "IT Staff Augmentation",
    description:
      "Embed senior engineers and AI specialists directly into your team — on-demand, without hiring overhead.",
    href: "/services#staff-augmentation",
    keywords: ["staff augmentation", "embedded", "hire engineers", "team extension", "contractors", "pods"],
  },
] as const;

export const industries = [
  {
    name: "Fintech & Banking",
    description: "Payments, lending, compliance automation, fraud detection, and personal finance AI.",
    keywords: ["fintech", "banking", "finance", "payments", "lending"],
  },
  {
    name: "Healthcare & MedTech",
    description: "Clinical workflows, patient engagement, AI triage, telehealth, and HIPAA-compliant platforms.",
    keywords: ["healthcare", "medtech", "hipaa", "clinical", "telehealth", "patient"],
  },
  {
    name: "SaaS & Technology",
    description: "Product-led growth tools, B2B dashboards, API platforms, and AI-augmented SaaS features.",
    keywords: ["saas", "b2b", "software", "technology", "api platform"],
  },
  {
    name: "Retail & E-commerce",
    description: "Shopping experiences, inventory intelligence, personalisation engines, and omnichannel platforms.",
    keywords: ["retail", "ecommerce", "e-commerce", "shopping", "inventory", "omnichannel"],
  },
  {
    name: "Logistics & Supply Chain",
    description: "Fleet tracking, route optimisation, warehouse automation, and last-mile visibility systems.",
    keywords: ["logistics", "supply chain", "fleet", "warehouse", "last mile"],
  },
  {
    name: "Education & EdTech",
    description: "Learning management systems, AI tutors, admissions automation, and student engagement platforms.",
    keywords: ["education", "edtech", "learning", "lms", "student", "tutor"],
  },
  {
    name: "Real Estate & PropTech",
    description: "Property search, valuation AI, lease management, and smart building integrations.",
    keywords: ["real estate", "proptech", "property", "lease", "valuation"],
  },
  {
    name: "Manufacturing & Industry",
    description: "Quality inspection vision AI, predictive maintenance, ERP integrations, and factory dashboards.",
    keywords: ["manufacturing", "factory", "industrial", "erp", "predictive maintenance", "inspection"],
  },
] as const;

export const companyProfile = {
  name: "Maple AI Technologies",
  email: "hello@mapleaitechnologies.com",
  tagline: "Accelerating Innovation with AI",
  summary:
    "Maple AI Technologies is an AI-native product engineering studio. We build intelligent web, mobile, and enterprise applications — delivered with AI agents and human oversight for speed, quality, and reliability.",
  differentiators: [
    "Fast delivery of production-ready products and MVPs",
    "15+ years of team experience shipping enterprise-scale applications",
    "Outcome-focused partnerships with transparent delivery rhythm",
  ],
  contactHref: "/contact",
  servicesHref: "/services",
  agentStudioHref: "/agent-studio",
  caseStudiesHref: "/case-studies",
} as const;

export const agentStudioSummary = {
  title: "Maple AI Agent Studio",
  description:
    "Our AI-native delivery framework — specialist agents for discovery, architecture, UX specification, build, quality, and release — orchestrated with human-in-the-loop gates at every critical step.",
  href: "/agent-studio",
} as const;

export const detailedCapabilities = dimension1Groups.flatMap((group) =>
  group.items.map((item) => ({
    group: group.title,
    title: item.title,
    description: item.description,
  })),
);

export const aiProductPatterns = [...dimension2AiProducts];
export const outcomeCategories = [...dimension3OutcomeCategories];

export const chatbotGreeting =
  "Hello! I'm the Maple AI assistant. I can help you explore our services — web, mobile, AI products, design, cloud, and more — plus industries we serve and how we work. What would you like to know?";

export const chatbotOutOfScopeReply =
  "That's a great question, and honestly it's beyond what I can answer reliably here — it needs a deeper conversation with our team. I'm best suited for Maple AI's services, delivery approach, and industries. For complex or bespoke topics, please reach out at hello@mapleaitechnologies.com or use our Contact page, and a specialist will follow up.";

export const chatbotFallbackReply =
  "I want to make sure I point you in the right direction. I can help with Maple AI's services (web, mobile, AI, design, cloud), AI product patterns, industries we serve, Agent Studio, and how to get in touch. Could you rephrase your question, or ask about one of those topics?";
