import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { allProducts, getProductBySlug, productNavGroups } from "@/content/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product | Maple AI Technologies" };

  return {
    title: `${product.label} | Maple AI Technologies`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const group = productNavGroups.find((entry) =>
    entry.items.some((item) => item.slug === slug),
  );

  return (
    <div className="relative overflow-x-clip bg-[#F8FAFC]">
      <section className="mx-auto max-w-[1280px] px-4 pb-16 pt-16 sm:px-6 md:pt-20">
        <Link
          href="/products"
          className="text-[13px] font-medium text-[#4361EE] transition hover:underline"
        >
          ← All products
        </Link>
        {group ? (
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6]">
            {group.heading}
          </p>
        ) : null}
        <h1
          className="mt-3 font-bold text-[#0F172A]"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="block text-[26px] leading-tight sm:text-[32px] md:text-[40px]">
            {product.label}
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-[15px] leading-[28px] text-[#475569] sm:text-[16px]">
          {product.description}
        </p>
        <p className="mt-4 max-w-3xl text-[14px] leading-[26px] text-[#64748B]">
          Full product page content is coming next. Book a demo to see {product.label} in
          action and discuss rollout for your team.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#155DFC] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#1447E6]"
          >
            Book a demo →
          </Link>
        </div>
      </section>
    </div>
  );
}
