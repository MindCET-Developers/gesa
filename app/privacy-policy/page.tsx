import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Global EdTech Startup Awards",
};

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
              your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              2. Google Analytics
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
              3. Cookies and Tracking
            </h2>
            <p className="text-white/70 leading-relaxed mb-3">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70">
              <li>Understand how visitors use our website</li>
              <li>Improve site performance and user experience</li>
              <li>Remember your consent preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              4. Your Choices
            </h2>
            <p className="text-white/70 leading-relaxed mb-3">
              You have full control over your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70">
              <li>
                Accept or reject optional cookies on your first visit
              </li>
              <li>
                Change your preferences at any time using cookie settings
              </li>
              <li>
                Be confident we won&apos;t use cookies you haven&apos;t authorized
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">
              5. Contact Us
            </h2>
            <p className="text-white/70 leading-relaxed">
              For questions about this privacy policy or your data, please
              contact us at{" "}
              <a
                href="mailto:mindcetdev@gmail.com"
                className="text-brand hover:underline"
              >
                mindcetdev@gmail.com
              </a>
            </p>
          </section>

          <section className="border-t border-white/10 pt-6 mt-8">
            <p className="text-xs text-white/50">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
