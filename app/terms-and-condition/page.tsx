import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms and condition",
  description: "Terms and conditions for participation in the 2026 Global EdTech Startup Awards.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Competition"
        title="Terms and condition"
        intro="The conditions for participation in the 2026 Global EdTech Startup Awards are set out below."
      />

      <article className="container-page max-w-3xl py-16 md:py-20">
        <div className="space-y-6 text-base leading-relaxed text-muted">
          <ol className="list-decimal space-y-6 pl-6">
            <li>The conditions for participation in the competition are set out below.</li>

            <li>
              MindCET and Partners (together the &quot;Organizers&quot;), through the competition
              website – gesawards.io – are holding a competition to find the most promising
              startups in EdTech for 2026.
            </li>

            <li>
              The competition will take place in the facilities and during the periods shown on
              the competition website. The Organizers may change the above dates, at their own
              discretion, and no claims by any participant shall be permitted in connection with
              such a decision.
            </li>

            <li>
              Any person may apply with a startup in the EdTech field, using the startup
              application form on the competition website. The winners of the competition will be
              the founders of the winning startups.
            </li>

            <li>
              Prize winners (if any) will receive the prize stated currently on the competition
              website or will be added to the website on a later date, before the end of the
              competition.
            </li>

            <li>The applicant is responsible for any and all content that they upload.</li>

            <li>
              The competition Organizers may reject the application of a startup which, in their
              sole opinion, is not in the EdTech field. No appeals will be permitted against
              non-inclusion in the competition.
            </li>

            <li>Startups participating in the competition will be publicized on the competition&apos;s website.</li>

            <li>
              Website users may be given the option of critiquing and ranking the uploaded clips,
              subject to the decision of the Organizers. In that case, it will be forbidden for
              participants to vote for their own clip, or to manipulate or influence the ranking
              of the clips in any way, including through other parties.
            </li>

            <li>
              Only startups that are submitted through the competition website between the
              application open and close dates as shown on the competition website will
              participate in the competition. The Organizers may change the above dates, at their
              sole discretion, and no claims by any participant shall be permitted in connection
              with such a decision.
            </li>

            <li>
              All decisions relating to the administration of the competition, including, but not
              limited to, application, selection of winners, publication or any other decision,
              shall be made exclusively and solely by the Organizers at their sole discretion and
              no claims by any participant shall be permitted in connection with any of the above
              stated.
            </li>

            <li>
              The Organizers shall not be required to provide any explanation or clarifications
              with respect to their decision as to the identity of the winner of the competition
              or regarding any other decisions under these terms and conditions, and no appeal may
              be made against any of their decisions.
            </li>

            <li>
              The Organizers shall be entitled, at their sole discretion, to publish
              advertisements and/or reports and/or other publications with details regarding the
              competition including aggregate reports regarding trends analysis and global
              overviews of the EdTech market.
            </li>

            <li>
              The Organizers shall be entitled to contact participants with invitations to
              special events and invitation to participate in special tracks within the
              competition.
            </li>

            <li>
              In any case of discrepancy and/or inconsistency whatsoever between the provisions
              of these terms and conditions and any other publication, these terms and conditions
              shall prevail.
            </li>

            <li>
              The Organizers shall be entitled, at any stage, to suspend and/or cancel the
              competition by providing a written notice of such is published on the competition
              website. No claims by any participant shall be permitted in connection with such a
              decision.
            </li>

            <li>
              The Organizers shall be entitled to modify the terms and conditions for the
              competition, as set out herein, at their sole discretion, provided that a written
              notice of the change is published on the competition website.
            </li>

            <li>
              The Organizers shall not be liable for any damages, injury to reputation, monetary
              or non-monetary loss, or any damage of whatever kind, caused to any participant as a
              result of and/or in connection with their participation or non-participation in the
              competition.
            </li>

            <li>
              Selection of the startups shall be by a judging panel, as announced on the
              competition website.
            </li>

            <li>
              <p className="mb-3 font-semibold text-navy">General information:</p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  Selection criteria: The product shall (1) Address a clear pain point, relevant
                  to the market (2) Provide an innovative pedagogical approach (3) Have an
                  outstanding user experience (4) Show potential for tremendous growth in their
                  user base (5) Operate in the context of a sustainable business model.
                </li>
                <li>
                  Selection of the winners shall be at the sole discretion of the judging panel,
                  and the panel shall not be required to justify or provide any explanations or
                  clarifications with respect to any of its decisions. Participants and/or their
                  agents shall not have and hereby waive any right of appeal against the decision
                  of the judging panel.
                </li>
                <li>
                  The Organizers of the competition shall be entitled, at their discretion, to
                  make any use of the content uploaded to the website by users. Such use may
                  include, but will not be limited to, commercial use, modification and editing,
                  copying and distribution.
                </li>
                <li>
                  The prizes for the competition (if any) shall be as shown on the competition
                  website. The prizes are personal awards and not transferable. Notice of winning
                  a prize will be sent by e-mail to the applicable winners.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </article>
    </>
  );
}
