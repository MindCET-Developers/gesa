import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { RsvpForm } from "@/components/bootcamp/RsvpForm";
import { getInvitationByToken, RsvpConfigError } from "@/lib/bootcamp-rsvp/airtable";

// Personal invitation pages: never indexed, never cached.
export const metadata: Metadata = {
  title: "Bootcamp 2027 RSVP",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};
export const dynamic = "force-dynamic";

function Message({ title, body }: { title: string; body: string }) {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-line bg-surface/60 p-8 text-center">
        <h2 className="text-2xl font-extrabold text-navy">{title}</h2>
        <p className="mt-3 text-muted">{body}</p>
        <Link href="/bootcamp" className="mt-6 inline-block font-bold text-brand-700 underline underline-offset-4">
          About the Bootcamp
        </Link>
      </div>
    </div>
  );
}

export default async function BootcampRsvpPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  let invitation = null;
  let configError = false;
  try {
    invitation = await getInvitationByToken(token);
  } catch (err) {
    configError = true;
    console.error(
      "[bootcamp-rsvp] lookup failed",
      err instanceof RsvpConfigError ? err.message : err
    );
  }

  return (
    <div className="bg-white">
      <PageHero
        kicker="By invitation only"
        title="Bootcamp 2027 RSVP"
        intro="GESAwards Bootcamp · January 18 & 19, 2027 · Central London. The exact address will be sent to confirmed participants closer to the event."
      />
      {configError ? (
        <Message
          title="RSVP is temporarily unavailable"
          body="Please try again in a few minutes, or reply to your invitation email."
        />
      ) : !invitation ? (
        <Message
          title="This RSVP link is not valid"
          body="Please use the personal link from your invitation email. If you believe you should have received one, reply to the GESAwards team."
        />
      ) : (
        <section className="container-page py-14 md:py-20">
          <div className="mx-auto max-w-2xl">
            <RsvpForm
              token={token}
              startup={invitation.startup}
              initial={{
                attending: invitation.attending,
                repName: invitation.repName,
                repEmail: invitation.repEmail,
                country: invitation.country,
                comments: invitation.comments,
                attendees: invitation.attendees,
              }}
              alreadySubmitted={invitation.submissionCount > 0}
            />
          </div>
        </section>
      )}
    </div>
  );
}
