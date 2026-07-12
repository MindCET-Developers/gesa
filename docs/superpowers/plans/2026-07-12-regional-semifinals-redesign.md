# Regional Semifinals Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat homepage partner grid with a continent-filterable Regional Semifinals
experience: a new `/semifinals` page (tabs + grouped partner rows with flags/logos) and a
condensed homepage teaser, backed by real data pulled once from Airtable.

**Architecture:** A one-time data-generation script transforms hardcoded (already-fetched)
Airtable partner/country data into a static seed file (`lib/content/regionalSemifinals.ts`),
following the project's existing "seed data now, CMS later" content-layer pattern. A second script
downloads and re-hosts partner logos locally (Airtable attachment URLs expire). The UI is a server
page (`app/semifinals/page.tsx`) rendering a client component that owns tab/filter state, built
from small, focused presentational components.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4, `flag-icons` (new npm
dependency). No test framework exists in this repo (no jest/vitest, no test script in
`package.json`) — this plan follows that convention rather than introducing one. Verification is
`npx tsc --noEmit`, `npm run build`, and manual checks against the running dev server, matching
how the rest of the codebase is validated.

**Reference:** `docs/superpowers/specs/2026-07-12-regional-semifinals-redesign-design.md` (design
spec, approved). The visual/interaction design was already validated with the user via an
interactive HTML artifact prototype (sliding tab pill, flag-cluster hover fan-out, staggered row
entrance, "+N" popover) — replicate that behavior; do not redesign it.

---

## File structure

```
lib/content/
  types.ts                          (edit — new types)
  seed.ts                           (edit — remove old regionalSemifinals data)
  index.ts                          (edit — import regionalSemifinals from new file)
  regional-semifinals-source.ts     (new — raw Airtable data, hand-authored from the Airtable pull)
  regionalSemifinals.ts             (new — GENERATED, committed output of the build script)

scripts/
  build-regional-semifinals.mjs     (new — transforms source data → regionalSemifinals.ts)
  download-partner-logos.mjs        (new — downloads Airtable attachment URLs → public/brand/partners/)

public/brand/partners/              (new dir — re-hosted logo files)

components/semifinals/
  SemifinalsExplorer.tsx            (new — client component: tab state + filtering + section list)
  ContinentSection.tsx              (new — one continent's header + row list)
  PartnerRow.tsx                    (new — flags + name + logo, one partner)
  FlagCluster.tsx                   (new — overlapping flag-icons circles + "+N" popover)
  PartnerLogo.tsx                   (new — logo image or initials-monogram fallback)
  continents.ts                     (new — shared CONTINENTS metadata: key, label, color var, order)

app/semifinals/
  page.tsx                          (new — server page, fetches data, renders SemifinalsExplorer)

components/home/
  RegionalSeminalsGrid.tsx          (rewrite — 6-card teaser + link to /semifinals)

app/globals.css                    (edit — 3 new continent color tokens)
package.json                       (edit — add flag-icons dependency)
```

---

### Task 1: Add the `flag-icons` dependency

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install the package**

Run:
```bash
npm install flag-icons
```

Expected: `package.json` gains `"flag-icons": "^7.x"` (or current major) under `dependencies`, and
`package-lock.json` updates. No code changes yet.

- [ ] **Step 2: Verify the package ships the CSS/SVG assets you'll need**

Run:
```bash
node -e "console.log(require.resolve('flag-icons/css/flag-icons.min.css'))"
```

Expected: prints a path inside `node_modules/flag-icons/css/flag-icons.min.css` with no error.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "Add flag-icons dependency for Regional Semifinals flags"
```

---

### Task 2: Extend the brand palette with continent accent colors

**Files:**
- Modify: `app/globals.css:7-18`

- [ ] **Step 1: Add three new color tokens to the `@theme` block**

In `app/globals.css`, the `@theme` block currently ends with:

```css
  --color-accent-red: #ed1c24;
  --color-accent-yellow: #ffcb05;
```

Add three lines directly after `--color-accent-yellow`:

```css
  --color-accent-red: #ed1c24;
  --color-accent-yellow: #ffcb05;
  --color-teal: #0bb6a8;
  --color-forest: #2fae66;
  --color-violet: #7c5cfc;
```

(Rest of the file is unchanged — neutrals, typography, shape, easing sections stay as-is.)

- [ ] **Step 2: Verify the build picks up the new tokens**

Run:
```bash
npm run build
```

Expected: build succeeds (Tailwind v4 reads `@theme` tokens at build time; a syntax error here
would fail the build immediately).

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "Add teal/forest/violet tokens for continent accent colors"
```

---

### Task 3: Add the new content types

**Files:**
- Modify: `lib/content/types.ts:89-95`

- [ ] **Step 1: Replace the `RegionalSemifinal` type with the new shape**

In `lib/content/types.ts`, replace:

```ts
export type RegionalSemifinal = {
  name: string;
  region: string;
  country?: string;
  logo: string;
  url?: string;
};
```

with:

```ts
export type ContinentKey =
  | "europe"
  | "asia"
  | "middle-east"
  | "north-america"
  | "latin-america"
  | "africa"
  | "rest-of-world";

export type SemifinalCountry = {
  /** Display name, matches the Airtable "all countries" table. */
  name: string;
  /** ISO 3166-1 alpha-2, lowercase — matches flag-icons' `fi-<code>` class. */
  code: string;
};

export type RegionalSemifinalEntry = {
  partner: string;
  continent: ContinentKey;
  /** Only the countries belonging to *this* continent (a partner can span several). */
  countries: SemifinalCountry[];
  /** Path under /public, e.g. "/brand/partners/sek-lab.png". Absent = initials fallback. */
  logo?: string;
};
```

- [ ] **Step 2: Verify no other file breaks yet**

Run:
```bash
npx tsc --noEmit
```

Expected: errors in `lib/content/seed.ts` and `lib/content/index.ts` (they still reference
`RegionalSemifinal`/`regionalSemifinals` in the old shape) and in
`components/home/RegionalSeminalsGrid.tsx`. This is expected — those get fixed in later tasks.
Confirm the *only* errors are about `RegionalSemifinal` / `regionalSemifinals` / the grid
component; anything else means this step introduced an unrelated break.

- [ ] **Step 3: Commit**

```bash
git add lib/content/types.ts
git commit -m "Replace RegionalSemifinal type with continent-aware RegionalSemifinalEntry"
```

---

### Task 4: Author the raw Airtable source data

This is the literal data pulled from Airtable base `appyTu8uOPQUVXD4x`, table **Partners**
(`tblAfv3rYs6GyXQEF`), cross-referenced with table **all countries** (`tbl7wFk8g0AbGx7ee`)'s
`Geographic Area` field. It is hand-authored once from that pull, not fetched live.

**Files:**
- Create: `lib/content/regional-semifinals-source.ts`

- [ ] **Step 1: Create the source data file**

```ts
// lib/content/regional-semifinals-source.ts
//
// Raw data pulled once from the GESAwards Airtable base (appyTu8uOPQUVXD4x):
// - Table "Partners" (tblAfv3rYs6GyXQEF): partner name + linked countries + logo attachment.
// - Table "all countries" (tbl7wFk8g0AbGx7ee): each country's real "Geographic Area".
//
// This file is the single source of truth for scripts/build-regional-semifinals.ts.
// To refresh: re-pull the two tables and update the arrays below by hand.

export type RawPartner = {
  /** Exact Airtable record name. */
  name: string;
  /** Country names as linked in Airtable, in original order (US states not yet deduped). */
  countries: string[];
  /** Airtable attachment URL for the Logo field, if one was uploaded. Expires — see Task 6. */
  logoUrl?: string;
};

export const RAW_PARTNERS: RawPartner[] = [
  {
    name: "Rest of the World",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal",
      "Pakistan", "Papua New Guinea", "Saudi Arabia", "Turkey",
      "United Arab Emirates (UAE)",
    ],
  },
  {
    name: "Esperanza",
    countries: ["Hong Kong", "China"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/a2zVnhmeLi9jj_JkYpfzmw/Z7mnvq7RBBFknSUHvKClVNdu0PKV0FVZqCWk5jjg0nKlc514MBdICcI3hQYbVG5FFUEGG91O4Q1JI6xQQTYrKfo8_eOzYk6PIm0tmigkM9org7h9IEZ_nEYx7O6M3pgpdbiUHKTH6QvFTWG_m7jVzQ/pMGOOfJT8vNw1uxB3VUrHUsVZdiSYf6JeRc4gmdZpjE",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado",
      "USA - Montana", "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/SHQGYSfy5t39Mh8saIbvzg/BG9BlY-WckzxP_xICgIYbF9bahXfBlMLw6BraICvwrJU-nAV3CTvwYgfeu4G-oGgmxfFB1kAgmiy1TPKGwLWsQ9CRMveTN9S28PyBuKmFVeRGdCyLXJaxYkTaIslSh7MjAmyNDR05_utoZGn3368sA/AcvbBrxYYjP0bXyNUOmRUkIGQVG-eTY_knn2lASwieY",
  },
  { name: "EdTech France", countries: ["France"] },
  {
    name: "Ingenious Faces",
    countries: ["India"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/6B2_mr9-MhdunMqausyKww/4AjZjiA2ZrSrEvq2KvowNa4P8DZoBMu8gy1Bn7MUxOR5gf6XfzbVp-0Lo855-91-TPMZm4bFOQwp56vVOdEruUWj0v7HkoPcxRXQ6j8t8SYTEd5oOitW9LEBKqa4dYcKXHWrKicCzdRe2cVwGrut_g/bVWzzH3t074QeT4Jyhzvn2d8wAhK93mBsQNXHDevtFU",
  },
  {
    name: "SEK Lab",
    countries: ["Spain", "Portugal"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/VjUZTmnWDZBnkLh_NLqPZw/vxjLUnFpO8ZfLw_E4otI9jEGVoO8kFUQXzrpyp2hBvqGndvuFDCA3cPWx_y9-bUUuQGoh8IBgQGR2XZ4eSwsSGJcu_J4y5wbkt83Ude6Ei5EY26vYBjwgrnwghOf17ebQwppEKk93W5ozwOsWD0rCw/CND5SFqi17wXQzTzDCfM9XkOgRoYIoy-hIf896yrxQs",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    // NOTE: Airtable attachment for this partner is mistyped (text/html, not an image) —
    // the upload is broken. Flagged for the user to re-upload in Airtable. Omit logoUrl
    // here so the generator falls back to the initials badge until it's fixed.
  },
  {
    name: "Japan",
    countries: ["Japan"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/cDEY8fUWRtjuzPLcBuDmMw/8XWieJ15l8Z9sUvndnD3t04F8mLbTq6xkDyUROuZha1ckV7wCHLhFrCfDWYu6aj1xhUIzqu907Ky7U5_bDsnMpxNL_dy17oztWVGG28vdoJLkfTmmcBlH1X_olbTw_iSrW4Gy4YMaBVehhF0Uye5mA/rKu8EMRMVyCa-hA8ck4b_l2dCmFHz-uZ7nBHpXWyN4M",
  },
  {
    name: "Tech Monterrey",
    countries: [
      "Argentina", "Peru", "Chile", "Colombia", "Uruguay", "Paraguay", "Bolivia",
      "Equatorial Guinea", "Ecuador", "Guyana", "Suriname", "Venezuela", "Belize",
      "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Mexico", "Nicaragua",
      "Panama", "Cuba", "Dominican Republic", "Haiti", "Jamaica", "Bahamas",
      "Barbados", "Trinidad and Tobago",
    ],
  },
  { name: "Tyme Education/Open Education Challenge", countries: [] },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: ["Brazil"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/XgVt8oE8GOq5zg200C_MAg/tWSH5akVPEWNfe_xlsGeru0yW_BzCgT7cVZOB9QuAI10c-TTFeYVbINcRrIv4pat-6CKEA8yBA-MJQ3LosnSSj_MaT2FpLZWTyqCTjzpajxSAbgBXqqBzjloMLz9OELlpwYYYECj90xD-X-rOfh8YQ/ajOe2Op0Idu6shv7arC4Z7LheI4EYSXEI3jgjUgGVVI",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/Zx8pKD-mpaZaub-iXmrLAA/zWwAtXDhOsiGSJGjtsipz_-1laoh8uiL4bZWyE38gnA9Xo5U2vzOkufG9U-uEn-CGV32DnHIGHzhowJkPkDKnl0SwM9mzo4S3JpUfNixKyGak-zTxrK3ByuOT4PWPNOHZaUHlA-67vDiayjhop_8Vg/Jo9Z8oTBXBXkToKxTSZ-OvbshCjwecOKGBW3gw4mVdo",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia",
      "Philippines", "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/TM4Eibwx_7oj8TAPDQS3JQ/drJChBtMn_QBrBFYxmSfSiizFLEh1KTBeReAqAErQK5Z1T4QIopK5eQoXw4FGDVQNAUeWJLDvlTXoz08vRO7jcQUx3XbjZJj8DyDCxynLVzipZw9lvC1MJp1Y8AlTgglefAD5jBA1JWILj3000T1zg/iW03XGv82Cl8ltmIBEzFkAnfA3i5g__ZqXW7nGXnnDQ",
  },
  { name: "UCL EdTech Labs", countries: ["United Kingdom (UK)"] },
  {
    name: "Dutch EdTech",
    countries: ["Netherlands"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/eex-mBgolL5aa9Q3fdL5YA/6ZEvFsTS4Axw71PAVbfhIWTC-d7YdlKh286WIAPJv4uHAUtImS3wsNyLUdMKR-GFGQJYgB5dC66sMd8xcHB73YRmpjR3ZILQKIgjuSbcFJjiPX7AeetQtdMbys6WYoezG4029jVCaOCuBM-Lz_Td0A/Jcyl6o2J3nQBIy3fHOjIlfX-djgdcFLgBanimVeLmFI",
  },
  { name: "Taipei Computer Association (TCA)", countries: ["Taiwan"] },
  { name: "Learning Spark", countries: ["South Korea"] },
  {
    name: "Prismapar",
    countries: [
      "Argentina", "Peru", "Chile", "Colombia", "Uruguay", "Paraguay", "Bolivia",
      "Equatorial Guinea", "Ecuador", "Guyana", "Suriname", "Venezuela", "Belize",
      "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Mexico", "Nicaragua",
      "Panama", "Cuba", "Dominican Republic", "Haiti", "Jamaica", "Bahamas",
      "Barbados", "Trinidad and Tobago",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/h_9XR--WX0SDMleqiYH0lQ/qFChV5jG0RHsRh7_z7EnO8RtoVfOAW7XvSc9Ps_2_Zb90s0UyL3P2S6bJRf1UebI9vePGjtG0AsvI5v7f0_pamwaRNYtwyEQO1dDCOuBMn04zmDjG7BJWJgDIX63v-VqMcv8ylCR2XmWQZaZvm0-6A/pQaT7CThz6_-p-c9Kit2sdqvnsB1Wk0fmJhnSk2ZakM",
  },
  { name: "Startup Braga", countries: ["Portugal"] },
  {
    name: "Future Education Modena",
    countries: ["Italy"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/B0uLUfK4-O79jSilMvl9OA/oVDNwHE6HV7EWXLozEiADhcrlVmSaGR2XfecDMZi89YLpQTAmagxNpuLyc-CU7IBi_vp-hCSYk3GfUoDPuDsX27F7tif3YJ0F-TOe7hwo-Or2uEZlSZei06sQ2qIeMiLNmb2nqmHMwce5UpTPnjutA/zyapl-6D6dK_-QCoy0pou8v32YxX7caONXtnEf5KzRA",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania",
      "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/XASGcw-Fm6BAB6jWBE2VwQ/LJjKn97GBzTpD0ppiBGCZD6AeY9L01bSk6bdFcown_N_D4be2t8r7oDsWdUXd2O1mOqlnYyGDiBlza1YB2vIxUCzUwobkghH4uesecFrUq3frlcBbzgEEofe1tUgLUVOhHAePuMLaaa7yHksXrDdgw/WI-KBut6PwAOJkSSa6TwnB29lXjgO4bWDEEiZ7HpOmc",
  },
  {
    name: "Positivo",
    countries: ["Brazil"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/e5GqKNwCZKwZUwmeJpL4EA/0SOePW9Hk5KQ1QgALgFj7VMGrkWz9ST8jX7nqLdG4iOkIFRIO44PimpETjDRPV2bI4Mqdy-TOKUWHiDoJ_uR5n5krxf5pWH-40p8iChltRrHcvToe_AyTIFGGkQB9NobnOOiUxpVRQmD1K4uzLg43g/5vOzjULEHL9kVAXIaRAWrx_Gh-DQgiyQXeKgZFRXIx8",
  },
  { name: "Eduvation", countries: ["Germany"] },
  {
    name: "EdLATAM Alliance",
    countries: [
      "Argentina", "Peru", "Chile", "Colombia", "Uruguay", "Paraguay", "Bolivia",
      "Ecuador", "Guyana", "Suriname", "Venezuela", "Belize", "Costa Rica",
      "El Salvador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Panama",
      "Cuba", "Dominican Republic", "Haiti", "Jamaica", "Bahamas", "Barbados",
      "Trinidad and Tobago",
    ],
  },
  { name: "EdTech Austria - Innovation Salzburg", countries: ["Austria"] },
  { name: "DOHE", countries: [] },
  { name: "EdTech Italy", countries: ["Italy"] },
  {
    name: "GSET ghana society for education technology",
    countries: [
      "Nigeria", "Ethiopia", "Egypt", "Democratic Republic of the Congo",
      "Republic of the Congo", "Tanzania", "South Africa", "Kenya", "Sudan",
      "Uganda", "Algeria", "Morocco", "Angola", "Ghana", "Mozambique",
      "Madagascar", "Ivory Coast", "Cameroon", "Niger", "Mali", "Burkina Faso",
      "Malawi", "Zambia", "Chad", "Somalia", "Senegal", "Zimbabwe", "Guinea",
      "Benin", "Rwanda", "Burundi", "Tunisia", "South Sudan", "Togo",
      "Sierra Leone", "Libya", "Liberia", "Central African Republic (CAR)",
      "Mauritania", "Eritrea", "Namibia", "Gambia", "Gabon", "Botswana",
      "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Eswatini",
      "Djibouti", "Comoros", "Cape Verde", "Sao Tome and Principe", "Seychelles",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1783864800000/4gpG81cOtbg0ZmrQxbB4ew/mLv4thTFRm1BwNF5542oG-8HQ5WwXypKhOVxklqAnRK6m0RdEwSZRcgEqaLm5EEUDc0SdWtsoGE6ZP0bHIae4FVEAW0Etv9-xjnBt2ceQt3uCIlUI8Et6Iw589wHKEOO7kd2c77gbkJZQO9rw4ERbA/cL-1sbfGIcgk5BpH2QLxRTvbQjrb8ptKczGN9UsCQiA",
  },
];

/**
 * "Geographic Area" from Airtable's "all countries" table, keyed by exact country name.
 * Countries not listed here have no continent in Airtable (mainly Hong Kong) — the
 * generator logs these instead of guessing.
 */
export const COUNTRY_TO_CONTINENT: Record<string, ContinentKeyRaw> = {
  // North America
  "United States": "north-america", Canada: "north-america",
  // Europe
  Spain: "europe", Portugal: "europe", France: "europe", Netherlands: "europe",
  Italy: "europe", Denmark: "europe", Sweden: "europe", Estonia: "europe",
  Finland: "europe", Iceland: "europe", Latvia: "europe", Lithuania: "europe",
  Norway: "europe", "United Kingdom (UK)": "europe", Austria: "europe",
  Germany: "europe",
  // Asia
  Japan: "asia", "South Korea": "asia", India: "asia", China: "asia",
  Singapore: "asia", Brunei: "asia", Cambodia: "asia", Indonesia: "asia",
  Laos: "asia", Malaysia: "asia", Philippines: "asia", Thailand: "asia",
  "East Timor": "asia", Vietnam: "asia", "Myanmar (formerly Burma)": "asia",
  Taiwan: "asia", Bangladesh: "asia", Nepal: "asia", Pakistan: "asia",
  // Rest of the world (per Airtable's actual tagging — includes Oceania)
  Australia: "rest-of-world", "Papua New Guinea": "rest-of-world",
  "Hong Kong": "rest-of-world", // no Geographic Area in Airtable; treated as Rest of World
  // Middle East
  Iraq: "middle-east", Jordan: "middle-east", Kuwait: "middle-east",
  Lebanon: "middle-east", "Saudi Arabia": "middle-east", Turkey: "middle-east",
  "United Arab Emirates (UAE)": "middle-east",
  // Latin America
  Brazil: "latin-america", Argentina: "latin-america", Peru: "latin-america",
  Chile: "latin-america", Colombia: "latin-america", Uruguay: "latin-america",
  Paraguay: "latin-america", Bolivia: "latin-america", Ecuador: "latin-america",
  Guyana: "latin-america", Suriname: "latin-america", Venezuela: "latin-america",
  Belize: "latin-america", "Costa Rica": "latin-america",
  "El Salvador": "latin-america", Guatemala: "latin-america",
  Honduras: "latin-america", Mexico: "latin-america", Nicaragua: "latin-america",
  Panama: "latin-america", Cuba: "latin-america",
  "Dominican Republic": "latin-america", Haiti: "latin-america",
  Jamaica: "latin-america", Bahamas: "latin-america", Barbados: "latin-america",
  "Trinidad and Tobago": "latin-america",
  // Africa
  Nigeria: "africa", Ethiopia: "africa", Egypt: "africa",
  "Democratic Republic of the Congo": "africa", "Republic of the Congo": "africa",
  Tanzania: "africa", "South Africa": "africa", Kenya: "africa", Sudan: "africa",
  Uganda: "africa", Algeria: "africa", Morocco: "africa", Angola: "africa",
  Ghana: "africa", Mozambique: "africa", Madagascar: "africa",
  "Ivory Coast": "africa", Cameroon: "africa", Niger: "africa", Mali: "africa",
  "Burkina Faso": "africa", Malawi: "africa", Zambia: "africa", Chad: "africa",
  Somalia: "africa", Senegal: "africa", Zimbabwe: "africa", Guinea: "africa",
  Benin: "africa", Rwanda: "africa", Burundi: "africa", Tunisia: "africa",
  "South Sudan": "africa", Togo: "africa", "Sierra Leone": "africa",
  Libya: "africa", Liberia: "africa", "Central African Republic (CAR)": "africa",
  Mauritania: "africa", Eritrea: "africa", Namibia: "africa", Gambia: "africa",
  Gabon: "africa", Botswana: "africa", Lesotho: "africa",
  "Guinea-Bissau": "africa", "Equatorial Guinea": "africa", Mauritius: "africa",
  Eswatini: "africa", Djibouti: "africa", Comoros: "africa",
  "Cape Verde": "africa", "Sao Tome and Principe": "africa", Seychelles: "africa",
  // "Rest of the World" partner's Central Asia / other leftovers
  Russia: "europe", Azerbaijan: "asia", Kazakhstan: "asia", Armenia: "asia",
  Kyrgyzstan: "asia", Uzbekistan: "asia", Tajikistan: "asia",
  Turkmenistan: "asia", Mongolia: "asia", Georgia: "asia",
};
type ContinentKeyRaw =
  | "europe" | "asia" | "middle-east" | "north-america"
  | "latin-america" | "africa" | "rest-of-world";

/**
 * ISO 3166-1 alpha-2 (lowercase) for every country name used above, after US-state
 * collapsing. flag-icons keys its classes by this code (e.g. "fi-us").
 */
export const COUNTRY_TO_ISO2: Record<string, string> = {
  "United States": "us", Canada: "ca", Spain: "es", Portugal: "pt", France: "fr",
  Netherlands: "nl", Italy: "it", Denmark: "dk", Sweden: "se", Estonia: "ee",
  Finland: "fi", Iceland: "is", Latvia: "lv", Lithuania: "lt", Norway: "no",
  "United Kingdom (UK)": "gb", Austria: "at", Germany: "de", Japan: "jp",
  "South Korea": "kr", India: "in", China: "cn", "Hong Kong": "hk",
  Singapore: "sg", Brunei: "bn", Cambodia: "kh", Indonesia: "id", Laos: "la",
  Malaysia: "my", Philippines: "ph", Thailand: "th", "East Timor": "tl",
  Vietnam: "vn", "Myanmar (formerly Burma)": "mm", Taiwan: "tw",
  Bangladesh: "bd", Nepal: "np", Pakistan: "pk", Australia: "au",
  "Papua New Guinea": "pg", Iraq: "iq", Jordan: "jo", Kuwait: "kw",
  Lebanon: "lb", "Saudi Arabia": "sa", Turkey: "tr",
  "United Arab Emirates (UAE)": "ae", Brazil: "br", Argentina: "ar", Peru: "pe",
  Chile: "cl", Colombia: "co", Uruguay: "uy", Paraguay: "py", Bolivia: "bo",
  Ecuador: "ec", Guyana: "gy", Suriname: "sr", Venezuela: "ve", Belize: "bz",
  "Costa Rica": "cr", "El Salvador": "sv", Guatemala: "gt", Honduras: "hn",
  Mexico: "mx", Nicaragua: "ni", Panama: "pa", Cuba: "cu",
  "Dominican Republic": "do", Haiti: "ht", Jamaica: "jm", Bahamas: "bs",
  Barbados: "bb", "Trinidad and Tobago": "tt", Nigeria: "ng", Ethiopia: "et",
  Egypt: "eg", "Democratic Republic of the Congo": "cd",
  "Republic of the Congo": "cg", Tanzania: "tz", "South Africa": "za",
  Kenya: "ke", Sudan: "sd", Uganda: "ug", Algeria: "dz", Morocco: "ma",
  Angola: "ao", Ghana: "gh", Mozambique: "mz", Madagascar: "mg",
  "Ivory Coast": "ci", Cameroon: "cm", Niger: "ne", Mali: "ml",
  "Burkina Faso": "bf", Malawi: "mw", Zambia: "zm", Chad: "td", Somalia: "so",
  Senegal: "sn", Zimbabwe: "zw", Guinea: "gn", Benin: "bj", Rwanda: "rw",
  Burundi: "bi", Tunisia: "tn", "South Sudan": "ss", Togo: "tg",
  "Sierra Leone": "sl", Libya: "ly", Liberia: "lr",
  "Central African Republic (CAR)": "cf", Mauritania: "mr", Eritrea: "er",
  Namibia: "na", Gambia: "gm", Gabon: "ga", Botswana: "bw", Lesotho: "ls",
  "Guinea-Bissau": "gw", "Equatorial Guinea": "gq", Mauritius: "mu",
  Eswatini: "sz", Djibouti: "dj", Comoros: "km", "Cape Verde": "cv",
  "Sao Tome and Principe": "st", Seychelles: "sc", Russia: "ru",
  Azerbaijan: "az", Kazakhstan: "kz", Armenia: "am", Kyrgyzstan: "kg",
  Uzbekistan: "uz", Tajikistan: "tj", Turkmenistan: "tm", Mongolia: "mn",
  Georgia: "ge",
};
```

- [ ] **Step 2: Verify the file compiles**

Run:
```bash
npx tsc --noEmit
```

Expected: no *new* errors from this file (the pre-existing errors about `RegionalSemifinal` from
Task 3 are still present and expected until Task 5/8).

- [ ] **Step 3: Commit**

```bash
git add lib/content/regional-semifinals-source.ts
git commit -m "Add raw Airtable partner/country source data for Regional Semifinals"
```

---

### Task 5: Write the build script and generate the seed file

**Files:**
- Create: `scripts/build-regional-semifinals.mjs`
- Create (generated, then committed): `lib/content/regionalSemifinals.ts`

- [ ] **Step 1: Write the generator script**

```js
// scripts/build-regional-semifinals.mjs
//
// Transforms lib/content/regional-semifinals-source.ts into lib/content/regionalSemifinals.ts.
// Run manually whenever the Airtable source data changes: `node scripts/build-regional-semifinals.mjs`
//
// Transform rules (see docs/superpowers/specs/2026-07-12-regional-semifinals-redesign-design.md):
// 1. Collapse "USA - <State>" entries into a single "United States".
// 2. Drop duplicate/legacy country names (kept as a single canonical name in the source file).
// 3. Split a partner's countries by continent — a partner with countries in N continents
//    produces N entries, each holding only that continent's countries.
// 4. Look up each country's ISO2 code; log (not throw) on any miss.
// 5. Attach the local logo path from Task 6's download manifest, if present.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Load the TS source data via a tiny require-free eval: import the compiled values by
// re-reading the .ts file is not possible from plain Node, so this script instead imports
// the *type-stripped* runtime data from a sibling .mjs mirror kept in sync manually is
// error-prone — instead, run this script with Node's TS loader:
//   node --experimental-strip-types scripts/build-regional-semifinals.mjs
// (Node 22.6+ ships --experimental-strip-types; the repo's Next.js 16 / React 19 stack
// already requires a current Node LTS, so this is available.)

const {
  RAW_PARTNERS,
  COUNTRY_TO_CONTINENT,
  COUNTRY_TO_ISO2,
} = await import("../lib/content/regional-semifinals-source.ts");

const logoManifestPath = path.join(root, "public/brand/partners/manifest.json");
let logoManifest = {};
try {
  logoManifest = JSON.parse(readFileSync(logoManifestPath, "utf8"));
} catch {
  console.warn(
    "No logo manifest found at public/brand/partners/manifest.json — " +
      "run scripts/download-partner-logos.mjs first if you want logos in the output. " +
      "Continuing with initials-only fallback for all partners."
  );
}

function normalizeCountryName(name) {
  if (name.startsWith("USA - ")) return "United States";
  return name;
}

const missingContinent = new Set();
const missingIso = new Set();
const entries = [];

for (const partner of RAW_PARTNERS) {
  if (partner.countries.length === 0) continue; // no linked countries yet — skip for now

  // Dedupe + normalize, preserving first-seen order.
  const seen = new Set();
  const normalized = [];
  for (const raw of partner.countries) {
    const name = normalizeCountryName(raw);
    if (seen.has(name)) continue;
    seen.add(name);
    normalized.push(name);
  }

  // Group by continent.
  const byContinent = new Map();
  for (const name of normalized) {
    const continent = COUNTRY_TO_CONTINENT[name];
    if (!continent) {
      missingContinent.add(name);
      continue;
    }
    if (!byContinent.has(continent)) byContinent.set(continent, []);
    byContinent.get(continent).push(name);
  }

  for (const [continent, names] of byContinent) {
    const countries = names.map((name) => {
      const code = COUNTRY_TO_ISO2[name];
      if (!code) missingIso.add(name);
      return { name, code: code ?? "" };
    });

    entries.push({
      partner: partner.name.trim(),
      continent,
      countries,
      logo: logoManifest[partner.name] ?? undefined,
    });
  }
}

if (missingContinent.size > 0) {
  console.warn(
    "Countries with no continent mapping (excluded from output):",
    [...missingContinent].sort()
  );
}
if (missingIso.size > 0) {
  console.warn(
    "Countries with no ISO2 mapping (will render with an empty flag code):",
    [...missingIso].sort()
  );
}

// Stable ordering: continent, then partner name.
const continentOrder = [
  "north-america", "europe", "middle-east", "asia", "latin-america", "africa",
  "rest-of-world",
];
entries.sort((a, b) => {
  const c = continentOrder.indexOf(a.continent) - continentOrder.indexOf(b.continent);
  if (c !== 0) return c;
  return a.partner.localeCompare(b.partner);
});

const header = `// GENERATED FILE — do not edit by hand.
// Produced by scripts/build-regional-semifinals.mjs from
// lib/content/regional-semifinals-source.ts. Re-run that script to regenerate.

import type { RegionalSemifinalEntry } from "./types";

export const regionalSemifinals: RegionalSemifinalEntry[] = `;

const body = JSON.stringify(entries, null, 2)
  // JSON.stringify quotes keys; TS is fine with quoted keys in an object literal, so
  // no further transform is needed.
  .replace(/"code": ""/g, '"code": "" /* unmapped — see build warnings */');

writeFileSync(
  path.join(root, "lib/content/regionalSemifinals.ts"),
  header + body + ";\n"
);

console.log(`Wrote ${entries.length} entries to lib/content/regionalSemifinals.ts`);
```

- [ ] **Step 2: Run the script and verify it fails gracefully without a logo manifest yet**

Run:
```bash
node --experimental-strip-types scripts/build-regional-semifinals.mjs
```

Expected output includes a warning `No logo manifest found...` and ends with
`Wrote N entries to lib/content/regionalSemifinals.ts` where N is in the low-30s (28 partners,
minus 2 with empty country lists, plus a few extra entries from continent-splitting). No
`missingContinent` or `missingIso` warnings should appear — if any do, add the missing country to
`COUNTRY_TO_CONTINENT` / `COUNTRY_TO_ISO2` in Task 4's file and re-run.

- [ ] **Step 3: Spot-check the generated file**

Open `lib/content/regionalSemifinals.ts` and confirm:
- `GSET ghana society for education technology` appears once, with `continent: "africa"`, and
  its `countries` array has ~53 entries (54 raw minus any that failed continent/ISO lookup).
- `Learnlaunch` has `continent: "north-america"`, `countries` = `[{name:"United States",
  code:"us"}, {name:"Canada", code:"ca"}]` (deduped from 6 raw US-state rows), and no `logo` key
  (its Airtable attachment is broken — see Task 4 note).
- `Edcrunch` produces **two** entries — one `continent: "europe"` (Russia, Georgia) and one
  `continent: "asia"` (Azerbaijan, Kazakhstan, Armenia, Kyrgyzstan, Uzbekistan, Tajikistan,
  Turkmenistan, Mongolia) — confirming the continent-split logic works.

- [ ] **Step 4: Commit the script and generated output**

```bash
git add scripts/build-regional-semifinals.mjs lib/content/regionalSemifinals.ts
git commit -m "Generate regionalSemifinals.ts from Airtable source data"
```

---

### Task 6: Download and re-host partner logos

**Files:**
- Create: `scripts/download-partner-logos.mjs`
- Create (generated): `public/brand/partners/*.{png,jpg,svg}`, `public/brand/partners/manifest.json`

- [ ] **Step 1: Write the download script**

```js
// scripts/download-partner-logos.mjs
//
// Downloads every logoUrl in lib/content/regional-semifinals-source.ts and saves it under
// public/brand/partners/, writing a manifest.json (partner name -> local path) that
// scripts/build-regional-semifinals.mjs reads. Airtable attachment URLs are signed and
// expire — always re-run this BEFORE build-regional-semifinals.mjs when refreshing data.

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public/brand/partners");
mkdirSync(outDir, { recursive: true });

const { RAW_PARTNERS } = await import("../lib/content/regional-semifinals-source.ts");

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extFromContentType(contentType) {
  if (contentType.includes("svg")) return "svg";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  return "png";
}

const manifest = {};

for (const partner of RAW_PARTNERS) {
  if (!partner.logoUrl) continue;

  const res = await fetch(partner.logoUrl);
  if (!res.ok) {
    console.warn(`Failed to download logo for "${partner.name}": HTTP ${res.status}`);
    continue;
  }
  const contentType = res.headers.get("content-type") ?? "image/png";
  if (!contentType.startsWith("image/")) {
    console.warn(
      `Skipping "${partner.name}": attachment content-type is "${contentType}", not an image ` +
        `(this is the known-broken Learnlaunch upload — fix it in Airtable and re-run).`
    );
    continue;
  }

  const ext = extFromContentType(contentType);
  const filename = `${slugify(partner.name)}.${ext}`;
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(path.join(outDir, filename), buffer);

  manifest[partner.name] = `/brand/partners/${filename}`;
  console.log(`Saved ${partner.name} -> public/brand/partners/${filename}`);
}

writeFileSync(
  path.join(outDir, "manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);
console.log(`\nWrote manifest with ${Object.keys(manifest).length} logos.`);
```

- [ ] **Step 2: Run it**

Run:
```bash
node --experimental-strip-types scripts/download-partner-logos.mjs
```

Expected: one `Saved ...` line per partner with a working `logoUrl` (13 at time of writing), one
`Skipping "Learnlaunch"...` warning, and a final `Wrote manifest with 13 logos.` line. Confirm
`public/brand/partners/` now contains image files plus `manifest.json`.

**Note:** if the Airtable attachment URLs baked into `regional-semifinals-source.ts` have expired
by the time this runs, requests will fail with a non-200 status (logged, not fatal) — re-pull
fresh attachment URLs from Airtable and update Task 4's file before re-running.

- [ ] **Step 3: Re-run the seed generator now that the manifest exists**

```bash
node --experimental-strip-types scripts/build-regional-semifinals.mjs
```

Expected: same entry count as Task 5, but now partners with a downloaded logo have a `logo:
"/brand/partners/<slug>.<ext>"` field. Spot-check `SEK Lab`'s entry has a `logo` path.

- [ ] **Step 4: Commit**

```bash
git add scripts/download-partner-logos.mjs public/brand/partners lib/content/regionalSemifinals.ts
git commit -m "Download and re-host partner logos; wire them into generated seed data"
```

---

### Task 7: Wire the new seed data into the content layer

**Files:**
- Modify: `lib/content/seed.ts` (remove old `regionalSemifinals` export)
- Modify: `lib/content/index.ts:1-11,43-45`

- [ ] **Step 1: Remove the old `regionalSemifinals` array from `seed.ts`**

In `lib/content/seed.ts`, delete the `regionalSemifinals` export (the array of 10 objects with
`name`/`region`/`logo` starting around the line `export const regionalSemifinals:
import("./types").RegionalSemifinal[] = [`) — it's fully superseded by the generated file from
Task 5/6. Leave everything else in `seed.ts` untouched.

- [ ] **Step 2: Update the import and re-export in `index.ts`**

In `lib/content/index.ts`, change the import block from:

```ts
import {
  homeContent,
  judges,
  pages,
  partners,
  prizeCategories,
  regionalSemifinals,
  siteSettings,
  tracks,
  winners,
} from "./seed";
import type { Partner, RichPage, RegionalSemifinal } from "./types";
```

to:

```ts
import {
  homeContent,
  judges,
  pages,
  partners,
  prizeCategories,
  siteSettings,
  tracks,
  winners,
} from "./seed";
import { regionalSemifinals } from "./regionalSemifinals";
import type { Partner, RichPage } from "./types";
```

The `getRegionalSemifinals()` function body doesn't need to change — it already just returns
`regionalSemifinals`, which now resolves to the new generated array with the new type.

- [ ] **Step 3: Verify types are clean**

Run:
```bash
npx tsc --noEmit
```

Expected: the `RegionalSemifinal`-related errors from Task 3 are gone. The remaining error should
be exactly one, in `components/home/RegionalSeminalsGrid.tsx` (it still destructures the old
`{name, region, country, logo, url}` shape) — that's fixed in Task 10.

- [ ] **Step 4: Commit**

```bash
git add lib/content/seed.ts lib/content/index.ts
git commit -m "Point getRegionalSemifinals() at the generated continent-aware seed data"
```

---

### Task 8: Shared continent metadata

**Files:**
- Create: `components/semifinals/continents.ts`

- [ ] **Step 1: Create the shared continent list**

```tsx
// components/semifinals/continents.ts
import type { ContinentKey } from "@/lib/content/types";

export type ContinentMeta = {
  key: ContinentKey;
  label: string;
  /** CSS custom property name (without var()), matching app/globals.css tokens. */
  colorVar: string;
};

export const CONTINENTS: ContinentMeta[] = [
  { key: "north-america", label: "N. America", colorVar: "--color-brand" },
  { key: "europe", label: "Europe", colorVar: "--color-sky" },
  { key: "middle-east", label: "Middle East", colorVar: "--color-accent-yellow" },
  { key: "asia", label: "Asia", colorVar: "--color-teal" },
  { key: "latin-america", label: "Latin America", colorVar: "--color-accent-red" },
  { key: "africa", label: "Africa", colorVar: "--color-forest" },
  { key: "rest-of-world", label: "Rest of the World", colorVar: "--color-violet" },
];

export const WORLDWIDE_COLOR_VAR = "--color-navy";
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors from this file (it has no consumers yet, so nothing else changes).

- [ ] **Step 3: Commit**

```bash
git add components/semifinals/continents.ts
git commit -m "Add shared continent metadata for the semifinals UI"
```

---

### Task 9: `PartnerLogo` component

**Files:**
- Create: `components/semifinals/PartnerLogo.tsx`

- [ ] **Step 1: Write the component**

```tsx
// components/semifinals/PartnerLogo.tsx
import Image from "next/image";

const MONOGRAM_COLORS = [
  "#116DFF", "#4EB7F5", "#0BB6A8", "#2FAE66", "#FFCB05", "#ED1C24", "#7C5CFC", "#0A1450",
];
const STOPWORDS = new Set(["the", "of", "and", "for", "de", "la", "le", "les", "a"]);

function initials(name: string): string {
  const words = name
    .replace(/[()/]/g, " ")
    .split(/[\s\-–—]+/)
    .filter((w) => w && !STOPWORDS.has(w.toLowerCase()));
  const letters = words.slice(0, 2).map((w) => w[0]!.toUpperCase()).join("");
  return letters || name.slice(0, 2).toUpperCase();
}

function monogramColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return MONOGRAM_COLORS[hash % MONOGRAM_COLORS.length]!;
}

export function PartnerLogo({ partner, logo }: { partner: string; logo?: string }) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={`${partner} logo`}
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-full border-2 border-white bg-white object-cover shadow-[0_1px_2px_rgba(11,16,32,.04),0_12px_32px_-16px_rgba(11,16,32,.14),inset_0_0_0_1.5px_rgba(15,23,42,.3)]"
      />
    );
  }

  const bg = monogramColor(partner);
  const lightBg = bg === "#FFCB05";

  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white text-[0.72rem] font-extrabold tracking-wide shadow-[0_1px_2px_rgba(11,16,32,.04),0_12px_32px_-16px_rgba(11,16,32,.14),inset_0_0_0_1.5px_rgba(15,23,42,.3)]"
      style={{ background: bg, color: lightBg ? "var(--color-navy)" : "#fff" }}
      title={`${partner} (no logo on file)`}
    >
      {initials(partner)}
    </div>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors (component has no consumers yet).

- [ ] **Step 3: Commit**

```bash
git add components/semifinals/PartnerLogo.tsx
git commit -m "Add PartnerLogo component (real logo or initials fallback)"
```

---

### Task 10: `FlagCluster` component

**Files:**
- Create: `components/semifinals/FlagCluster.tsx`

- [ ] **Step 1: Write the component**

```tsx
// components/semifinals/FlagCluster.tsx
"use client";

import { useState, type CSSProperties } from "react";
import type { SemifinalCountry } from "@/lib/content/types";

const MAX_SHOWN = 5;

export function FlagCluster({ countries }: { countries: SemifinalCountry[] }) {
  const [open, setOpen] = useState(false);
  const shown = countries.slice(0, MAX_SHOWN);
  const rest = countries.slice(MAX_SHOWN);

  return (
    <div>
      <div className="group flex">
        {shown.map((c, i) => (
          <span
            key={c.name}
            title={c.name}
            style={{
              marginLeft: i === 0 ? 0 : "-0.7rem",
              zIndex: MAX_SHOWN - i,
              "--fan-x": `${i * 5}px`,
            } as CSSProperties}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-[0_1px_2px_rgba(11,16,32,.04),0_12px_32px_-16px_rgba(11,16,32,.14),inset_0_0_0_1.5px_rgba(15,23,42,.4)] transition-transform duration-300 group-hover:translate-x-[var(--fan-x)] group-hover:scale-110"
          >
            {c.code ? (
              <span className={`fi fi-${c.code} block h-full w-full bg-cover bg-center`} />
            ) : (
              <span className="block h-full w-full bg-slate-200" />
            )}
          </span>
        ))}
        {rest.length > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            style={{ marginLeft: "-0.7rem", zIndex: 0 }}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-navy text-[0.65rem] font-extrabold text-white shadow-[0_1px_2px_rgba(11,16,32,.04),0_12px_32px_-16px_rgba(11,16,32,.14)]"
            aria-expanded={open}
          >
            +{rest.length}
          </button>
        )}
      </div>
      {open && rest.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5 pl-1">
          {rest.map((c) => (
            <span
              key={c.name}
              className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-navy"
            >
              {c.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Import the flag-icons stylesheet**

In `app/layout.tsx`, add the import alongside the existing `./globals.css` import at the top of
the file:

```ts
import "flag-icons/css/flag-icons.min.css";
```

(This makes every `fi fi-<code>` class available globally — `flag-icons` ships one CSS file with
background-image sprites/SVGs per country, no per-flag import needed.)

- [ ] **Step 3: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/semifinals/FlagCluster.tsx app/layout.tsx
git commit -m "Add FlagCluster component using flag-icons, with +N overflow popover"
```

---

### Task 11: `PartnerRow` and `ContinentSection` components

**Files:**
- Create: `components/semifinals/PartnerRow.tsx`
- Create: `components/semifinals/ContinentSection.tsx`

- [ ] **Step 1: Write `PartnerRow`**

```tsx
// components/semifinals/PartnerRow.tsx
import type { RegionalSemifinalEntry } from "@/lib/content/types";
import { FlagCluster } from "./FlagCluster";
import { PartnerLogo } from "./PartnerLogo";

export function PartnerRow({ entry, index }: { entry: RegionalSemifinalEntry; index: number }) {
  const shownNames = entry.countries.slice(0, 5).map((c) => c.name);

  return (
    <article
      style={{ animationDelay: `${index * 70}ms` }}
      className="grid animate-fade-up grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-line py-4 first:border-t-0 last:border-b"
    >
      <FlagCluster countries={entry.countries} />
      <p className="text-sm leading-relaxed">
        <span className="font-bold text-navy">{shownNames.join(" · ")}</span>
        <span className="mx-1.5 text-muted">—</span>
        <span className="text-muted">{entry.partner}</span>
      </p>
      <PartnerLogo partner={entry.partner} logo={entry.logo} />
    </article>
  );
}
```

(`animate-fade-up` is the existing keyframe already defined in `app/globals.css:79-85` — reused
rather than adding a new one.)

- [ ] **Step 2: Write `ContinentSection`**

```tsx
// components/semifinals/ContinentSection.tsx
import type { RegionalSemifinalEntry } from "@/lib/content/types";
import type { ContinentMeta } from "./continents";
import { PartnerRow } from "./PartnerRow";

export function ContinentSection({
  meta,
  entries,
}: {
  meta: ContinentMeta;
  entries: RegionalSemifinalEntry[];
}) {
  if (entries.length === 0) return null;
  const countryCount = new Set(entries.flatMap((e) => e.countries.map((c) => c.name))).size;

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ background: `var(${meta.colorVar})` }}
        />
        <h3 className="font-display text-base font-extrabold text-navy">{meta.label}</h3>
        <span
          className="h-px flex-1"
          style={{ background: `var(${meta.colorVar})`, opacity: 0.35 }}
        />
        <span className="whitespace-nowrap text-xs text-muted">
          {entries.length} partner{entries.length === 1 ? "" : "s"} · {countryCount} countries
        </span>
      </div>
      <div>
        {entries.map((entry, i) => (
          <PartnerRow key={`${entry.partner}-${entry.continent}`} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/semifinals/PartnerRow.tsx components/semifinals/ContinentSection.tsx
git commit -m "Add PartnerRow and ContinentSection components"
```

---

### Task 12: `SemifinalsExplorer` (tab state + filtering)

**Files:**
- Create: `components/semifinals/SemifinalsExplorer.tsx`

- [ ] **Step 1: Write the component**

```tsx
// components/semifinals/SemifinalsExplorer.tsx
"use client";

import { useRef, useState } from "react";
import type { RegionalSemifinalEntry } from "@/lib/content/types";
import { CONTINENTS, WORLDWIDE_COLOR_VAR } from "./continents";
import { ContinentSection } from "./ContinentSection";

type TabKey = "worldwide" | RegionalSemifinalEntry["continent"];

export function SemifinalsExplorer({ entries }: { entries: RegionalSemifinalEntry[] }) {
  const [active, setActive] = useState<TabKey>("worldwide");
  const tabRefs = useRef<Partial<Record<TabKey, HTMLButtonElement | null>>>({});
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });

  function selectTab(key: TabKey) {
    setActive(key);
    const btn = tabRefs.current[key];
    if (btn) {
      setIndicator({
        left: btn.offsetLeft,
        top: btn.offsetTop,
        width: btn.offsetWidth,
        height: btn.offsetHeight,
      });
    }
  }

  const grouped = CONTINENTS.map((meta) => ({
    meta,
    entries: entries.filter((e) => e.continent === meta.key),
  }));

  const visible = grouped.filter((g) => active === "worldwide" || active === g.meta.key);
  const activeColorVar =
    active === "worldwide"
      ? WORLDWIDE_COLOR_VAR
      : CONTINENTS.find((c) => c.key === active)?.colorVar ?? WORLDWIDE_COLOR_VAR;

  return (
    <div>
      <div className="relative mx-auto mb-11 flex max-w-full flex-wrap justify-center gap-1.5 p-1">
        <span
          className="absolute rounded-full transition-all duration-[450ms] ease-out-expo"
          style={{
            left: indicator.left,
            top: indicator.top,
            width: indicator.width,
            height: indicator.height,
            background: `var(${activeColorVar})`,
          }}
        />
        <button
          ref={(el) => {
            tabRefs.current.worldwide = el;
          }}
          type="button"
          onClick={() => selectTab("worldwide")}
          className={`relative z-10 flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            active === "worldwide" ? "border-transparent text-white" : "border-navy/30 text-navy"
          }`}
        >
          Worldwide
          <span className="rounded-full bg-black/10 px-1.5 text-xs font-bold">
            {entries.length}
          </span>
        </button>
        {CONTINENTS.map((meta) => {
          const count = entries.filter((e) => e.continent === meta.key).length;
          const isActive = active === meta.key;
          return (
            <button
              key={meta.key}
              ref={(el) => {
                tabRefs.current[meta.key] = el;
              }}
              type="button"
              onClick={() => selectTab(meta.key)}
              className="relative z-10 flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
              style={{
                borderColor: isActive ? "transparent" : `var(${meta.colorVar})`,
                color: isActive ? "#fff" : `var(${meta.colorVar})`,
              }}
            >
              {meta.label}
              <span
                className="rounded-full px-1.5 text-xs font-bold"
                style={{ background: isActive ? "rgba(255,255,255,.25)" : `var(${meta.colorVar})1f` }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-11">
        {visible.map(({ meta, entries: sectionEntries }) => (
          <ContinentSection key={meta.key} meta={meta} entries={sectionEntries} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/semifinals/SemifinalsExplorer.tsx
git commit -m "Add SemifinalsExplorer: tab state, sliding indicator, filtered sections"
```

---

### Task 13: `/semifinals` page

**Files:**
- Create: `app/semifinals/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
// app/semifinals/page.tsx
import { getHomeContent, getRegionalSemifinals } from "@/lib/content";
import { SemifinalsExplorer } from "@/components/semifinals/SemifinalsExplorer";

export const metadata = {
  title: "Regional Semifinals — GESAwards",
  description:
    "GESAwards regional semifinal partners by continent — see who's running qualifying rounds where.",
};

export default async function SemifinalsPage() {
  const [home, entries] = await Promise.all([getHomeContent(), getRegionalSemifinals()]);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
            GESAwards · {home.editionYear}
          </p>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl">
            Regional Semifinals
          </h1>
          <p className="mx-auto mt-3 max-w-[46ch] text-muted">
            Partner organizations run qualifying rounds across every continent. Regional champions
            advance to the global finals.
          </p>
        </div>
        <SemifinalsExplorer entries={entries} />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Run the dev server and manually verify**

Run:
```bash
npm run dev
```

Open `http://localhost:3000/semifinals` and confirm:
- The tab bar renders 8 tabs (Worldwide + 7 continents) with correct counts.
- Clicking a tab filters to that continent's section only, and the sliding pill moves to the
  clicked tab without jumping to the wrong size (this was the exact bug found and fixed in the
  artifact prototype — verify the pill height/width matches the button, not the whole wrapped tab
  bar).
- A partner with more than 5 countries (e.g. GSET under Africa) shows a "+N" badge; clicking it
  reveals the remaining country names.
- SEK Lab's row shows its real downloaded logo; Learnlaunch shows an initials badge (its Airtable
  logo is broken).
- Flags render as real per-country graphics (via `flag-icons`), not blank squares — if any are
  blank, check the browser console for a 404 and confirm `app/layout.tsx` imports
  `flag-icons/css/flag-icons.min.css`.

- [ ] **Step 3: Commit**

```bash
git add app/semifinals/page.tsx
git commit -m "Add /semifinals page"
```

---

### Task 14: Homepage teaser

**Files:**
- Modify: `components/home/RegionalSeminalsGrid.tsx` (full rewrite)
- Modify: `app/page.tsx:8,39` (prop/import unchanged — only the component's internals change, but
  verify the call site still type-checks)

- [ ] **Step 1: Rewrite the teaser component**

Replace the entire contents of `components/home/RegionalSeminalsGrid.tsx` with:

```tsx
// components/home/RegionalSeminalsGrid.tsx
import Link from "next/link";
import type { HomeContent, RegionalSemifinalEntry } from "@/lib/content/types";
import { CONTINENTS } from "@/components/semifinals/continents";
import { PartnerRow } from "@/components/semifinals/PartnerRow";

/** One partner per continent (in CONTINENTS order), skipping continents with no partner. */
function pickTeaserEntries(all: RegionalSemifinalEntry[]): RegionalSemifinalEntry[] {
  const picks: RegionalSemifinalEntry[] = [];
  for (const { key } of CONTINENTS) {
    const first = all.find((e) => e.continent === key);
    if (first) picks.push(first);
    if (picks.length === 6) break;
  }
  return picks;
}

export function RegionalSeminalsGrid({
  home,
  semifinals,
}: {
  home: HomeContent;
  semifinals: RegionalSemifinalEntry[];
}) {
  const teaser = pickTeaserEntries(semifinals);
  if (teaser.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl">
            {home.editionYear} Regional Semifinals
          </h2>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-white p-2">
          {teaser.map((entry, i) => (
            <PartnerRow key={`${entry.partner}-${entry.continent}`} entry={entry} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/semifinals"
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            View all regions →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify the homepage still compiles and renders**

Run:
```bash
npx tsc --noEmit
npm run dev
```

Open `http://localhost:3000` and confirm the "Regional Semifinals" section renders 6 rows (one
per continent that has data) and the "View all regions →" link navigates to `/semifinals`.

- [ ] **Step 3: Commit**

```bash
git add components/home/RegionalSeminalsGrid.tsx
git commit -m "Rewrite homepage Regional Semifinals section as a 6-partner teaser"
```

---

### Task 15: Full verification pass

**Files:** none (verification only)

- [ ] **Step 1: Full type-check**

```bash
npx tsc --noEmit
```

Expected: no errors anywhere in the project.

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: no errors (warnings acceptable only if they pre-exist elsewhere in the repo — don't
introduce new ones).

- [ ] **Step 3: Production build**

```bash
npm run build
```

Expected: build succeeds, including static generation of `/semifinals` and `/`.

- [ ] **Step 4: Manual pass on both pages**

With `npm run dev` running, check both `/` and `/semifinals` at a mobile width (≤560px) and
confirm rows stack into a single column without overlapping text (matches the responsive rule
already validated in the artifact prototype).

- [ ] **Step 5: Final commit if anything was fixed during verification**

```bash
git add -A
git commit -m "Fix issues found during full verification pass"
```

(Skip this step if verification found nothing to fix.)
