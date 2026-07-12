import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL("https://www.globaledtechawards.org"),
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
    url: "https://www.globaledtechawards.org",
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
      <body className="flex min-h-full flex-col bg-white">
        <Header
          logoText={settings.logoText}
          nav={settings.nav}
          applyUrl={settings.applyUrl}
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
