import { cn } from "@/lib/utils";

type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <span
          className={cn(
            "inline-block text-sm font-bold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-brand" : "text-sky"
          )}
        >
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl",
          tone === "dark" ? "text-navy" : "text-white"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "dark" ? "text-muted" : "text-white/70"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
