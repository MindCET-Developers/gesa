// Canonical site origin. Single source of truth for metadata, sitemap,
// robots and structured data. NEXT_PUBLIC_* values are inlined at build
// time, so set NEXT_PUBLIC_SITE_URL in the hosting environment before build.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gesawards.io";

// Serializer for <script type="application/ld+json"> payloads. The `<`
// escape prevents `</script>` injection when values come from the CMS.
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
