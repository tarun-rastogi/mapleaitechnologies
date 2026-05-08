import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Portfolio | Maple AI Technologies",
  description:
    "See the portfolio of digital products and enterprise platforms built by Maple AI Technologies across industries.",
};

export default function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Digital products engineered for scale and trust"
      description="We partner with startups, growth companies, and enterprises to ship digital experiences that blend elite design with resilient backend systems."
      bullets={[
        "B2B SaaS platforms with secure multi-tenant architecture",
        "Customer portals optimized for onboarding and retention",
        "AI-enhanced e-commerce systems with personalization engines",
        "Internal enterprise tools that automate mission-critical workflows",
      ]}
    />
  );
}
