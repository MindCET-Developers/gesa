"use client";

import { useActionState, useState } from "react";
import { registerForBootcamp, type RegisterState } from "@/app/actions/bootcamp-rsvp";
import { buttonClasses } from "@/components/ui/button";

const inputCls =
  "mt-1.5 block w-full rounded-xl border border-line bg-white px-4 py-2.5 text-navy shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30 aria-[invalid=true]:border-red-500";
const labelCls = "block text-sm font-bold text-navy";

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1 text-xs font-semibold text-red-600">{msg}</p> : null;
}

function ParticipantFields({
  n,
  errors,
  values,
  required,
}: {
  n: 1 | 2;
  errors: Record<string, string>;
  values: Record<string, string>;
  required: boolean;
}) {
  const star = required ? " *" : "";
  const fields = [
    { key: "name", label: "Full name", type: "text", auto: "name" },
    { key: "role", label: "Role in company", type: "text", auto: "organization-title" },
    { key: "email", label: "Email", type: "email", auto: "email" },
    { key: "phone", label: "Phone number (with country code)", type: "tel", auto: "tel" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => {
        const id = `p${n}-${f.key}`;
        return (
          <div key={id}>
            <label className={labelCls} htmlFor={id}>
              {f.label}
              {star}
            </label>
            <input
              id={id}
              name={id}
              type={f.type}
              defaultValue={values[id] ?? ""}
              required={required}
              autoComplete={n === 1 ? f.auto : "off"}
              className={inputCls}
              aria-invalid={!!errors[id]}
            />
            <FieldError msg={errors[id]} />
          </div>
        );
      })}
    </div>
  );
}

export function BootcampRegisterForm({
  startups,
}: {
  startups: { id: string; name: string; country: string }[];
}) {
  const [state, action, pending] = useActionState<RegisterState, FormData>(registerForBootcamp, {
    status: "idle",
    message: "",
  });
  const errs = state.fieldErrors ?? {};
  const vals = state.values ?? {};
  const hasP2Values = ["p2-name", "p2-role", "p2-email", "p2-phone"].some((k) => vals[k]);
  const [showP2, setShowP2] = useState(false);
  // After each server response, re-open Participant 2 if values for it came back.
  const [seenNonce, setSeenNonce] = useState(state.nonce);
  if (state.nonce !== seenNonce) {
    setSeenNonce(state.nonce);
    setShowP2(hasP2Values);
  }
  const p2Visible = showP2;

  if (state.status === "ok") {
    return (
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h2 className="text-2xl font-extrabold text-navy">Registration received</h2>
        <p className="mt-3 text-green-900">{state.message}</p>
        <p className="mt-3 text-sm text-muted">
          To correct it later, submit this form again for the same startup using the same
          Participant 1 email.
        </p>
      </div>
    );
  }

  return (
    <form key={state.nonce ?? 0} action={action} className="space-y-8" noValidate>
      <div aria-hidden className="hidden">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className={labelCls} htmlFor="startup">Startup *</label>
        <select id="startup" name="startup" required defaultValue={vals.startup ?? ""} className={inputCls} aria-invalid={!!errs.startup}>
          <option value="" disabled>
            Select your startup
          </option>
          {startups.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
              {s.country ? ` (${s.country})` : ""}
            </option>
          ))}
        </select>
        <FieldError msg={errs.startup} />
        <p className="mt-1.5 text-xs text-muted">
          Only startups placed 1st, 2nd or 3rd in a GESAwards 2026 regional semifinal are listed.
          Is your startup missing? Contact your semifinal partner.
        </p>
      </div>

      <fieldset className="rounded-2xl border border-line bg-surface/50 p-5 md:p-6">
        <legend className="px-1 text-base font-extrabold text-navy">Participant 1</legend>
        <ParticipantFields n={1} errors={errs} values={vals} required />
      </fieldset>

      {p2Visible ? (
        <fieldset className="rounded-2xl border border-line bg-surface/50 p-5 md:p-6">
          <legend className="px-1 text-base font-extrabold text-navy">Participant 2 (optional)</legend>
          <p className="mb-3 text-xs text-muted">If you add a second participant, all four fields are required.</p>
          <ParticipantFields n={2} errors={errs} values={vals} required />
          <button
            type="button"
            onClick={() => setShowP2(false)}
            className="mt-4 text-xs font-bold text-muted underline hover:text-red-600"
          >
            Remove Participant 2
          </button>
        </fieldset>
      ) : (
        <button
          type="button"
          onClick={() => setShowP2(true)}
          className="text-sm font-bold text-brand-700 underline underline-offset-4"
        >
          + Add a second participant (maximum two per startup)
        </button>
      )}

      <p className="text-xs leading-relaxed text-muted">
        We use these details only to organise the GESAwards Bootcamp 2027. See our{" "}
        <a href="/privacy-policy" className="underline">privacy policy</a>.
      </p>

      {state.message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={buttonClasses({ variant: "primary", size: "lg", className: "w-full sm:w-auto disabled:opacity-60" })}
      >
        {pending ? "Submitting…" : "Register"}
      </button>
    </form>
  );
}
