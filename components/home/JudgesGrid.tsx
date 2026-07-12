import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Judge } from "@/lib/content/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ judge }: { judge: Judge }) {
  if (judge.photo) {
    return (
      <Image
        src={judge.photo}
        alt={judge.name}
        width={112}
        height={112}
        className="size-28 rounded-full object-cover ring-4 ring-white shadow-md"
      />
    );
  }
  return (
    <div
      aria-hidden
      className="grid size-28 place-items-center rounded-full bg-gradient-to-br from-brand to-navy font-display text-2xl font-bold text-white ring-4 ring-white shadow-md"
    >
      {initials(judge.name)}
    </div>
  );
}

export function JudgesGrid({ judges }: { judges: Judge[] }) {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="The judges"
          title="Evaluated by global EdTech leaders"
          intro="Founders, investors and educators from the world's leading education organisations."
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {judges.map((judge) => (
            <li key={judge.name} className="flex flex-col items-center text-center">
              <Avatar judge={judge} />
              <h3 className="mt-4 font-display text-base font-bold text-navy">
                {judge.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-brand-700">{judge.title}</p>
              <p className="text-sm text-muted">{judge.company}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
