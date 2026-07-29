// lib/content/regional-semifinals-source.ts
//
// GENERATED FILE — do not edit by hand. Regenerate with: npm run refresh:semifinals
// (scripts/pull-regional-semifinals.mjs pulls the GESAwards Airtable base appyTu8uOPQUVXD4x
// and rewrites this file, then re-downloads logos and rebuilds regionalSemifinals.ts.)
//
// Sources:
// - Table "Partners" (tblAfv3rYs6GyXQEF): partner name + linked countries + logo attachment.
// - Table "all countries" (tbl7wFk8g0AbGx7ee): each country's real "Geographic Area".
// Last refreshed: 2026-07-29.

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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/qJcpTjSm-qUxGvI0sE_prg/3wd55cEG_vCEqg1yiiZgyRWkBUVpzu0wWotHdzQzU3LMq_6C14ScMcgU6P9sw8A6ZMEmRvLOgNqBdnYb12iE6BsuiqPRVwhvqb0PEYQh7xT3Gj-vtJDTQEmNXVFaSTJI9jpNeRUpL7he2t4L3sRZFCb1rhA4qAN8lGHnRbIEQEU/_9z-pjT9xbGroyUf523qlXkNQDhwPVkzMueftq-4J9M",
  },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/p1_aWmty5cUI-8_GcaE0ag/DybLjRI1LvW3o2G1jcblnK8rOsFbsUGxAUH0r1SkWMHYNAvh_fkLsAOgmmhKdCoYcQa2M4YaJ2Edp68bo7Q38qV135D82zXfJS22eCTs3iTYrCJDFa7AQaK-yLQMDToTxhLCJjepzr1I6OcpH7LE5A/1skYMC4BXPb-A2joLNezK9MiRHiZRuUHvA0SXJjZuAc",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/JBxuREaCOcrMxJsFqs4m0g/xNsihsGhD5uXjsyWstqypd9sMPx6swrna9lBLPrqmsEDV81yC88bAbN--qcaNm5H3R3FU_TZlWsXeCngWPe0OsirbzcR-aoyY24mijCyX9Z43I0Yy_-RpxGWtEebqTOae53W7-w7gUbxn8akQpsr_AFxQGzAj_sJq52WS_F2KVM/hcbTB_IXEnDZi9TOIqKVUNiUa_G6TOyjeh8ishPekKg",
  },
  {
    name: "Dutch EdTech",
    countries: [
      "Netherlands",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/AYtTANjK7k9cxLp7BFUHSg/Y3H0SFkByqkmP5DFjptXNfLuiB69i1ziVdLPGYCvsasxaHe0R07EstWg2iCvT6BbMn7GdCoPD8hqTyU_ipbShTUksEBj3YN8DX2HEZN_1qvJ8QY8KDxkP4I1nRcJJVFztAAvTbMQJiGv4QtlM65lFQ/1eZn2x9j5p22DvBND6bIWFzoqnonBPMFayl-0wKtBrI",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/j0zePxgUb2XxeelM9yGbag/PjobKq_1kh9YI88BehAdEQGRHx26IYtL4-zNGYFFDCVmsbHTrBY2RpiB85wz1_anRfSHuQJ1uTkfucIDmYKNtVUNYXnndgWftfxPZJ3uTrStBB1a_XCPl562fYHPlxfzS5xDXkX3f4E60FOqnV4FTw/KJTLQ7lBhS5eApXtloaBEr8CBw5Vaka4j-9EZZek6Zw",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/S9U-_5pNZEJX_qIuqJUo-g/Sjb1hJrDDVRU7kW4iUumNIPBf07XapGuPJMGAZ0FGLjWLmns3p6S3A9hqbbnDG2nTWTJiO_gw3dBx7OQYH5heyp0HDq4RZds-rHMhBB2PxUnTRZKjxCXt1tcYAQfB3gLck2hS_jaitjkVrFv5kuHWg/zi6PUtC1raEN-RQJv9m-6JxJnKrLd_LLgxlZRwVpP_8",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: [
      "Austria",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/UqwylhkezD7_Osck2t4u6A/au176lBdOGuA1GgK7_57pHtPU_UcDPF3ktGa9Fqyu-y58Qd1W01HHmMWBi02pGCec_djgECzzfBASeCf3fONs8qLh4PDddPixzcm93ZKIEPTCNm5CPPv1wecg7wGweYxzUoQ-pzEg-QLnijrC0YMsw/CYvqeJvtz0Viy1_jEAvrX1mgtO1W4FF3kP6rxNJ4PKU",
  },
  {
    name: "EdTech France",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/qlRW514jSmyLAfY60X27WQ/CK9vVFIt3Kk772LaMrT1wYW4w9XcQ3s0tdYLGU4_HAhJI8NUOotMDa8kEi4UHulsX3YN261BHAZsHdGlowMwnvd9-EpJqcKQE6qbLCDlVZkncNzfy-n27ACblSQOkgUA6pp06lDtRJTIqrP6Pok9tWQUqqqPAEiRU5GCRbaD72A/dUPohG9ELXDcyS8fgCwx8GVuQE2IRQWY6BP2edAADME",
  },
  {
    name: "EdTech Italy",
    countries: [
      "Italy",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/Ti_iQu_v2vsys3nZg5-Maw/bk-6ZdMgxBYq-xZCitNqOf7uezG59izFceg-jSN2dXX_8QObhAZ3nLxyXQBaHJmpjphRBOmnQzZwTWL6hf5TA2BcP-VnMVFxINSVhk_j8hKyhJDL251hxtvrVG0mgOFndlnFqvJ1z7O-4PEF58QGRg/OjZXUxwhIDh4clkOj6ovtocLetl2ajqqYNKdTdLpGGY",
  },
  {
    name: "EdTech Ukraine",
    countries: [
      "Ukraine",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/mLfV1RnXSHDbFxIl7TxOQg/7kwiCX8jD7kLnAsdsFBVrIeHO_pM_Vna3FCGt5Hm5LAHSUdmycqXBehsqrVAkPMHRfCowKCVmh49GOQXGz5Q33H4yryyQK_2alxtdVX1U2shmhAN33PP11IpBcv41T1-CWO4Hy4KHsQemx3ThrY1QszlWKb7kKD9tVf-cFC32PY/kO0RhLjurEzqIdF6_REM9qf8AHEPq1LMH_Juc9Y6Bz8",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Philippines",
      "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/Ty3-gZbAzsBEyjmAbYg79w/xmC-NBI4afL6CzmtvpkX_ZHECsm__nQZbcEIIpux9TA109_MhvKT_twbx8cGC9K_BmG7iCpmrd59pt0y4Ksh3k35zfkw9FV3bA1tKM6O1e2Paqu-yBmVobBkTMzB8DsnkQl0ay7z5vX-l5Y1B2qVlw/LFRUKhDlzpaUdMmsX9XH9O6Q6G1bZrxYvwn_-sn-I18",
  },
  {
    name: "EduTech Cluster",
    countries: [
      "Portugal", "Spain",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/bTWfEqBpHT6-LqLqohcFTw/E0cTaIq5tUr3VTmxwwoG6-BrvBKDYoqu5KZERbAfxzYFZhVYlnBMPEeYfaY88t3lnm68_ADA-l40ajOMamnzyi9c-iX_l99ZkX6AZzVdIX_3a1XeIg3u4g6TMY6g7-CWv2J8b7RbJ1spx2qhD63ZNTb-HHQIERWVBaFnAgTiTlw/da56YRGggJOhMPmHbFgs1B60mEuhVD6TqH7Yns2ld78",
  },
  {
    name: "Eduvation",
    countries: [
      "Germany",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/yOj5dDKYife5AQ-VIlyGXw/GOTq83MS1Ghrk-8_Y2NjRB83gZx7mCGD9ZCJ_Zv1mUpTtt87mZkkInZ-oidPVfKoRG2dIOx9xl-I18YXu2AU3CSu_ueQL0uKS-XZ461rSazkGGsbkXmYcKC7ciDnr1N9b260nd4gZqP5bOCaks7p1lWwJ0hBoQY_ZgIurSFR8ds/nIXB75_H1M9gc0T-03exJbYDbu6HG5q38sl07AOZENU",
  },
  {
    name: "Esperanza",
    countries: [
      "Hong Kong", "China",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/Efb-UPVZJEeZNexkY1I5IQ/wS5vCSJtqBTsC-dG9KMlellS4L_w2q6Gb-s2NW6pfL9q-epW_X2T_yEQqAwh4RU3PtADKF-3ljQERRTGn5vOyPvuqoOoBFq_FCIYuSxG4dQap7w-EeGqBnCLbu9_GGNJOfcHRICMXBtIE2M6lqMM-A/HgTh5tknH_BS9O0Et8w34Gmv1_4aBzeot76BsouKju0",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/N3u1XCURCFq16fzKbprr7A/Ju-eLNXUCVOTDFGBJ8tOMhjl9OyEGo-tRZDwVRUUODv9UpYWXPPOWTkJRXtIVy0Q2erThgmJ3JH8CndKVV8zFokuGYreBNiKCnSlb5DVCXxPPHJdaZnJlXWam_btTByOYeZoR0p0TocXpNG7O50Z_g/tMIqUjk4l6416mJZhrUkWbfsXXWWTB8qglC1BMtqUmA",
  },
  {
    name: "HiEdu",
    countries: [
      "Taiwan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/oRVFnBD52otttWO7YtamGA/fyVVzKiw_ux8yV2R2y4miOE7wOR_Zd4prYA2Aizr2cmeenHOBU51g0Uw9PInmT-UwrusqhyWmw9MGPjkrKaAluLWmTHXDob8-g5J1pKm1oiFEmgtZBkOWDmXn9ob-S-YajA-yqcigLaMI5TBJkhGn6DbwsKgUMdQsvsJz7IN1ErWmZbEckD7mluImeAzJe-4/ItFoFJaTpeAm6Y2rLpTMLpCRnvkPFRYW2ldrC9j1s64",
  },
  {
    name: "Ingenious Faces",
    countries: [
      "India",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/iN41gduHzU4BuxTcL75g7g/QH4LOx0gaFx8Xz6fU1NGjeClPdcDgGCHx7BDH6M7psw2PenqmuijPflEP4vQYjAK7xuVmIXDz9W3UE7xAhrTqEvTVjXIdvwW-jk7bRuJ8XJTvg-ZFXjLYMKNv_hEM6BINBTkiZnKDbIf0h1T_uzPmA/GX69mSjSN4UwYXGoiQ9FzkBztEF-jQ2718KxLP0-C_M",
  },
  {
    name: "Learning Spark",
    countries: [
      "South Korea", "North Korea",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/341-Ewob1sG6N9KcZISJ7A/CYJfcHIWyznUjMvrqH1zfBQ7wDQCK0jhhWelGEGWVuVIRK4fMWbAIHfgaiXRIqRObJa70p8rDnoItNSgotcKQLbz8GGtj_b266VOp9RmqP9IYmJFyg7PZd6L-sP3AqFdAWRtrqoZld1WzXrHM-PcLA/wbiiD01U-LuLaPzvPNDqmgHFdk23mSo7-j16b2hV_AQ",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/2y9fd88z09sCXyCXv4jgLg/KmvUnNbeae3Yw2u7ASdQbm91VpkWo2JXD7NaEq9nicshg6cdJ6YjJMCM_X6WWX4VkNozitUCzLZ5_D1ya8R33XUcubDON969LSqxOZedxPUQZ6y1qo3xnmVqVjtskJFwnR_dT0aJOyQ80rqtOM-5vMBiAjl9u53STFYFuVb_p9c/0koV-HmxVJW5xMtSUKjQynme0FxzWObmsSZxANcySws",
  },
  {
    name: "METI Japan",
    countries: [
      "Japan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/PJl_Uc_0r0Encssgcepipw/gqS-1NYrqy6tppm52zHZzyXGuKSsLT3GksB88OyvXbGZI5wJpdqGxL5b30NdWcAA1Tj9DLrlem-jnim5L_IX1ttA22ut9OlqkokphfCo7BgIkrrBOw_AmDh4tFob9kPRuTvOxtc8cQcvOX69P_GsUg/69pPGqV0W2CtrD6z1__bf-JbAVRySsdS8BFluV45vPU",
  },
  {
    name: "Mindcet Labs",
    countries: [
      "Israel",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/wWYNVfNxdDVoF2xNstUyEA/QAr5gBdExVBUa-5b-d1IDN_yeO5xLNdjYgU-G_1xPmjVrBPLa1rjej2pgPO-i1EymxB_3cf3paRNvt1JcsDc7mCsbVAGwfSdYrW8EXa-24mslQNc7dhFQLj4h7nRvY9wYXUTzsqvQaWMD2eOAc6DjQ/8cs02rIwUGCRiXWE7cIJpXgIa7vnVKGy1K6MvhUr6Q8",
  },
  {
    name: "Positivo",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/iHMeOmyvKOSoWZ7Skj0s0g/iqzHqbfHLCW6mhAzdi1C1BnHYdcMUMGQG3ITek_Mved17Gnz-fMF79sTePjyAuDprQtXtYyD5jq2_WZ4q8mixTU325DvARA2JCpgm6D-enw7dkUakqPrbFuZoNNSsIcMTIMYhtBn4dyAoVXwgleJDg/Hc-vxsYmopH2bzUDOJrtIKbMPcefzsFClOOPiZaFfZk",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/mZx4TptZAMBZv1xhfSdBmg/dGxbMuOTTUyMYOtSryZduEfAez3R8QupURaTh4ExH4fToGm1teN61q2WROaO11xyANOFk1A9qAvVQU4hQ3VcAQuZPmWIwIlqpEXqM3wOnD9QNjPmL0ytbxtUWsPimRu7Z8ID5w9_O3Hw2AbizOpmZQ/yZJ47XOZMFi--Br4AKXJ74u-GVvtjdj7aJd5C-m4uPU",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado", "USA - Montana",
      "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/MC2rDRgMwJPKM2ZAlF38NA/aQSdBNKEnNOUPA5wqHv38DMX9dzFvyz5YmdSfGTgDwHDhpNaRKebLy36tSLyco4SF43Ot9_6aKod9vd4VwWVPfLgSXdOa6hEcgTcQphTXieM8z5sMfuE5xnESx0hTr9oVYDHaar8-bbkNLvHFBtcXw/l2brzFRQhyhH96pEWnMlpJncqw045N4Vjdlp3jV2MJM",
  },
  {
    name: "Startup Braga",
    countries: [
      "Portugal",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/80prjbzjAtetU0zMDIwCNw/MoRSwmVkqxfc2hvCpe0OFrn7BS2eOSpv8qpsn81Qx-_bOiy8bUMZF5MhkBtpjeW3wZaKv7BNQvWFjpplBw_y3Sgc6t5AS9V8Fe6b5btwVw8CRCIRj6raroogDlMx5oubEgUpHkS0P9Z0dw7i6gFZHQ/U9FBMB4e3VqM36Lgjw3GrN0vx9GFAyn7uT2HvQ1mDzw",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/0vsk7Vv30NcsdwoJMjmxMg/HqUG2t2eV0jLTHlXgzNwvOiEkfGKZmhoQ9SQAdfBqHYIHKTS5_kVRej57F95DwXTVBPgtLPj8zIrIrkp2U25vYe9WJ4csYcr5FEkE4Qp_MQBTvkhlEYKFtxPx6U4BHiV79Vu9LoXAEGqx8YjlmSGbCEzu7MkyAePZWFcTRxxqvgAc-lyAPDgxAOP4dx0j84n/EMHsuh8--zP9VYXge7ZuvZxN7IYTEl9pFh8Ps0fLF98",
  },
  {
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal", "Pakistan",
      "Papua New Guinea", "Saudi Arabia", "United Arab Emirates (UAE)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/d2ZRLrFsX7YmBR8ezZmgfg/MAzAp4SswGYgzajmw8W62t4ixl-YlkhkBmTB6b3DQnTOCONFsEhU9C6xnzOFU914bxS5Y_rXJEMnU3IHoQziEwUidrMJ7yDdGNYW8F2kpqU5V1Rd7Ei4ox94k2OvUOCzmEy_Zq7tQb1V5lfnzdOD3n53y7XmdADIKjF8g-3_J4g/AHhIg6jE8tBOwj7WhvKf_87dVCOi-CIb0OltLTpGW5Q",
  },
  {
    name: "UCL EdTech Labs",
    countries: [
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/Vt_yx_uAGbYxPVlxUSCSew/pINzKtrV2kq6ARGNrBiLz8VnMS6t8kgH534BZzupHQsEVvD1Y61r43vKQY8-qlWqfLi4YI6EFKwtrmCE_E9M6a6TEYL04pwrW3E8iVeYaEx_9_28RX3N1JX6Gqn7GeIaGp3-BPUP_Zql3cYLBMfL5Q/2EUSKF-Td7-vHPxkzIUNQhRckfXnB4aPD4Yb3Zatiy8",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania", "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785319200000/TGdEJrSPFJGcXFSL3wkxTw/MhjHM6SCYlUKt46MA9WbuLGfkL5kq5orvC7XNnZ0P5lMczcHLXt9CpBLDRX3uzI1mfX9_FG7Ake4j1o8SJgkH3-WSUpo0Ppj5LUvecsoVoRrzV7QDzhhvsyfOmkgIJNdKHSkBDi9-7Tkm_S9RYcwwA/vwN6LwqszwO-9qeCt9iyg1KuRoZk6opu8fLEwLs99xA",
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
  "Taiwan": "asia",
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
