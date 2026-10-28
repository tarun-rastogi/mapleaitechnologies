export type ProductLink = {
  label: string;
  slug: string;
  href: string;
  description: string;
  /** Short line shown in the nav mega-menu */
  blurb: string;
};

export type ProductNavGroup = {
  heading: string;
  items: ProductLink[];
};

function product(
  label: string,
  slug: string,
  description: string,
  blurb: string,
): ProductLink {
  return { label, slug, href: `/products/${slug}`, description, blurb };
}

/** Cross-industry business function AI agents */
export const businessFunctionProducts: ProductLink[] = [
  product(
    "Sales Genie",
    "sales-genie",
    "AI sales agent for pipeline, follow-ups, and closing support.",
    "Pipeline, follow-ups, and closing support.",
  ),
  product(
    "Brand Buddy",
    "brand-buddy",
    "AI marketing agent for campaigns, content, and brand growth.",
    "Campaigns, content, and brand growth.",
  ),
  product(
    "HR Hero",
    "hr-hero",
    "AI HR agent for hiring, onboarding, and people operations.",
    "Hiring, onboarding, and people ops.",
  ),
  product(
    "Customer Connect",
    "customer-connect",
    "AI CRM agent for relationships, retention, and customer intelligence.",
    "Relationships, retention, and CRM IQ.",
  ),
];

/** Industry-specific vertical AI software */
export const industryProducts: ProductLink[] = [
  product(
    "Finance Assist AI",
    "finance-assist",
    "AI software for finance, accounting, and CA practices.",
    "Finance, accounting, and CA workflows.",
  ),
  product(
    "Medi Assist AI",
    "medi-assist",
    "AI clinic and healthcare practice management.",
    "Clinic and healthcare practice ops.",
  ),
  product(
    "Lex Assist AI",
    "lex-assist",
    "AI legal practice and matter management.",
    "Legal practice and matter management.",
  ),
  product(
    "Property Assist AI",
    "property-assist",
    "AI real estate listings, leads, and deal management.",
    "Listings, leads, and deal flow.",
  ),
];

export const productNavGroups: ProductNavGroup[] = [
  {
    heading: "Business Functions AI suite",
    items: businessFunctionProducts,
  },
  {
    heading: "Industry AI suite",
    items: industryProducts,
  },
];

export const allProducts: ProductLink[] = [
  ...businessFunctionProducts,
  ...industryProducts,
];

export function getProductBySlug(slug: string): ProductLink | undefined {
  return allProducts.find((item) => item.slug === slug);
}
