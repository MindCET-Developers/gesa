// lib/content/regional-semifinals-source.ts
//
// Raw data pulled from the GESAwards Airtable base (appyTu8uOPQUVXD4x):
// - Table "Partners" (tblAfv3rYs6GyXQEF): partner name + linked countries + logo attachment.
// - Table "all countries" (tbl7wFk8g0AbGx7ee): each country's real "Geographic Area".
//
// This file is the single source of truth for scripts/build-regional-semifinals.mjs.
// To refresh: re-pull the two tables and update the arrays below by hand.
// Last refreshed: 2026-07-15.

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
    // Airtable renamed "Rest of the World" → "Tyme Education"; Turkey moved to DOHE.
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal",
      "Pakistan", "Papua New Guinea", "Saudi Arabia",
      "United Arab Emirates (UAE)",
    ],
  },
  {
    name: "Esperanza",
    countries: ["Hong Kong", "China"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/Nq0MZimaVc1kp3OPbR_hKA/LFO6bvo1_XTBfzLxXfO6Cl7eBxRp1NUcbLHbPaT0Mus4Y3HvYkbdgL-9rqOUxNJx1z9mzUseQVBUYympm7FJwiYXsgdBbimYU0Kfu8dyfQWf-Kb6EkbJr27ncn8xhHj1oRGYftHYmstuuSfWezTYVQ/MBLGkruUfutu1Jt5faA5jQ6UO2kva_S6NOAL0L41rtY",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado",
      "USA - Montana", "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/LiyXZtrb_JOHX1AzJaEqHA/KL3-iBo_5oxflaUykE1-qE-uxVEdDW4sgPCDhpzC-DLsTvkXRNC7H-tl7KZEAtgha-Mni39Y5Mp6n17mfz_kUI2W7Pn_vIthBUwyCiFz5SVybYSuUlx4c7P38pmX5Bk9d636i9DM-a5TDiSJsrejBA/ydZBxKy32jEzWnK-Vejb6ycCztDLUc3s4NLesreXgW0",
  },
  { name: "EdTech France", countries: ["France"] },
  { name: "Afinef", countries: ["France"] },
  {
    name: "Ingenious Faces",
    countries: ["India"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/kpjUErYCyAAyPj4087g09Q/1zFoca7LhFlc_3-wMW8c_kDgmp1vtJmvg4nSSrar3ov8WCmPqvdHq1KYMuO-GNg498PtrMLt8qCmko_Bgkul_JvJYrPzqbOEPj73yLgHt55kLNSfstlt0Huhw1BtQXEQAcNCbDQgAdNrg8tH20XveA/4kiDAvLPA756RpSXzFGla8nfOylcn6HKw2cI6du5yDQ",
  },
  {
    // Airtable record is currently named "SEK Lab/ ?" — kept as "SEK Lab" for display.
    name: "SEK Lab",
    countries: ["Portugal", "Spain"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/UH-bdUJ9jkRYfcQeEGdP7w/IZiIIJFHWPTKWp3pNw1yobqZ-P6BvB3FvWLokhgpW1EeK53M1lH8ERBDUqle7DN-Lrnpg2LlTGkksJwCQ9MQoFDjYfjmb2vYA0xja0DPbkt2GA09yF4xaYvm3IbMdknQbKwYxuTXneQ6aYlUS-nfCw/pTVtobuQrLnGtOei4xZyooLt3kq4-idAh5A-SadDSNQ",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    // NOTE: Airtable attachment for this partner is still mistyped (text/html, not an
    // image) — the upload is broken. Flagged for the user to re-upload in Airtable.
    // Omit logoUrl here so the generator falls back to the initials badge until fixed.
  },
  {
    // Airtable renamed "Japan" → "METI Japan".
    name: "METI Japan",
    countries: ["Japan"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/ivZYUgifwXLRX68JRNNAxQ/EOk21fkuvoVkfdbZGAf4tfsOQmU4Jr3-A7juW3BdNv0AZDCpMrux9IrpuuREfmSPQFmuAS5eKEG5Iu6a_sTMfT0uqbTym2tKBeheloi3FkIGXdVS2pfj0z_PGtW_bceTTmpqmeoVGE6lxqnCblkZVw/pqV4ahIh89GfCvz-YZul8OhjK8c2TN9OOjJU-oA1C9I",
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
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: ["Brazil"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/Fs558ScfYNlGdm1eluOkOA/iksVzJ_4RMFKNKPFGxSFgf0DfwINhjpzsyjLCpI0lfky5UsRLFr495W9i-nktRUzd_iRGYdH0Z-tQMQzs0dZYYPnq2Fq5u8AkKf2iXKq3JJHPAfrTZkcRnaTfZnitzij_TGMVhSS_DumjNqR3_waMg/VB02VpGZjLRLtVLLYyoHTkc3TX4JNiZosYK-ebzDtjk",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/3wMATFg3kjc78Rfcc4RIyQ/X5r-OSJPk0fQszVcuFZmAirDjtUZRUmRO9BrVxV_uDZjSGWrUGQ7m8VrM2dKQOgve-13z4AuwAuLc24b5E7Y-FLUBAudSS8g3xR1d2V0ouowXQrKAeTuGiJwkLxejdeWc16s8ecxGHT9Wxa1oURXhw/ZcVMIgwdmtaezBVRfCM077SZpMxmsYzFhvt-xP211TQ",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia",
      "Philippines", "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/BMByf4keAOmOOtfqorkIgw/92L8Dww2e40xYjWi8hFxSyiipEL-Mo5a4sWO7Jpit1HPJTV5Xn4hhnN3Gt0IENlqpJYE_qGjtBDhLNJSuuS-j65WCY4_JVMw0Mm5RC3_bWs4kq4YHir0IpF16V9MaENMy6PWyj8ilT0oZLSWvyC7iQ/ZYBrbqrUexX25OBz0fI8-BedQ6KOxGEA65epskmxzLg",
  },
  { name: "UCL EdTech Labs", countries: ["United Kingdom (UK)"] },
  {
    name: "Dutch EdTech",
    countries: ["Netherlands"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/saSR-_IU1ZJUJxDSphRuvA/8zEqSTxiSWVanxqNOHnLQc6ribOzLap4C-tHlpycjZkXoiCg2ojAcYu0KMnsB29SEY47xqA7OjZhsh_kEATENqwMyGzP4eiHjQqbJ77DlG8fj1w9lKeD_-bzJ4dSaLccAeFgQjo4VRE9VeIAwcYLRA/1Ua2BpC4NzfiLtwqCx6tPLb-rjr9UZo4rvue6XV1Ku4",
  },
  { name: "Taipei Computer Association (TCA)", countries: ["Taiwan"] },
  { name: "Learning Spark", countries: ["South Korea", "North Korea"] },
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/y0NAhL1mvSCnwgzOQyxoxg/6W9uqarYBakPIX4NDNZ00Jx443izXdKMx_dfwaBNxflZfL1YygmTIx8yPIpBYX2mnGWkRli2HpEvvoWIDR7FWK_L_1rpo8rvem1ves-Pn1THi4sM5wIGLdw2H5-Er_nFNhbt1E_-V6lcMb9KGJPmyg/cXqiTRBFBiDoQMbxPvT8r63GLIREriedahlFJKvL3L4",
  },
  {
    name: "Startup Braga",
    countries: ["Portugal"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/unUHGUOyJCd0E5PU_De8Bw/CJRIWKHKnx73_Gfl7iqTZaHlJVD1pofZYM0TDjfQBlkvfHsfUF7bubkNvVx8mQpKO6rTgKTV8tC2OWLdX1cs6Gf5V7YFQg2diLqjhWKAs6o1kCmvmVoSnuyxkDeQes-ATprQdDfnfLr1f5uE3ttO8Q/40VKne_vVxen0dL0c-GoWWHc65C02CJgJrxoHhXiA3s",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania",
      "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/G06_FnUADQGncd-lSeNtsw/ko-eXUKbHijEOFsa-Z7t0AA-tvByCpyi9PAu_fDApflkxjqxCEGbz0T5ykk6CmPDXrY0DU593K8lnnFVYMhObheH23r6F7txq7RmhUGesP99b3KKgDvG9YIrx9WYenZe28WQ69UtQi2ZFJdWaFKBqA/-yGuUXllK7tTQ2iwpf7GCIdcp8JlXV9B0sTehZBOTS0",
  },
  {
    name: "Positivo",
    countries: ["Brazil"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/qWYYMp0TCrVjaNWrwFnUnA/wX5b3SrNok9l89iKXBoUFQ7RxHiotOCe-nyodb7mukI5sQKdAtZe7NQ-d-QbieNGs2zFH1C74C9kRabo-OEjsUixUO38FJy0ENOHIL86uuFbRA0LMQj69yzosykpNmdnIar4vKlhUBqrwiGGA0DFpw/fnU5k2dgRiVvV94ddC7-LxVzlZ7A1biWxekFkCOdK3M",
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
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/ER8xvPBWHzszGq4rx4-JYg/mdgQh1_jmtNqBZ3IZf5MyPeDNHdldkBZ_VkfLOoBX3EdSoCaoChz0fq0CsT5ZxThs4Vrr3Tjmv19bLxlZjzqyU4ke1NShoa4piYPGA7U8H4BOlP0qUQshH79cn84C9gBRUoP16TvRCdwKRFFeQPBFA/iGh42eZgZzfIqZR-uSU6_bQG20vodprTZSOszV0Xv_Q",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: ["Austria"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/rLCtWwfuQi_8BAE_0988BA/9Z56VrMepjjuPIWpCWwvo1bafHpEVDuLGcp3LDrVbnTiX7Cp5B2uEoFCsxpXzkls_0iVwVEz9xz3CCXlCKVVS7kXbCGx_wsYicWWwTZYmzrqvpWEvU9IR-KfacqliY990CUUZ1n1JpVBSD2yYZ5CWg/4PpPpnysjfDTbvNEc4wM38ixUWUbzEW6mwbiTjAyhHU",
  },
  {
    // Was empty on the previous pull — now covers wider Europe (plus Turkey, which
    // Airtable tags as Middle East, so it splits into its own Middle East entry).
    name: "DOHE",
    countries: [
      "Albania", "Belgium", "Croatia", "Cyprus", "Czech Republic", "Greece",
      "Hungary", "Malta", "Moldova", "Monaco", "Serbia", "Slovenia",
      "Switzerland", "Turkey", "Ukraine", "Andorra", "Belarus",
      "Bosnia and Herzegovina", "Bulgaria", "Kosovo", "Liechtenstein",
      "Luxembourg", "Macedonia (FYROM)", "Montenegro", "Netherlands", "Poland",
      "Romania", "San Marino", "Slovakia", "France", "Austria", "Germany",
      "Italy", "Spain", "United Kingdom (UK)",
    ],
  },
  {
    name: "EdTech Italy",
    countries: ["Italy"],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/uPP1Plum_fQ4vSWy3zga4w/rtq1yPXeC0VCI24JiqcCPBVliwKJX5_umAcFQlskMdh1hRHmmLNwuDJwCGJClkl52gZ-LogZtUdy8acg0HKynZuX-13uOfoUHoVFVUWtMiSNPRWHeEEZSDgqWyrqrr8jjWEYaF-f10aqiR1QfHlX2w/YFt4QDeFATe0ZctEphnfBK-8rzjzvVDYzGpdS1vnP7w",
  },
  {
    name: "GSET Ghana Society for Education Technology",
    countries: [
      // Airtable links both "Eswatini (formerly Swaziland)" and the legacy
      // "Swaziland (renamed to Eswatini)" record — collapsed here to "Eswatini".
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784131200000/yUVrQjXcTfMEb3bf4Z2YUg/WjxF6XgRlItqauMwUfR_muEExZMfh3WGyZ2j0mS8q5jrct2G98-OvF1FXRMhVEKGpBjLXWgzZyr7tTGSa0g3ASt10YV3PDJ9nTjBGHtDCACK5fWamyQQI58iGS6KNyEAnBcFkd5phmKDZfq-IIZtHw/JBkdphkrvEnagCzDgQKMMFL-3dPqZrCVhXxLDL7H4yw",
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
  Germany: "europe", Albania: "europe", Belgium: "europe", Croatia: "europe",
  Cyprus: "europe", "Czech Republic": "europe", Greece: "europe",
  Hungary: "europe", Malta: "europe", Moldova: "europe", Monaco: "europe",
  Serbia: "europe", Slovenia: "europe", Switzerland: "europe",
  Ukraine: "europe", Andorra: "europe", Belarus: "europe",
  "Bosnia and Herzegovina": "europe", Bulgaria: "europe", Kosovo: "europe",
  Liechtenstein: "europe", Luxembourg: "europe", "Macedonia (FYROM)": "europe",
  Montenegro: "europe", Poland: "europe", Romania: "europe",
  "San Marino": "europe", Slovakia: "europe",
  // Asia
  Japan: "asia", "South Korea": "asia", India: "asia", China: "asia",
  Singapore: "asia", Brunei: "asia", Cambodia: "asia", Indonesia: "asia",
  Laos: "asia", Malaysia: "asia", Philippines: "asia", Thailand: "asia",
  "East Timor": "asia", Vietnam: "asia", "Myanmar (formerly Burma)": "asia",
  Taiwan: "asia", Bangladesh: "asia", Nepal: "asia", Pakistan: "asia",
  // Rest of the world (per Airtable's actual tagging — includes Oceania)
  Australia: "rest-of-world", "Papua New Guinea": "rest-of-world",
  "North Korea": "rest-of-world", // Airtable tags it "Rest of the world"
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
  // Central Asia / other leftovers
  Russia: "asia", Azerbaijan: "asia", Kazakhstan: "asia", Armenia: "asia",
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
  "United Kingdom (UK)": "gb", Austria: "at", Germany: "de", Albania: "al",
  Belgium: "be", Croatia: "hr", Cyprus: "cy", "Czech Republic": "cz",
  Greece: "gr", Hungary: "hu", Malta: "mt", Moldova: "md", Monaco: "mc",
  Serbia: "rs", Slovenia: "si", Switzerland: "ch", Ukraine: "ua",
  Andorra: "ad", Belarus: "by", "Bosnia and Herzegovina": "ba", Bulgaria: "bg",
  Kosovo: "xk", Liechtenstein: "li", Luxembourg: "lu",
  "Macedonia (FYROM)": "mk", Montenegro: "me", Poland: "pl", Romania: "ro",
  "San Marino": "sm", Slovakia: "sk", Japan: "jp",
  "South Korea": "kr", "North Korea": "kp", India: "in", China: "cn",
  "Hong Kong": "hk",
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
