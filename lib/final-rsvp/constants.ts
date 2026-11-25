// Shared by the Grand Final form (client) and its server code. No secrets here.

/** Pitch videos may be at most one minute (a second of slack for encoder rounding). */
export const MAX_VIDEO_SECONDS = 60;
export const VIDEO_SECONDS_TOLERANCE = 1;

export const MAX_VIDEO_BYTES = 500 * 1024 * 1024; // 500 MB

/** Upload path prefix in Vercel Blob for a startup's pitch video. */
export const videoPathPrefix = (startupId: string) => `final-2027/${startupId}/`;

export const VIDEO_UPLOAD_ROUTE = "/api/final/video-upload";
