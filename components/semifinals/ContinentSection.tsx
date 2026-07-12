import type { RegionalSemifinalEntry } from "@/lib/content/types";
import type { ContinentMeta } from "./continents";
import { PartnerRow } from "./PartnerRow";

export function ContinentSection({
  meta,
  entries,
}: {
  meta: ContinentMeta;
  entries: RegionalSemifinalEntry[];
}) {
  if (entries.length === 0) return null;

  const countryCount = new Set(entries.flatMap((entry) => entry.countries.map((c) => c.name))).size;

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ background: `var(${meta.colorVar})` }}
        />
        <h3 className="font-display text-base font-extrabold text-navy">{meta.label}</h3>
        <span
          className="h-px flex-1"
          style={{ background: `var(${meta.colorVar})`, opacity: 0.35 }}
        />
        <span className="whitespace-nowrap text-xs text-muted">
          {entries.length} partner{entries.length === 1 ? "" : "s"} · {countryCount} countries
        </span>
      </div>
      <div>
        {entries.map((entry, index) => (
          <PartnerRow key={`${entry.partner}-${entry.continent}`} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}
