"use client";

import { useActionState, useState } from "react";
import { submitBootcampRsvp, type RsvpState } from "@/app/actions/bootcamp-rsvp";
import { MAX_ATTENDEES } from "@/lib/bootcamp-rsvp/constants";
import { buttonClasses } from "@/components/ui/button";

type Answer = "Yes" | "No" | "Not sure yet";
interface Attendee {
  name: string;
  email: string;
  dietary: string;
}

const inputCls =
  "mt-1.5 block w-full rounded-xl border border-line bg-white px-4 py-2.5 text-navy shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30 aria-[invalid=true]:border-red-500";
const labelCls = "block text-sm font-bold text-navy";

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1 text-xs font-semibold text-red-600">{msg}</p> : null;
}

export function RsvpForm({
  token,
  startup,
  initial,
  alreadySubmitted,
}: {
  token: string;
  startup: string;
  initial: {
    attending: Answer | null;
    repName: string;
    repEmail: string;
    country: string;
    comments: string;
    attendees: Attendee[];
  };
  alreadySubmitted: boolean;
}) {
  const [state, action, pending] = useActionState<RsvpState, FormData>(submitBootcampRsvp, {
    status: "idle",
    message: "",
  });
  const [attending, setAttending] = useState<Answer | null>(initial.attending);
  const [attendees, setAttendees] = useState<Attendee[]>(
    initial.attendees.length ? initial.attendees : [{ name: "", email: "", dietary: "" }]
  );
  const errs = state.fieldErrors ?? {};

  const update = (i: number, key: keyof Attendee, value: string) =>
    setAttendees((list) => list.map((a, j) => (j === i ? { ...a, [key]: value } : a)));

  return (
    <form action={action} className="space-y-8" noValidate>
      <input type="hidden" name="token" value={token} />
      <input type="hidden" name="attendeeCount" value={attendees.length} />
      <div aria-hidden className="hidden">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-700">Invitation for</p>
        <h2 className="mt-1 text-3xl font-extrabold text-navy">{startup}</h2>
        {alreadySubmitted && (
          <p className="mt-3 rounded-xl bg-sky/10 px-4 py-3 text-sm text-navy">
            We already have your RSVP. Any changes you save here will replace it.
          </p>
        )}
      </div>

      <fieldset>
        <legend className={labelCls}>Will you attend the Bootcamp? *</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {(["Yes", "No", "Not sure yet"] as Answer[]).map((opt) => (
            <label
              key={opt}
              className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-bold transition ${
                attending === opt
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-navy hover:border-brand/50"
              }`}
            >
              <input
                type="radio"
                name="attending"
                value={opt}
                checked={attending === opt}
                onChange={() => setAttending(opt)}
                className="sr-only"
              />
              {opt}
            </label>
          ))}
        </div>
        <FieldError msg={errs.attending} />
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="repName">Representative full name *</label>
          <input id="repName" name="repName" defaultValue={initial.repName} required autoComplete="name" className={inputCls} aria-invalid={!!errs.repName} />
          <FieldError msg={errs.repName} />
        </div>
        <div>
          <label className={labelCls} htmlFor="repEmail">Representative email *</label>
          <input id="repEmail" name="repEmail" type="email" defaultValue={initial.repEmail} required autoComplete="email" className={inputCls} aria-invalid={!!errs.repEmail} />
          <FieldError msg={errs.repEmail} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="country">Country / region *</label>
          <input id="country" name="country" defaultValue={initial.country} required autoComplete="country-name" className={inputCls} aria-invalid={!!errs.country} />
          <FieldError msg={errs.country} />
        </div>
      </div>

      {attending !== "No" && (
        <fieldset className="rounded-2xl border border-line bg-surface/50 p-5 md:p-6">
          <legend className="px-1 text-base font-extrabold text-navy">
            Attendees ({attendees.length})
          </legend>
          <p className="text-sm text-muted">
            List everyone from your startup who plans to attend (up to {MAX_ATTENDEES}).
          </p>
          <FieldError msg={errs.attendeeCount} />
          <div className="mt-4 space-y-5">
            {attendees.map((a, i) => (
              <div key={i} className="rounded-xl border border-line bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-navy">Attendee {i + 1}</span>
                  {attendees.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setAttendees((l) => l.filter((_, j) => j !== i))}
                      className="text-xs font-bold text-muted underline hover:text-red-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="mt-2 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelCls} htmlFor={`attendee-${i}-name`}>Full name *</label>
                    <input id={`attendee-${i}-name`} name={`attendee-${i}-name`} value={a.name} onChange={(e) => update(i, "name", e.target.value)} className={inputCls} aria-invalid={!!errs[`attendee-${i}-name`]} />
                    <FieldError msg={errs[`attendee-${i}-name`]} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor={`attendee-${i}-email`}>Email *</label>
                    <input id={`attendee-${i}-email`} name={`attendee-${i}-email`} type="email" value={a.email} onChange={(e) => update(i, "email", e.target.value)} className={inputCls} aria-invalid={!!errs[`attendee-${i}-email`]} />
                    <FieldError msg={errs[`attendee-${i}-email`]} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor={`attendee-${i}-dietary`}>
                      Dietary requirements <span className="font-normal text-muted">(optional)</span>
                    </label>
                    <input id={`attendee-${i}-dietary`} name={`attendee-${i}-dietary`} value={a.dietary} onChange={(e) => update(i, "dietary", e.target.value)} placeholder="e.g. vegetarian, nut allergy" className={inputCls} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {attendees.length < MAX_ATTENDEES && (
            <button
              type="button"
              onClick={() => setAttendees((l) => [...l, { name: "", email: "", dietary: "" }])}
              className="mt-4 text-sm font-bold text-brand-700 underline underline-offset-4"
            >
              + Add another attendee
            </button>
          )}
        </fieldset>
      )}

      <div>
        <label className={labelCls} htmlFor="comments">
          Additional comments <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea id="comments" name="comments" rows={4} defaultValue={initial.comments} className={inputCls} />
      </div>

      <p className="text-xs leading-relaxed text-muted">
        We use these details only to organise the GESAwards Bootcamp 2027. See our{" "}
        <a href="/privacy-policy" className="underline">privacy policy</a>.
      </p>

      {state.message && (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm font-semibold ${
            state.status === "ok" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={buttonClasses({ variant: "primary", size: "lg", className: "w-full sm:w-auto disabled:opacity-60" })}
      >
        {pending ? "Saving…" : alreadySubmitted || state.status === "ok" ? "Update RSVP" : "Submit RSVP"}
      </button>
    </form>
  );
}
