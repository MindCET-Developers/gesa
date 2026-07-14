import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteShell } from "@/components/layout/SiteShell";
import { GoogleConsentMode } from "@/components/cookies/GoogleConsentMode";
import { CookieConsentBanner } from "@/components/cookies/CookieConsentBanner";
import { getSiteSettings } from "@/lib/content";

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
  metadataBase: new URL("https://www.gesawards.io"),
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
    url: "https://www.gesawards.io",
    siteName: "GESAwards",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${raleway.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        <GoogleConsentMode />
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
        <GoogleAnalytics gaId="G-4JBT3Y2KMR" />
      </body>
    </html>
  );
}
