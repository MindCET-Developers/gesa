import type { Metadata } from "next";
import Link from "next/link";
import { BootcampAgenda } from "@/components/bootcamp/BootcampAgenda";
import { BootcampSpeakers } from "@/components/bootcamp/BootcampSpeakers";
import { PageHero } from "@/components/layout/PageHero";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Bootcamp 2027",
  description:
    "GESAwards Bootcamp, January 18 & 19, 2027, Central London: an exclusive two-day intensive program for the top 50–60 startups selected at the GESAwards Regional Semifinals.",
};

// Copy approved by Cecilia Waismann (Google Doc "GESAwards Bootcamp 2027 – Content Draft", Nov 2026).
const highlights = [
  { number: "Jan 18–19", label: "2027", detail: "Two days, ahead of the Global Finals on January 21." },
  { number: "London", label: "Central London", detail: "The exact address will be sent closer to the event." },
  { number: "50–60", label: "Regional champions", detail: "Selected as the best at the GESAwards Regional Semifinals." },
  { number: "By invitation", label: "Exclusive prize", detail: "Awarded to the regional champions." },
];

const pillars = [
  {
    title: "Global Connections",
    description:
      "Direct access to fellow international founders, influential investors, and GESAwards partners to share challenges, insights, and opportunities across the global EdTech landscape.",
  },
  {
    title: "Stage Opportunities & Peer Insights",
    description:
      "Many participating companies will have the chance to take the stage to showcase not only their product's added value, but also their real-world challenges and know-how within their current target markets.",
  },
  {
    title: "Hands-On Workshops & Content",
    description:
      "Interactive sessions and presentations led by industry experts, focusing on practical tools and the most critical aspects of scaling a business—specifically tailored for companies looking to expand across international borders.",
  },
  {
    title: "Actionable Outcomes",
    description:
      "An emphasis on real-world, hands-on experience that equips founders with usable strategies to accelerate their growth ahead of the Finals and beyond.",
  },
];

export default function BootcampPage() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        kicker="January 18 & 19, 2027 · Central London"
        title="GESAwards Bootcamp"
        intro="Global EdTech Startup (GESAwards) Bootcamp — an exclusive, two-day intensive program for the year's standout EdTech companies."
      />

      {/* Highlights Band */}
      <section className="border-b border-line bg-surface/60 py-10">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-line bg-white p-5 md:p-6 shadow-sm"
              >
                <div className="font-display text-2xl font-extrabold text-brand-700 md:text-3xl">
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-brand-700">
                About The Program
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl md:text-5xl">
                The premier annual encounter for the year&apos;s standout EdTech companies.
              </h2>
              <dl className="mt-6 grid gap-2 text-base text-navy">
                <div><dt className="inline font-bold">When: </dt><dd className="inline">January 18 &amp; 19, 2027</dd></div>
                <div><dt className="inline font-bold">Where: </dt><dd className="inline">Central London (specific address will be sent closer to the event)</dd></div>
              </dl>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                The GESAwards Bootcamp is an exclusive, two-day intensive program designed for the top 50–60 startups thoroughly selected as the best during the GESAwards Regional Semifinals, celebrated throughout the world. Representing various EdTech verticals and growth stages across every region of the world, these finalists gather alongside GESAwards global partners, key investors, top industry leaders, and government representatives.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Awarded as an exclusive prize to these regional champions, the Bootcamp serves as the premier annual encounter for the year&apos;s standout EdTech companies. It provides participating companies with unique connections essential to their growth, as well as a dedicated space to learn, explore, and scale.
              </p>
            </div>

            {/* What to Expect */}
            <div>
              <h3 className="text-xl font-extrabold text-navy">What to Expect</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-md"
                  >
                    <h4 className="font-extrabold text-base text-navy">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2027 agenda status */}
          <div
            role="note"
            className="mt-14 flex flex-col gap-4 rounded-2xl border border-brand/30 bg-brand/5 p-6 md:flex-row md:items-center md:justify-between"
          >
            <p className="text-base text-navy">
              <strong>The 2027 agenda is still being finalized</strong> and will be shared online soon. Below are the agenda and speakers of January 2026, for reference only.
            </p>
            <a
              href="#agenda"
              className={buttonClasses({ variant: "secondary", size: "md", className: "gap-2 shrink-0" })}
            >
              View 2026 agenda
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Two-Day Interactive Agenda */}
      <BootcampAgenda />

      {/* Featured Mentors & Speakers */}
      <BootcampSpeakers />

      {/* Location & Participation */}
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
              Bootcamp 2027
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              January 18 &amp; 19, 2027 · Central London
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-sky">Location</p>
                <p className="mt-1 font-bold text-white text-base">Central London</p>
                <p className="mt-1 text-xs text-white/60">
                  The specific address will be sent closer to the event.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-sky">Participation</p>
                <p className="mt-1 font-bold text-white text-base">By Invitation Only</p>
                <p className="mt-1 text-xs text-white/60">
                  Open to startups placed 1st, 2nd or 3rd in the GESAwards Regional Semifinals.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className={buttonClasses({ variant: "primary", size: "lg", className: "gap-2" })}
              >
                About GESAwards
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
