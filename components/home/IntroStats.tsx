import type { HomeContent } from "@/lib/content/types";

export function IntroStats({ home }: { home: HomeContent }) {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          The world&apos;s EdTech stage
        </span>
        <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl md:text-[2.75rem]">
          {home.introTitle}
        </h2>
      </div>

      <dl className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {home.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-line bg-surface px-6 py-10 text-center transition-transform hover:-translate-y-1"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block bg-gradient-to-br from-brand to-sky bg-clip-text font-display text-5xl font-extrabold text-transparent md:text-6xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm font-semibold uppercase tracking-wider text-muted">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
