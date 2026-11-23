import "server-only";

export const SEMIFINALS_REVALIDATE_SECONDS = 300;
export const SEMIFINALS_CACHE_TAG = "semifinals";
export type AirtableRecord = { id: string; fields: Record<string, unknown> };

/** Read only the requested public fields; shared by the schedule and winners. */
export async function fetchAllRecords(
  tableId: string,
  apiKey: string,
  fields: readonly string[],
  query: { view?: string; filterByFormula?: string } = {},
): Promise<AirtableRecord[]> {
  const records: AirtableRecord[] = [];
  let offset: string | undefined;
  do {
    const url = new URL(`https://api.airtable.com/v0/appyTu8uOPQUVXD4x/${tableId}`);
    url.searchParams.set("returnFieldsByFieldId", "true");
    url.searchParams.set("pageSize", "100");
    for (const field of fields) url.searchParams.append("fields[]", field);
    for (const [key, value] of Object.entries(query)) url.searchParams.set(key, value);
    if (offset) url.searchParams.set("offset", offset);
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: SEMIFINALS_REVALIDATE_SECONDS, tags: [SEMIFINALS_CACHE_TAG] },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Airtable read failed: HTTP ${res.status}`);
    const page = (await res.json()) as { records: AirtableRecord[]; offset?: string };
    records.push(...page.records);
    offset = page.offset;
  } while (offset);
  return records;
}
