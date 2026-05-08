import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Case Studies | Makers AI Labs",
  description:
    "Read case studies from Makers AI Labs showing measurable gains in growth, conversion, reliability, and operational efficiency.",
};

export default function CaseStudiesPage() {
  return (
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
  );
}
