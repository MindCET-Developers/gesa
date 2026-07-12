import { SectionHeading } from "@/components/ui/section-heading";
import type { PrizeCategory } from "@/lib/content/types";

// Static class maps so Tailwind can see every utility at build time.
const accent: Record<PrizeCategory["color"], { bar: string; glow: string; chip: string }> = {
  brand: { bar: "bg-brand", glow: "from-brand/10", chip: "bg-brand/10 text-brand-700" },
  sky: { bar: "bg-sky", glow: "from-sky/10", chip: "bg-sky/10 text-[#17658f]" },
  red: { bar: "bg-accent-red", glow: "from-accent-red/10", chip: "bg-accent-red/10 text-[#b51219]" },
  yellow: { bar: "bg-accent-yellow", glow: "from-accent-yellow/20", chip: "bg-accent-yellow/20 text-[#765e00]" },
};

export function PrizeCategories({ categories }: { categories: PrizeCategory[] }) {
  return (
    <section className="container-page py-20 md:py-28">
      <SectionHeading
        kicker="Awards"
        title="Categories that recognise the best in EdTech"
        intro="Startups compete for international recognition across four award categories."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const a = accent[cat.color];
          return (
            <article
              key={cat.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${a.glow} to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <span className={`h-1.5 w-12 rounded-full ${a.bar}`} />
              <h3 className="mt-5 font-display text-xl font-bold text-navy">
                {cat.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {cat.description}
              </p>
              <span
                className={`mt-6 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${a.chip}`}
              >
                Award track
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
