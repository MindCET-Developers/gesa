"use server";

import {
  getEligibleStartups,
  RECORD_ID_RE,
  RegistrationConfigError,
  saveRegistration,
  type Participant,
} from "@/lib/bootcamp-rsvp/airtable";

export type RegisterState = {
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

function readParticipant(fd: FormData, n: 1 | 2): Participant {
  return {
    name: clean(fd.get(`p${n}-name`), 120),
    role: clean(fd.get(`p${n}-role`), 120),
    email: clean(fd.get(`p${n}-email`), 200).toLowerCase(),
    phone: clean(fd.get(`p${n}-phone`), 30),
  };
}

function validate(p: Participant, n: 1 | 2, errors: Record<string, string>) {
  if (!p.name) errors[`p${n}-name`] = "Required.";
  if (!p.role) errors[`p${n}-role`] = "Required.";
  if (!EMAIL_RE.test(p.email)) errors[`p${n}-email`] = "Please enter a valid email.";
  const digits = p.phone.replace(/\D/g, "").length;
  if (!PHONE_RE.test(p.phone) || digits < 7 || digits > 20)
    errors[`p${n}-phone`] = "Please enter a valid phone number, including country code.";
}

export async function registerForBootcamp(
  _prev: RegisterState,
  fd: FormData
): Promise<RegisterState> {
  if (clean(fd.get("website"), 10)) {
    return { status: "ok", message: "Thank you, your registration has been received." }; // honeypot
  }

  const values: Record<string, string> = {};
  for (const k of ["startup", "p1-name", "p1-role", "p1-email", "p1-phone", "p2-name", "p2-role", "p2-email", "p2-phone"])
    values[k] = clean(fd.get(k), 200);
  const fail = (message: string, fieldErrors?: Record<string, string>): RegisterState => ({
    status: "error", message, fieldErrors, values, nonce: Date.now(),
  });

  const errors: Record<string, string> = {};
  const startupId = clean(fd.get("startup"), 20);
  if (!RECORD_ID_RE.test(startupId)) errors.startup = "Please select your startup.";

  const p1 = readParticipant(fd, 1);
  validate(p1, 1, errors);

  // Participant 2 is optional, but if any field is filled, all four are required.
  const p2raw = readParticipant(fd, 2);
  const p2 = Object.values(p2raw).some(Boolean) ? p2raw : null;
  if (p2) {
    validate(p2, 2, errors);
    if (p2.email && p2.email === p1.email) errors["p2-email"] = "Must differ from Participant 1.";
  }
  // Max two participants: the form only has two slots and anything else is ignored.

  if (Object.keys(errors).length) {
    return fail("Please fix the highlighted fields.", errors);
  }

  try {
    // Re-check eligibility on the server against the live list. Never trust the dropdown.
    const startup = (await getEligibleStartups()).find((s) => s.id === startupId);
    if (!startup) {
      return fail("This startup is not on the list of eligible semifinal winners.", {
        startup: "Not eligible.",
      });
    }

    const result = await saveRegistration(startup, p1, p2);
    if (result.kind === "duplicate") {
      return fail(
        `${startup.name} is already registered. To change the registration, submit again using the same Participant 1 email, or contact the GESAwards team.`
      );
    }
    return {
      status: "ok",
      message:
        result.kind === "updated"
          ? `The registration for ${startup.name} has been updated.`
          : `Thank you, ${startup.name} is registered for the GESAwards Bootcamp 2027.`,
    };
  } catch (err) {
    console.error(
      "[bootcamp-register] failed",
      err instanceof RegistrationConfigError ? err.message : err
    );
    return fail("We couldn't save your registration right now. Please try again in a few minutes.");
  }
}
