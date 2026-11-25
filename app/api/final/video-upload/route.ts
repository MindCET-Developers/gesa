import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { FinalConfigError, getFinalists, RECORD_ID_RE } from "@/lib/final-rsvp/airtable";
import { MAX_VIDEO_BYTES, videoPathPrefix } from "@/lib/final-rsvp/constants";

// Issues short-lived client tokens so the browser can upload the pitch video straight
// to Vercel Blob (server actions cap request bodies far below video sizes).
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
  try {
    const json = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const startupId = String(clientPayload ?? "");
        if (!RECORD_ID_RE.test(startupId) || !pathname.startsWith(videoPathPrefix(startupId))) {
          throw new Error("Invalid upload request.");
        }
        // Only Grand Finalists may upload.
        if (!(await getFinalists()).some((s) => s.id === startupId)) {
          throw new Error("This startup is not a Grand Finalist.");
        }
        return {
          allowedContentTypes: ["video/*"],
          maximumSizeInBytes: MAX_VIDEO_BYTES,
          addRandomSuffix: true,
          validUntil: Date.now() + 60 * 60 * 1000,
        };
      },
    });
    return NextResponse.json(json);
  } catch (err) {
    console.error(
      "[final-video-upload] failed",
      err instanceof FinalConfigError ? err.message : err
    );
    return NextResponse.json({ error: "Upload not allowed." }, { status: 400 });
  }
}
