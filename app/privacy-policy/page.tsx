import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Global EdTech Startup Awards",
};

const LAST_UPDATED = "July 15, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <div className="container-page py-14 md:py-20">
        <div className="prose prose-invert max-w-3xl space-y-6">
          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              1. About This Policy
            </h2>
            <p className="text-white/70 leading-relaxed">
              This Privacy Policy describes how Global EdTech Startup Awards
              (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or the &quot;Site&quot;) collects, uses, and maintains
              your personal information when you visit gesawards.io.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              2. Information We Collect
            </h2>
            <p className="text-white/70 leading-relaxed mb-3">
              We collect information in two ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70">
              <li>
                <strong>Information you provide directly:</strong> when you
                subscribe to our newsletter, we collect your email address. It
                is stored with our email service provider (Resend) and used
                only to send you updates about the awards. You can unsubscribe
                at any time via the link in any email.
              </li>
              <li>
                <strong>Information collected automatically:</strong> usage and
                device data collected through cookies and similar technologies,
                as described below — and only with your consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              3. Google Analytics
            </h2>
            <p className="text-white/70 leading-relaxed mb-3">
              We use Google Analytics to understand how visitors use our website
              and to improve its performance. Google Analytics stores optional
              cookies on your device.
            </p>
            <p className="text-white/70 leading-relaxed mb-3">
              <strong>Analytics Cookies:</strong> These cookies help us
              understand visitor behavior, identify popular pages, and see how
              users navigate through our site.
            </p>
            <p className="text-white/70 leading-relaxed">
              You can control the collection of this data by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mt-2">
              <li>Rejecting cookies when you first visit</li>
              <li>Changing your choice at any time via cookie settings</li>
              <li>
                Using the Google Analytics opt-out browser extension (
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-brand hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  click here
                </a>
                )
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              4. Google Ads and Advertising
            </h2>
            <p className="text-white/70 leading-relaxed mb-3">
              We run advertising campaigns through Google Ads. If you consent
              to advertising cookies, Google may use cookies and similar
              technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-3">
              <li>
                Measure conversions — for example, whether a visit from an ad
                led to a newsletter signup
              </li>
              <li>
                Attribute visits to the ad campaigns that brought you here
              </li>
              <li>Show you personalized ads on other websites (remarketing)</li>
            </ul>
            <p className="text-white/70 leading-relaxed mb-3">
              We use Google Consent Mode v2: advertising cookies
              (<span className="whitespace-nowrap">ad_storage</span>,{" "}
              <span className="whitespace-nowrap">ad_user_data</span>,{" "}
              <span className="whitespace-nowrap">ad_personalization</span>) are
              denied by default and are activated only after you click
              &quot;Accept&quot; in the cookie banner. If you decline, Google may still
              receive limited, cookieless signals (such as an ad-click
              identifier passed in the page URL) for aggregate, non-identifying
              campaign measurement.
            </p>
            <p className="text-white/70 leading-relaxed">
              You can manage how Google personalizes ads for you at{" "}
              <a
                href="https://adssettings.google.com"
                className="text-brand hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              5. Cookies and Tracking
            </h2>
            <p className="text-white/70 leading-relaxed mb-3">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70">
              <li>Understand how visitors use our website (analytics)</li>
              <li>Measure and improve our advertising campaigns</li>
              <li>Improve site performance and user experience</li>
              <li>Remember your consent preferences</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-3">
              No optional cookies are set until you make a choice in the cookie
              banner. Your consent preference itself is stored locally in your
              browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              6. Your Choices and Rights
            </h2>
            <p className="text-white/70 leading-relaxed mb-3">
              You have full control over your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70">
              <li>Accept or reject optional cookies on your first visit</li>
              <li>
                Change your preferences at any time using cookie settings (in
                the site footer)
              </li>
              <li>Unsubscribe from the newsletter at any time</li>
              <li>
                Request access to, correction of, or deletion of the personal
                data we hold about you by contacting us at the address below
              </li>
              <li>
                Be confident we won&apos;t use cookies you haven&apos;t authorized
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              7. Third-Party Services
            </h2>
            <p className="text-white/70 leading-relaxed mb-3">
              We share data only with the service providers needed to operate
              this site:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70">
              <li>
                <strong>Google (Analytics and Ads)</strong> — usage and
                advertising measurement data, subject to your cookie consent (
                <a
                  href="https://policies.google.com/privacy"
                  className="text-brand hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
                )
              </li>
              <li>
                <strong>Resend</strong> — your email address, if you subscribe
                to our newsletter (
                <a
                  href="https://resend.com/legal/privacy-policy"
                  className="text-brand hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resend Privacy Policy
                </a>
                )
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-3">
              We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              8. Contact Us
            </h2>
            <p className="text-white/70 leading-relaxed">
              For questions about this privacy policy or your data, please
              contact us at{" "}
              <a
                href="mailto:gesa@mindcet.io"
                className="text-brand hover:underline"
              >
                gesa@mindcet.io
              </a>
            </p>
          </section>

          <section className="border-t border-white/10 pt-6 mt-8">
            <p className="text-xs text-white/50">Last updated: {LAST_UPDATED}</p>
          </section>
        </div>
      </div>
    </>
  );
}
