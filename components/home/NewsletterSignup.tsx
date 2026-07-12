"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { subscribe, type SubscribeState } from "@/app/actions/subscribe";
import { ArrowRight, Check } from "@/components/ui/icons";
import type { HomeContent } from "@/lib/content/types";

const initial: SubscribeState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy transition hover:bg-white/90 disabled:opacity-60"
    >
      {pending ? "Joining…" : "Join"}
      {!pending && <ArrowRight className="size-4" />}
    </button>
  );
}

export function NewsletterSignup({ home }: { home: HomeContent }) {
  const [state, formAction] = useActionState(subscribe, initial);

  return (
    <section className="container-page py-20 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-navy px-6 py-14 text-center text-white md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {home.newsletterTitle}
          </h2>
          <p className="mt-4 text-white/80">{home.newsletterBody}</p>

          {state.ok ? (
            <p
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 font-semibold"
              role="status"
            >
              <Check className="size-5 text-sky" />
              {state.message}
            </p>
          ) : (
            <form
              action={formAction}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              noValidate
            >
              {/* honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
              />
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="you@startup.com"
                className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 focus:border-white focus:bg-white/15 focus:outline-none"
              />
              <SubmitButton />
            </form>
          )}

          {!state.ok && state.message && (
            <p className="mt-3 text-sm text-white/80" role="alert">
              {state.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
