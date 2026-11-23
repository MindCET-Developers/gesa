import sharp from "sharp";
import type { NextRequest } from "next/server";

/**
 * Serves a regional-winner logo with its empty margins cropped away, so logos
 * uploaded with large padding render at a comparable visual size.
 * Only Airtable attachment URLs are accepted (no open proxy).
 */
export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  let url: URL;
  try {
    url = new URL(src ?? "");
  } catch {
    return new Response("Bad request", { status: 400 });
  }
  if (url.protocol !== "https:" || !url.hostname.endsWith(".airtableusercontent.com")) {
    return new Response("Forbidden", { status: 403 });
  }

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000), cache: "no-store" });
    if (!res.ok) return new Response("Upstream error", { status: 502 });
    const input = Buffer.from(await res.arrayBuffer());

    // Logos sit on white tiles, so flatten transparency to white first, then crop the
    // near-white margin. Logos on a coloured background keep it (nothing to trim).
    const flat = await sharp(input, { limitInputPixels: 300_000_000 }).rotate()
      .flatten({ background: "#ffffff" }).png().toBuffer();
    let pipeline = sharp(flat);
    try {
      pipeline = sharp(await sharp(flat).trim({ background: "#ffffff", threshold: 25 }).toBuffer());
    } catch { /* Uniform image: keep the original. */ }

    const output = await pipeline
      .resize({ width: 560, height: 320, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 88 })
      .toBuffer();

    return new Response(new Uint8Array(output), {
      headers: {
        "Content-Type": "image/webp",
        // Airtable URLs rotate every few hours, so a day of CDN caching per URL is plenty.
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new Response("Unprocessable image", { status: 422 });
  }
}
