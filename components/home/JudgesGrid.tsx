import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Judge } from "@/lib/content/types";

function JudgeCard({ judge }: { judge: Judge }) {
  const card = (
    <>
      <Image
        src={judge.photo}
        alt={judge.name}
        width={96}
        height={96}
        className="size-20 rounded-full object-cover ring-2 ring-white shadow-md transition-transform duration-200 group-hover:scale-105 md:size-24"
      />
      <h3 className="mt-3 font-display text-sm font-bold leading-snug text-navy">
        {judge.name}
      </h3>
      {judge.title ? (
        <p className="mt-0.5 text-xs font-semibold leading-snug text-brand-700">
          {judge.title}
        </p>
      ) : null}
      {judge.company ? (
        <p className="text-xs leading-snug text-muted">{judge.company}</p>
      ) : null}
    </>
  );

  return (
    <li className="group flex flex-col items-center text-center">
      {judge.linkedin ? (
        <a
          href={judge.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-xl focus-visible:outline-2 focus-visible:outline-brand"
        >
          {card}
        </a>
      ) : (
        card
      )}
    </li>
  );
}

export function JudgesGrid({ judges }: { judges: Judge[] }) {
  const judgesWithPhotos = judges.filter((judge) => judge.photo);

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="The judges"
          title="Evaluated by global EdTech leaders"
          intro="Founders, investors and educators from the world's leading education organisations."
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {judgesWithPhotos.map((judge) => (
            <JudgeCard key={judge.name} judge={judge} />
          ))}
        </ul>
      </div>
    </section>
  );
}
