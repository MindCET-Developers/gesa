import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: NextRequest) {
  const configuredSecret = process.env.SANITY_REVALIDATE_SECRET;

  if (!configuredSecret) {
    return json(
      { revalidated: false, message: "Revalidation is not configured." },
      503,
    );
  }

  const authorization = request.headers.get("authorization");
  const providedSecret = authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : request.nextUrl.searchParams.get("secret");

  if (providedSecret !== configuredSecret) {
    return json(
      { revalidated: false, message: "Invalid revalidation secret." },
      401,
    );
  }

  revalidatePath("/", "layout");

  return json({ revalidated: true, now: Date.now() });
}
