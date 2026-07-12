import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-[var(--ease-out-expo)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_-8px_rgba(17,109,255,0.7)] hover:bg-brand-600 hover:-translate-y-0.5",
  secondary:
    "bg-navy text-white hover:bg-navy-700 hover:-translate-y-0.5",
  ghost: "text-navy hover:bg-surface",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function buttonClasses(opts?: { variant?: Variant; size?: Size; className?: string }) {
  const { variant = "primary", size = "md", className } = opts ?? {};
  return cn(base, variants[variant], sizes[size], className);
}
