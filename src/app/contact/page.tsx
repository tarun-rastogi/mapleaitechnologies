import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact Makers AI Labs | Start Your Digital Transformation",
  description:
    "Talk to Makers AI Labs about your AI, web, and product engineering goals. Get a tailored roadmap and proposal for your initiative.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Start your next transformation initiative
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Share your goals, stack, and timeline. We will return with a practical
            roadmap, team shape, and delivery strategy.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Response Time
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Within 24 business hours
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Typical Engagement
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                8 to 24+ week product programs
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
