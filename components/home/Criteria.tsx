import { SectionHeading } from "@/components/ui/section-heading";
import type { HomeContent } from "@/lib/content/types";

export function Criteria({ home }: { home: HomeContent }) {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="Competition criteria"
          title={home.criteriaTitle}
          intro="Every product or service is evaluated by our international panel against five clear standards."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {home.criteria.map((c) => (
            <li
              key={c.index}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all hover:border-brand/40 hover:shadow-[0_18px_40px_-24px_rgba(17,109,255,0.5)]"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl font-extrabold text-brand transition-colors group-hover:text-brand-700"
              >
                {String(c.index).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-semibold leading-snug text-navy">
                {c.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
