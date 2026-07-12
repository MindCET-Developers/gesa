import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RegionalSemifinalsGrid } from "@/components/home/RegionalSemifinalsGrid";
import { PageHero } from "@/components/layout/PageHero";
import { RichBody } from "@/components/ui/rich-body";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import {
  getPage,
  getHomeContent,
  getSiteSettings,
  getPartners,
  getRegionalSemifinals,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the Global EdTech Startup Awards — the largest EdTech startup competition and community in the world, powered by CET and MindCET.",
};

export default async function AboutPage() {
  const [page, home, settings, partners, semifinalRegions] = await Promise.all([
    getPage("about"),
    getHomeContent(),
    getSiteSettings(),
    getPartners(),
    getRegionalSemifinals(),
  ]);
  if (!page) notFound();

  return (
    <>
      <PageHero kicker="Who we are" title={page.title} intro={page.intro} />

      {/* Our Story */}
      <article className="container-page max-w-3xl py-16 md:py-20">
        <RichBody body={page.body} />
      </article>

      {/* Regional Semifinals and Finals Event */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center mb-16">
            <div>
              <SectionHeading
                kicker="How it works"
                title="Regional semifinals and Finals Event"
                intro="Each GESAwards partner organises a local event, bringing together a select group of applicants from its region to the Regional Semi-Final. The winners of the regional events become the candidates for the Final GESAwards event."
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Apply",
                  body: "EdTech startups from anywhere in the world submit their application online.",
                },
                {
                  step: "02",
                  title: "Regional Semifinals",
                  body: "Partners across six continents host local semifinals, each selecting the best startups from their region.",
                },
                {
                  step: "03",
                  title: "Global Finals — London",
                  body: "Regional champions convene at Bett London every January. An international panel of industry leaders selects the global winners.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-5">
                  <span className="font-display text-4xl font-extrabold text-brand/20 leading-none shrink-0">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
                    <p className="mt-1 text-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Partners Logos */}
          {partners.filter((p) => p.type === "worldwide").length > 0 && (
            <div className="border-t border-line pt-12">
              <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
                Regional Partners
              </h3>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {partners
                  .filter((p) => p.type === "worldwide")
                  .map((p, i) =>
                    p.logo ? (
                      <a
                        key={i}
                        href={p.url ?? "#"}
                        target={p.url ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="grid h-16 w-40 place-items-center grayscale transition hover:grayscale-0"
                        title={p.name}
                      >
                        <Image
                          src={p.logo}
                          alt={p.name}
                          width={160}
                          height={64}
                          className="max-h-16 w-auto object-contain"
                        />
                      </a>
                    ) : null
                  )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2026 Regional Semifinals Grid */}
      <RegionalSemifinalsGrid home={home} semifinals={semifinalRegions} />

      {/* GESAwards Bootcamp */}
      <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(60% 80% at 0% 100%, rgba(78,183,245,0.25), transparent 60%)",
          }}
        />
        <div className="container-page relative max-w-3xl">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-sky">
            Exclusive for finalists
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl md:text-5xl">
            GESAwards Bootcamp
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            A two-day event held just before the GESAwards London Finals, exclusively for GESAwards
            finalists. Participants receive significant connections, practical tools and specific
            opportunities to grow their businesses.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { stat: "~60", label: "Selected EdTech startups" },
              { stat: "Top 3", label: "Startups from each regional semifinal" },
              { stat: "Global", label: "Network of EdTech leaders & investors" },
            ].map(({ stat, label }) => (
              <li key={stat} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-extrabold text-sky">{stat}</p>
                <p className="mt-1 text-sm text-white/60">{label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-white/60 text-sm">
            Participants include GESAwards partners and a network of global EdTech leaders and investors.
          </p>
        </div>
      </section>

      {/* Competition Criteria */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            kicker="Competition criteria"
            title={home.criteriaTitle}
            intro="Every product or service is evaluated by our international panel against five clear standards."
            align="center"
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.criteria.map((c) => (
              <li
                key={c.index}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all hover:border-brand/40 hover:shadow-[0_18px_40px_-24px_rgba(17,109,255,0.5)]"
              >
                <span className="font-display text-5xl font-extrabold text-brand/15 transition-colors group-hover:text-brand/30">
                  {String(c.index).padStart(2, "0")}
                </span>
                <p className="mt-3 text-lg font-semibold leading-snug text-navy">{c.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* All Prizes / What you win */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            kicker="All prizes"
            title="What the best startups win"
            intro="The top entrepreneurs walk away with more than a trophy — they gain a launchpad for global growth."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Global exposure",
                body: "Reach investors, partners and media across the EdTech ecosystem worldwide.",
              },
              {
                title: "Valuable PR",
                body: "Coverage in leading education and technology publications and channels.",
              },
              {
                title: "Mentorship",
                body: "Direct access to a curated network of EdTech industry leaders and mentors.",
              },
              {
                title: "Cash prizes",
                body: "Monetary awards sponsored by GESAwards partners for top-performing startups.",
              },
              {
                title: "Business development",
                body: "Introductions and opportunities with investors and strategic partners.",
              },
              {
                title: "Next-stage accelerator",
                body: "Top entrepreneurs are invited to follow-up events and accelerator programmes.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-muted text-sm">
            For full eligibility details,{" "}
            <a
              href="/terms-and-condition"
              className="font-semibold text-brand hover:underline"
            >
              read the competition Terms & Conditions →
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 md:py-20 text-center">
        <h2 className="font-display text-2xl font-bold text-navy">
          Ready to step onto the global stage?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Applications for the {home.editionYear} edition are open to EdTech startups worldwide.
        </p>
        <a
          href={settings.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClasses({ size: "lg" })} mt-6`}
        >
          Apply for {home.editionYear}
          <ArrowRight className="size-5" />
        </a>
      </section>
    </>
  );
}
