import Image from "next/image";
import type { HomeContent, RegionalSemifinal } from "@/lib/content/types";

export function RegionalSeminalsGrid({
  home,
  semifinals,
}: {
  home: HomeContent;
  semifinals: RegionalSemifinal[];
}) {
  if (semifinals.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl">
            {home.editionYear} Regional Semifinals
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {semifinals.map((semifinal) => (
            <a
              key={semifinal.region}
              href={semifinal.url ?? "#"}
              target={semifinal.url ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-line bg-white p-8 text-center transition hover:border-brand/40 hover:shadow-lg"
            >
              <div className="mb-4 h-20 w-full">
                <Image
                  src={semifinal.logo}
                  alt={semifinal.name}
                  width={160}
                  height={80}
                  className="h-full w-auto object-contain mx-auto"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-navy">
                {semifinal.name}
              </h3>
              <p className="mt-2 flex items-center justify-center gap-1 text-sm text-muted">
                {semifinal.country && (
                  <>
                    {semifinal.country}
                    {semifinal.region !== semifinal.country && (
                      <>
                        <span>•</span>
                        {semifinal.region}
                      </>
                    )}
                  </>
                )}
                {!semifinal.country && semifinal.region}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
