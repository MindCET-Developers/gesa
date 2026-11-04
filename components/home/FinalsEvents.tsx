// Finals week of the current edition. Dates are fixed for the 2026 edition (held January 2027).
export const FINALS_EVENTS = [
  { title: "Exclusive All Stars Bootcamp", dates: "January 18 & 19", startDate: "2027-01-18", endDate: "2027-01-19" },
  { title: "Grand Finale", dates: "January 21", startDate: "2027-01-21", endDate: "2027-01-21" },
] as const;

export function FinalsEvents({ editionYear }: { editionYear: number }) {
  return (
    <section aria-labelledby="finals-events-title" className="border-y border-navy/10 bg-white py-14 md:py-16">
      <div className="container-page text-center">
        <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-brand">
          GESAwards {editionYear} Finals Events
        </span>
        <h2
          id="finals-events-title"
          className="mx-auto mt-3 max-w-3xl text-2xl font-extrabold leading-[1.15] text-navy sm:text-3xl md:text-4xl"
        >
          The Encounter of the Best EdTech Startups from around the world
        </h2>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {FINALS_EVENTS.map((event) => (
            <li key={event.title} className="rounded-xl border border-navy/10 bg-navy/[0.03] p-5">
              <p className="font-display text-xl font-extrabold text-navy">{event.dates}</p>
              <p className="mt-1 text-sm text-navy/70">{event.title}</p>
            </li>
          ))}
          <li className="rounded-xl bg-navy p-5 text-white">
            <p className="font-display text-xl font-extrabold text-sky">London</p>
            <p className="mt-1 text-sm text-white/70">Meeting place</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
