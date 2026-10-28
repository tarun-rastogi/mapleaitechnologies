import {
  allProducts,
  businessFunctionProducts,
  industryProducts,
  type ProductLink,
} from "@/content/products";

export type WorkShowcaseProduct = {
  id: string;
  href: string;
  align: "left" | "right";
  imageAlt: string;
  backgroundImage: string;
  foregroundImage: string;
  /** Suite label shown as the meta eyebrow */
  suite: string;
  /** Product display name */
  name: string;
  /** Short product description used as the card headline */
  title: string;
  /** Optional supporting line under the headline (no Outcome pattern) */
  blurb?: string;
};

export const workShowcaseHeadlines = [
  "Finding designers is easy.",
  "Finding product thinkers for complex software is not.",
  "We turn dense SaaS and AI into products users adopt and businesses grow from.",
] as const;

type ShowcaseVisual = {
  backgroundImage: string;
  foregroundImage: string;
};

/** Existing showcase visuals — keep assets as-is; map by product domain. */
const showcaseVisuals = {
  fils: {
    backgroundImage: "/images/homepage/work-showcase/fils-background.svg",
    foregroundImage: "/images/homepage/work-showcase/fils-foreground.webp",
  },
  elkra: {
    backgroundImage: "/images/homepage/work-showcase/elkra-background.svg",
    foregroundImage: "/images/homepage/work-showcase/elkra-foreground.webp",
  },
  rlcore: {
    backgroundImage: "/images/homepage/work-showcase/rlcore-background.svg",
    foregroundImage: "/images/homepage/work-showcase/rlcore-foreground.webp",
  },
  honeybricks: {
    backgroundImage: "/images/homepage/work-showcase/honeybricks-background.svg",
    foregroundImage: "/images/homepage/work-showcase/honeybricks-foreground.webp",
  },
  dizzion: {
    backgroundImage: "/images/homepage/work-showcase/dizzion-background.svg",
    foregroundImage: "/images/homepage/work-showcase/dizzion-foreground.webp",
  },
  finwize: {
    backgroundImage: "/images/homepage/work-showcase/finwize-background.svg",
    foregroundImage: "/images/homepage/work-showcase/finwize-foreground.webp",
  },
  mashvisor: {
    backgroundImage: "/images/homepage/work-showcase/mashvisor-background.svg",
    foregroundImage: "/images/homepage/work-showcase/mashvisor-foreground.webp",
  },
} as const satisfies Record<string, ShowcaseVisual>;

/**
 * Domain-aligned visual mapping for the 8 products.
 * Seven unique image sets are used once; Lex Assist reuses the Fils set.
 */
const productVisualBySlug: Record<string, ShowcaseVisual> = {
  "sales-genie": showcaseVisuals.fils,
  "brand-buddy": showcaseVisuals.dizzion,
  "hr-hero": showcaseVisuals.rlcore,
  "customer-connect": showcaseVisuals.mashvisor,
  "finance-assist": showcaseVisuals.finwize,
  "medi-assist": showcaseVisuals.elkra,
  "lex-assist": showcaseVisuals.fils,
  "property-assist": showcaseVisuals.honeybricks,
};

function suiteForProduct(product: ProductLink): string {
  if (businessFunctionProducts.some((item) => item.slug === product.slug)) {
    return "Business Functions AI suite";
  }
  if (industryProducts.some((item) => item.slug === product.slug)) {
    return "Industry AI suite";
  }
  return "AI products";
}

function toShowcaseProduct(
  product: ProductLink,
  index: number,
): WorkShowcaseProduct {
  const visual = productVisualBySlug[product.slug] ?? showcaseVisuals.fils;

  return {
    id: product.slug,
    href: product.href,
    align: index % 2 === 0 ? "left" : "right",
    imageAlt: `${product.label} product preview`,
    backgroundImage: visual.backgroundImage,
    foregroundImage: visual.foregroundImage,
    suite: suiteForProduct(product),
    name: product.label,
    title: product.description,
    blurb: product.blurb,
  };
}

/** Homepage showcase after the night-sky section — one card per nav product. */
export const workShowcaseProducts: WorkShowcaseProduct[] =
  allProducts.map(toShowcaseProduct);
