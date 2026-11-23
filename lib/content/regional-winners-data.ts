/** Placement fields identify membership only; no ranking leaves this adapter. */
export const WINNER_FIELDS = ["fld1Z8I5xeFrt7kCm", "fld8oGo5xYMyl664R", "fld08DEsB7jVN6saN"] as const;
export const SEMIFINAL_NAME = "fldp0VsrprsjrJbLS";
export const STARTUP_NAME = "fldRs9KvsdXdDww1g";
export const STARTUP_LOGO = "fld7pNh9VXfDtafH4";
/** Free-text country on the startup record (not the semifinal region). */
export const STARTUP_COUNTRY = "fldYcw8QSJvMvLWje";

type RecordData = { id: string; fields: Record<string, unknown> };
export type RegionalWinner = { id: string; name: string; logo?: string; country?: string };
export type RegionalWinners = { id: string; name: string; winners: RegionalWinner[] };

export function winnerIds(record: RecordData): string[] {
  return [...new Set(WINNER_FIELDS.flatMap((field) => {
    const value = record.fields[field];
    return Array.isArray(value) ? value.filter((id): id is string =>
      typeof id === "string" && /^rec[A-Za-z0-9]{14}$/.test(id)) : [];
  }))];
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Display form: "USA - Tennessee" -> "USA", "United Kingdom (UK)" -> "United Kingdom". */
export function countryLabel(value: unknown): string | undefined {
  const label = text(value).replace(/\s*\([^)]*\)\s*/g, " ").split(/\s+-\s+/)[0].replace(/\s+/g, " ").trim();
  return label || undefined;
}

function logoUrl(value: unknown): string | undefined {
  if (!Array.isArray(value)) return undefined;
  for (const attachment of value) {
    if (!attachment || typeof attachment !== "object") continue;
    const url = attachment.thumbnails?.large?.url ?? attachment.url;
    if (typeof url !== "string") continue;
    try {
      const parsed = new URL(url);
      if (parsed.protocol === "https:" && parsed.hostname.endsWith(".airtableusercontent.com")) return url;
    } catch { /* Invalid attachments use the initials fallback. */ }
  }
}

export function assembleRegionalWinners(semifinals: RecordData[], startups: RecordData[]): RegionalWinners[] {
  const byId = new Map(startups.map((record) => [record.id, record]));
  return semifinals.flatMap((semifinal) => {
    const name = text(semifinal.fields[SEMIFINAL_NAME]);
    if (!name) return [];
    const winners = winnerIds(semifinal).flatMap((id) => {
      const record = byId.get(id);
      const name = text(record?.fields[STARTUP_NAME]);
      return record && name ? [{ id, name, logo: logoUrl(record.fields[STARTUP_LOGO]), country: countryLabel(record.fields[STARTUP_COUNTRY]) }] : [];
    }).sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
    return winners.length ? [{ id: semifinal.id, name, winners }] : [];
  }).sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}
