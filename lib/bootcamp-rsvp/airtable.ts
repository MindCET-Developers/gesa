/**
 * Server-only Airtable access for the GESAwards Bootcamp 2027 registration.
 * Never import from a client component.
 *
 * Everything lives in the GESAwards 2026 base (appyTu8uOPQUVXD4x):
 * - Eligibility is READ from Semifinals (1st/2nd/3rd place) + the "Startup Name"
 *   of the linked 2026 Registration rows, using AIRTABLE_API_KEY (read only).
 * - Registrations are WRITTEN only to the "Bootcamp 2027 RSVP" table, with a
 *   real link to the startup's 2026 Registration record, using
 *   BOOTCAMP_RSVP_AIRTABLE_TOKEN. The code never writes to any other table.
 */

const API = "https://api.airtable.com/v0";

// --- Historical base (read only) -------------------------------------------
const GESA_BASE = "appyTu8uOPQUVXD4x";
const SEMIFINALS = "tblAJHZRBQyfPOySc";
const REGISTRATION = "tblvXv2QLUDoMBs2Y";
const S_NAME = "fldp0VsrprsjrJbLS";
const PLACE_FIELDS = [
  ["1st place", "fld1Z8I5xeFrt7kCm"],
  ["2nd place", "fld8oGo5xYMyl664R"],
  ["3rd place", "fld08DEsB7jVN6saN"],
] as const; // People's Choice is deliberately NOT eligible.
const R_STARTUP_NAME = "fldRs9KvsdXdDww1g";

// --- Bootcamp 2027 RSVP table (same base, write) ----------------------------
const RSVP_TABLE = "tblaJJblfzKUyTxTN";
const F = {
  startupName: "fldkpVylHuWIunET9",
  startupLink: "fldzx1KpEcAltpiBE",
  recordId: "fldVs6fIkJcQSIS1I",
  semifinal: "fldEelWrD5L8z89BQ",
  place: "fld3YbaravbSu4uT1",
  p1Name: "fldsNe5tfJZjFSQhD",
  p1Role: "fldCQUTaIcw5i0Nt3",
  p1Email: "fldDdjoAatHmKDchh",
  p1Phone: "fldLi8rWaYOI6oIHy",
  p2Name: "fldRnxBNSOaxcShps",
  p2Role: "fldN8RUPcu2Htf3fO",
  p2Email: "fldi4w6LLf8m01KgI",
  p2Phone: "fldP8t0AeLSMGNmWL",
  firstSubmitted: "fld9qRfLM94fxf8TY",
  lastUpdated: "fldlVVDANZoM4VWWx",
  updateCount: "fldCACrnGFzJSleko",
} as const;

export interface EligibleStartup {
  id: string; // record ID in 2026 Registration
  name: string;
  semifinal: string;
  place: string;
}

export interface Participant {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export const RECORD_ID_RE = /^rec[A-Za-z0-9]{14}$/;

export class RegistrationConfigError extends Error {}

type Rec = { id: string; fields: Record<string, unknown> };

async function call(base: string, key: string | undefined, path: string, init: RequestInit = {}) {
  if (!key) throw new RegistrationConfigError(`Missing Airtable key for base ${base}`);
  const res = await fetch(`${API}/${base}/${path}`, {
    ...init,
    cache: "no-store",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Airtable ${res.status} ${init.method ?? "GET"} ${base}/${path}: ${await res.text()}`);
  }
  return res.json();
}

const readGesa = (path: string) => call(GESA_BASE, process.env.AIRTABLE_API_KEY, path);
const rsvp = (path: string, init?: RequestInit) =>
  call(GESA_BASE, process.env.BOOTCAMP_RSVP_AIRTABLE_TOKEN, path, init);

async function listAll(fetchPage: (offset?: string) => Promise<{ records: Rec[]; offset?: string }>) {
  const out: Rec[] = [];
  let offset: string | undefined;
  do {
    const page = await fetchPage(offset);
    out.push(...page.records);
    offset = page.offset;
  } while (offset);
  return out;
}

/**
 * The live list of startups placed 1st–3rd in any regional semifinal. Read on
 * every request so newly recorded winners appear immediately.
 */
export async function getEligibleStartups(): Promise<EligibleStartup[]> {
  const fieldQs = [S_NAME, ...PLACE_FIELDS.map(([, f]) => f)]
    .map((f) => `fields[]=${f}`)
    .join("&");
  const semis = await listAll((offset) =>
    readGesa(`${SEMIFINALS}?${fieldQs}&returnFieldsByFieldId=true${offset ? `&offset=${offset}` : ""}`)
  );

  // A startup that placed in two semifinals is listed once, best place first.
  const byId = new Map<string, { semifinal: string; place: string }>();
  for (const [place, field] of PLACE_FIELDS) {
    for (const s of semis) {
      for (const id of (s.fields[field] as string[] | undefined) ?? []) {
        if (!byId.has(id)) byId.set(id, { semifinal: String(s.fields[S_NAME] ?? "").trim(), place });
      }
    }
  }
  if (!byId.size) return [];

  // Fetch ONLY the startup name for those records (100 IDs per formula).
  const ids = [...byId.keys()];
  const names = new Map<string, string>();
  for (let i = 0; i < ids.length; i += 100) {
    const formula = encodeURIComponent(
      `OR(${ids.slice(i, i + 100).map((id) => `RECORD_ID()='${id}'`).join(",")})`
    );
    const recs = await listAll((offset) =>
      readGesa(
        `${REGISTRATION}?filterByFormula=${formula}&fields[]=${R_STARTUP_NAME}&returnFieldsByFieldId=true${offset ? `&offset=${offset}` : ""}`
      )
    );
    for (const r of recs) names.set(r.id, String(r.fields[R_STARTUP_NAME] ?? "").trim());
  }

  return ids
    .filter((id) => names.get(id))
    .map((id) => ({ id, name: names.get(id)!, ...byId.get(id)! }))
    .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}

async function findRegistration(startupId: string): Promise<Rec[]> {
  // RECORD_ID_RE was checked by the caller, so the value cannot inject formula syntax.
  const formula = encodeURIComponent(`{${F.recordId}}='${startupId}'`);
  const data = await rsvp(`${RSVP_TABLE}?filterByFormula=${formula}&returnFieldsByFieldId=true`);
  return data.records as Rec[];
}

export type SaveResult =
  | { kind: "created" }
  | { kind: "updated" }
  | { kind: "duplicate" }; // already registered, and the P1 email does not match

/**
 * One registration per startup.
 * - None yet: create it.
 * - Exists and Participant 1 email matches the stored one: update in place (correction).
 * - Exists with a different Participant 1 email: refuse. The team corrects it in Airtable.
 */
export async function saveRegistration(
  startup: EligibleStartup,
  p1: Participant,
  p2: Participant | null
): Promise<SaveResult> {
  const now = new Date().toISOString();
  const fields = {
    [F.startupName]: startup.name,
    [F.startupLink]: [startup.id],
    [F.recordId]: startup.id,
    [F.semifinal]: startup.semifinal,
    [F.place]: startup.place,
    [F.p1Name]: p1.name,
    [F.p1Role]: p1.role,
    [F.p1Email]: p1.email,
    [F.p1Phone]: p1.phone,
    [F.p2Name]: p2?.name ?? "",
    [F.p2Role]: p2?.role ?? "",
    [F.p2Email]: p2?.email ?? "",
    [F.p2Phone]: p2?.phone ?? "",
    [F.lastUpdated]: now,
  };

  const existing = await findRegistration(startup.id);
  if (!existing.length) {
    await rsvp(RSVP_TABLE, {
      method: "POST",
      body: JSON.stringify({
        records: [{ fields: { ...fields, [F.firstSubmitted]: now, [F.updateCount]: 0 } }],
      }),
    });
    return { kind: "created" };
  }

  const row = existing[0];
  const storedEmail = String(row.fields[F.p1Email] ?? "").toLowerCase();
  if (storedEmail !== p1.email.toLowerCase()) return { kind: "duplicate" };

  await rsvp(`${RSVP_TABLE}/${row.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      fields: { ...fields, [F.updateCount]: Number(row.fields[F.updateCount] ?? 0) + 1 },
    }),
  });
  return { kind: "updated" };
}
