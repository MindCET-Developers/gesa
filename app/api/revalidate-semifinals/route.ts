import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { SEMIFINALS_CACHE_TAG } from "@/lib/content/semifinals-airtable";

// On-demand refresh of the live Regional Semifinals cache. Point an Airtable automation
// (or a manual curl) at this endpoint to make edits appear within seconds instead of waiting
// for the periodic revalidation window.
//
// Auth: set SEMIFINALS_REVALIDATE_SECRET in the environment and pass it as ?secret=... or an
// `x-revalidate-secret` header. Without the env var configured, the endpoint refuses to run.
//
//   curl -X POST "https://www.gesawards.io/api/revalidate-semifinals?secret=YOUR_SECRET"

function authorized(request: NextRequest): boolean {
  const secret = process.env.SEMIFINALS_REVALIDATE_SECRET;
  if (!secret) return false;
  const provided =
    request.nextUrl.searchParams.get("secret") ?? request.headers.get("x-revalidate-secret");
  return provided === secret;
}

function handle(request: NextRequest) {
  if (!authorized(request)) {
    return NextResponse.json({ revalidated: false, error: "unauthorized" }, { status: 401 });
  }
  revalidateTag(SEMIFINALS_CACHE_TAG, "max");
  return NextResponse.json({ revalidated: true, tag: SEMIFINALS_CACHE_TAG });
}

export async function POST(request: NextRequest) {
  return handle(request);
}

// GET support lets you trigger it from a browser / simple webhook that only does GET.
export async function GET(request: NextRequest) {
  return handle(request);
}
