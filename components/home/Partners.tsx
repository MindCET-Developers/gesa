import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import type { HomeContent, Partner } from "@/lib/content/types";

function LogoGroup({ title, items }: { title: string; items: Partner[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
        {title}
      </h3>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {items.map((p, i) =>
          p.logo ? (
            <a
              key={i}
              href={p.url ?? "#"}
              target={p.url ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="grid h-16 w-40 place-items-center grayscale transition hover:grayscale-0"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={160}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </a>
          ) : (
            <a
              key={i}
              href={p.url ?? "#"}
              target={p.url ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-display text-xl font-extrabold tracking-tight text-navy/70 transition hover:text-navy"
            >
              {p.name}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export function Partners({
  home,
  partners,
}: {
  home: HomeContent;
  partners: Partner[];
}) {
  const poweredBy = partners.filter((p) => p.type === "powered-by");
  const worldwide = partners.filter((p) => p.type === "worldwide");
  const sponsors = partners.filter((p) => p.type === "prize-sponsor");

  return (
    <section className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl">
          {home.joinTitle}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">{home.joinBody}</p>
        <Link
          href="/terms-and-condition"
          className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand hover:gap-2.5 transition-all"
        >
          Read the competition terms
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-16 space-y-12 border-t border-line pt-14">
        <LogoGroup title="Powered by" items={poweredBy} />
        <LogoGroup title="Worldwide partners" items={worldwide} />
        <LogoGroup title="Prizes offered by our partners" items={sponsors} />
      </div>
    </section>
  );
}
