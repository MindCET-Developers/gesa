type Props = {
  kicker?: string;
  title: string;
  intro?: string;
};

export function PageHero({ kicker, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 0%, rgba(17,109,255,0.4), transparent 60%)",
        }}
      />
      <div className="container-page relative py-16 md:py-24">
        {kicker && (
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky">
            {kicker}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
