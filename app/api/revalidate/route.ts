import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const configuredSecret = process.env.SANITY_REVALIDATE_SECRET;

  if (!configuredSecret) {
    return Response.json(
      { revalidated: false, message: "Revalidation is not configured." },
      { status: 503 },
    );
  }

  const providedSecret = request.nextUrl.searchParams.get("secret");

  if (providedSecret !== configuredSecret) {
    return Response.json(
      { revalidated: false, message: "Invalid revalidation secret." },
      { status: 401 },
    );
  }

  revalidatePath("/", "layout");

  return Response.json({ revalidated: true, now: Date.now() });
}
