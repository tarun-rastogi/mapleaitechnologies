import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Blog | Makers AI Labs",
  description:
    "Insights from Makers AI Labs on AI, engineering systems, product strategy, and enterprise digital transformation.",
};

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Insights on AI, engineering, and digital growth"
      description="Explore practical playbooks, architecture lessons, and innovation trends from our team. We publish actionable insights for modern product leaders."
      bullets={[
        "How enterprises de-risk generative AI implementation",
        "Performance-first frontend architecture in high-traffic environments",
        "Designing data products that leadership teams actually use",
        "Modern DevOps patterns for faster and safer releases",
      ]}
    />
  );
}
