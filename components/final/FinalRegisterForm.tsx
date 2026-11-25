"use client";

import { startTransition, useActionState, useState, type FormEvent } from "react";
import { upload } from "@vercel/blob/client";
import { submitFinalDetails, type FinalState } from "@/app/actions/final-rsvp";
import { buttonClasses } from "@/components/ui/button";
import { MAX_VIDEO_BYTES, VIDEO_UPLOAD_ROUTE, videoPathPrefix } from "@/lib/final-rsvp/constants";

const inputCls =
  "mt-1.5 block w-full rounded-xl border border-line bg-white px-4 py-2.5 text-navy shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30 aria-[invalid=true]:border-red-500";
const labelCls = "block text-sm font-bold text-navy";
const fieldsetCls = "rounded-2xl border border-line bg-surface/50 p-5 md:p-6";
const legendCls = "px-1 text-base font-extrabold text-navy";

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1 text-xs font-semibold text-red-600">{msg}</p> : null;
}

function PersonFields({
  prefix,
  errors,
  values,
}: {
  prefix: "pres" | "contact";
  errors: Record<string, string>;
  values: Record<string, string>;
}) {
  const fields = [
    { key: "name", label: "Full name", type: "text", auto: "name" },
    { key: "role", label: "Role in company", type: "text", auto: "organization-title" },
    { key: "email", label: "Email", type: "email", auto: "email" },
    { key: "phone", label: "Phone number (with country code)", type: "tel", auto: "tel" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => {
        const id = `${prefix}-${f.key}`;
        return (
          <div key={id}>
            <label className={labelCls} htmlFor={id}>
              {f.label} *
            </label>
            <input
              id={id}
              name={id}
              type={f.type}
              defaultValue={values[id] ?? ""}
              required
              autoComplete={prefix === "pres" ? f.auto : "off"}
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

type UploadedVideo = { url: string; name: string; startupId: string };

const formatMb = (bytes: number) => `${Math.round(bytes / (1024 * 1024))} MB`;

export function FinalRegisterForm({
  startups,
}: {
  startups: { id: string; name: string; country: string }[];
}) {
  const [state, action, pending] = useActionState<FinalState, FormData>(submitFinalDetails, {
    status: "idle",
    message: "",
  });
  const errs = state.fieldErrors ?? {};
  const vals = state.values ?? {};

  const [contactSame, setContactSame] = useState(true);
  // A video already uploaded to Blob in this visit, so a failed submit doesn't force a re-upload.
  const [video, setVideo] = useState<UploadedVideo | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [clientError, setClientError] = useState("");

  // After each server response, restore UI state from the echoed values.
  const [seenNonce, setSeenNonce] = useState(state.nonce);
  if (state.nonce !== seenNonce) {
    setSeenNonce(state.nonce);
    setContactSame(vals.contactSame === "on");
    if (!vals.videoUrl) setVideo(null);
  }

  const busy = pending || progress !== null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setClientError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const startupId = String(fd.get("startup") ?? "");
    const file = fd.get("video");
    fd.delete("video");

    let current = video && video.startupId === startupId ? video : null;

    if (file instanceof File && file.size > 0) {
      if (!startupId) {
        setClientError("Please select your startup before uploading the video.");
        return;
      }
      if (!file.type.startsWith("video/")) {
        setClientError("The pitch video must be a video file (for example MP4 or MOV).");
        return;
      }
      if (file.size > MAX_VIDEO_BYTES) {
        setClientError(`The video is ${formatMb(file.size)}. The maximum is ${formatMb(MAX_VIDEO_BYTES)}.`);
        return;
      }
      try {
        setProgress(0);
        const safeName = file.name.replace(/[^\w.\-]+/g, "_").slice(-120) || "pitch-video";
        const blob = await upload(`${videoPathPrefix(startupId)}${safeName}`, file, {
          access: "public",
          handleUploadUrl: VIDEO_UPLOAD_ROUTE,
          clientPayload: startupId,
          contentType: file.type,
          multipart: file.size > 20 * 1024 * 1024,
          onUploadProgress: (p) => setProgress(Math.round(p.percentage)),
        });
        current = { url: blob.url, name: file.name, startupId };
        setVideo(current);
      } catch (err) {
        console.error(err);
        setClientError("The video upload failed. Please check your connection and try again.");
        return;
      } finally {
        setProgress(null);
      }
    }

    if (current) {
      fd.set("videoUrl", current.url);
      fd.set("videoName", current.name);
    } else {
      fd.delete("videoUrl");
      fd.delete("videoName");
    }
    startTransition(() => action(fd));
  }

  if (state.status === "ok") {
    return (
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h2 className="text-2xl font-extrabold text-navy">Details received</h2>
        <p className="mt-3 text-green-900">{state.message}</p>
        <p className="mt-3 text-sm text-muted">
          To correct them later, submit this form again for the same startup using the same main
          contact email. You don&apos;t need to upload the video again unless it changed.
        </p>
      </div>
    );
  }

  return (
    <form key={state.nonce ?? 0} onSubmit={onSubmit} className="space-y-8" noValidate>
      <div aria-hidden className="hidden">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className={labelCls} htmlFor="startup">Startup *</label>
        <select
          id="startup"
          name="startup"
          required
          defaultValue={vals.startup ?? ""}
          className={inputCls}
          aria-invalid={!!errs.startup}
        >
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
          Only the GESAwards 2026 Grand Finalists are listed. Is your startup missing? Contact the
          GESAwards team.
        </p>
      </div>

      <fieldset className={fieldsetCls} aria-invalid={!!errs.attendance}>
        <legend className={legendCls}>How will you present at the Grand Final? *</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { value: "stage", title: "On stage in London", note: "January 21, 2027, in person" },
            { value: "online", title: "Online", note: "Remotely, using your pitch video" },
          ].map((o) => (
            <label
              key={o.value}
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-white p-4 has-[:checked]:border-brand has-[:checked]:ring-2 has-[:checked]:ring-brand/30"
            >
              <input
                type="radio"
                name="attendance"
                value={o.value}
                defaultChecked={vals.attendance === o.value}
                required
                className="mt-1 accent-brand"
              />
              <span>
                <span className="block font-bold text-navy">{o.title}</span>
                <span className="block text-xs text-muted">{o.note}</span>
              </span>
            </label>
          ))}
        </div>
        <FieldError msg={errs.attendance} />
      </fieldset>

      <fieldset className={fieldsetCls}>
        <legend className={legendCls}>Presenter</legend>
        <p className="mb-3 text-xs text-muted">The person who will pitch at the Grand Final.</p>
        <PersonFields prefix="pres" errors={errs} values={vals} />
      </fieldset>

      <fieldset className={fieldsetCls}>
        <legend className={legendCls}>Main contact</legend>
        <p className="mb-3 text-xs text-muted">
          The person the GESAwards team should contact about the Grand Final.
        </p>
        <label className="flex items-center gap-2 text-sm font-semibold text-navy">
          <input
            type="checkbox"
            name="contactSame"
            checked={contactSame}
            onChange={(e) => setContactSame(e.target.checked)}
          />
          The main contact is the presenter
        </label>
        {!contactSame && (
          <div className="mt-4">
            <PersonFields prefix="contact" errors={errs} values={vals} />
          </div>
        )}
      </fieldset>

      <fieldset className={fieldsetCls}>
        <legend className={legendCls}>Pitch video *</legend>
        <label className={labelCls} htmlFor="video">
          Upload your pitch video (MP4 or MOV, up to {formatMb(MAX_VIDEO_BYTES)})
        </label>
        <input
          id="video"
          name="video"
          type="file"
          accept="video/*"
          className="mt-1.5 block w-full text-sm text-navy file:mr-4 file:rounded-lg file:border-0 file:bg-brand/10 file:px-4 file:py-2 file:font-bold file:text-brand-700"
          aria-invalid={!!errs.video}
        />
        <FieldError msg={errs.video} />
        {video && (
          <p className="mt-2 text-xs font-semibold text-green-700">
            Uploaded: {video.name}. Choose a new file only if you want to replace it.
          </p>
        )}
        <p className="mt-1.5 text-xs text-muted">
          Already submitted a video? Leave this empty to keep it.
        </p>
        {progress !== null && (
          <div className="mt-3" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-2 w-full overflow-hidden rounded-full bg-line">
              <div className="h-full bg-brand transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-1 text-xs text-muted">Uploading video… {progress}%. Please keep this page open.</p>
          </div>
        )}
      </fieldset>

      <p className="text-xs leading-relaxed text-muted">
        We use these details only to organise the GESAwards 2026 Grand Final. See our{" "}
        <a href="/privacy-policy" className="underline">privacy policy</a>.
      </p>

      {(clientError || state.message) && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {clientError || state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className={buttonClasses({ variant: "primary", size: "lg", className: "w-full sm:w-auto disabled:opacity-60" })}
      >
        {progress !== null ? "Uploading video…" : pending ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
