// lib/content/regional-semifinals-source.ts
//
// GENERATED FILE — do not edit by hand. Regenerate with: npm run refresh:semifinals
// (scripts/pull-regional-semifinals.mjs pulls the GESAwards Airtable base appyTu8uOPQUVXD4x
// and rewrites this file, then re-downloads logos and rebuilds regionalSemifinals.ts.)
//
// Sources:
// - Table "Partners" (tblAfv3rYs6GyXQEF): partner name + linked countries + logo attachment.
// - Table "all countries" (tbl7wFk8g0AbGx7ee): each country's real "Geographic Area".
// Last refreshed: 2026-08-03.

export type RawPartner = {
  /** Canonicalized Airtable record name. */
  name: string;
  /** Country names as linked in Airtable (US states not yet deduped). */
  countries: string[];
  /** Airtable attachment URL for the Logo field, if an image was uploaded. Expires —
   * scripts/download-partner-logos.mjs mirrors it locally. */
  logoUrl?: string;
  /** Wide lockup of the same mark, for partners who supply one — used on solo tiles.
   * Expires like logoUrl and is mirrored locally alongside it. */
  wideLogoUrl?: string;
};

export const RAW_PARTNERS: RawPartner[] = [
  {
    name: "Afinef",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/xeHVpTWcCGV7FL937-scUA/9K2gNzc4imWa3kHJ_32_kT2bKzaLcmoJxpLgUF9zg1bUOPkHrj7CYvIK6xg7_N7PQ6YiB1FI1uxlzLRIw-w_9GqDgMR4V5AiWRE6JEWk8Zn6pXGiItU06srrVJ1kIAzzGN99au3rK1J6jd6S8cagzudyPqAKfCuQmiMqNw4eWR8/FnxqiH_03P_8YB9GXPx09tO3nodRB7vGtePDYfEvJLU",
  },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/Cc4SBACMdoiCRIEHM-BOpQ/yHynAynOeia2ICPxqmhVSf-ajL0xgrxN7UbwkWlmkNP6sWkAIGJNZ6MYxohvY2a9-wzjLQB0Y8R32jAVMnhqcrbgqE8F9OCxnYBQU8ikQlSvOH20xWW2VjPxlumNyx5MvKDTmcjMi7jmN8Zs2JnAqA/a585EpzlYKHOgGyjijngFaBFJJOz-wJ0qnBYrfNFO9I",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/0eEDJndRvtN4RzlSc_2WWA/78O9NGW9aZ-YHra4mLyCZMpvIaINGkHIJb9wNPV70IzPgkpQq-AljGDsE-vhhc76sZBdrbO5_7s0aKFplkc17bFwlI_6JoN4AOvRphLAlw3VsVh02aaYceixnTaRla6Sr08RYPemsBS8GakW2y1jLdh0hyK6TxnwmPMMrpNMU16ZTIE5LiDnK3MUgptm4d_ed9f4oVykgUzf2yM2ynbZqw/DljzUeRUMYwidj_vOLNYfsx9TE0J6oTU2qwhDCtxVfg",
  },
  {
    name: "Dutch EdTech",
    countries: [
      "Netherlands",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/Q3NZSrRA7IfZWBOSqtOWCQ/_sI2HXSTmMy5maVldgF_wJvsEQxulpmduT41wr-1KglX9j7PS6pr7UIWRYeXAZPqz9_N86hM5ZxiTZ-ubRzjVwwFHZo9EaqsIDFnDdHM2kcTO0NgpTZhv-VrHG9uI4nb4NBfSf1WnYA-drXJJUDe9g/c8ZTB3fm2IDjFGeBCuHACpbKKyMUmuCK_2ywtxxKfrg",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/hxM_S-2FAsCIM1YMhfF4MA/ONsD0nKoWD2L6ce6lcNkgTnOmCfDALTDP1QirEoDwjoy9QFSV5t46NvjOlzlmqjWdXrJlVaich11pBxbgbxE5eAu1tQv4t_Ka7qT8KDMIcNfiBW2R7L5nDZm86-c1utg2SKsrMPNTMQP9tVCbsJ12g/y97LZPqqkAp65QYKLWXl0CCPLKDUItOO-N64vGtvwD4",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/voifNaeMSkjpEBE-6k5a_Q/3yapVuKwMESn6B36SQwkwk6crN3wvTYQxqup3dyjqtycd0DhFf1xXGlToPOvzG09wXG1fTFy7lM_STZv017Dxm38EuOTL28Fnc2Zlu1qJBJXuacwSYcopuxJHNIqmWKfwkyQAj5_ZsqcGhGFZhYDdQ/F_iIm4eH94_flJvA4OPQCd5yOIKTROmhw2KkoJEsbLE",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: [
      "Austria",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/iGevvzEaL7cCozE8wxkyFw/5a5Uw6oIpxFa1wQA99Tem9SMQm1o3fqq8Ln3YFCySOasu9qeEKrv5Y2MH0PGJ0PE9XUCor8V04p1hnjExnOHlc0vp9PLuvqM0bviMjDVXUHFizBiSJNBunYnlDxxLzhKbB6GbZ7j7jMUXu76np8H8A/OQFF13u4AfHufPlnrbaqHzBG-HWUu4kcUvNJPxozRLk",
  },
  {
    name: "EdTech France",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/dGbCa3ZYbFUT-dCNngT_LA/cYdeTMI4rRnXV6_hg86nh2llD08YgizpV7TncgyFjOfC3WXIC1YhWwf-8ovQPRLgQmrjE0Mfsi1mXqf5ueYjWpoZHHB___ZRyzXhrjQE7JeIjFjNGZHCB4lIRQZVchDL7u-F7Ml2DXAvETN7cqvhaD8424dkvyeaqw2Y4HlWLdM/HDQ_Duq6udBt5vaWw1Us0-9j4ENZI-0Joo_fWZGQ7os",
  },
  {
    name: "EdTech Italy",
    countries: [
      "Italy",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/wRvZ5H3FiETBF59fjjyn1A/rjel8kozvuLbKQ4u-QGdcdMRUL8B3DxzmwAbItyEmEhVA3nqaPFBUhX6pvd_6E7c-2SUvibAMYtu5OCwYHXZCLqWZDOe7KYiXKOFmH9-P0JMpRvg3IQAMigPvYS-kmvfehPtrP8emzlNL0630OyqSQ/-WD3fx1AdDEwIjongjsG0JAs9dyDlcQl-JSx9KPEmcY",
  },
  {
    name: "EdTech Ukraine",
    countries: [
      "Ukraine",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/MtGk2Hm1_ecCCrgjS0Axfw/GWL2CCRBvo1ZRpWPN3BmwRovJC0kL96emXGVVFwny9N0LKGHXGnf9-owLJjxzUItlznmc1erAbe7wD_OVwdyrpXOKWDyhrHv8HhXPTTtvaVeo73GemoXmAbNK200sDOwUW2d99l6XI0HtTaTgP5a7h-dKbAqPskorZdJOC8N0Sg/Po9P3bYejfxKbid_OLC1czNgynlzagg2HuhYslBg_7w",
    wideLogoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/1cW0xTOGQX0m-dGyDd4Lwg/qnQ7OG4C663ROkfo9run_iA_3xTjX248bw03bn407mb9KQK3cb3ENZDTVh0_nhO-kWYE08WExWkl1_z3hiep2wsB6mUJ9WeXnXgTbp3_L4uHN48QBGh7_xEIoTCvyd9k2M9nS-UIhCC9PnZ7Bk6Yab5lc9zr8CjOeRfD-Ajgd1U/S9ofq5oXIZHD94iPJuTRNYAJLBjqa6WGaTlBVYRRs0I",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Philippines",
      "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/qHtukEPiyjN2Wv5VocrUYg/H_tORC1CltnEo8iSHXM8CXpDoEdM2qIJrQ9Ewy_fXIbqh9LeJNtBKxZ2OhWkxfasrdfwO8eXyQ_ds83jQzqAemJLYk5t3gZcqpTncmmg_iaK2HJazXpouIQE1NXMtTXlHJkviLtC6VHe1qg15wto0w/zUKgCwC_7KCD3_882Na8gfgp7cD6xzLIhNf6KCaWJhI",
  },
  {
    name: "EduTech Cluster",
    countries: [
      "Portugal", "Spain",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/mgHdGftzY4EBUm4ISxCptg/bkxWK1V59KWxygoet15phhpOn9dUW6ues0-B284hHo826bIa1jo4TD4UT_ZSfwlnDwEikRyHJ3nr_imkvHmY-mXdpOifKsIaGzI-ATR7P6081Az50uNLfiaD3rG5BbOPPUdgrzzBoiBsdIbsQz4YCqboEZf_rqCE4aKDm9VycsQ/NEgZiY0cP--U6WrcWSNt7_9Ta9tmfDJxhAEf1bQKIV0",
  },
  {
    name: "Eduvation",
    countries: [
      "Germany",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/asF6XhZfVptTTe0PDcMkBw/VPNbTL8dh9Uo2DOyisMnaBbR2t2fBgOC1_AYXAnFATYnQjyzzDrJlqX-GTfVD6kiVaq3nPS22mzYFWHOLJQ5KZeU9kemKNOKoKENCJoyXCpPIjP8vwQprlhIGrpsFDQ5PALfUq3MBE2XSj74OlnHWwST-l5gzArfeJQ1hYWSqis/qAplN3Kre6rIT2-x1x-WMbiybIadVltltkRn9R_ojAk",
  },
  {
    name: "Esperanza",
    countries: [
      "Hong Kong", "China",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/sct93iy_eDho5V9qF_pq0w/I40CDMQVgx8TpiNEVoXn1xTRK5OJUP4u0zTerIF93lpnIATV1zZWCK9JPil7zvFX_aHbilxTv6_uALnPDyEY2rR6LJgaZigJvpagokJVMhjM6os94MDtnnf72S2iqfwJnLkB4iOOVoYdwewNRlreUQ/Rblx1jOOzwMid996i7JXoWFxKGELN_nTDlMRO7ucj90",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/vERPRLGbn6Cg8-mvR_nSqg/ZIyCmcywqLuzxADmF4CMcBLU_00hERfbrKFZGG5yLdiUWO8Yd8TIh763mY-pxAaZIrzNbCJRKffUVEuX6Ter_Q2c0_Lq6B-b8rHMMFjBWzr2RXkdcg2bkFd3xwKG9zGVmyZaK8rtARphy7MW4UsPEg/APZreuObo6uxgelJN3ruVurVJAoInigE-X9-Ikrvy4I",
  },
  {
    name: "HiEdu",
    countries: [
      "Taiwan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/zH01SBll-hZf3vEe5ZDnBQ/JoQvpSY7aq0MtodYADvRzz3hoaP7NmZIKbiP-q11dCg6mXr5RPmQeFCwIzeWhpxSdL5tQPifX5dSEv0JMtqwGKpkks70cmr0Un0Tu621AJmKGG9PPl3daYn-36v0os0wJt2rcU-2hxvD5FOgYzyKGmTP9GEUJhBEx3zN49HfMcHCdvmBOvoVxGAYI2dGAsBA/pnailm06-w2X5EHDmVee6DYx8HJgA-CtdcNW3pYC6OQ",
  },
  {
    name: "Ingenious Faces",
    countries: [
      "India",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/P9P11StYHaZZWfqlzlicig/CTSQ5vIsQ0lmESyxV3-rb4tmPNo71JxRsauPTzyUylaUuqzwtJ0qkRfjhTB3aoUkvlqRw0-TKbuSkCLq-8fTclpVvpaoKPkXR_4T2_vZ62oyQahEeaVsrSphZDhJLhcPwvPzldijoAhwxwxRL5DSkg/jxt6rY3kYq_BLfOwGpuonIP3oBZWqKnGzQFK3Tm5wN4",
  },
  {
    name: "Learning Spark",
    countries: [
      "South Korea", "North Korea",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/x6c6cInEW44ViM82NuOHgA/uDG-0vGuoXVAVZK2Zs5MlhRge4fkk7znWADwpw8A0svhTEcmc3tV0Coed7gBmTX0dP7_irqmlUR9WFCc4xfQ592XVmmA5OZ3WyyGnFvxhgHV11mMnxo5Yn9xQncv4zrM_usLdxBUSSxsEU-mF48xhw/_I3hdOGaAG1UI4T4-SFeSSHefwnL5IyNcDckVkajo0U",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/YXlj6tlGCClAW7JeUQ6UTQ/H7GKcX2RMRmbX2_kCUI4Rtelga7FLi_AITvvY-5TdnMRvQ9a1yFMEwZJuvHiMIP3a39Y3AZnuqzrBLq7awFpvM-54jGp3ECbpIuwOq3l2zcF5voLDiiLAofvafuf0XAC8-FrHGhR2gvkSVd87EGSr-mcRgGUaweyQlDtD-DE0jA/gbJQdx8cD9q3WoLCmjKdk8JHurjLlDO3eXz6aJfDdVU",
  },
  {
    name: "METI Japan",
    countries: [
      "Japan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/MT8-SLXNJ1x3YG4Ek7Lk5Q/ZcWNX5vGKQaiebItHdvMiSIG2KIC7fMiKxyh7NCyqxnPNzsEkcYyTuZmL_2BmRBo60Z1LxMgLDYqpo-imImwiRT2qh_28v4C13jD_AmwA_sFz2qV8ExwFFsJS6uVcnhesDV4xuDgYbC4CH2WIvaZkg/V6vLcA3Rsm14kMmnha2-7Stkw-oIt_cfpHnp2RtnsUM",
  },
  {
    name: "Mindcet Labs",
    countries: [
      "Israel",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/ubcVmt5rTU4im63AEVIXNA/uePQzDkd-rhejByKofnwUQ_xmZb9hZIpE2lBJk3xMQQprxiITRwG_zund-GsGdJr36HlBkU8BiMbvkGjKjyIruLkLEBLZLraHReNTnJtoZr5eF2z0E9RGPlmbevy555R5TosQV54FQHhKwCvow1fIg/Beb8m-A5F_JLlJoxH3qQHV8h3O2dDUzyEOYYqePHLIc",
  },
  {
    name: "Positivo",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/-eu2I_mPTyuE6nUgIJBGpQ/3dlmSJob7un8hLKkDogTmy8638SSXckkkSBVuY_6z-Yv9umyCNFOHPY5Q1VZHToD5ZeRyZ-pWBneCSoWXdDcA9aACDE3363047iB4PBx8wpKlY3eJTJ_hZwpi9jfaKKiX3bPkTe892Xmwus9nJKatQ/2udlyi9JVvLZiJiAtGuSfeqA_LOfkDp1w8O1zDr9s2E",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/QY5rulAvLV3O2qFDJlB1UQ/ZQXGkQNLqbs3sDW7l1OwzbAsTMRSZzIGxsFmfGwZUIywpPtKyY4-N0IbSSRc4qf4aV9P3io4vT7ufbYUa9gZJfgB4zMdpWTtCw9pIadNpgBIRGaraNcnrsXvS_CLTikGWihMGnhs75tmZsJarkP-iQ/XNHEqGEyouhi3nd8eo-bCSsIgr5fiK7YJavM2jPgRqQ",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado", "USA - Montana",
      "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/QUdrKxLNrmeFxOzeGY9okw/bn1qr1pM0p75M4bDwMdi15N1oFSDPwosmMAoADSUQ6VGhH71uesWwPT0yRsSaP2riuOJZTRumTkxWH-UM6DCIHKHOnuDyBoVUjLepK20ePZwQCylCQPJ7sHwR9DF5LgxrZNg7XK3YUWA78zFOzQY1A/jCooEyZpOS_gu9FtQJtegdHZNlUoqhMf7OBRV2ix5E0",
  },
  {
    name: "Startup Braga",
    countries: [
      "Portugal",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/rQRj_bDtQSKgYfNOa62FXw/ZY3Wc7jfuqRFODlmxInHJscTdBhhQ0Kl8jVn5XdhM56WKqbBiT_l3Fp_9GdBqk5lWWPaHkgqZ5EUzlfW7TqlKRMUbTx4TMM8BRAL-4cM0FE_AWji8lcwrSIXn_yJEoJeTN659zrLorM6rJQATKo8yg/_qkIQQMHKQcX1SGbf-cIAEZzLu_lb59taPkWGlPo9e0",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/aOLTXvO58Kr3ZQgMY4aWPg/iN0smhZdDAM0sVaE8Zjp-N73wfqIJ5Ochk37ivFHsmQP06mBbR5ukec0-GRmskDgrud2HiNjfOeylHRSIiku1EWDG6GO9pBIASSsGLb0v6ADDCYKhrBsdg8Bspce1iTt1PK6dI3LevjVz3saUjn5zkGt_O0rRt31SFtjHMXQJ_JrhhkjvoynVpUEicCQc7AP/nnV6k9SIa8eMmhBVGEpFkRkG2zTaXzLqYU26sryCc6g",
  },
  {
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal", "Pakistan",
      "Papua New Guinea", "Saudi Arabia", "United Arab Emirates (UAE)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/GGD4xoIB777lq8ID0ZUa7Q/6ykDjNP2nz76sxUURaQ6m7hJ4T73O9brRUlADPFcIecUuGAPTpYLFl9kGCLxsxrhKPaHS45sm_eaWsin7Yfh8HORDfBAT7zSMFhM03aSyR66lf685VrqySIfm5ZvgiaAZ1ubrAIt8Cm5a_3oeC51sdXR3rpfFXfEicl2t6Txr2I/rQIcDiQbJPE4ouxi9LkqwghqcoLPEvrEI6jMXuqQbqA",
  },
  {
    name: "UCL EdTech Labs",
    countries: [
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/VXnajpWEnjHX0cyQL2wkKg/Tji9AS8Ch50u_RHMOEgr5JNfxF0TH6XeNvesLR2SJNsd84iiFnQXuBt6X-0TL8UKm14ymV7DGokRZNJzHbgLVuLDdPmd2EPKzutXjeLsnhX2HzEHrXEsVnwCWq0qlwB9p2AoQsnLEn5fraxhZ5ERHw/IoGSU7l1zaNXsHs7_B7l03dseTj8kHeR0xlZKIwWfZs",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania", "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785758400000/hNS4yCjnt2zjmmBP1PUlWg/uX5dx2dmYz92IxFi_AJjH7sae9xplptyJkbSMieAW1wxBqW5zh4zbzsm3_GJBOl05Vcr8uAgkkDUDWuoHFy4pppRo__h9_RNuBGari6oFkOApXzd5Ra0Dmz3sUxyn0hwRj6Hxn-JPbE5f2clrThj8A/-vEMLdED8y0BiOhW-Mpr9ii0ISrpugtVZr3Y01ZTx34",
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
