import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteShell } from "@/components/layout/SiteShell";
import { GtagInit } from "@/components/analytics/GtagInit";
import { CookieConsentBanner } from "@/components/cookies/CookieConsentBanner";
import { getSiteSettings } from "@/lib/content";
import { SITE_URL, jsonLdString } from "@/lib/site";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-4JBT3Y2KMR";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Global EdTech Startup Awards (GESAwards)",
    template: "%s · GESAwards",
  },
  description:
    "GESAwards is the largest EdTech startup competition and community in the world — 9,000+ startups from 155 countries. Apply for the 2026 edition.",
  openGraph: {
    title: "Global EdTech Startup Awards (GESAwards)",
    description:
      "The largest EdTech startup competition and community in the world. Step onto the global EdTech stage.",
    url: SITE_URL,
    siteName: "GESAwards",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global EdTech Startup Awards",
    alternateName: "GESAwards",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/gesawards-white.png`,
    sameAs: settings.social.map((s) => s.href),
  };

  return (
    <html
      lang="en"
      className={`${raleway.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        <GtagInit adsId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID} />
        <SiteShell
          header={
            <Header
              logoText={settings.logoText}
              nav={settings.nav}
            />
          }
          footer={<Footer />}
        >
          {children}
        </SiteShell>
        <CookieConsentBanner />
        <Analytics />
        <GoogleAnalytics
          gaId={GA_ID}
          debugMode={process.env.NODE_ENV !== "production"}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
