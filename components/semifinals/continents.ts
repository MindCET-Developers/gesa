import type { ContinentKey } from "@/lib/content/types";

export type ContinentMeta = {
  key: ContinentKey;
  label: string;
  colorVar: string;
  accessibleColor: string;
};

export const CONTINENTS: ContinentMeta[] = [
  { key: "north-america", label: "N. America", colorVar: "--color-brand", accessibleColor: "#0d4fbd" },
  { key: "europe", label: "Europe", colorVar: "--color-sky", accessibleColor: "#17658f" },
  { key: "middle-east", label: "Middle East", colorVar: "--color-accent-yellow", accessibleColor: "#765e00" },
  { key: "asia", label: "Asia", colorVar: "--color-teal", accessibleColor: "#08776e" },
  { key: "latin-america", label: "Latin America", colorVar: "--color-accent-red", accessibleColor: "#b51219" },
  { key: "africa", label: "Africa", colorVar: "--color-forest", accessibleColor: "#19713d" },
  { key: "rest-of-world", label: "Rest of World", colorVar: "--color-violet", accessibleColor: "#5b3bd6" },
];

export const WORLDWIDE_COLOR_VAR = "--color-navy";
