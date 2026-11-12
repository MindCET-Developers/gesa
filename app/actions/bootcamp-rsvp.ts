"use server";

import {
  RsvpConfigError,
  saveRsvp,
  TOKEN_RE,
  type Attendee,
  type AttendingAnswer,
} from "@/lib/bootcamp-rsvp/airtable";
import { MAX_ATTENDEES } from "@/lib/bootcamp-rsvp/constants";

export type RsvpState = {
  status: "idle" | "ok" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ANSWERS: AttendingAnswer[] = ["Yes", "No", "Not sure yet"];


const clean = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);

export async function submitBootcampRsvp(
  _prev: RsvpState,
  formData: FormData
): Promise<RsvpState> {
  // Honeypot.
  if (clean(formData.get("website"), 10)) {
    return { status: "ok", message: "Thank you — your RSVP has been saved." };
  }

  const token = clean(formData.get("token"), 80);
  if (!TOKEN_RE.test(token)) {
    return { status: "error", message: "This RSVP link is not valid." };
  }

  const errors: Record<string, string> = {};
  const attending = clean(formData.get("attending"), 20) as AttendingAnswer;
  if (!ANSWERS.includes(attending)) errors.attending = "Please choose an answer.";

  const repName = clean(formData.get("repName"), 120);
  const repEmail = clean(formData.get("repEmail"), 200).toLowerCase();
  const country = clean(formData.get("country"), 120);
  const comments = clean(formData.get("comments"), 2000);
  if (!repName) errors.repName = "Required.";
  if (!EMAIL_RE.test(repEmail)) errors.repEmail = "Please enter a valid email.";
  if (!country) errors.country = "Required.";

  const attendees: Attendee[] = [];
  if (attending !== "No") {
    const count = Number(clean(formData.get("attendeeCount"), 3));
    if (!Number.isInteger(count) || count < 1 || count > MAX_ATTENDEES) {
      errors.attendeeCount = `Choose between 1 and ${MAX_ATTENDEES} attendees.`;
    } else {
      const seen = new Set<string>();
      for (let i = 0; i < count; i++) {
        const name = clean(formData.get(`attendee-${i}-name`), 120);
        const email = clean(formData.get(`attendee-${i}-email`), 200).toLowerCase();
        const dietary = clean(formData.get(`attendee-${i}-dietary`), 200);
        if (!name) errors[`attendee-${i}-name`] = "Required.";
        if (!EMAIL_RE.test(email)) errors[`attendee-${i}-email`] = "Valid email required.";
        else if (seen.has(email)) errors[`attendee-${i}-email`] = "Listed twice.";
        seen.add(email);
        attendees.push({ name, email, dietary });
      }
    }
  }

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: errors,
    };
  }

  try {
    const saved = await saveRsvp(token, {
      attending,
      repName,
      repEmail,
      country,
      comments,
      attendees,
    });
    if (!saved) return { status: "error", message: "This RSVP link is not valid." };
    return {
      status: "ok",
      message:
        attending === "No"
          ? "Thank you for letting us know. You can still change your answer using this same link."
          : "Thank you — your RSVP has been saved. You can update it any time using this same link.",
    };
  } catch (err) {
    console.error("[bootcamp-rsvp] save failed", err instanceof RsvpConfigError ? err.message : err);
    return {
      status: "error",
      message:
        "We couldn't save your RSVP right now. Please try again in a few minutes or reply to the invitation email.",
    };
  }
}
