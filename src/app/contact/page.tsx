import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact Maple AI Technologies | Start Your Digital Transformation",
  description:
    "Talk to Maple AI Technologies about your AI, web, and product engineering goals. Get a tailored roadmap and proposal for your initiative.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-x-clip">
      <section className="mx-auto maple-content-width px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="attention-tile rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1447E6] sm:text-[12px]">
              Contact
            </p>
            <h1
              className="mt-4 max-w-[720px] font-bold text-[#0F172A]"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="block text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[46px]">
                Start your next transformation initiative
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-[14px] leading-[26px] text-[#475569] sm:text-[15px] sm:leading-[28px] md:text-[16px]">
              Share your goals, stack, and timeline. We will return with a practical
              roadmap, team shape, and delivery strategy.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#62748E] sm:text-[12px]">
                  Response Time
                </p>
                <p className="mt-2 text-[13px] font-semibold text-[#0F172A] sm:text-[14px]">
                  Within 24 business hours
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#62748E] sm:text-[12px]">
                  Typical Engagement
                </p>
                <p className="mt-2 text-[13px] font-semibold text-[#0F172A] sm:text-[14px]">
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
    </div>
  );
}
