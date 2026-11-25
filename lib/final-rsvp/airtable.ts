/**
 * Server-only Airtable access for the GESAwards Grand Final 2027 details form.
 * Never import from a client component.
 *
 * Separate from the Bootcamp registration on purpose: some Bootcamp startups are not
 * Grand Finalists, and some Grand Finalists present online and never attend the Bootcamp.
 *
 * Everything lives in the GESAwards 2026 base (appyTu8uOPQUVXD4x):
 * - Eligibility is READ from the GESA Journey milestone "2026 – Global – Finalist"
 *   (its Applications links) + the name/country of those 2026 Registration rows,
 *   using AIRTABLE_API_KEY (read only).
 * - Submissions are WRITTEN only to the "Grand Final 2027" table, using
 *   FINAL_RSVP_AIRTABLE_TOKEN (falls back to BOOTCAMP_RSVP_AIRTABLE_TOKEN, which has the
 *   same base scope). The code never writes to any other table.
 */

import { videoPathPrefix } from "./constants";

const API = "https://api.airtable.com/v0";
const BASE = "appyTu8uOPQUVXD4x";

// --- Eligibility (read only) -------------------------------------------------
const JOURNEY = "tblBJyA6OJawWy3Ri";
const FINALIST_MILESTONE = "recJpD2mp1gPvLR8x"; // "2026 – Global – Finalist"
const J_APPLICATIONS = "fldHfvY2AoU2umTBu";
const REGISTRATION = "tblvXv2QLUDoMBs2Y";
const R_STARTUP_NAME = "fldRs9KvsdXdDww1g";
const R_COUNTRY = "fldYcw8QSJvMvLWje"; // "country text"

// --- Grand Final 2027 table (write) -------------------------------------------
const FINAL_TABLE = "tblOFUmNAiLMmpqsO";
const F = {
  startupName: "fldHN0oCeMmLwbaJG",
  startupLink: "fldKkQA4E1yUZJ8nT",
  attendance: "fld5TbBKrrXiqrdNW",
  presName: "fldDunNFBTG9QkVa1",
  presRole: "fldqvqOJ1yns9vUqg",
  presEmail: "fldA1QY6BGZEBF08a",
  presPhone: "fldfRAR86n4baSvpF",
  contactIsPresenter: "fldsthStVa779Lxep",
  contactName: "fldSvrWr7LH89zG5G",
  contactRole: "fldp3OQwJn3Ou7T8u",
  contactEmail: "fldHD0GG9qE6XbedX",
  contactPhone: "fldZ6qbn9VSntoolV",
  video: "fldEUuaC3PXeqPb4p",
  videoUrl: "fldz60L01NYq4KMoX",
  firstSubmitted: "fldVrEvp6PUSoZsj6",
  lastUpdated: "fldnTSlYzhoaSDegS",
  updateCount: "fldiuZEbjAI012Beh",
} as const;

export const ATTENDANCE = {
  stage: "On stage in London",
  online: "Online",
} as const;
export type Attendance = keyof typeof ATTENDANCE;

export interface Finalist {
  id: string; // record ID in 2026 Registration
  name: string;
  country: string;
}

export interface Person {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface FinalDetails {
  attendance: Attendance;
  presenter: Person;
  /** null = the main contact is the presenter. */
  contact: Person | null;
  /** Latest uploaded video, or null to keep the stored one (updates only). */
  video: { url: string; filename: string } | null;
}

export const RECORD_ID_RE = /^rec[A-Za-z0-9]{14}$/;

export class FinalConfigError extends Error {}

type Rec = { id: string; fields: Record<string, unknown> };

async function call(key: string | undefined, path: string, init: RequestInit = {}) {
  if (!key) throw new FinalConfigError("Missing Airtable key for the Grand Final form");
  const res = await fetch(`${API}/${BASE}/${path}`, {
    ...init,
    cache: "no-store",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Airtable ${res.status} ${init.method ?? "GET"} ${path}: ${await res.text()}`);
  }
  return res.json();
}

const read = (path: string) => call(process.env.AIRTABLE_API_KEY, path);
const write = (path: string, init?: RequestInit) =>
  call(
    process.env.FINAL_RSVP_AIRTABLE_TOKEN || process.env.BOOTCAMP_RSVP_AIRTABLE_TOKEN,
    path,
    init
  );

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

/** The live list of 2026 Global Finalists, read on every request. */
export async function getFinalists(): Promise<Finalist[]> {
  const milestone: Rec = await read(`${JOURNEY}/${FINALIST_MILESTONE}?returnFieldsByFieldId=true`);
  const ids = ((milestone.fields[J_APPLICATIONS] as string[] | undefined) ?? []).filter((id) =>
    RECORD_ID_RE.test(id)
  );
  if (!ids.length) return [];

  const out: Finalist[] = [];
  for (let i = 0; i < ids.length; i += 100) {
    const formula = encodeURIComponent(
      `OR(${ids.slice(i, i + 100).map((id) => `RECORD_ID()='${id}'`).join(",")})`
    );
    const recs = await listAll((offset) =>
      read(
        `${REGISTRATION}?filterByFormula=${formula}&fields[]=${R_STARTUP_NAME}&fields[]=${R_COUNTRY}&returnFieldsByFieldId=true${offset ? `&offset=${offset}` : ""}`
      )
    );
    for (const r of recs) {
      const name = String(r.fields[R_STARTUP_NAME] ?? "").trim();
      if (name) out.push({ id: r.id, name, country: String(r.fields[R_COUNTRY] ?? "").trim() });
    }
  }
  return out.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}

async function findRow(startupId: string): Promise<Rec | undefined> {
  // Formulas only see linked-record *names*, so read the link IDs and match here.
  // The table holds at most a few dozen rows.
  const rows = await listAll((offset) =>
    write(
      `${FINAL_TABLE}?fields[]=${F.startupLink}&fields[]=${F.contactEmail}&fields[]=${F.updateCount}&fields[]=${F.videoUrl}&returnFieldsByFieldId=true${offset ? `&offset=${offset}` : ""}`
    )
  );
  return rows.find((r) => ((r.fields[F.startupLink] as string[] | undefined) ?? []).includes(startupId));
}

export type SaveResult =
  | { kind: "created" }
  | { kind: "updated" }
  | { kind: "duplicate" } // already submitted, and the main contact email does not match
  | { kind: "video-required" }; // first submission without a video

/**
 * One row per startup.
 * - None yet: create it (a video is required).
 * - Exists and the main contact email matches: update in place. Without a new video,
 *   the stored video is kept.
 * - Exists with a different main contact email: refuse. The team corrects it in Airtable.
 */
export async function saveFinalDetails(startup: Finalist, d: FinalDetails): Promise<SaveResult> {
  const contact = d.contact ?? d.presenter;
  const now = new Date().toISOString();
  const fields: Record<string, unknown> = {
    [F.startupName]: startup.name,
    [F.startupLink]: [startup.id],
    [F.attendance]: ATTENDANCE[d.attendance],
    [F.presName]: d.presenter.name,
    [F.presRole]: d.presenter.role,
    [F.presEmail]: d.presenter.email,
    [F.presPhone]: d.presenter.phone,
    [F.contactIsPresenter]: d.contact === null,
    [F.contactName]: contact.name,
    [F.contactRole]: contact.role,
    [F.contactEmail]: contact.email,
    [F.contactPhone]: contact.phone,
    [F.lastUpdated]: now,
  };
  if (d.video) {
    // Airtable downloads the file from the URL and stores its own copy.
    fields[F.video] = [{ url: d.video.url, filename: d.video.filename }];
    fields[F.videoUrl] = d.video.url;
  }

  const row = await findRow(startup.id);
  if (!row) {
    if (!d.video) return { kind: "video-required" };
    await write(FINAL_TABLE, {
      method: "POST",
      body: JSON.stringify({
        records: [{ fields: { ...fields, [F.firstSubmitted]: now, [F.updateCount]: 0 } }],
      }),
    });
    return { kind: "created" };
  }

  const stored = String(row.fields[F.contactEmail] ?? "").toLowerCase();
  if (stored !== contact.email.toLowerCase()) return { kind: "duplicate" };

  await write(`${FINAL_TABLE}/${row.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      fields: { ...fields, [F.updateCount]: Number(row.fields[F.updateCount] ?? 0) + 1 },
    }),
  });
  return { kind: "updated" };
}

/** True when the URL is a public Vercel Blob URL under this startup's prefix. */
export function isOwnVideoUrl(url: string, startupId: string): boolean {
  try {
    const u = new URL(url);
    return (
      u.protocol === "https:" &&
      u.hostname.endsWith(".public.blob.vercel-storage.com") &&
      u.pathname.startsWith(`/${videoPathPrefix(startupId)}`)
    );
  } catch {
    return false;
  }
}
