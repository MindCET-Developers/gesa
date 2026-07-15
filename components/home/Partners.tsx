import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import type { HomeContent, Partner, RegionalSemifinalEntry } from "@/lib/content/types";

function LogoGroup({ title, items }: { title: string; items: Partner[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
        {title}
      </h3>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {items.map((p, i) => {
          const content = p.logo ? (
            <Image
              src={p.logo}
              alt={p.name}
              width={160}
              height={64}
              className="max-h-16 w-auto object-contain"
            />
          ) : (
            p.name
          );
          const className = p.logo
            ? "grid h-16 w-40 place-items-center grayscale transition hover:grayscale-0"
            : "font-display text-xl font-extrabold tracking-tight text-navy/70 transition hover:text-navy";

          return p.url ? (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          ) : (
            <span
              key={i}
              className={className}
            >
              {content}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/** Dedupe semifinal entries into one Partner per organization that has a logo. */
function semifinalPartners(entries: RegionalSemifinalEntry[]): Partner[] {
  const seen = new Map<string, Partner>();
  for (const entry of entries) {
    if (!entry.logo || seen.has(entry.partner)) continue;
    seen.set(entry.partner, {
      name: entry.partner,
      logo: entry.logo,
      type: "worldwide",
    });
  }
  return [...seen.values()];
}

export function Partners({
  home,
  partners,
  semifinals = [],
}: {
  home: HomeContent;
  partners: Partner[];
  semifinals?: RegionalSemifinalEntry[];
}) {
  const regional = semifinalPartners(semifinals);
  const poweredBy = partners.filter(
    (p) => p.type === "powered-by" && !p.name.trim().toLowerCase().startsWith("cet")
  );
  const worldwide = partners.filter((p) => p.type === "worldwide");
  const sponsors = partners.filter((p) => p.type === "prize-sponsor");

  return (
    <section className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl">
          {home.joinTitle}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">{home.joinBody}</p>
        <Link
          href="/terms-and-condition"
          className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand hover:gap-2.5 transition-all"
        >
          Read the competition terms
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-16 space-y-12 border-t border-line pt-14">
        <LogoGroup title="Powered by" items={poweredBy} />
        <LogoGroup title="Worldwide partners" items={worldwide} />
        <LogoGroup title="Regional semifinal partners" items={regional} />
        <LogoGroup title="Prizes offered by our partners" items={sponsors} />
      </div>
    </section>
  );
}
