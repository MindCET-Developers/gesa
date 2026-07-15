// lib/content/regional-semifinals-source.ts
//
// GENERATED FILE — do not edit by hand. Regenerate with: npm run refresh:semifinals
// (scripts/pull-regional-semifinals.mjs pulls the GESAwards Airtable base appyTu8uOPQUVXD4x
// and rewrites this file, then re-downloads logos and rebuilds regionalSemifinals.ts.)
//
// Sources:
// - Table "Partners" (tblAfv3rYs6GyXQEF): partner name + linked countries + logo attachment.
// - Table "all countries" (tbl7wFk8g0AbGx7ee): each country's real "Geographic Area".
// Last refreshed: 2026-07-15.

export type RawPartner = {
  /** Canonicalized Airtable record name. */
  name: string;
  /** Country names as linked in Airtable (US states not yet deduped). */
  countries: string[];
  /** Airtable attachment URL for the Logo field, if an image was uploaded. Expires —
   * scripts/download-partner-logos.mjs mirrors it locally. */
  logoUrl?: string;
};

export const RAW_PARTNERS: RawPartner[] = [
  {
    name: "Afinef",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/DJrHohiDu2PoYZFFl_4duA/bEL1TPr9UMvaOVRmxy9cjddXnkRtm6O0iil3fPjy5v2EmqKh37JsJ2KBOmKxG2AHUXiXUUl3hr5Cw2iYFBR4OwSuiQgMFMYO5bu4WMtP4iTMz5yE9L3l8gwyEc-Yevrk6R_NjWPOXbMlMNf6E61de0YRRUgrjNRkgUBhunplfbk/pEjQfsddMP0V_t72o4mPd4cCF0enDWvYDTBI7JP5eH8",
  },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/KMkIRCb8tOPD6YrUptF9Pg/6COgJaZYkJGSH-ENP1lyLWLjK1wwCop34k6-RXujzVr7s9rxjRC5RUXtA0kLMdyg9xbAaeF8XcKmaoxZugiD0B51tpuUWHCxDEdiGAKniaGkHBO1Jm16k8oQlxpubtKHf_MzuHOjcPy7RG4dh1StCA/gw_lav7MHXyrnlwUWg_P-1o9BVtgfWbKMCMsCr7Bkog",
  },
  {
    name: "DOHE",
    countries: [
      "Albania", "Belgium", "Croatia", "Cyprus", "Czech Republic", "Greece", "Hungary",
      "Malta", "Moldova", "Monaco", "Serbia", "Slovenia", "Switzerland", "Turkey", "Ukraine",
      "Andorra", "Belarus", "Bosnia and Herzegovina", "Bulgaria", "Kosovo", "Liechtenstein",
      "Luxembourg", "Macedonia (FYROM)", "Montenegro", "Netherlands", "Poland", "Romania",
      "San Marino", "Slovakia", "France", "Austria", "Germany", "Italy", "Spain",
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/vx6jGfoMV29AKC19zlbgQg/5HbuNPYDeGLcyNiYBabOnKyjqWA8buA2ktX2TkReRrtkgt_5lYr3Lls5OStmEYRJ1d57M1VQIzgtryfnDPbBYdELKkIIFlB4lbq8yWL9e8gWtLT_nv8jKQY3VEhGStQH7le5_zRJ0x4Yaw71oZh-2BYtTJs8ZI8I3cqtb9gUH3o/IqTW7kbIvWNCDTpCsennGGl9jgDs9NdXAMnu3bg_NKw",
  },
  {
    name: "Dutch EdTech",
    countries: [
      "Netherlands",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/vbTPIGegptaVgKdLfKz9WA/8DAFXlOPnSpjIvxmo7N-CPKKCEj61aDpXb3upHY_4WbP7CcZAUWZ35MRHrHfRxEaFAYKfwbM6npxvfCAFvy7h3UngdvK6hfOxEQsXbNwoZa7dl6uoNQinBL94JgdoIiyYKMbG8NleSDdaSeEpFpelA/CWqe6tgoRxCX7U9nvH7weEYnPsEi0K4XiMm7ioPRfcE",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/8JUd4lvdgHRXtQR6bIqubA/6vgtbTdAwhtxJe2Dm6tZqjX1flBFASgs7FMIHBUMITSTnr_qLnKehgh3dV9lVHOHIanbmEYjqRIIFBskto9ae1r9C_aytkfG1qhDBAN5YosRcr4Ev7oQXKqSupS-InkC845g0EmAha2hiSiqKYnx3w/RSV0fxXQjrCqrysEI4bxVayd46kHe7J9Mz17I0izfs8",
  },
  {
    name: "EdLATAM Alliance",
    countries: [
      "Argentina", "Peru", "Chile", "Colombia", "Uruguay", "Paraguay", "Bolivia", "Ecuador",
      "Guyana", "Suriname", "Venezuela", "Belize", "Costa Rica", "El Salvador", "Guatemala",
      "Honduras", "Mexico", "Nicaragua", "Panama", "Cuba", "Dominican Republic", "Haiti",
      "Jamaica", "Bahamas", "Barbados", "Trinidad and Tobago",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/qRQs5nDtG9X8Z5kFRbFoBg/c1wF4Lp6K0Vks7Ij_sazKUXSGbSDGRpFQPThjsdZZs5_5INfkfuO9rbbwAMNds7jFzJVrCKQ3BW86-2yAlgP_I0UTevClDW1F8Xbr8PHcL4AP6fUBJGHGfgPwbfyU8usViXj7OA1Y8eqHRz9geJ6IA/6ysPnO62GLPh4i38wnquNh6KD63Abg_o7CN3j8nljAg",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: [
      "Austria",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/J0gpvgZwRYywSdN_AMpRiw/S5bvlu3l1tux1TPyUfK67RezgqDt71ljF15Azd-lkoQHFNqd9Rs6FQNNnx8eMlxk_CS54d0B7ZG9_QOm2idMAwo5q7Fmv4cmx0egCWNutcE3ZEq74kBLVGKI8jFJaxzvm2R_YWwm_RLzRFsNk-Qqdw/Bx-jb-1UMVXh7ifjwFZtY7Twq6VHB6ofsCEevdHzX9I",
  },
  {
    name: "EdTech France",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/ptqPhRMya07STzMsaZU-NQ/Vcl6bVhy3YvImyIhhshL6flfinFIwRarNWg4rqCkZCNcwUThRUCDEgWrC3x61bbZcg7o3LQeVZSaXlIIxsZtwBuy3DuqpgnvsuQhPt4yU09Mc0yPvnALEVVtqtnTmsXMQmzyXS1MPHfNYa3dXAOkVnMnygxcj2QwNdArtIhrwsk/45AQSxKBeTkZUiyPIhbPqYGkbx3c66FU3vE4ZFOXNsE",
  },
  {
    name: "EdTech Italy",
    countries: [
      "Italy",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/lTCvlmHjcVnLZhE5oWNIGg/csR3SpygOfylmX7nRJzBZi_jVLt5jY8U6Q9XdQxRC0JaEq9V0lqhUnWBe_Kc1Aw_GyTxdkXtnVz3AVuLqO86pac_iVW2ha8o9tXp-1tJyYILJnGxcG0VDMWFWzxzKpEmR8zDODfMFM9nPfpsKE-Xsg/N9r7yOjixzn8QJmB5o_k9sftGz7MXAXZqT5P6eplLN4",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Philippines",
      "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/4pYGMkvav7-idfzezeZH2Q/vkPT-6YpAaeTOJS6huq-9N46c-0WGn3eS_Vtp6gJgmMDkP1waAPDOz3uBctMlxZrUMLr-Ff9G1j6fm10rCpVFFd1WDj3lJIsIXsajVLBg6A7HbVTTUMH8OdOTlUQiMOFFrG8CfRX-zRGViTpanRt6w/vXr8-GvIiR2oNKYWDaGVd6p-yOJorh70Vn8adnta4_w",
  },
  {
    name: "Eduvation",
    countries: [
      "Germany",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/fMTiQlosgde0KY0iJD1jpw/Be4aNIaeokHMgA7rMPPh5qFMcwknJhHqRL7LZCAEPe-UUizcT8bahnNRcN2CvOTS1_9Qd3c7UmBbydBanzb6VmG1LMU5YJfpwi4KQ6MFlKRCrdyb3Eub4S_vTL1Iva6BhyMIkU03HqUZHW-nfu79Ivmt4Cw_1SjQ9ZtCS5FmOEw/OEa8zZzA1tLZDcDt96ITxJDn717eH3Egx0KDsqYUoEI",
  },
  {
    name: "Esperanza",
    countries: [
      "Hong Kong", "China",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/iM-KqvP5r0ceVYBdMRaE3A/qPPwfDWlD-J372qGm9gaSfCsyQu0F3Nft_FiHDXVqUTkJ8g6mbxUhT6NbQJcM7DepPXzOc2Ya85isoUyMuMVqOPt05Ga1J6naBHJCjZhW2x-c7qgQh1zpZ_czBz6eKyq4E3hzfD9WVaRvdoz1TwQLw/ZPsYAF1ofAUXFIgC9jrjroPYgbkbNh-Cu2EhuXY66mc",
  },
  {
    name: "GSET Ghana Society for Education Technology",
    countries: [
      "Nigeria", "Ethiopia", "Egypt", "Democratic Republic of the Congo",
      "Republic of the Congo", "Tanzania", "South Africa", "Kenya", "Sudan", "Uganda",
      "Algeria", "Morocco", "Angola", "Ghana", "Mozambique", "Madagascar", "Ivory Coast",
      "Cameroon", "Niger", "Mali", "Burkina Faso", "Malawi", "Zambia", "Chad", "Somalia",
      "Senegal", "Zimbabwe", "Guinea", "Benin", "Rwanda", "Burundi", "Tunisia", "South Sudan",
      "Togo", "Sierra Leone", "Libya", "Liberia", "Central African Republic (CAR)",
      "Mauritania", "Eritrea", "Namibia", "Gambia", "Gabon", "Botswana", "Lesotho",
      "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Eswatini", "Djibouti", "Comoros",
      "Cape Verde", "Sao Tome and Principe", "Seychelles",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/zYXaJozVqK27Y3IJ8wA5BA/NSJtQ4boEwa80z9UJgrYgkw6GFsoBuwtN8QnF7zNASJAc2kw4El-jBOlzmmELzrdcXlaxJb5sqadvPAPfkw0D1z4qdwt_vH_QxcFd49pz4420DUDBeyE42eWGwcYUjRjSAFXd6WxgFJxL8-m7tJDog/4qzqF3Ffu9Rop2300K51hgkvz_0-SdHZiIjdHaGhe3o",
  },
  {
    name: "Ingenious Faces",
    countries: [
      "India",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/byftzlaWbsg4odfZn4nKfg/kf75u3XCKVwGvvEcXq_W2Ge1Pxesy7ka7Ihgo9EYtirnWZpH9enPZknzASNv1WLz-4GxKWb5iL0m-Vb_wplhFA0h-NoWwSYj4GUy9KDMq3m0iYCOVpj2R4ZAoI7eFRiWP6EHuFvQq-BWJRN69LxX4w/AMEirAUlFCLhhG3deO7AxLHzxKXtRLvc4HawyK0BHiM",
  },
  {
    name: "Learning Spark",
    countries: [
      "South Korea", "North Korea",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/bX2MFfN2OdRmIqrYgTVVLw/6ZYKYrcqgUJqAeZwUn62Qi7N4_UlQCMe_S73ouepj-gtafZ-nIim85pmydBcUk7WZ_2ZTRevpefgu15S2OsTxNlEtK17uFBzeCs8uYB6M-DQdwAOs8L7KD9EeDttfUr3-0pmd1dpI2oPVyQSAa3wwQ/N372x1LD1HzPFDAGEX-HnJS_DOYTFGPadvEhszzz-3U",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/HZpixr0pcJLkqbKOy-pWzA/KSPeez9J1CuPioKbUslutJQaXRd3bWcwPqLF2y0nWr33mBnAsI5ChH5wBbm_WjMWBxMTvvYUuhngENJ1Vjpr1641FeHZz0wRMvlw9CGzKesfX2ZQBfLdU2_C_Hwie8k1iYrsmGAQkJtzC_1r3H7d9VuVs0klKY9IfwfSdObXjmE/SDhTgigkidt38_UMuoCvV3OZHnHKkCHikcZHipGrSGc",
  },
  {
    name: "METI Japan",
    countries: [
      "Japan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/QfinvwFs6B0LmuEbp8QEXw/0lLKKsrXE8UPmrASPDnTeSIbF8YqO9ZAw8vaRcJVZ-glkwyg73e5vYuOcxbk-jiNOuqz504-M19IqrnXrsopWqt32ZstIMK2AztNn4Xr326R2u73UlEhfoaMXYCbcyy4i0vmEoMU92eeQRcja0xxxA/UZeCTv5SxTW2N8ewvqurZtqk68g5HQwUkmvSGHgGIv8",
  },
  {
    name: "MindCET",
    countries: [
      "Israel",
    ],
  },
  {
    name: "Positivo",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/LnMFKbuCaeimUSIGEYoFCQ/T7ojEl7Do-FVpApAy2PRpEyIzjtCwx9q4h4ZZVMoeTQNNHRtfQIKTfLrpWou6GZixah9A85wA6M4LNxB3oHDxJEeITrybo4mj5eX6FHzWi0IQetjKFC5KRv1-0s8EIy3BsZ7PzkWI6Qtl0IV9AoiyA/BP-OXgPBybVRJm0wU0qQlZWiK69m-VjqXcAjkH9bDjk",
  },
  {
    name: "Prismapar",
    countries: [
      "Argentina", "Peru", "Chile", "Colombia", "Uruguay", "Paraguay", "Bolivia",
      "Equatorial Guinea", "Ecuador", "Guyana", "Suriname", "Venezuela", "Belize",
      "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Panama",
      "Cuba", "Dominican Republic", "Haiti", "Jamaica", "Bahamas", "Barbados",
      "Trinidad and Tobago",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/IfSyczPPmetdzDC-3_8YSA/m06so7KO5j485j2J62YceTnJN1tLaQGm1iirQ8nf5_OSm23R1k1WiDGV_DZ5M6KPyLjJCjqahDFYGczu_Hd4TaDqu_dIntjH62u3k5_dd2ZlLCsDy4b-8pubYjpHIqyECmuKbWEmzz1sYA_6zvVl7A/Bd5hHp9JgEJqPD3LeEd1gG0ayMWGXOhrHvpb-gZ_g_Q",
  },
  {
    name: "SEK Lab",
    countries: [
      "Portugal", "Spain",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/FirxjH7nSJm2TeJYSDOuzw/sdj6Y3mkrvsvo597kMkXGaL0dlQPf8_Qxl8FyBRyG9TvvtevEPM6uWUXJSNGuxPGmSDyAIJ6oVDBKjgXf_QdsBMfYLJgIMPdf8WYROJZowVopc9P5SupxQsU16qx2frMEfaYLDrkhHLvzKVOyz5BWg/G5dfVQ19S80HKA4L112tE2HjAijslXm1evftKdhH9gY",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado", "USA - Montana",
      "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/cHMjrfR4WXkln6fyFuiA-A/m2f3QBvWWn3aiqWr6lqd5cqapxI1Lilua0WYtEG8akg-Vj04nI8rRlnfc-ZgyusrPOT9s9_Y1b-K5KqD54IGMblaXOWa4EGMB8cLbLfAh4BXqIrw8tXd_lKHw91-x5L6XTofHTfxn_p2tDgbb1zXzA/7OKOKy1t6ZBMjgksFpapWSp2iTLJpc6UfuPXk-ZYzmc",
  },
  {
    name: "Startup Braga",
    countries: [
      "Portugal",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/aRUukVGnyMn_iZmc7gA1Ug/9WNDyXyELl8nfdLsAXTfZZg5Cft-mzIwhm9RzdQL6zoGlHYe4b8PjrNko9xQLnmI3EBc7bZzLPMpGvRZVwA4bYk8y7UV5w3vcDgbKU0bx8SEIhZDZ4AGq4D_Ri8kaSWQEz3UtZnhU4LRfmEjOK4_xA/rg3W9pJ95MYPWnbzUZg8JwS1HIQBo2jJPUIuH_2Y058",
  },
  {
    name: "Taipei Computer Association (TCA)",
    countries: [
      "Taiwan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/BCNi9jbKEiiLf4pVMj_3Vw/lAQ5nbMhwOVwb8aqjkr6JQxmpDXot8Cgk8wE6V-VUPSLUuIb3OUdZ76K5WVC-ijAaFdCGTzx2y7FFJDKor3kOsTXQ_2KD-tJwIX4krx_iyO97-nX5Sta3oE9bGxBi132vKvWpoFQp8hm0cPW0PnoM42z-vZhBsSN10O3iDOnGKw/R6M7fK5pQFe0h1IATTPebY5k0YBIURDmmeR0K-7SRQs",
  },
  {
    name: "Tech Monterrey",
    countries: [
      "Argentina", "Peru", "Chile", "Colombia", "Uruguay", "Paraguay", "Bolivia",
      "Equatorial Guinea", "Ecuador", "Guyana", "Suriname", "Venezuela", "Belize",
      "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Panama",
      "Cuba", "Dominican Republic", "Haiti", "Jamaica", "Bahamas", "Barbados",
      "Trinidad and Tobago",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/RXydBZFY5_8LvCYpSdfFbA/DOq1vByyfyLUhBaxT5WAnhBv0JU1aNxLusRM9y3bSqGQIdyxVuXADW5jekk8L81tvili5SnwpgJWXTICcMxV8jHrMcXw-AzcgarXQ2VDFqH_sXLp3hy36n7b4lpJdZt1mtnh9FIpXP5Je_ON9UD-SKK34P3xxx14NyHo18q9Cdc/sO_gwbErPMNXDi385zZvmAR1VDmxnf0LMyl56kXFg5o",
  },
  {
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal", "Pakistan",
      "Papua New Guinea", "Saudi Arabia", "United Arab Emirates (UAE)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/Ztv6-QVWB4r-to0tVEjegg/eGvV6oE6YXsXdAv3SblcEKGIFGcCuVf6dXKwIrRHeQCyr_sYNpGYl-KozOhTRZ31XT9XEPMnTPxBWESuqSKmNvTu-htHN-AfhA7GPWn5Rhm7ECjNjTUchBSSok9Xmn90Z6xo_YGEPCZKAPeyDNaHbmwdSF4mOJ81KpzEi51Rznk/nnIIU_-mV3UbK9699v8VOBZ098RjLFsjIe7d6utbO-Y",
  },
  {
    name: "UCL EdTech Labs",
    countries: [
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/khf355Kh3eU0NwcMeSuu6Q/gEQ4RA7IO8WL3LCjx-qd6KJhTYfHBhcXxiZzKBziw1GbiiCVaZ9P6ZL2BvC0YwpU8g2tahlyC51Az0IwASU-SkPoGhBxCsFxOWXqxsyOLIS_sDFMcUgvonpm4S4OTXfT1mEAVHuG0GJxMteI_uRqgA/VZ4LI7OKDzN-qTIDf5RENQw6_MctyUMR7MLJBk8SNZo",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania", "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784152800000/JJGw9RvvO-GT6hvscCiv5w/57SCpZxbS18HorrorRxqVyqDz-SuWQ-u0ApEzX2NYIb70Yue1Iqolq76_EupV68H_J7bJnj5pOHTqcYRs_KVQ8H6yLpllrD6le751pwEFYdJK5DZyZ0Mq98RaXOynFR5v64gJZg1KZhtG0n_0vXPxg/xIaHSJe6yd5rIu67zLZp1IpGYR7lORq8TFCM7-tpOMs",
  },
];

/**
 * "Geographic Area" from Airtable's "all countries" table, keyed by country name after
 * US-state collapsing. Countries without an area in Airtable (mainly Hong Kong) default
 * to "rest-of-world".
 */
export const COUNTRY_TO_CONTINENT: Record<string, ContinentKeyRaw> = {
  "Albania": "europe",
  "Algeria": "africa",
  "Andorra": "europe",
  "Angola": "africa",
  "Argentina": "latin-america",
  "Armenia": "asia",
  "Australia": "rest-of-world",
  "Austria": "europe",
  "Azerbaijan": "asia",
  "Bahamas": "latin-america",
  "Bangladesh": "rest-of-world",
  "Barbados": "latin-america",
  "Belarus": "europe",
  "Belgium": "europe",
  "Belize": "latin-america",
  "Benin": "africa",
  "Bolivia": "latin-america",
  "Bosnia and Herzegovina": "europe",
  "Botswana": "africa",
  "Brazil": "latin-america",
  "Brunei": "asia",
  "Bulgaria": "europe",
  "Burkina Faso": "africa",
  "Burundi": "africa",
  "Cambodia": "asia",
  "Cameroon": "africa",
  "Canada": "north-america",
  "Cape Verde": "africa",
  "Central African Republic (CAR)": "africa",
  "Chad": "africa",
  "Chile": "latin-america",
  "China": "asia",
  "Colombia": "latin-america",
  "Comoros": "africa",
  "Costa Rica": "latin-america",
  "Croatia": "europe",
  "Cuba": "latin-america",
  "Cyprus": "europe",
  "Czech Republic": "europe",
  "Democratic Republic of the Congo": "africa",
  "Denmark": "europe",
  "Djibouti": "africa",
  "Dominican Republic": "latin-america",
  "East Timor": "asia",
  "Ecuador": "latin-america",
  "Egypt": "middle-east",
  "El Salvador": "latin-america",
  "Equatorial Guinea": "africa",
  "Eritrea": "africa",
  "Estonia": "europe",
  "Eswatini": "africa",
  "Ethiopia": "africa",
  "Finland": "europe",
  "France": "europe",
  "Gabon": "africa",
  "Gambia": "africa",
  "Georgia": "asia",
  "Germany": "europe",
  "Ghana": "africa",
  "Greece": "europe",
  "Guatemala": "latin-america",
  "Guinea": "africa",
  "Guinea-Bissau": "africa",
  "Guyana": "latin-america",
  "Haiti": "latin-america",
  "Honduras": "latin-america",
  "Hong Kong": "rest-of-world",
  "Hungary": "europe",
  "Iceland": "europe",
  "India": "asia",
  "Indonesia": "asia",
  "Iraq": "middle-east",
  "Israel": "middle-east",
  "Italy": "europe",
  "Ivory Coast": "africa",
  "Jamaica": "latin-america",
  "Japan": "asia",
  "Jordan": "middle-east",
  "Kazakhstan": "asia",
  "Kenya": "africa",
  "Kosovo": "europe",
  "Kuwait": "middle-east",
  "Kyrgyzstan": "asia",
  "Laos": "asia",
  "Latvia": "europe",
  "Lebanon": "middle-east",
  "Lesotho": "africa",
  "Liberia": "africa",
  "Libya": "africa",
  "Liechtenstein": "europe",
  "Lithuania": "europe",
  "Luxembourg": "europe",
  "Macedonia (FYROM)": "europe",
  "Madagascar": "africa",
  "Malawi": "africa",
  "Malaysia": "asia",
  "Mali": "africa",
  "Malta": "europe",
  "Mauritania": "africa",
  "Mauritius": "africa",
  "Mexico": "latin-america",
  "Moldova": "europe",
  "Monaco": "europe",
  "Mongolia": "asia",
  "Montenegro": "europe",
  "Morocco": "africa",
  "Mozambique": "africa",
  "Myanmar (formerly Burma)": "asia",
  "Namibia": "africa",
  "Nepal": "rest-of-world",
  "Netherlands": "europe",
  "Nicaragua": "latin-america",
  "Niger": "africa",
  "Nigeria": "africa",
  "North Korea": "rest-of-world",
  "Norway": "europe",
  "Pakistan": "rest-of-world",
  "Panama": "latin-america",
  "Papua New Guinea": "rest-of-world",
  "Paraguay": "latin-america",
  "Peru": "latin-america",
  "Philippines": "asia",
  "Poland": "europe",
  "Portugal": "europe",
  "Republic of the Congo": "africa",
  "Romania": "europe",
  "Russia": "europe",
  "Rwanda": "africa",
  "San Marino": "europe",
  "Sao Tome and Principe": "africa",
  "Saudi Arabia": "middle-east",
  "Senegal": "africa",
  "Serbia": "europe",
  "Seychelles": "africa",
  "Sierra Leone": "africa",
  "Singapore": "asia",
  "Slovakia": "europe",
  "Slovenia": "europe",
  "Somalia": "africa",
  "South Africa": "africa",
  "South Korea": "asia",
  "South Sudan": "africa",
  "Spain": "europe",
  "Sudan": "africa",
  "Suriname": "latin-america",
  "Sweden": "europe",
  "Switzerland": "europe",
  "Taiwan": "rest-of-world",
  "Tajikistan": "asia",
  "Tanzania": "africa",
  "Thailand": "asia",
  "Togo": "africa",
  "Trinidad and Tobago": "latin-america",
  "Tunisia": "africa",
  "Turkey": "middle-east",
  "Turkmenistan": "rest-of-world",
  "Uganda": "africa",
  "Ukraine": "europe",
  "United Arab Emirates (UAE)": "middle-east",
  "United Kingdom (UK)": "europe",
  "United States": "north-america",
  "Uruguay": "latin-america",
  "Uzbekistan": "asia",
  "Venezuela": "latin-america",
  "Vietnam": "asia",
  "Zambia": "africa",
  "Zimbabwe": "africa",
};
type ContinentKeyRaw =
  | "europe" | "asia" | "middle-east" | "north-america"
  | "latin-america" | "africa" | "rest-of-world";

/**
 * ISO 3166-1 alpha-2 (lowercase) for every country name used above, after US-state
 * collapsing. flag-icons keys its classes by this code (e.g. "fi-us").
 * Maintained in scripts/pull-regional-semifinals.mjs — add new codes there.
 */
export const COUNTRY_TO_ISO2: Record<string, string> = {
  "Albania": "al",
  "Algeria": "dz",
  "Andorra": "ad",
  "Angola": "ao",
  "Argentina": "ar",
  "Armenia": "am",
  "Australia": "au",
  "Austria": "at",
  "Azerbaijan": "az",
  "Bahamas": "bs",
  "Bangladesh": "bd",
  "Barbados": "bb",
  "Belarus": "by",
  "Belgium": "be",
  "Belize": "bz",
  "Benin": "bj",
  "Bolivia": "bo",
  "Bosnia and Herzegovina": "ba",
  "Botswana": "bw",
  "Brazil": "br",
  "Brunei": "bn",
  "Bulgaria": "bg",
  "Burkina Faso": "bf",
  "Burundi": "bi",
  "Cambodia": "kh",
  "Cameroon": "cm",
  "Canada": "ca",
  "Cape Verde": "cv",
  "Central African Republic (CAR)": "cf",
  "Chad": "td",
  "Chile": "cl",
  "China": "cn",
  "Colombia": "co",
  "Comoros": "km",
  "Costa Rica": "cr",
  "Croatia": "hr",
  "Cuba": "cu",
  "Cyprus": "cy",
  "Czech Republic": "cz",
  "Democratic Republic of the Congo": "cd",
  "Denmark": "dk",
  "Djibouti": "dj",
  "Dominican Republic": "do",
  "East Timor": "tl",
  "Ecuador": "ec",
  "Egypt": "eg",
  "El Salvador": "sv",
  "Equatorial Guinea": "gq",
  "Eritrea": "er",
  "Estonia": "ee",
  "Eswatini": "sz",
  "Ethiopia": "et",
  "Finland": "fi",
  "France": "fr",
  "Gabon": "ga",
  "Gambia": "gm",
  "Georgia": "ge",
  "Germany": "de",
  "Ghana": "gh",
  "Greece": "gr",
  "Guatemala": "gt",
  "Guinea": "gn",
  "Guinea-Bissau": "gw",
  "Guyana": "gy",
  "Haiti": "ht",
  "Honduras": "hn",
  "Hong Kong": "hk",
  "Hungary": "hu",
  "Iceland": "is",
  "India": "in",
  "Indonesia": "id",
  "Iraq": "iq",
  "Israel": "il",
  "Italy": "it",
  "Ivory Coast": "ci",
  "Jamaica": "jm",
  "Japan": "jp",
  "Jordan": "jo",
  "Kazakhstan": "kz",
  "Kenya": "ke",
  "Kosovo": "xk",
  "Kuwait": "kw",
  "Kyrgyzstan": "kg",
  "Laos": "la",
  "Latvia": "lv",
  "Lebanon": "lb",
  "Lesotho": "ls",
  "Liberia": "lr",
  "Libya": "ly",
  "Liechtenstein": "li",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Macedonia (FYROM)": "mk",
  "Madagascar": "mg",
  "Malawi": "mw",
  "Malaysia": "my",
  "Mali": "ml",
  "Malta": "mt",
  "Mauritania": "mr",
  "Mauritius": "mu",
  "Mexico": "mx",
  "Moldova": "md",
  "Monaco": "mc",
  "Mongolia": "mn",
  "Montenegro": "me",
  "Morocco": "ma",
  "Mozambique": "mz",
  "Myanmar (formerly Burma)": "mm",
  "Namibia": "na",
  "Nepal": "np",
  "Netherlands": "nl",
  "Nicaragua": "ni",
  "Niger": "ne",
  "Nigeria": "ng",
  "North Korea": "kp",
  "Norway": "no",
  "Pakistan": "pk",
  "Panama": "pa",
  "Papua New Guinea": "pg",
  "Paraguay": "py",
  "Peru": "pe",
  "Philippines": "ph",
  "Poland": "pl",
  "Portugal": "pt",
  "Republic of the Congo": "cg",
  "Romania": "ro",
  "Russia": "ru",
  "Rwanda": "rw",
  "San Marino": "sm",
  "Sao Tome and Principe": "st",
  "Saudi Arabia": "sa",
  "Senegal": "sn",
  "Serbia": "rs",
  "Seychelles": "sc",
  "Sierra Leone": "sl",
  "Singapore": "sg",
  "Slovakia": "sk",
  "Slovenia": "si",
  "Somalia": "so",
  "South Africa": "za",
  "South Korea": "kr",
  "South Sudan": "ss",
  "Spain": "es",
  "Sudan": "sd",
  "Suriname": "sr",
  "Sweden": "se",
  "Switzerland": "ch",
  "Taiwan": "tw",
  "Tajikistan": "tj",
  "Tanzania": "tz",
  "Thailand": "th",
  "Togo": "tg",
  "Trinidad and Tobago": "tt",
  "Tunisia": "tn",
  "Turkey": "tr",
  "Turkmenistan": "tm",
  "Uganda": "ug",
  "Ukraine": "ua",
  "United Arab Emirates (UAE)": "ae",
  "United Kingdom (UK)": "gb",
  "United States": "us",
  "Uruguay": "uy",
  "Uzbekistan": "uz",
  "Venezuela": "ve",
  "Vietnam": "vn",
  "Zambia": "zm",
  "Zimbabwe": "zw",
};
