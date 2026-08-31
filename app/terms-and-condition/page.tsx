import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "GESAwards 2026 Terms & Conditions",
  description:
    "Full Terms & Conditions governing participation in the 2026 Global EdTech Startup Awards.",
};

const LAST_UPDATED = "August 31, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Competition"
        title="GESAwards 2026 Terms & Conditions"
        intro="These Terms & Conditions govern participation in the 2026 Global EdTech Startup Awards (GESAwards)."
      />

      <article className="container-page max-w-3xl py-16 md:py-20">
        <div className="space-y-10 text-base leading-relaxed text-muted">
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              1. Organizer and scope
            </h2>
            <p>
              The 2026 Global EdTech Startup Awards ("GESAwards") are organized
              by MindCET, together with regional and program partners where
              applicable. These Terms & Conditions ("Terms") apply to startups
              and their representatives participating in the 2026 competition.
            </p>
            <p className="mt-3">
              By submitting an application, the applicant confirms that the
              person submitting it is authorized to act on behalf of the startup
              and agrees to these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              2. Eligibility
            </h2>
            <p>To participate, an applicant must:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                be an EdTech startup developing a technology-enabled product or
                service for education or learning;
              </li>
              <li>
                submit a complete application through the official GESAwards
                application process by the applicable deadline;
              </li>
              <li>
                apply to the appropriate region, track, or category, subject to
                reasonable reassignment by the organizers where needed; and
              </li>
              <li>
                have the legal authority and rights required to participate and
                to submit all application materials.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              3. Application information and representations
            </h2>
            <p>
              Applicants are responsible for ensuring that information supplied
              in the application is accurate, complete, and not misleading.
              Applicants represent that they have the necessary rights to all
              text, logos, images, videos, pitch materials, product information,
              and other content submitted to GESAwards and that submitting such
              materials does not knowingly infringe third-party intellectual
              property, privacy, confidentiality, or other rights.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              4. Ownership of intellectual property
            </h2>
            <p>
              Applicants retain ownership of their company, technology,
              products, services, intellectual property, and application
              materials. Participation in GESAwards does not transfer ownership
              of an applicant's intellectual property to GESAwards, MindCET, or
              any competition partner.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              5. Limited permission to use submitted materials
            </h2>
            <p>
              By applying, the applicant grants GESAwards, MindCET, and relevant
              competition partners a non-exclusive, worldwide, royalty-free
              license to use, reproduce, display, and share submitted materials
              only as reasonably necessary to administer, evaluate, document,
              and promote GESAwards.
            </p>
            <p className="mt-3">
              This may include sharing application materials with judges,
              regional organizers, event partners, and service providers
              involved in operating the competition. Public-facing materials,
              such as the startup name, logo, website, short description,
              publicly presented pitch materials, and approved images or videos,
              may also be used in GESAwards communications, websites, social
              media, event materials, press activity, and competition archives.
            </p>
            <p className="mt-3">
              This permission does not give GESAwards or MindCET the right to
              sell, license, or commercially exploit an applicant's underlying
              technology or intellectual property for purposes unrelated to the
              competition.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              6. Confidential and sensitive information
            </h2>
            <p>
              Applicants should not submit trade secrets, patent-sensitive
              disclosures, source code, or other highly confidential information
              that they are not prepared to share with the people and service
              providers involved in evaluating and operating the competition.
              Unless GESAwards expressly agrees otherwise in writing, submission
              of an application does not create a non-disclosure agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              7. Judging
            </h2>
            <p>Applications may be assessed using the following criteria:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>addressing a clear pain point relevant to the market;</li>
              <li>providing an innovative pedagogical approach;</li>
              <li>offering a relevant and effective user experience;</li>
              <li>
                demonstrating growth potential based on a sustainable business
                model; and
              </li>
              <li>demonstrating product viability.</li>
            </ul>
            <p className="mt-3">
              GESAwards may use international, regional, and subject-matter
              judges. Where a conflict of interest is identified, GESAwards may
              take reasonable steps such as assigning a different judge. Judging
              decisions are final, except that the organizers may correct an
              administrative or procedural error at their discretion.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              8. Competition process and participation
            </h2>
            <p>
              The competition may include regional or track-based selection,
              semifinals, finalist activities, presentations, interviews, and a
              global final. Selected applicants may be required to participate
              online or in person and to provide additional reasonable
              information. Failure to participate or respond within a stated
              timeframe may result in replacement or disqualification.
            </p>
            <p className="mt-3">
              Dates, formats, locations, and competition stages are published on
              the official GESAwards website and may be changed when reasonably
              necessary. Material changes will be communicated where practical.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              9. Publicity and competition events
            </h2>
            <p>
              Finalists, winners, and participants in public GESAwards events
              acknowledge that their startup name, logo, representative names,
              photographs, video, audio, quotes, and public presentations may be
              recorded and used for GESAwards editorial, documentary, and
              promotional purposes. Such use does not imply endorsement of the
              startup outside the context of GESAwards.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              10. Prizes and benefits
            </h2>
            <p>
              Any prizes, opportunities, introductions, benefits, or partner
              offers are subject to the terms announced for the relevant stage,
              region, or category and may be subject to availability or separate
              third-party conditions. Participation does not guarantee funding,
              investment, a commercial relationship, or any particular business
              outcome. Taxes, fees, and similar obligations associated with a
              prize are the recipient's responsibility where applicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              11. Disqualification
            </h2>
            <p>
              GESAwards may disqualify an applicant for material ineligibility,
              false or misleading information, fraud, serious misconduct,
              infringement of third-party rights, breach of these Terms, or
              failure to participate in required competition activities. Where
              practicable, GESAwards will provide notice before taking such
              action.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              12. Personal data and privacy
            </h2>
            <p>
              Personal information submitted in connection with GESAwards may be
              used to administer the competition, communicate with applicants,
              coordinate judging and regional activities, and operate related
              events and services. Information may be processed by service
              providers used for the application and competition workflow and
              may be transferred across borders where those providers or
              competition partners operate.
            </p>
            <p className="mt-3">
              For additional information about privacy and data handling, see the{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-navy underline underline-offset-4"
              >
                GESAwards Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              13. Changes, suspension, and cancellation
            </h2>
            <p>
              GESAwards may reasonably modify the competition schedule, format,
              categories, judging arrangements, events, or benefits, or suspend
              or cancel part or all of the competition where circumstances make
              this necessary. GESAwards will seek to communicate material
              changes promptly. Material changes to these Terms will not
              retroactively alter an applicant's rights or obligations without
              notice or agreement where required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              14. Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, GESAwards,
              MindCET, competition partners, judges, and service providers are
              not liable for indirect, incidental, special, or consequential
              losses arising from participation in the competition, including
              loss of opportunity, profit, or business. Nothing in these Terms
              excludes liability that cannot legally be excluded or limited.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              15. No partnership or investment relationship
            </h2>
            <p>
              Participation in GESAwards does not create an employment,
              partnership, agency, joint venture, fiduciary, investment, or
              advisory relationship between an applicant and GESAwards, MindCET,
              any judge, or any competition partner.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              16. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the State of Israel,
              without regard to conflict-of-law principles. The competent courts
              in Israel will have jurisdiction over disputes relating to these
              Terms, subject to any mandatory rights or jurisdiction that cannot
              legally be waived.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              17. Contact
            </h2>
            <p>
              Questions about these Terms or the 2026 competition may be sent to{" "}
              <a
                href="mailto:gesa@mindcet.io"
                className="font-semibold text-navy underline underline-offset-4"
              >
                gesa@mindcet.io
              </a>
              .
            </p>
          </section>

          <section className="border-t border-line pt-6">
            <p className="text-sm">
              Effective and last updated: {LAST_UPDATED}. These Terms govern
              applications submitted on or after this date and do not
              retroactively change the terms applicable to applications submitted
              earlier unless expressly agreed.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
