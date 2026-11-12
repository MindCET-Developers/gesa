// Fills in a secret invitation token for every row in "Bootcamp 2027 RSVP"
// that does not have one yet. Existing tokens are never changed (links already
// emailed keep working). Safe to run repeatedly.
//
//   npm run bootcamp:tokens
//
// Requires BOOTCAMP_RSVP_AIRTABLE_TOKEN (PAT scoped to the RSVP base only,
// data.records:read + data.records:write) in the environment or .env.local.
import { randomBytes } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";

if (existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const PAT = process.env.BOOTCAMP_RSVP_AIRTABLE_TOKEN;
const BASE = process.env.BOOTCAMP_RSVP_BASE_ID ?? "appkgKBfdmjHBG8JR";
const TABLE = "tblcEXj21fkvbM6am";
const TOKEN_FIELD = "flddSKn74a8hx6nbE";
const STARTUP_FIELD = "fldHcinbHfekbzigF";
if (!PAT) {
  console.error("Missing BOOTCAMP_RSVP_AIRTABLE_TOKEN");
  process.exit(1);
}

const api = async (path, init = {}) => {
  const res = await fetch(`https://api.airtable.com/v0/${BASE}/${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${PAT}`, "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
};

const missing = [];
let offset;
do {
  const q = `${TABLE}?returnFieldsByFieldId=true&pageSize=100${offset ? `&offset=${offset}` : ""}`;
  const data = await api(q);
  for (const r of data.records) {
    if (!r.fields[TOKEN_FIELD] && r.fields[STARTUP_FIELD]) missing.push(r);
  }
  offset = data.offset;
} while (offset);

for (let i = 0; i < missing.length; i += 10) {
  const batch = missing.slice(i, i + 10);
  await api(TABLE, {
    method: "PATCH",
    body: JSON.stringify({
      records: batch.map((r) => ({
        id: r.id,
        fields: { [TOKEN_FIELD]: randomBytes(24).toString("base64url") },
      })),
    }),
  });
  for (const r of batch) console.log(`token set: ${r.fields[STARTUP_FIELD]}`);
}
console.log(`Done. ${missing.length} new token(s).`);
