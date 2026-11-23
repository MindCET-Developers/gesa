import sharp from "sharp";
import type { NextRequest } from "next/server";
import { fetchAllRecords } from "@/lib/content/airtable-read";
import { logoAttachment, STARTUP_LOGO } from "@/lib/content/regional-winners-data";

const STARTUPS_TABLE = "tblvXv2QLUDoMBs2Y";
const NAVY = "#000633"; // --color-navy

/** True when the visible (opaque) pixels are near-white and the image has real transparency. */
async function isLightOnTransparent(png: Buffer): Promise<boolean> {
  const { data, info } = await sharp(png).resize({ width: 256, height: 256, fit: "inside" })
    .ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let opaque = 0;
  let luminance = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue;
    opaque++;
    luminance += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
  }
  const total = info.width * info.height;
  return opaque > 0 && opaque < total * 0.95 && luminance / opaque > 235;
}

/**
 * Serves a regional-winner logo with its empty margins cropped away.
 * The path is keyed by record + attachment ID (stable until the logo file is replaced),
 * so the CDN can keep the processed image long after Airtable's signed URLs rotate.
 */
export async function GET(_req: NextRequest, ctx: RouteContext<"/api/winner-logo/[recordId]/[attachmentId]">) {
  const { recordId, attachmentId } = await ctx.params;
  if (!/^rec[A-Za-z0-9]{14}$/.test(recordId) || !/^att[A-Za-z0-9]{14}$/.test(attachmentId)) {
    return new Response("Bad request", { status: 400 });
  }
  const key = process.env.AIRTABLE_API_KEY;
  if (!key) return new Response("Unavailable", { status: 503 });

  try {
    // Only the logo field is read; IDs are validated above, so the formula cannot be injected.
    const [record] = await fetchAllRecords(STARTUPS_TABLE, key, [STARTUP_LOGO], {
      filterByFormula: `RECORD_ID()='${recordId}'`,
    });
    const field = record?.fields[STARTUP_LOGO];
    const attachment = logoAttachment(Array.isArray(field) ? field.filter((a) => a?.id === attachmentId) : undefined);
    if (!attachment) return new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store" } });

    const res = await fetch(attachment.url, { signal: AbortSignal.timeout(15_000), cache: "no-store" });
    if (!res.ok) return new Response("Upstream error", { status: 502, headers: { "Cache-Control": "no-store" } });
    const input = Buffer.from(await res.arrayBuffer());

    const rgba = await sharp(input, { limitInputPixels: 300_000_000 }).rotate()
      .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
      .ensureAlpha().png().toBuffer();

    let pipeline: sharp.Sharp;
    if (await isLightOnTransparent(rgba)) {
      // White/very light logo on transparency would vanish on the white tile:
      // crop to the visible shape, then place it on a brand-navy plate.
      let shape = rgba;
      try { shape = await sharp(rgba).trim({ threshold: 10 }).toBuffer(); } catch { /* keep */ }
      const { width = 0, height = 0 } = await sharp(shape).metadata();
      const pad = Math.round(Math.max(width, height) * 0.12);
      pipeline = sharp(await sharp(shape)
        .extend({ top: pad, bottom: pad, left: pad, right: pad, background: NAVY })
        .flatten({ background: NAVY }).png().toBuffer());
    } else {
      // Logos sit on white tiles, so flatten transparency to white first, then crop the
      // near-white margin. Logos on a coloured background keep it (nothing to trim).
      const flat = await sharp(rgba).flatten({ background: "#ffffff" }).png().toBuffer();
      pipeline = sharp(flat);
      try {
        pipeline = sharp(await sharp(flat).trim({ background: "#ffffff", threshold: 25 }).toBuffer());
      } catch { /* Uniform image: keep the original. */ }
    }

    const output = await pipeline
      .resize({ width: 560, height: 320, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 88 })
      .toBuffer();

    return new Response(new Uint8Array(output), {
      headers: {
        "Content-Type": "image/webp",
        // Replacing the logo in Airtable creates a new attachment ID, i.e. a new URL.
        "Cache-Control": "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000",
      },
    });
  } catch {
    return new Response("Unprocessable image", { status: 422, headers: { "Cache-Control": "no-store" } });
  }
}
