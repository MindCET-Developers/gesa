// lib/content/regional-semifinals-source.ts
//
// GENERATED FILE — do not edit by hand. Regenerate with: npm run refresh:semifinals
// (scripts/pull-regional-semifinals.mjs pulls the GESAwards Airtable base appyTu8uOPQUVXD4x
// and rewrites this file, then re-downloads logos and rebuilds regionalSemifinals.ts.)
//
// Sources:
// - Table "Partners" (tblAfv3rYs6GyXQEF): partner name + linked countries + logo attachment.
// - Table "all countries" (tbl7wFk8g0AbGx7ee): each country's real "Geographic Area".
// Last refreshed: 2026-07-28.

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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/cifrdjIZ0Wb2Km_3ZQS-wQ/F7P5h7TvM28MDeoeiCiyu7CLY5CYaTfyhp5ibJdyhyKEv4guM4kXcT9FmNJvXjBgngcYyul20zPOnJjEvZjVpfL5LWY7Hs4h1fHCq1Jg8u4zoox4eu7A7wqxRcosNgSZI8eyz0Lv1XZHu3-DCYaSONnO5NTqrA8KJEaZZKdtnsk/-plMdx5VFq-ZpVQ17hix9kcOwtENWisNKEDGHGbGRsI",
  },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/FpH7svyDMO5cK3-yunh_MA/SPwNYsOP6iFQWmjr3p4kou15Ln78_LAZyFtjfrcae__nMu2Wx9uRwQ2h8NzO3JS2EenwzhThUr9oPggFmDYofydCKJMCGKJx3AuvMgba-SFOOOrXnA17W2Hjejmk-pomZzYQEMP0MWf-PiQLcBz5pQ/Ty2xX5r3hxPBDTZPvWYmJwo1WX8MSvf0Hn6VCtBAjQY",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/CEFmntA49JpcSnYEDYSqGA/tTqJhSR2L4Q_DFMkgCPWu9olFPhmy1hDm73IkjGstM3zLQ6-CjoXiLmJa8o9MhB30rhuzaoevwfSgoAfThg5YxQaL3uvKfBpsiew-rVkwY6pUHYk14bqgE7K1Fbl-lkeA6vsAMVbv5gd5jvpY54c7VcZ_ANa3CGr5nvMnzG_cJA/r5RLcAsKl-6O8-NAlxm91cGfD1XSOm8C_PL8MzvCRCY",
  },
  {
    name: "Dutch EdTech",
    countries: [
      "Netherlands",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/kxG2u2pagfN4t5oCMaimug/EURNl_2PasnKt6uE6whf6vdx6DqhYhRP5rJPsFH9ZYOVzwpF7SbzsEJEZxvw7ZY_kGN17KQ57_h0BO9E-j7nfCXFMxodw7XNQ-2lsMUrAsW2CxMshPPTxTTbaJdMw-jpEPP-fdPOzs2E97r0vvIzJQ/-njB-9cDY-qHvgnGn2N0jOJNWRCfsZ6ByNtxUKSoGfE",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/Aui3R1CIuPM1YCI0yBGVJg/q8fbJAA8tTKpFeU0z1Ps0DlFkZYJfyjelQmiUj1pZa11sb-wKui56QyxdFSsGpr2YsJDJoOHqstg1irzXMNCHDCjjq7jchsuYMlWokEyZeiJQSqwTmexYPFbBayWwbEimbiIB5oIPL1YRqyTi6nh1A/D0eFHKpkST_b9KF20pxkez9SmNDZxjWsxKPoQP4Uyhg",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/taMi1IiZuoNQl3kt-9aOCg/IPOPsa8Td_IFYFBwPU9Y7Qbh27v0nP0E7PMiaHCtcF1yHyKlEgDC3L42m0ApKvBGdSp_TgYzxUgg32uOVwVe9OZY7awnk26mIXkcHQ-9DVUYaP4hmOuiExPSGC057j4o0SP4oUBQ5D04NJ7QJCeGKA/jVBRYNAw7_v0CY-IuUIyvjO6riHnGyHs32_olvQSlMY",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: [
      "Austria",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/u56ve1swncNf0Chu8X3TLg/9Zi8euUmrZ29a80uTnPHRQjPIL54lgNMA9X-78cIlkB9-gS4nquP2TOi_w0wehsj0mpTb3A8FQymBAp7xPz8uJZY9TmmtwIqpnotNOARBbhyVoPdZ1cvblRndHLev1Bhz97UZpebI6iZOr2avkap0w/Jy3-By3flFOTbTwVi809SwfFRVKpZBhWvsvRIlEOwpA",
  },
  {
    name: "EdTech France",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/dlhlU3yppiWvUp1HEKA0tA/tZBldnv1ipGMcdoWLV43Wx2puuPdIm2n5kVCzoZytIt_vXNvXS5b4zUDqotHBS1C0CEk0n3EctnyCoH4mbtUo25jjULCr1mWUyQlWzE0eFvFUia-AKaPA_gh1K4qdvQEgHBvc1ZcKAswVzS9ePY_aaxVNy-JeJuVcfBW01E3tVA/JBcFMtRw00OpXmNf1IXuha5kR7imZ1FRnbHO4pMTcwQ",
  },
  {
    name: "EdTech Italy",
    countries: [
      "Italy",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/OjRXgpGFadBW4MtqsGYBXA/LWOQ-Rn9--qmBZFX4RHCqkIja2a4sEK3JwQzLzoq8kQ0MpFqJG0lF2iP1zxNaUGhsdfkkrooNwuu-gblmwOU2N7Y6ITzuBB8yMfAgZWK9I75rO91tcoP37BA-woFr8hgWg38VN54t4vAKcH1tJ29oA/pBtMTFV9MEc4qegI3v3MpgHHYQ5Ywx51WgVVOy_9RyE",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Philippines",
      "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/U4SaZ-3tBj15gT0Cr5ErCA/5S_i8bQPaA-yemwPYR1nJ3K4r7jm7nTbtHoBMz89v4FqTWPwNVh1b3tTEEw30d1VlWJR8uksLicAzQ9Mg2w--rwbXM7msv6UiX9ZMzLpWwZKO0iWgEX0J7RrixkwmcBUPy2ttqLh6b1RTri7ai55dg/q3tsg0UTB60IZvOpbDGZ2Z-Ba8mDOr2eB2FW04NFZho",
  },
  {
    name: "EduTech Cluster",
    countries: [
      "Portugal", "Spain",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/JBwrw927S9cfClEVGr3VcA/5C8xl5NuYEi_f3oe_QE8FLTI7S-vsI_BCkfwAxIO4A859S_vytntJi6DwHHzcowxXpOPugZVAOo4PDuPwiqkz6nhvfTOv28W2zB1aTlOWE8i86jAr7NHZ6JT81C9Ljytf9BWTm3fJAiSpB3n-8IkiuTA5TS55Uxzt5XmvJ41F7w/r5nnseRNuVjJ8mpIL4WmL1TyY9LuLa4-Yv25-tSdpEk",
  },
  {
    name: "Eduvation",
    countries: [
      "Germany",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/ZRTwGAuzG3ko8cxqZPqVxA/0i2IGT0QytRGIAuQ8v0YlCOTTWJ6LL2sg3h2ZAYqAXaY9D8sw9mQ31BSAvSaKM0yMeXlHWUSUx28kmqs260OVoG3MZ2aE71ZqGn8gf4k8R9Z0wDzNDQ0YodoJizjA30liWq-obzzH4OX_jH_ugKjPGoXsip3p6iGYVTcw6BPDA0/KVtl0g_TVJxUSl_LaAG3-MKyZ8cEUTMgU4JNAywwaj4",
  },
  {
    name: "Esperanza",
    countries: [
      "Hong Kong", "China",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/CWXF9LI4BTuF6aK8-eTs1Q/PyaOCbs6nuqJ1Q5yY9ki6GD5ZnDYbZ2irxwOulLkCWp048KT8dVhPQtQSJ0bSLwK9N6NUngLVtkksDtUTmRHRpA_dJMHch_Ybm-HzA_CkER6SvjCt85qPCmezEUi58dqBeNJlavAJSe8bXayM3tqww/U3myxcx9qnQaLbmh9bsQospigeQZ2PDnFSdu4U_a9-g",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/oYgIZRm3V0ztPO1qJXYSKQ/Rz5GvUeQFIfLqtCzoQOnb4IGqcqTVB00qcPPaxKRlxfRi-f-0rtJ0FqxpJZJbMuoxil68YpwF6mDS_aHKykN2iRNTyxaw7rJN1I0zz5ISnazLxD9h39oE2dJ1xdDaLT7XYpDj5kmM1VD8Q1HkVMI_g/ZMRTRRnxeWh8n1C_Z3cnf3jj238s7pb1TSUleZ3aLOk",
  },
  {
    name: "HiEdu",
    countries: [
      "Taiwan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/UnuuI9Kd0GYc1VvkBS1fYQ/ro4V1GXoHiMs87I1HyY655NGc9u7nRxmUo1FUDMHnrqvy5Oe7oa_2z4yltJ0DVl8QQEOo4jtRF5Rlj2HLKg9E_Gb0-8xcK0UctHMRjwdMM_QMvJwUJXVkHwkKu68SxlKJ5AK5Fxkvo4azM2Z0tUbxPTxZcdzsmGanhc8-85G8eF6GqU-MKLXlXsbFjFxVmGS/C--Rf7KWO1odGt4cUFlJvN-0VVydozwlyEZjOsFdj_o",
  },
  {
    name: "Ingenious Faces",
    countries: [
      "India",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/6ZGrf3i0OkCoddaI8sy5_g/iEBd3DXi1S1LygAwC-0IHFSyAu3InGyXE6CLsTNNU5SxZjDjw00vKunWOtkEjmt-07jChmynimEaE8RXjS93nDxNi0Seb7sI_b49VIyEKkG6QV2RoNcxxVsIOxmzYW2zCfjdurF169R2srE1t-Q__w/lc1L4BuwHLaIwkuWeY_62CjfoR5atA_0Iy12Ou_07A8",
  },
  {
    name: "Learning Spark",
    countries: [
      "South Korea", "North Korea",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/pao9afIkr8AAWmRldCwYCA/AvDB9iEWsFYqgbgYKEEtuzYmcPBN6BobJVNbu4hnH09Fz1aDKu858u82YyZr1HVLtSWO94v5NjAxjJgir_ictfRj-Ol6JuUZXrlZ8ew9HAjBHeMLoUiFVFoGU9-cOJM77ksGomCtC0qGaFktNqdv0g/A1wnQpMjZJt2d-vhTPDgQRaVcholqfvVkqFyAAB9OL4",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/fp1W_oaLn1zMhmKxXcy9IQ/UoWWX6Ld_ZxwFoW-lMtWddzlotRSuP9fTZKQ3WEzmMRh4bGwXZuZxiiR9vR3cHEfgzrkNmNBo-S_NxKWuEY4K65-yrjYJyHHgl8rHGYzN2JHEWaZ_QZZ6wi3McDwDIO9s9Wv085HzNLJlQLJmaLT5DEc7xRsIc2sgyEi19ERKLE/CSaXcMzsKg4Iy-B2SIPEHKfoUHPnwwqSgrFKw1--Hsw",
  },
  {
    name: "METI Japan",
    countries: [
      "Japan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/-mwCSK_JwVDB7ra5JizD_g/FsAq9qj9Rjq0k1UeLQHJD9uDtWijfvaKSBTaJ4L8OwFIYedX46jAe2Vwo_zPmVpCDq7wBKmB34ejZ-lvLDuxY5j4Zhi1BLfw2FsV_Y8V4GLUDt6gu4ZwCGCWEGzjeXswK7xUSwFyLmJRP6UKkmSfEA/lIPQxZ57u7Azxzv8St2cEMnYJiOANd-XKhEhUfnnk5Q",
  },
  {
    name: "Mindcet Labs",
    countries: [
      "Israel",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/8poCozLDNErYyWFaHMoxMQ/Y8T60swdhWoMmP6nA-6p80_4jRSUIl4vVG01b5IOGQihpwJhh-C9dhqneiwMKlsQoeXsWfAXEGAT_tE4MvYtLB7RUbqGR1ib302FpwgwI1hig9rlV_4Had4wizxyhz4BynkDe_AjsnjNWWij8ZpfiQ/GfBq7lMiJCZ4U9cWlu5ifu7xlj5WchndGO9rMuuJi8E",
  },
  {
    name: "Positivo",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/iCNp3L92BIQINtmRZaq6qQ/TG3fW-2xYZNCxeY9yvktNVFHnoZeXl7CrhZzwPa-s1BvoYzJ8sWRX2QKAipKoDtMy_6CIooJyMRszeJnH0Ii-IbVa4dFbD9qWWbhkDFOFylV2mN7-rxUVzC_e8Qpz-ndSQf6k-LT8xqp9Umk0XxT8Q/tYNhNRdTAdtdaq9O74KysynJQTWYDE0iFNnV95WTZvo",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/rphJDRjz7V5v7_y5YOuzXw/lh2zJCEvYqENpD1EXU3OVeyCtqR7YZAOMXuGKyykXixz4pYUhZQBPQ78M4JOXuwyLltlkXVBozFPJt14pEZHJ1jk75a2BCJEgcCwEioEVY7lCWQSOgB0nA9SXRo6DEaqsezhnZ7tU5dzZB3wVqN53g/3O9FKOZ1td_YblArBCSPRKybMT17Dly1q-cQMslu4NQ",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado", "USA - Montana",
      "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/Edl7fTIi7tYYrL2zjL3LrA/piWNQPFSvznULJ223PaQKx03oKoSxGyV4_U9nGVcxs_zmEpTFNZ4of1qtyxGg1axKlsAuEDIqcAvvg21lbFZP-fnrvOMwd9U7jSY1gJIamTYuycRVYADBKfcknzTGaFeIbrV5mae3vBa5ZF-KhUEbw/KztcvSwFBbsz6wbxzWJt0CQbNNkc_nMevGbFlK242gs",
  },
  {
    name: "Startup Braga",
    countries: [
      "Portugal",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/ADrXWZFuIzqQvCMAd-p4OQ/7QjDaKXlqgW35FjqskGPiP3_0AaCbqYmQnS2tZUhNE7IJAQFx1twbLubsgUtlEJCInf6ujNuJn5_QZTnRM2wp9xZrzarkvQqZUwtmC1ruuNtLYOIp7gDGGVaRVBhXENbH2VJ1zuEqFQ9CQDtUWH80g/s5KOruevuxnkqIJWrxVRFiNuJPHtWn58d6Zz_ChUmBI",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/I1PXBD6bLfx_tcPgH_S2Fg/WDqlbbm-gI9k3rkPBAeCS6xBVyrnF04JPWXOXidy1dAPKR3ilum90IxkyHhUJvJtp5X0rJSMpxVuxrvVZczd3565WOjIHDcjPL17LHv_LLICql9_-Dq0ocKRo9wyGLbvvgLPV7BGB98HbDZWFTct8_IgsyXCcgUy2j0VFfaSwoY/IM0FCRHjk6f7CONyD_VQxVsdyAnZU_NmZ-oUQBxd5uw",
  },
  {
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal", "Pakistan",
      "Papua New Guinea", "Saudi Arabia", "United Arab Emirates (UAE)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/FugpQVvkPzMDdNYDjHstLA/aMgveN5xBs_hL5DTyQ1TvtBdSH2Kxgv5EHjYuozHBxO2RGu7I_sfiAiniLHrkoyutGo_Vh5M2QQNQusBORPjlIZT1lDGsCDst53SrrIQai48fzk6eYY2242q_McviqkhUVOW2KGv5aeOvshIi0jUNw_QjCr9aoAlNfoJMLrVPI0/AVAl4jFNBPUTQSKwaqGPc6xzhCUKRidzLgwiTqnhujA",
  },
  {
    name: "UCL EdTech Labs",
    countries: [
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/AAnFkmz3MMpajgH8eBwl2A/bv2mxVnhIi2ww4xbjR2cFgX_eAhHL2PAzhzf_ZphCJZ1R2fv8tkBkYbXSRoZH26jEb942J-0UNz123_5Z0rMFQ5eevkGuoCDGXJEWe5jPGJWv2we9MODXss_VwkS1xq2heh-a6ieTu4qBe4GHfaOBA/cBGR3AP1bWQF1hAnkKziO6K7E3poJECPbsT4lTxbbHk",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania", "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785240000000/DOR9X6q9ix_GXdCXrUjm1A/4-YLauqXPgFrV4ZGqHzvZPU39BjPDz7mcV5oWJrjG9apTV1x-n8-uTFngA808FPtA7-xz6JR9T0ek-fPPayaBKNBkEiIEwS4Lqr7qB2egGZbqiIEeoT3NUfr9G7WCJHZi5zP1nyL61AIn6XZEC0SRw/sE6VTGQDulY6XWaBwHdoVvAUGqq0CgOTJG6MUK6slBA",
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
