import Link from "next/link";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export function PageShell({ eyebrow, title, description, bullets }: PageShellProps) {
  return (
    <section>
      <div className="mx-auto maple-content-width px-4 py-16 sm:px-6 sm:py-20">
        <p className="maple-section-eyebrow">{eyebrow}</p>
        <h1 className="maple-section-heading mt-4 max-w-[720px]">
          <span className="block text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[46px]">
            {title}
          </span>
        </h1>
        <p className="maple-section-body mt-6 max-w-3xl">{description}</p>
        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 md:gap-5">
          {bullets.map((bullet) => (
            <article
              key={bullet}
              className="attention-tile interactive-lift sky-surface flex h-full rounded-2xl border border-slate-200 p-6 sm:p-7"
            >
              <p className="text-[13px] leading-[24px] text-[#475569] sm:text-[14px] sm:leading-[26px]">
                {bullet}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/contact"
            className="maple-outline-btn inline-flex rounded-full px-5 py-2.5 text-[13px] font-semibold leading-5 sm:px-6 sm:py-3 sm:text-[14px]"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </section>
  );
}
