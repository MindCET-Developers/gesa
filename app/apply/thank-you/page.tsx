import type { Metadata } from "next";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { ThankYouTracking } from "@/components/apply/ThankYouTracking";

// Only reachable via the Airtable form's post-submit redirect — keep it out
// of search results so it never competes with /apply.
export const metadata: Metadata = {
  title: "Application received",
  description:
    "Your application to the Global EdTech Startup Awards has been received.",
  robots: { index: false, follow: false },
};

export default function ApplyThankYouPage() {
  return (
    <>
      <ThankYouTracking />
      <section className="bg-navy px-5 py-20 text-center text-white md:py-28">
        <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-sky">
          Application received
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
          Thank you — you&apos;re in the running!
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          We received your application to the Global EdTech Startup Awards. Our
          team will review it and be in touch — keep an eye on your inbox for
          updates about the regional semifinals.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className={buttonClasses({ variant: "light", size: "lg" })}
          >
            Back to home
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/tracks"
            className={buttonClasses({ variant: "outline-light", size: "lg" })}
          >
            Explore the tracks
          </Link>
        </div>
      </section>
    </>
  );
}
