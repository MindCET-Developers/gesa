"use server";

import {
  FinalConfigError,
  getFinalists,
  getSubmissionSummary,
  isOwnVideoUrl,
  RECORD_ID_RE,
  saveFinalDetails,
  type FinalStage,
  type JudgingLocation,
  type Person,
  type SubmissionSummary,
} from "@/lib/final-rsvp/airtable";
import { MAX_VIDEO_SECONDS, VIDEO_SECONDS_TOLERANCE } from "@/lib/final-rsvp/constants";

export type FinalState = {
  status: "idle" | "ok" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
  /** Echo of the submitted values so the form can be re-filled after an error. */
  values?: Record<string, string>;
  nonce?: number;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// International-friendly: optional +, then 7–20 digits with spaces, dashes, dots or brackets.
const PHONE_RE = /^\+?[0-9 ()./-]{7,25}$/;

const clean = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

const VALUE_KEYS = [
  "startup", "judging", "stage", "contactSame",
  "pres-name", "pres-role", "pres-email", "pres-phone",
  "stage-name", "stage-role", "stage-email", "stage-phone",
  "contact-name", "contact-role", "contact-email", "contact-phone",
  "videoUrl", "videoName", "videoSeconds",
];

type Prefix = "pres" | "stage" | "contact";

function readPerson(fd: FormData, prefix: Prefix): Person {
  return {
    name: clean(fd.get(`${prefix}-name`), 120),
    role: clean(fd.get(`${prefix}-role`), 120),
    email: clean(fd.get(`${prefix}-email`), 200).toLowerCase(),
    phone: clean(fd.get(`${prefix}-phone`), 30),
  };
}

function validate(p: Person, prefix: string, errors: Record<string, string>) {
  if (!p.name) errors[`${prefix}-name`] = "Required.";
  if (!p.role) errors[`${prefix}-role`] = "Required.";
  if (!EMAIL_RE.test(p.email)) errors[`${prefix}-email`] = "Please enter a valid email.";
  const digits = p.phone.replace(/\D/g, "").length;
  if (!PHONE_RE.test(p.phone) || digits < 7 || digits > 20)
    errors[`${prefix}-phone`] = "Please enter a valid phone number, including country code.";
}

export async function submitFinalDetails(_prev: FinalState, fd: FormData): Promise<FinalState> {
  if (clean(fd.get("website"), 10)) {
    return { status: "ok", message: "Thank you, your details have been received." }; // honeypot
  }

  const values: Record<string, string> = {};
  for (const k of VALUE_KEYS) values[k] = clean(fd.get(k), 600);
  const fail = (message: string, fieldErrors?: Record<string, string>): FinalState => ({
    status: "error", message, fieldErrors, values, nonce: Date.now(),
  });

  const errors: Record<string, string> = {};
  const startupId = clean(fd.get("startup"), 20);
  if (!RECORD_ID_RE.test(startupId)) errors.startup = "Please select your startup.";

  const judgingRaw = clean(fd.get("judging"), 10);
  const judging: JudgingLocation | null =
    judgingRaw === "london" || judgingRaw === "online" ? judgingRaw : null;
  if (!judging) errors.judging = "Please choose where you will be during the judging.";

  const presenter = readPerson(fd, "pres");
  validate(presenter, "pres", errors);

  const stageRaw = clean(fd.get("stage"), 10);
  let stage: FinalStage | null = null;
  if (stageRaw === "no") stage = { kind: "no" };
  else if (stageRaw === "same") stage = { kind: "same" };
  else if (stageRaw === "other") {
    const person = readPerson(fd, "stage");
    validate(person, "stage", errors);
    stage = { kind: "person", person };
  } else errors.stage = "Please tell us who will be on stage at the Grand Final.";

  const contactSame = clean(fd.get("contactSame"), 5) === "on";
  const contact = contactSame ? null : readPerson(fd, "contact");
  if (contact) validate(contact, "contact", errors);

  const videoUrl = clean(fd.get("videoUrl"), 600);
  const videoName = clean(fd.get("videoName"), 200) || "pitch-video";
  const secondsRaw = Number(clean(fd.get("videoSeconds"), 10));
  const videoSeconds = Number.isFinite(secondsRaw) && secondsRaw > 0 ? Math.round(secondsRaw) : null;
  if (videoUrl && videoSeconds !== null && videoSeconds > MAX_VIDEO_SECONDS + VIDEO_SECONDS_TOLERANCE) {
    errors.video = "The video must be one minute or shorter.";
    values.videoUrl = "";
  }
  if (videoUrl && RECORD_ID_RE.test(startupId) && !isOwnVideoUrl(videoUrl, startupId)) {
    errors.video = "Please upload the video again.";
    values.videoUrl = "";
  }

  if (Object.keys(errors).length) {
    return fail("Please fix the highlighted fields.", errors);
  }

  try {
    // Re-check eligibility on the server against the live list. Never trust the dropdown.
    const startup = (await getFinalists()).find((s) => s.id === startupId);
    if (!startup) {
      return fail("This startup is not on the list of GESAwards 2026 Grand Finalists.", {
        startup: "Not eligible.",
      });
    }

    const result = await saveFinalDetails(startup, {
      judging: judging!,
      presenter,
      stage: stage!,
      contact,
      video: videoUrl ? { url: videoUrl, filename: videoName, seconds: videoSeconds } : null,
    });
    if (result.kind === "video-required") {
      return fail("Please upload your pitch video.", { video: "Required." });
    }
    if (result.kind === "duplicate") {
      return fail(
        `Details for ${startup.name} were already submitted. To change them, submit again using the same main contact email, or contact the GESAwards team.`
      );
    }
    return {
      status: "ok",
      message:
        result.kind === "updated"
          ? `The Grand Final details for ${startup.name} have been updated.`
          : `Thank you, we have received the Grand Final details for ${startup.name}.`,
    };
  } catch (err) {
    console.error(
      "[final-register] failed",
      err instanceof FinalConfigError ? err.message : err
    );
    return fail("We couldn't save your details right now. Please try again in a few minutes.");
  }
}

/** Lets the form say, as soon as a startup is picked, that it already submitted. */
export async function checkFinalSubmission(
  startupId: string
): Promise<{ status: "none" | "error" } | ({ status: "exists" } & SubmissionSummary)> {
  if (!RECORD_ID_RE.test(startupId)) return { status: "none" };
  try {
    if (!(await getFinalists()).some((s) => s.id === startupId)) return { status: "none" };
    const summary = await getSubmissionSummary(startupId);
    return summary ? { status: "exists", ...summary } : { status: "none" };
  } catch (err) {
    console.error(
      "[final-register] status check failed",
      err instanceof FinalConfigError ? err.message : err
    );
    return { status: "error" };
  }
}
