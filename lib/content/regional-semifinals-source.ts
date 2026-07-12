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
