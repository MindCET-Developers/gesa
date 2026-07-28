// lib/content/semifinals-airtable.ts
//
// Runtime (live) source for the Regional Semifinals — fetches the GESAwards Airtable base
// on the server and transforms it into RegionalSemifinalEntry[], so Airtable edits appear
// on the site without re-running scripts, committing, or deploying.
//
// Hybrid model (see [[semifinals-refresh-pipeline]]):
// - DATA (semifinal names, linked partners, merged countries, dates) is pulled LIVE here.
// - LOGOS are pulled LIVE from the Partners table's "Logo" attachment field. Airtable
//   attachment URLs are signed and expire within hours, but since this data is refetched
//   every SEMIFINALS_REVALIDATE_SECONDS the URL baked into a page is never stale by more
//   than that window. Falls back to the committed public/brand/partners/ manifest (matched
//   by partner name) for partners with no Logo attachment, then to an initials badge.
//
// Requires AIRTABLE_API_KEY (PAT, data.records:read on base appyTu8uOPQUVXD4x) in the
// server environment — set it in Vercel Project → Settings → Environment Variables, and in
// .env.local for local dev. If it's missing or Airtable errors, callers fall back to the
// committed snapshot in lib/content/regionalSemifinals.ts.
//
// Overrides below are the source of truth for the live path and mirror the ones in
// scripts/pull-regional-semifinals.mjs (which still generates the committed fallback).

import logoManifest from "../../public/brand/partners/manifest.json";
import type { ContinentKey, RegionalSemifinalEntry } from "./types";

const BASE_ID = "appyTu8uOPQUVXD4x";
const PARTNERS_TABLE = "tblAfv3rYs6GyXQEF";
const COUNTRIES_TABLE = "tbl7wFk8g0AbGx7ee";
const SEMIFINALS_TABLE = "tblAJHZRBQyfPOySc";

const F_PARTNER_NAME = "fldGtodmZwz4tEIL1";
const F_PARTNER_LOGO = "fldjzYaS859kIMA5q";
const F_PARTNER_COUNTRIES = "fldPhyaaNW13gcztm";
const F_COUNTRY_NAME = "fld2EoxYQJ14Sb1Y4";
const F_COUNTRY_AREA = "fld1A4UPsFR1Bji3N";
const F_SEMIFINAL_NAME = "fldp0VsrprsjrJbLS";
const F_SEMIFINAL_PARTNERS = "fldYjUfAY9BclTPuD";
const F_SEMIFINAL_DATE = "fldQBCREpbQqI6KXD";

// Revalidate the cached Airtable data at most this often (seconds). An Airtable automation
// can hit /api/revalidate-semifinals to refresh instantly instead of waiting this out.
export const SEMIFINALS_REVALIDATE_SECONDS = 60;
export const SEMIFINALS_CACHE_TAG = "semifinals";

const PARTNER_NAME_OVERRIDES: Record<string, string> = {
  "SEK Lab/ ?": "SEK Lab",
};
const COUNTRY_NAME_OVERRIDES: Record<string, string> = {
  "Eswatini (formerly Swaziland)": "Eswatini",
  "Swaziland (renamed to Eswatini)": "Eswatini",
};
// Continent overrides take precedence over Airtable's mis-tagged "Geographic Area".
const CONTINENT_OVERRIDES: Record<string, ContinentKey> = {
  Taiwan: "asia",
};

const KNOWN_CONTINENTS = new Set<ContinentKey>([
  "europe", "asia", "middle-east", "north-america", "latin-america", "africa", "rest-of-world",
]);

// Priority order for picking a semifinal's primary continent (tie-break) and sorting.
const CONTINENT_ORDER: ContinentKey[] = [
  "north-america", "europe", "middle-east", "asia", "latin-america", "africa", "rest-of-world",
];

// ISO 3166-1 alpha-2 (lowercase) per canonical country name — flag-icons keys `fi-<code>`.
const COUNTRY_TO_ISO2: Record<string, string> = {
  "United States": "us", Canada: "ca", Spain: "es", Portugal: "pt", France: "fr",
  Netherlands: "nl", Italy: "it", Denmark: "dk", Sweden: "se", Estonia: "ee",
  Finland: "fi", Iceland: "is", Latvia: "lv", Lithuania: "lt", Norway: "no",
  "United Kingdom (UK)": "gb", Austria: "at", Germany: "de", Albania: "al",
  Belgium: "be", Croatia: "hr", Cyprus: "cy", "Czech Republic": "cz",
  Greece: "gr", Hungary: "hu", Malta: "mt", Moldova: "md", Monaco: "mc",
  Serbia: "rs", Slovenia: "si", Switzerland: "ch", Ukraine: "ua",
  Andorra: "ad", Belarus: "by", "Bosnia and Herzegovina": "ba", Bulgaria: "bg",
  Kosovo: "xk", Liechtenstein: "li", Luxembourg: "lu",
  "Macedonia (FYROM)": "mk", Montenegro: "me", Poland: "pl", Romania: "ro",
  "San Marino": "sm", Slovakia: "sk", Ireland: "ie", Japan: "jp",
  "South Korea": "kr", "North Korea": "kp", India: "in", China: "cn",
  "Hong Kong": "hk", Macau: "mo", "Sri Lanka": "lk", Maldives: "mv",
  Bhutan: "bt", Afghanistan: "af", Israel: "il", Iran: "ir", Yemen: "ye",
  Oman: "om", Qatar: "qa", Bahrain: "bh", Syria: "sy", Palestine: "ps",
  Singapore: "sg", Brunei: "bn", Cambodia: "kh", Indonesia: "id", Laos: "la",
  Malaysia: "my", Philippines: "ph", Thailand: "th", "East Timor": "tl",
  Vietnam: "vn", "Myanmar (formerly Burma)": "mm", Taiwan: "tw",
  Bangladesh: "bd", Nepal: "np", Pakistan: "pk", Australia: "au",
  "New Zealand": "nz", Fiji: "fj", "Papua New Guinea": "pg", Iraq: "iq",
  Jordan: "jo", Kuwait: "kw", Lebanon: "lb", "Saudi Arabia": "sa", Turkey: "tr",
  "United Arab Emirates (UAE)": "ae", Brazil: "br", Argentina: "ar", Peru: "pe",
  Chile: "cl", Colombia: "co", Uruguay: "uy", Paraguay: "py", Bolivia: "bo",
  Ecuador: "ec", Guyana: "gy", Suriname: "sr", Venezuela: "ve", Belize: "bz",
  "Costa Rica": "cr", "El Salvador": "sv", Guatemala: "gt", Honduras: "hn",
  Mexico: "mx", Nicaragua: "ni", Panama: "pa", Cuba: "cu",
  "Dominican Republic": "do", Haiti: "ht", Jamaica: "jm", Bahamas: "bs",
  Barbados: "bb", "Trinidad and Tobago": "tt", Nigeria: "ng", Ethiopia: "et",
  Egypt: "eg", "Democratic Republic of the Congo": "cd",
  "Republic of the Congo": "cg", Tanzania: "tz", "South Africa": "za",
  Kenya: "ke", Sudan: "sd", Uganda: "ug", Algeria: "dz", Morocco: "ma",
  Angola: "ao", Ghana: "gh", Mozambique: "mz", Madagascar: "mg",
  "Ivory Coast": "ci", Cameroon: "cm", Niger: "ne", Mali: "ml",
  "Burkina Faso": "bf", Malawi: "mw", Zambia: "zm", Chad: "td", Somalia: "so",
  Senegal: "sn", Zimbabwe: "zw", Guinea: "gn", Benin: "bj", Rwanda: "rw",
  Burundi: "bi", Tunisia: "tn", "South Sudan": "ss", Togo: "tg",
  "Sierra Leone": "sl", Libya: "ly", Liberia: "lr",
  "Central African Republic (CAR)": "cf", Mauritania: "mr", Eritrea: "er",
  Namibia: "na", Gambia: "gm", Gabon: "ga", Botswana: "bw", Lesotho: "ls",
  "Guinea-Bissau": "gw", "Equatorial Guinea": "gq", Mauritius: "mu",
  Eswatini: "sz", Djibouti: "dj", Comoros: "km", "Cape Verde": "cv",
  "Sao Tome and Principe": "st", Seychelles: "sc", Russia: "ru",
  Azerbaijan: "az", Kazakhstan: "kz", Armenia: "am", Kyrgyzstan: "kg",
  Uzbekistan: "uz", Tajikistan: "tj", Turkmenistan: "tm", Mongolia: "mn",
  Georgia: "ge",
};

const manifest = logoManifest as Record<string, string>;

// U+00A0 (non-breaking space) sneaks into some Airtable names — normalize to plain spaces.
function cleanName(name: string): string {
  return name.replace(/ /g, " ").replace(/\s+/g, " ").trim();
}

function normalizeCountryName(name: string): string {
  return name.startsWith("USA - ") ? "United States" : name;
}

function areaToContinentKey(area: string): string {
  return area
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^rest-of-the-world$/, "rest-of-world");
}

type AirtableRecord = { id: string; fields: Record<string, unknown> };

async function fetchAllRecords(tableId: string, apiKey: string): Promise<AirtableRecord[]> {
  const records: AirtableRecord[] = [];
  let offset: string | undefined;
  do {
    const url = new URL(`https://api.airtable.com/v0/${BASE_ID}/${tableId}`);
    url.searchParams.set("returnFieldsByFieldId", "true");
    url.searchParams.set("pageSize", "100");
    if (offset) url.searchParams.set("offset", offset);

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: SEMIFINALS_REVALIDATE_SECONDS, tags: [SEMIFINALS_CACHE_TAG] },
    });
    if (!res.ok) {
      throw new Error(`Airtable ${tableId} request failed: HTTP ${res.status}`);
    }
    const page = (await res.json()) as { records: AirtableRecord[]; offset?: string };
    records.push(...page.records);
    offset = page.offset;
  } while (offset);
  return records;
}

/**
 * Fetch + transform the live Regional Semifinals from Airtable. Returns null when the API
 * key is missing or any request fails, so the caller can fall back to the committed snapshot.
 */
export async function fetchRegionalSemifinals(): Promise<RegionalSemifinalEntry[] | null> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!apiKey) return null;

  let countryRecords: AirtableRecord[];
  let partnerRecords: AirtableRecord[];
  let semifinalRecords: AirtableRecord[];
  try {
    [countryRecords, partnerRecords, semifinalRecords] = await Promise.all([
      fetchAllRecords(COUNTRIES_TABLE, apiKey),
      fetchAllRecords(PARTNERS_TABLE, apiKey),
      fetchAllRecords(SEMIFINALS_TABLE, apiKey),
    ]);
  } catch {
    return null;
  }

  // Country record id -> { name, area }.
  const countryById = new Map<string, { name: string; area: string | null }>();
  for (const rec of countryRecords) {
    const name = rec.fields[F_COUNTRY_NAME] as string | undefined;
    if (!name) continue;
    countryById.set(rec.id, {
      name: cleanName(name),
      area: (rec.fields[F_COUNTRY_AREA] as string | undefined) ?? null,
    });
  }

  // Canonical country name -> primary continent (override > Airtable area > rest-of-world),
  // precomputed once so the per-semifinal loop stays linear.
  const continentByCanonical = new Map<string, ContinentKey>();
  for (const { name, area } of countryById.values()) {
    const canonical = normalizeCountryName(COUNTRY_NAME_OVERRIDES[name] ?? name);
    if (continentByCanonical.has(canonical)) continue;
    let continent: ContinentKey = "rest-of-world";
    if (CONTINENT_OVERRIDES[canonical]) {
      continent = CONTINENT_OVERRIDES[canonical];
    } else if (area) {
      const key = areaToContinentKey(area);
      if (KNOWN_CONTINENTS.has(key as ContinentKey)) continent = key as ContinentKey;
    }
    continentByCanonical.set(canonical, continent);
  }

  const partnerById = new Map(partnerRecords.map((rec) => [rec.id, rec]));

  const entries: RegionalSemifinalEntry[] = [];

  for (const rec of semifinalRecords) {
    const rawName = rec.fields[F_SEMIFINAL_NAME] as string | undefined;
    const name = rawName ? cleanName(rawName) : "";
    if (!name) continue;

    const linkedPartnerIds = (rec.fields[F_SEMIFINAL_PARTNERS] as string[] | undefined) ?? [];
    if (linkedPartnerIds.length === 0) continue;

    const partners: { name: string; logo?: string }[] = [];
    const countrySeen = new Set<string>();
    const countryNames: string[] = [];

    for (const partnerId of linkedPartnerIds) {
      const partnerRec = partnerById.get(partnerId);
      if (!partnerRec) continue;

      const rawPartnerName = cleanName((partnerRec.fields[F_PARTNER_NAME] as string | undefined) ?? "");
      if (!rawPartnerName) continue;
      const partnerName = PARTNER_NAME_OVERRIDES[rawPartnerName] ?? rawPartnerName;
      const attachments = partnerRec.fields[F_PARTNER_LOGO] as
        | { url: string }[]
        | undefined;
      const logo = attachments?.[0]?.url ?? manifest[partnerName];
      partners.push({ name: partnerName, logo });

      const linkedCountries = (partnerRec.fields[F_PARTNER_COUNTRIES] as string[] | undefined) ?? [];
      for (const countryId of linkedCountries) {
        const country = countryById.get(countryId);
        if (!country) continue;
        const countryName = COUNTRY_NAME_OVERRIDES[country.name] ?? country.name;
        const canonical = normalizeCountryName(countryName);
        if (countrySeen.has(canonical)) continue;
        countrySeen.add(canonical);
        countryNames.push(canonical);
      }
    }

    if (partners.length === 0) continue;

    // Tally countries per continent to pick a single primary continent.
    const perContinent = new Map<ContinentKey, number>();
    for (const canonical of countryNames) {
      const continent = continentByCanonical.get(canonical) ?? "rest-of-world";
      perContinent.set(continent, (perContinent.get(continent) ?? 0) + 1);
    }
    let continent: ContinentKey = "rest-of-world";
    let best = -1;
    for (const [key, count] of perContinent) {
      if (count > best || (count === best && CONTINENT_ORDER.indexOf(key) < CONTINENT_ORDER.indexOf(continent))) {
        best = count;
        continent = key;
      }
    }

    const countries = countryNames.map((countryName) => ({
      name: countryName,
      code: COUNTRY_TO_ISO2[countryName] ?? "",
    }));

    const dateRaw = rec.fields[F_SEMIFINAL_DATE];
    const date = typeof dateRaw === "string" && dateRaw.trim() ? dateRaw.trim() : undefined;

    entries.push({ name, partners, continent, countries, ...(date ? { date } : {}) });
  }

  // Stable ordering: primary continent, then semifinal name.
  entries.sort((a, b) => {
    const c = CONTINENT_ORDER.indexOf(a.continent) - CONTINENT_ORDER.indexOf(b.continent);
    if (c !== 0) return c;
    return a.name.localeCompare(b.name);
  });

  return entries;
}
