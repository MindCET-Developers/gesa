import "server-only";
import { fetchAllRecords, type AirtableRecord } from "./airtable-read";
import { assembleRegionalWinners, winnerIds, WINNER_FIELDS, SEMIFINAL_NAME, STARTUP_NAME, STARTUP_LOGO } from "./regional-winners-data";

export async function getRegionalWinners() {
  const key = process.env.AIRTABLE_API_KEY;
  if (!key) return [];
  try {
    const semifinals = await fetchAllRecords("tblAJHZRBQyfPOySc", key,
      [SEMIFINAL_NAME, ...WINNER_FIELDS], { view: "viwAO4gA7Bf1RjJCT" });
    const ids = [...new Set(semifinals.flatMap(winnerIds))].sort();
    const startups: AirtableRecord[] = [];
    // Bounded, sequential batches avoid per-company requests and rate-limit bursts.
    for (let i = 0; i < ids.length; i += 100) {
      startups.push(...await fetchAllRecords("tblvXv2QLUDoMBs2Y", key,
        [STARTUP_NAME, STARTUP_LOGO], {
          filterByFormula: `OR(${ids.slice(i, i + 100).map((id) => `RECORD_ID()='${id}'`).join(",")})`,
        }));
    }
    return assembleRegionalWinners(semifinals, startups);
  } catch {
    // No invented or committed winner snapshot. Keep the rest of the homepage usable.
    console.warn("Regional winners are temporarily unavailable from Airtable.");
    return [];
  }
}
