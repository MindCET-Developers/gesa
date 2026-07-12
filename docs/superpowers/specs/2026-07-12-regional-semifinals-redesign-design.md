# Regional Semifinals redesign — design spec

Date: 2026-07-12
Status: approved (visual direction validated via interactive artifact prototype)

## Summary

Replace the flat 3-column partner grid (`components/home/RegionalSeminalsGrid.tsx`) with a
continent-filterable list, matching a provided reference mockup: tabs across the top
(Worldwide + each continent), and below, semifinal partners grouped under continent headers,
each row showing overlapping country flags, the countries + partner name, and the partner's
logo.

Ships as **two surfaces**:
- A new dedicated page, `/semifinals`, with the full tabbed experience.
- A condensed teaser on the homepage (a handful of cards, no tabs) linking to `/semifinals`.

## Data source

Real content pulled from the GESAwards Airtable base (`appyTu8uOPQUVXD4x`), table **Partners**
(`tblAfv3rYs6GyXQEF`) — 28 records — cross-referenced with table **all countries**
(`tbl7wFk8g0AbGx7ee`) for continent classification and (as of this session) real logo files.

This is a **one-time pull**, not a live integration. Airtable is not the site's CMS (Sanity is,
per the existing architecture — see `lib/content/index.ts` and `docs/CMS-SETUP.md`); Airtable is
scoped to the application form. Data is transformed once into static seed data, matching how
`regionalSemifinals` already works today. Re-running the pull manually is how the data gets
refreshed later.

### Continent taxonomy

The **all countries** table's `Geographic Area` field is the source of truth for continent
grouping. Its schema lists 8 choices, but only 7 are actually used by any country — no country in
the base is tagged `Oceania`; Australia/New Zealand/Fiji are tagged `Rest of the world` instead.
Tabs therefore are:

`Worldwide` (shows everything, not a real category) · `Europe` · `Asia` · `Middle East` ·
`North America` · `Latin America` · `Africa` · `Rest of the World`

### Multi-continent partners

A partner's countries can span more than one continent (either genuinely — e.g. a partner
covering the whole Middle East + parts of South/Southeast Asia — or from occasional data
mistagging, e.g. Equatorial Guinea tagged under two Latin-American-focused partners). Resolution:
**split by continent at data-generation time.** A partner with countries in N continents produces
N separate entries, each carrying only the countries that belong to that continent. The partner
card then appears once under each relevant continent section. (Confirmed against the real data:
6 of 28 partners currently split this way.)

### Fields not available in Airtable

The Partners table has no date, location, or event-title field (unlike the reference mockup's
"East Semifinal" / "September 4th 2026" / "Austin, Texas"). Decision: **omit these fields** rather
than fabricate placeholders. The card's title line uses the partner's own name as the "event"
(e.g. "SEK Lab", not an invented sub-event title).

### Logos

The Partners table now has a `Logo` (attachment) field, added during this session. Most partners
(13 of 28 at time of writing) have a real logo uploaded; the rest fall back to an initials
monogram badge (deterministic color from a small palette, derived from the partner name).

**Known data issue:** the `Learnlaunch` attachment is typed `text/html`, not an image — the
upload is broken and needs to be re-uploaded in Airtable.

**Production gotcha:** Airtable attachment URLs (`v5.airtableusercontent.com/...`) are
signed and expire. The build step must download each logo once and re-host it (e.g. under
`public/brand/partners/` or as a Sanity asset once Sanity is live) — never store or link the raw
Airtable URL in seed data or components.

### Country name normalization

- US states (`USA - Alabama`, `USA - California`, ...) collapse to a single `United States` entry
  per partner — a partner covering 6 US states shows **one** US flag, not six.
- Duplicate/legacy country entries (e.g. `Swaziland (renamed to Eswatini)` alongside `Eswatini
  (formerly Swaziland)`) are deduplicated to the current name only.

## Data model

```ts
// lib/content/types.ts
export type ContinentKey =
  | "europe" | "asia" | "middle-east" | "north-america"
  | "latin-america" | "africa" | "rest-of-world";

export type SemifinalCountry = {
  name: string;   // display name, matches Airtable's country name
  code: string;   // ISO 3166-1 alpha-2, lowercase, for flag-icons
};

export type RegionalSemifinalEntry = {
  partner: string;
  continent: ContinentKey;
  countries: SemifinalCountry[];   // only the countries in *this* continent, deduped
  logo?: string;                   // re-hosted image path; absent → initials fallback
};
```

`lib/content/regionalSemifinals.ts` (new file) holds the generated seed array. The existing
`RegionalSemifinal` type and its seed entries are replaced entirely — nothing else in the
codebase references them besides `RegionalSeminalsGrid` and `getRegionalSemifinals()`.

`getRegionalSemifinals()` in `lib/content/index.ts` returns `RegionalSemifinalEntry[]` (signature
change; both call sites — the new page and the homepage teaser — are updated together).

## Components

### `app/semifinals/page.tsx` (new)

Full experience:
- Header (title + short intro, matching the homepage section's copy tone).
- Tab bar: `Worldwide` + the 7 real continents, each showing a live count. Active tab uses a
  sliding pill indicator, positioned via **measured pixel geometry** (`offsetTop/Left/Width/Height`
  of the actual button), not CSS percentages — the tab bar wraps to two lines on narrow viewports,
  and percentage-based sizing breaks against a wrapped flex container.
- Continent sections (hidden/shown by the active tab; `Worldwide` shows all): a colored eyebrow
  (dot + label + "N partners · M countries" tally) with an animated underline, then a list of
  partner rows.
- Each row: overlapping flag-circle cluster (real per-country flags via the `flag-icons` npm
  package, capped at 5 + a "+N" badge that expands a plain-text list of the rest), bold country
  names + partner name, partner logo circle (or initials fallback) on the right.
- Row and section entrance is staggered/fades in; flag clusters "fan out" slightly on hover;
  all motion respects `prefers-reduced-motion` (project convention, see `app/globals.css`).

### `components/home/RegionalSeminalsGrid.tsx` (rewritten)

Condensed teaser: 6 partner cards (no tabs, no continent grouping) — the first partner from each
of the 6 non-"Worldwide" continents that has one, in the table order above, so the teaser reads as
"one per region" — same row visual language, plus a "View all regions" link to `/semifinals`.

### Continent accent colors

Extends the existing brand tokens (`app/globals.css` `@theme`) rather than introducing an
unrelated palette. Each continent gets one fixed accent, used only for its tab pill / section dot
/ underline — the rest of the UI stays neutral (white background, navy/ink text):

| Continent | Color | Source |
|---|---|---|
| Worldwide | `--color-navy` | existing token |
| North America | `--color-brand` | existing token |
| Europe | `--color-sky` | existing token |
| Middle East | `--color-accent-yellow` | existing token |
| Latin America | `--color-accent-red` | existing token |
| Asia | `#0BB6A8` (teal) | new, added to `@theme` |
| Africa | `#2FAE66` (green) | new, added to `@theme` |
| Rest of the World | `#7C5CFC` (violet) | new, added to `@theme` |

### Flags

`flag-icons` (npm) — SVG-per-country, keyed by lowercase ISO 3166-1 alpha-2. The artifact
prototype used hand-drawn SVG approximations (no dependency yet); production swaps these for the
real package. `code` on `SemifinalCountry` is generated during the Airtable data pull using a
name→ISO2 lookup; any name that doesn't resolve gets logged so it can be fixed by hand rather than
silently mis-rendering.

## Out of scope / explicitly deferred

- Date, location, sponsor tier — not in the source data; revisit if/when Airtable (or Sanity)
  gains those fields.
- Live Airtable sync — data is a one-time pull into static seed data, matching the rest of the
  site's content architecture.
- Fixing the broken `Learnlaunch` logo attachment — flagged for the user to redo in Airtable.
