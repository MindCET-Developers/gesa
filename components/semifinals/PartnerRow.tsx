import type { RegionalSemifinalEntry } from "@/lib/content/types";
import { FlagCluster } from "./FlagCluster";
import { PartnerLogo } from "./PartnerLogo";

export function PartnerRow({
  entry,
  index,
}: {
  entry: RegionalSemifinalEntry;
  index: number;
}) {
  const shownNames = entry.countries.slice(0, 5).map((country) => country.name);

  return (
    <article
      style={{ animationDelay: `${index * 70}ms` }}
      className="grid animate-fade-up grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-line py-4 first:border-t-0 last:border-b max-[520px]:grid-cols-[auto_1fr] max-[520px]:gap-y-3"
    >
      <FlagCluster countries={entry.countries} />
      <p className="min-w-0 text-sm leading-relaxed">
        <span className="font-bold text-navy">{shownNames.join(" · ")}</span>
        <span className="mx-1.5 text-muted">—</span>
        <span className="text-muted">{entry.partner}</span>
      </p>
      <div className="max-[520px]:col-start-2 max-[520px]:row-start-2">
        <PartnerLogo partner={entry.partner} logo={entry.logo} />
      </div>
    </article>
  );
}
