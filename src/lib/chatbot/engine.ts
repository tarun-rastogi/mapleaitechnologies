import {
  agentStudioSummary,
  aiProductPatterns,
  chatbotFallbackReply,
  chatbotGreeting,
  chatbotOutOfScopeReply,
  companyProfile,
  industries,
  marketingServices,
  outcomeCategories,
} from "@/content/chatbot-knowledge";

type Intent =
  | "greeting"
  | "thanks"
  | "farewell"
  | "all_services"
  | "ai_products"
  | "industries"
  | "industry_detail"
  | "service_detail"
  | "agent_studio"
  | "about"
  | "contact"
  | "pricing"
  | "case_studies"
  | "outcomes"
  | "out_of_scope"
  | "unknown";

const GREETING_PATTERNS =
  /^(hi|hello|hey|hiya|good morning|good afternoon|good evening|greetings|howdy)\b|^(hi|hello|hey)\s+there/i;

const THANKS_PATTERNS = /\b(thank you|thanks|thx|appreciate it|cheers)\b/i;

const FAREWELL_PATTERNS = /\b(bye|goodbye|see you|talk later|have a (good|nice) day)\b/i;

const ALL_SERVICES_PATTERNS =
  /\b(what (do you|services)|services (do you|you offer|offered)|list (of )?services|all services|capabilities|what can you (build|do)|offerings)\b/i;

const AI_PRODUCTS_PATTERNS =
  /\b(ai product|voice ai|chat ai|recommendation|prediction ai|summariz|vision ai|agentic|rag\b|intelligent (system|feature))\b/i;

const INDUSTRIES_PATTERNS =
  /\b(industr(y|ies)|verticals?|sectors?|domains? (you serve)?)\b/i;

const AGENT_STUDIO_PATTERNS =
  /\b(agent studio|maple ai agent|how (do you|you) (build|deliver|work)|delivery framework|ai.?native delivery|human.in.the.loop)\b/i;

const ABOUT_PATTERNS =
  /\b(who (are you|is maple)|about maple|tell me about (maple|your company)|what is maple ai|your (company|story|mission))\b/i;

const CONTACT_PATTERNS =
  /\b(contact|email|reach (you|out)|talk to (you|someone)|schedule|book (a )?call|consultation|get in touch|speak (with|to) (your )?team)\b/i;

const PRICING_PATTERNS =
  /\b(price|pricing|cost|quote|budget|how much|rate|fees?|estimate)\b/i;

const CASE_STUDIES_PATTERNS = /\b(case stud(y|ies)|client (results|work)|portfolio|examples? of work|past projects?)\b/i;

const OUTCOMES_PATTERNS =
  /\b(outcome|roi|reduce (cost|support)|conversion|uptime|reliability|moderniz)\b/i;

const OUT_OF_SCOPE_PATTERNS = [
  /\b(write (me )?(the )?(full |entire )?code|generate (a )?complete (app|system)|implement my (whole|entire))\b/i,
  /\b(legal advice|lawsuit|sue|medical diagnosis|prescri(be|ption)|investment advice|stock (tip|pick))\b/i,
  /\b(politic|religion|recipe|cook|weather forecast|sports score)\b/i,
  /\b(architect (my|a) (entire|whole) (enterprise|system) for (a )?fortune|microservices migration plan for \d{3,})\b/i,
  /\b(gdpr certification for my company|guarantee (hipaa|soc2) certification)\b/i,
  /\b(debug this code|fix my bug|error on line)\b/i,
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

/** Split compound questions so each part gets its own answer. */
export function splitUserMessage(message: string): string[] {
  const trimmed = message.trim();
  if (!trimmed) return [];

  const parts = trimmed
    .split(
      /(?:\?|\n|;|(?:\band also\b)|(?:\balso[,]?\s)|(?:\bplus[,]?\s)|(?:\bthen[,]?\s)|(?:\band\s+(?:what|do|can|how)\b))/i,
    )
    .map((part) => part.replace(/^(and|also|plus|then)\s+/i, "").trim())
    .filter((part) => part.length > 2);

  return parts.length > 0 ? parts : [trimmed];
}

function isOutOfScope(text: string): boolean {
  if (text.length > 420) return true;
  return OUT_OF_SCOPE_PATTERNS.some((pattern) => pattern.test(text));
}

function matchService(text: string) {
  let best: (typeof marketingServices)[number] | null = null;
  let bestScore = 0;

  for (const service of marketingServices) {
    let score = 0;
    if (text.includes(service.title.toLowerCase())) score += 5;
    for (const keyword of service.keywords) {
      if (text.includes(keyword)) score += keyword.includes(" ") ? 3 : 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = service;
    }
  }

  return bestScore >= 2 ? best : null;
}

function matchIndustry(text: string) {
  let best: (typeof industries)[number] | null = null;
  let bestScore = 0;

  for (const industry of industries) {
    let score = 0;
    if (text.includes(industry.name.toLowerCase())) score += 5;
    for (const keyword of industry.keywords) {
      if (text.includes(keyword)) score += 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = industry;
    }
  }

  return bestScore >= 2 ? best : null;
}

function detectIntents(text: string): Intent[] {
  const intents: Intent[] = [];

  if (isOutOfScope(text)) intents.push("out_of_scope");
  if (GREETING_PATTERNS.test(text)) intents.push("greeting");
  if (THANKS_PATTERNS.test(text)) intents.push("thanks");
  if (FAREWELL_PATTERNS.test(text)) intents.push("farewell");
  if (ALL_SERVICES_PATTERNS.test(text)) intents.push("all_services");
  if (AI_PRODUCTS_PATTERNS.test(text)) intents.push("ai_products");
  if (INDUSTRIES_PATTERNS.test(text)) intents.push("industries");
  if (AGENT_STUDIO_PATTERNS.test(text)) intents.push("agent_studio");
  if (ABOUT_PATTERNS.test(text)) intents.push("about");
  if (CONTACT_PATTERNS.test(text)) intents.push("contact");
  if (PRICING_PATTERNS.test(text)) intents.push("pricing");
  if (CASE_STUDIES_PATTERNS.test(text)) intents.push("case_studies");
  if (OUTCOMES_PATTERNS.test(text)) intents.push("outcomes");

  const service = matchService(text);
  if (service) intents.push("service_detail");

  const industry = matchIndustry(text);
  if (industry && !intents.includes("industries")) intents.push("industry_detail");

  if (intents.length === 0) intents.push("unknown");

  return intents;
}

function replyGreeting(): string {
  return "Hello! Great to meet you. I'm here to help you learn about Maple AI Technologies — our services, AI capabilities, industries, and how to get started. What can I help you with today?";
}

function replyThanks(): string {
  return "You're very welcome! If you have more questions about our services or how we work, I'm happy to help. Otherwise, our team is at hello@mapleaitechnologies.com whenever you're ready to talk.";
}

function replyFarewell(): string {
  return "Goodbye! Thanks for stopping by. Whenever you're ready to explore a project, visit our Contact page or email hello@mapleaitechnologies.com. Have a great day!";
}

function replyAllServices(): string {
  const list = marketingServices
    .map((s) => `• **${s.title}** — ${s.description}`)
    .join("\n");

  return `Here are the core services we offer at Maple AI Technologies:\n\n${list}\n\nYou can explore details at ${companyProfile.servicesHref} or ask me about any single service for more depth.`;
}

function replyServiceDetail(text: string): string | null {
  const service = matchService(text);
  if (!service) return null;

  const relatedAi = aiProductPatterns
    .slice(0, 4)
    .map((p) => p.title)
    .join(", ");

  let reply = `**${service.title}**\n\n${service.description}`;

  if (service.id === "ai-applications") {
    reply += `\n\nWe build patterns including ${relatedAi}, and more — tailored to your domain and compliance needs.`;
  }

  reply += `\n\nLearn more: ${service.href}`;
  return reply;
}

function replyAiProducts(): string {
  const list = aiProductPatterns.map((p) => `• **${p.title}** — ${p.description}`).join("\n");
  return `Our AI product patterns include:\n\n${list}\n\nThese are embedded into web, mobile, and enterprise applications — not one-size-fits-all chatbots. Ask about any pattern for more detail.`;
}

function replyIndustries(): string {
  const list = industries.map((i) => `• **${i.name}** — ${i.description}`).join("\n");
  return `We serve clients across these industry domains:\n\n${list}\n\nAsk about any vertical to hear how we typically engage.`;
}

function replyIndustryDetail(text: string): string | null {
  const industry = matchIndustry(text);
  if (!industry) return null;
  return `Yes — we work in **${industry.name}**. ${industry.description}\n\nWe combine domain-aware engineering with AI features where they create measurable impact. For a relevant example, see our case studies at ${companyProfile.caseStudiesHref}.`;
}

function replyAgentStudio(): string {
  return `**${agentStudioSummary.title}** is ${agentStudioSummary.description}\n\nSpecialist agents cover discovery, architecture, UX specs, build & integration, quality, and release — always with human approval gates you define.\n\nRead more at ${agentStudioSummary.href}.`;
}

function replyAbout(): string {
  const diff = companyProfile.differentiators.map((d) => `• ${d}`).join("\n");
  return `**${companyProfile.name}** — ${companyProfile.summary}\n\nWhat sets us apart:\n${diff}\n\nLearn more at /about or start a conversation at ${companyProfile.contactHref}.`;
}

function replyContact(): string {
  return `You can reach us at **${companyProfile.email}** or through our [Contact page](${companyProfile.contactHref}). We typically respond within one business day and offer a free discovery call to understand your goals — no obligation.`;
}

function replyPricing(): string {
  return `We scope engagements based on outcomes and product stage rather than publishing fixed price lists here. For a tailored proposal, the best next step is a short discovery call via our Contact page (${companyProfile.contactHref}) or email at ${companyProfile.email}. I'll gladly explain *what* we build in the meantime.`;
}

function replyCaseStudies(): string {
  return `We share measurable client outcomes on our Case Studies page (${companyProfile.caseStudiesHref}) — onboarding improvements, automation savings, platform modernisation timelines, and more. Ask about a specific industry if you'd like to know how we typically engage.`;
}

function replyOutcomes(): string {
  const samples = outcomeCategories
    .slice(0, 4)
    .map((o) => `• ${o.headline}`)
    .join("\n");
  return `We start from the business result you need, then propose the right software path. Example outcomes we commit to:\n\n${samples}\n\nTell me your goal (cost, speed, revenue, reliability) and I can suggest which services usually fit.`;
}

function answerSegment(segment: string): string {
  const text = normalize(segment);
  if (!text) return "";

  const intents = detectIntents(text);

  if (intents.includes("out_of_scope") && intents.length <= 2) {
    return chatbotOutOfScopeReply;
  }

  const replies: string[] = [];

  if (intents.includes("greeting") && intents.length === 1) {
    return replyGreeting();
  }

  if (intents.includes("thanks") && intents.length === 1) {
    return replyThanks();
  }

  if (intents.includes("farewell") && intents.length === 1) {
    return replyFarewell();
  }

  if (intents.includes("greeting")) {
    replies.push("Hello! Happy to help.");
  }

  if (intents.includes("all_services")) {
    replies.push(replyAllServices());
  } else if (intents.includes("service_detail")) {
    const detail = replyServiceDetail(text);
    if (detail) replies.push(detail);
  }

  if (intents.includes("ai_products")) {
    replies.push(replyAiProducts());
  }

  if (intents.includes("industries")) {
    replies.push(replyIndustries());
  } else if (intents.includes("industry_detail")) {
    const detail = replyIndustryDetail(text);
    if (detail) replies.push(detail);
  }

  if (intents.includes("agent_studio")) {
    replies.push(replyAgentStudio());
  }

  if (intents.includes("about")) {
    replies.push(replyAbout());
  }

  if (intents.includes("contact")) {
    replies.push(replyContact());
  }

  if (intents.includes("pricing")) {
    replies.push(replyPricing());
  }

  if (intents.includes("case_studies")) {
    replies.push(replyCaseStudies());
  }

  if (intents.includes("outcomes")) {
    replies.push(replyOutcomes());
  }

  if (replies.length === 0) {
    const serviceFallback = replyServiceDetail(text);
    const industryFallback = replyIndustryDetail(text);
    if (serviceFallback) replies.push(serviceFallback);
    else if (industryFallback) replies.push(industryFallback);
    else if (intents.includes("out_of_scope")) return chatbotOutOfScopeReply;
    else return chatbotFallbackReply;
  }

  return [...new Set(replies)].join("\n\n");
}

export function generateChatReply(message: string): string {
  const segments = splitUserMessage(message);
  if (segments.length === 0) return chatbotFallbackReply;

  const answers = segments.map(answerSegment).filter(Boolean);
  if (answers.length === 0) return chatbotFallbackReply;

  return answers.join("\n\n---\n\n");
}

export function getInitialGreeting(): string {
  return chatbotGreeting;
}
