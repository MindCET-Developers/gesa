import type { ContinentKey } from "@/lib/content/types";

export type ContinentMeta = {
  key: ContinentKey;
  label: string;
  colorVar: string;
};

export const CONTINENTS: ContinentMeta[] = [
  { key: "north-america", label: "N. America", colorVar: "--color-brand" },
  { key: "europe", label: "Europe", colorVar: "--color-sky" },
  { key: "middle-east", label: "Middle East", colorVar: "--color-accent-yellow" },
  { key: "asia", label: "Asia", colorVar: "--color-teal" },
  { key: "latin-america", label: "Latin America", colorVar: "--color-accent-red" },
  { key: "africa", label: "Africa", colorVar: "--color-forest" },
  { key: "rest-of-world", label: "Rest of World", colorVar: "--color-violet" },
];

export const WORLDWIDE_COLOR_VAR = "--color-navy";
