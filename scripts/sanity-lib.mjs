import fs from "node:fs";
export const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
  if (m) env[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
}
export const PID = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const DS = env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const TOK = env.SANITY_API_TOKEN || env.SANITY_API_WRITE_TOKEN || env.SANITY_WRITE_TOKEN;
const H = { Authorization: `Bearer ${TOK}` };

export async function query(q, params = {}) {
  const u = new URL(`https://${PID}.api.sanity.io/v2024-01-01/data/query/${DS}`);
  u.searchParams.set("query", q);
  for (const [k, v] of Object.entries(params)) u.searchParams.set(`$${k}`, JSON.stringify(v));
  const r = await fetch(u, { headers: H });
  const j = await r.json();
  if (!("result" in j)) throw new Error("query failed: " + JSON.stringify(j).slice(0, 500));
  return j.result;
}

export async function mutate(mutations, dryRun = false) {
  const r = await fetch(
    `https://${PID}.api.sanity.io/v2024-01-01/data/mutate/${DS}?returnIds=true${dryRun ? "&dryRun=true" : ""}`,
    { method: "POST", headers: { ...H, "Content-Type": "application/json" }, body: JSON.stringify({ mutations }) }
  );
  const j = await r.json();
  if (j.error) throw new Error("mutate failed: " + JSON.stringify(j.error).slice(0, 800));
  return j;
}

export async function uploadImage(path) {
  const buf = fs.readFileSync(path);
  const name = path.split(/[\/]/).pop();
  const ext = name.split(".").pop().toLowerCase();
  const mime = ext === "png" ? "image/png" : ext === "svg" ? "image/svg+xml" : ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "application/octet-stream";
  const r = await fetch(
    `https://${PID}.api.sanity.io/v2024-01-01/assets/images/${DS}?filename=${encodeURIComponent(name)}`,
    { method: "POST", headers: { ...H, "Content-Type": mime }, body: buf }
  );
  const j = await r.json();
  if (!j.document) throw new Error("upload failed: " + JSON.stringify(j).slice(0, 500));
  return j.document._id;
}
