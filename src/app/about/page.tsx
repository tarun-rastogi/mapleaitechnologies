import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About | Makers AI Labs",
  description:
    "Learn about Makers AI Labs, a product-first engineering partner helping enterprises build modern digital platforms.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="A product-first engineering company"
      description="Makers AI Labs is built by senior engineers, designers, and AI specialists with one mission: help businesses compound growth through intelligent software."
      bullets={[
        "Cross-functional squads with product, engineering, and AI expertise",
        "Transparent delivery rhythm with weekly demos and KPI tracking",
        "Security, privacy, and quality standards embedded from day one",
        "Long-term partnerships focused on compounding product value",
      ]}
    />
  );
}
