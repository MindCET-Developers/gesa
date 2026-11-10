import type { Metadata } from "next";
import Link from "next/link";
import { BootcampAgenda } from "@/components/bootcamp/BootcampAgenda";
import { BootcampSpeakers } from "@/components/bootcamp/BootcampSpeakers";
import { PageHero } from "@/components/layout/PageHero";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight, Check } from "@/components/ui/icons";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bootcamp",
  description:
    "The GESAwards All-Stars Bootcamp: A two-day intensive program in London exclusively for global finalists, investors, and EdTech leaders.",
};

const highlights = [
  {
    number: "40–50",
    label: "Selected EdTech Startups",
    detail: "Top finalists from regional semifinal tracks across 6 continents.",
  },
  {
    number: "35+",
    label: "Global Speakers & Mentors",
    detail: "Founders, tier-1 investors, academic specialists, and legal partners.",
  },
  {
    number: "2 Days",
    label: "Intensive Workshops & Roundtables",
    detail: "Direct, high-yield working sessions focused on market readiness and funding.",
  },
  {
    number: "London",
    label: "22 Bishopsgate, Cooley",
    detail: "Panoramic skyline views and private networking drinks.",
  },
];

const pillars = [
  {
    title: "Venture & Investment Signals",
    description:
      "Direct discussions with international VC partners (Brighteye VC, Owl Ventures, Rethink Capital, IBIS) on market conditions, realistic valuations, and funding roadmaps.",
    tag: "Investment",
  },
  {
    title: "Market Access & Proof",
    description:
      "Go-to-market strategies built on efficacy and procurement proof rather than speculation — navigating US, European, LATAM, and Asian ecosystems.",
    tag: "Scale",
  },
  {
    title: "AI Beyond the Hype",
    description:
      "Hands-on teardowns of real classroom utility versus generative wrappers, AI avatars, automated assessment tools, and defensible technology moats.",
    tag: "Technology",
  },
  {
    title: "M&A, Compliance & Governance",
    description:
      "Practical workshops led by Cooley LLP on cross-border IP protection, global student data privacy regulations (GDPR / COPPA), and institutional readiness.",
    tag: "Legal & IP",
  },
];

export default async function BootcampPage() {
  const settings = await getSiteSettings();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        kicker="Exclusive for Finalists"
        title="GESAwards Bootcamp"
        intro="A two-day intensive accelerator prior to the GESAwards London Finals — equipping selected founders with hands-on venture tools, strategic partnerships, and global market access."
      />

      {/* Highlights Band */}
      <section className="border-b border-line bg-surface/60 py-10">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-line bg-white p-5 md:p-6 shadow-sm"
              >
                <div className="font-display text-3xl font-extrabold text-brand-700 md:text-4xl">
                  {item.number}
                </div>
                <div className="mt-1 font-bold text-navy text-sm md:text-base">
                  {item.label}
                </div>
                <div className="mt-1.5 text-xs leading-relaxed text-muted">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is the Bootcamp */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-brand-700">
                About The Program
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl md:text-5xl">
                Practical, hands-on, and built for usable outcomes.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                The Global Edtech Startup Bootcamp is a high-impact, two-day closed gathering held in London immediately prior to the GESAwards Finals.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Finalists share candid challenges, receive dedicated mentoring from leading sector operators, and engage with institutional investors looking for scalable solutions in learning, assessment, and workforce readiness.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#agenda"
                  className={buttonClasses({
                    variant: "primary",
                    size: "lg",
                    className: "gap-2",
                  })}
                >
                  Explore Agenda
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/about"
                  className={buttonClasses({
                    variant: "secondary",
                    size: "lg",
                  })}
                >
                  About GESAwards
                </Link>
              </div>
            </div>

            {/* Pillars Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-md"
                >
                  <span className="inline-block rounded-md bg-navy/5 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-navy">
                    {pillar.tag}
                  </span>
                  <h3 className="mt-3 font-extrabold text-base text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two-Day Interactive Agenda */}
      <BootcampAgenda />

      {/* Featured Mentors & Speakers */}
      <BootcampSpeakers />

      {/* Host & Location Section */}
      <section className="bg-navy py-20 text-white md:py-28 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(70% 90% at 90% 10%, rgba(78,183,245,0.3), transparent 60%)",
          }}
        />
        <div className="container-page relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-sky">
              Host & Venue
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Cooley LLP · 22 Bishopsgate, London
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              Hosted in partnership with Cooley LLP in the heart of London&apos;s financial and technology district, offering panoramic views, cutting-edge conference facilities, and premier networking space for founders and guests.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-sky">
                  Location
                </p>
                <p className="mt-1 font-bold text-white text-base">
                  22 Bishopsgate, London EC2N 4BQ
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Cooley London Office, Top-tier Technology & Life Sciences legal advisory.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-sky">
                  Participation
                </p>
                <p className="mt-1 font-bold text-white text-base">
                  By Invitation Only
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Reserved for GESAwards finalists, partners, and accredited investors.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={settings.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({
                  variant: "primary",
                  size: "lg",
                  className: "gap-2",
                })}
              >
                Apply for GESAwards
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/semifinals"
                className="text-sm font-bold text-white/80 hover:text-white underline underline-offset-4"
              >
                Find your Regional Semifinal →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
