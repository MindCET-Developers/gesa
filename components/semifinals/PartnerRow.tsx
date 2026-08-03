import type { RegionalSemifinalEntry } from "@/lib/content/types";
import { FlagCluster } from "./FlagCluster";
import { PartnerLogo } from "./PartnerLogo";

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function PartnerRow({
  entry,
  index,
}: {
  entry: RegionalSemifinalEntry;
  index: number;
}) {
  return (
    <article
      style={{ animationDelay: `${index * 70}ms` }}
      className="grid animate-fade-up grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-line py-4 first:border-t-0 last:border-b max-[520px]:grid-cols-[auto_1fr] max-[520px]:gap-y-3"
    >
      <FlagCluster countries={entry.countries} />
      <div className="min-w-0 text-sm leading-relaxed">
        <p>
          <span className="font-bold text-navy">{entry.name}</span>
          {entry.date && (
            <>
              <span className="mx-1.5 text-muted">·</span>
              <span className="text-muted">{formatDate(entry.date)}</span>
            </>
          )}
        </p>
        <p className="text-muted">
          {entry.partners.map((partner) => partner.name).join(" · ")}
        </p>
      </div>
      <div className="flex items-center max-[520px]:col-start-2 max-[520px]:row-start-2">
        {entry.partners.map((partner, partnerIndex) => (
          <span
            key={partner.name}
            style={{ marginLeft: partnerIndex === 0 ? 0 : "-0.6rem", zIndex: entry.partners.length - partnerIndex }}
            className="relative"
          >
            <PartnerLogo partner={partner.name} logo={partner.logo} />
          </span>
        ))}
      </div>
    </article>
  );
}
