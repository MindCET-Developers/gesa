// Shared by the Grand Final form (client) and its server code. No secrets here.

export const MAX_VIDEO_BYTES = 500 * 1024 * 1024; // 500 MB

/** Upload path prefix in Vercel Blob for a startup's pitch video. */
export const videoPathPrefix = (startupId: string) => `final-2027/${startupId}/`;

export const VIDEO_UPLOAD_ROUTE = "/api/final/video-upload";
