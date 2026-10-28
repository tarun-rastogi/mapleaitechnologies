import type { Metadata } from "next";
import Link from "next/link";

import { productNavGroups } from "@/content/products";

export const metadata: Metadata = {
  title: "Products | Maple AI Technologies",
  description:
    "Business Functions AI suite and Industry AI suite — Sales Genie, Brand Buddy, Finance Assist AI, and more from Maple AI Technologies.",
};

export default function ProductsPage() {
  return (
    <div className="relative overflow-x-clip bg-[#F8FAFC]">
      <section className="mx-auto max-w-[1280px] px-4 pb-16 pt-16 sm:px-6 md:pt-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
          Products
        </p>
        <h1
          className="mt-4 max-w-[720px] font-bold text-[#0F172A]"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="block text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[46px]">
            AI agents and domain software, ready to deploy
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-[14px] leading-[26px] text-[#475569] sm:text-[15px] sm:leading-[28px]">
          Maple AI Technologies ships two product lines — a Business Functions AI suite for
          cross-industry operations and an Industry AI suite for vertical-specific workflows.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {productNavGroups.map((group) => (
            <div key={group.heading}>
              <h2 className="text-[20px] font-bold text-[#0F172A] sm:text-[22px]">
                {group.heading}
              </h2>
              <ul className="mt-6 grid gap-3">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={item.href}
                      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#4361EE]/40 hover:shadow-md"
                    >
                      <span className="text-[17px] font-semibold text-[#1C2340]">
                        {item.label}
                      </span>
                      <p className="mt-1.5 text-[14px] leading-[22px] text-[#475569]">
                        {item.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
