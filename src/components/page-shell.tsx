import Link from "next/link";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export function PageShell({ eyebrow, title, description, bullets }: PageShellProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        {description}
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {bullets.map((bullet) => (
          <article
            key={bullet}
            className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm"
          >
            {bullet}
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/contact"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Discuss Your Requirements
        </Link>
      </div>
    </section>
  );
}
