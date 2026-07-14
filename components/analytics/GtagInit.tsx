import { COOKIE_CONSENT_KEY } from "@/lib/cookies";

/**
 * Inline gtag bootstrap rendered as the first child of <body>. It must run
 * synchronously before the GA loader so the Consent Mode v2 default is queued
 * ahead of any `config` command — next/script cannot guarantee that ordering
 * for inline scripts in the App Router (they go through the `__next_s` queue),
 * hence the native <script> tag.
 *
 * Also registers the Google Ads account (AW-…) when `adsId` is set; gtag.js
 * loaded by the GA component serves both products from the same dataLayer.
 */
export function GtagInit({ adsId }: { adsId?: string }) {
  const js = `(function(){
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var granted = false;
try {
  var c = JSON.parse(localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_KEY)}) || "null");
  granted = !!(c && c.accepted);
} catch (e) {}
var v = granted ? "granted" : "denied";
gtag("consent", "default", {
  analytics_storage: v,
  ad_storage: v,
  ad_user_data: v,
  ad_personalization: v,
  wait_for_update: 500
});
gtag("set", "url_passthrough", true);
${adsId ? `gtag("config", ${JSON.stringify(adsId)});` : ""}
})();`;

  return <script id="gtag-init" dangerouslySetInnerHTML={{ __html: js }} />;
}
