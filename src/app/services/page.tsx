import type { Metadata } from "next";
import Link from "next/link";
import { dimension1Groups } from "@/content/service-taxonomy";

export const metadata: Metadata = {
  title: "Services | Maple AI Technologies",
  description:
    "Mobile and web development, custom software, UI/UX, cross-platform delivery, managed IT, and staff augmentation—built for enterprise outcomes.",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_18%_12%,rgba(148,163,184,0.18),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.1),transparent_40%),linear-gradient(to_bottom,#fbfdff_0%,#f8fafc_65%)]" />

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:pt-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          Services
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Engineering, design, and operations for the software you already envision
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          When you know you need an app, a site, internal tools, or dedicated talent,
          this is our core delivery surface—paired elsewhere on the site with{" "}
          <Link href="/#ai-products" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
            AI products
          </Link>{" "}
          and{" "}
          <Link href="/#outcome-led" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
            outcome-led engagements
          </Link>{" "}
          when the right technology is still an open question.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12">
          {dimension1Groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl font-bold text-slate-950">{group.title}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-950">
            Need outcomes first, product definition second?
          </h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            If your north star is a KPI—not a spec—we often begin with an outcome-led
            discovery. Explore how we frame that work on the homepage, then bring us a
            goal in a discovery call.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/#outcome-led"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              See outcome-led engagements
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
