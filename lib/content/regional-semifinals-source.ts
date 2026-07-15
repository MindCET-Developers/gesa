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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/YZ8VwffSNU_NxTgh8DABoA/-uh0YrgGgehrIsUM1X2Rm_KB8G4AdtsBnHSbyyCuqw3McvNitqnr5dY-1pScQJCe282r9CF7RqrfzgziWzHeCAh4KjnEGIYQN0760G0smRszcoyltqyrfrCwYda_SI4gD0W95qJPZjLUH62PLYX5bpb-hJ8A1H723uDXdVjP1rA/aU2EcD6a9WTyRnAHSvnRsK--T965wv27yuz4hnQW8sM",
  },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/nfFzqEOSZrQHlG7rLXN6gA/CjrKLoHE_QJtQIxM3IX1Vss_ypMv97ne_DvFUQFVfmxvtM5YTMv5VXbE2YfMQq_CYRnWp4w3FA844xz3_-YLXprOsOvp4ICjzYtzVsnWN-6P2zs8FYeXASRpDKmq1xeVziIAOolib-9J9rDtTIu-fA/5THzEyYgKcMgVA9O9R1nSGGQImQrW08UpklHaiFNpdo",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/kW2TBFlGqj2yjbvKYwvOWQ/Y7Y7b76wjaOWHH_lapHainptuNIWhdmpIwHRoCIufYmqP2DXr-ktT4m4VeH34moR70zo7_NBKXgN-mGUAvPQKaYfJGX-NEdufq_XkD3wIaT1qyfeAEbA0-vLwb2T00za4iWEgWpf-aG2Hohh2nYEIQ_pO8JuotEY-SGEIWhbzJY/q6m2NW1zAC694qygZv-T1BAcXH3A8o8Yz94nB9EeZcM",
  },
  {
    name: "Dutch EdTech",
    countries: [
      "Netherlands",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/WG3s2XYD_Peef6O6yb0xGQ/fqNZ78rCPHNe0AmzwAgFMZLX4A0jP1qc0QBzDopg91VCdqZ8luH9xHozu-d4UEL39ZWpvE9lp6fu9ACVW_tcGIsVqApkfLCei8EXSZeqkFuVzKSNYv1zo6ulOYOVTa9q65ohAIy5C1U49XbMamX8cw/TtNdmVtD1qo3IiOgq_WuSHyZMl_5rRpU1WmehOM0j04",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/-J7WDLEsCRPQMxrCjb9t3w/tdjs-Dt4WBZKoWi08h86E17iTW10DrHoncjMP_WAEHBcnBY9SKLOIYJJwnul5H_fnrrgKvnKwqKZoHWQw3uUqwiZgd1WjIDTBZ8gRhuDRT4uetnGVGtZyq5-gzDdF2JNihqxRK8lCj4CUZQQwuTDNw/nNUPpq8OYxquTPboDB1UgvtgPHV7MZpKxuLPyIQceJ8",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/UFnKYaxFjUoStFQvgUwePw/JjilXudmb38NyATt7BOML0j_Q6WU2McsrmZQYUXNm7FOPTD0zAbARlmBCvfwySSQXndVl2tpcG-E4a6uYwND9l-Z8C6t5YgpKXDLcNvTOxjBIHCFFRVI9HMJVB1OMxuByMC_7djnDKBihIM4RnFx2w/9C1FoBdqu-DEOC44UXfFXYtJi84aa2_ru2I03rqYYH0",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: [
      "Austria",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/EvEXe_Hha8brCuaMb7R-1g/1hUd2vd5i0YXZgJSwQ2ZHuGM-pxQiUxtFVdO8n_IfYFLYBgtERRAILGnj8YC9LoQ18JcGITVY6H_Nq_zCvXBrWZYIomqZq0VpmfDosUMlYKAzsmvXpWKScodx2x1ZlXcBsAUFv6YZIMnbyeNXjodQA/o-eARcXp8U28LeNCcnbjNsRIpkPvVxElYkyWtiNIvdQ",
  },
  {
    name: "EdTech France",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/hAaExT_8QFtHNfjRKOtMpA/4Kkq6asApwP2r8Tuk5S8icc6jCs0zit5rR-1Z231MCt5QPY2okKxObKur5gHmzgIZRo15uSOjRhfhNtfJ8E8-iI3Bk8efEqaaok_UdU5SqiV3Gz-d0W69hqnti00yfWCMMEMeUzWIvE_VVYf7V7dhtgMkcooc0N9SXu2WmkPfxw/PAlYLWvtQMRM9p7ZFzrgpPbPFvxj9d-TQwHt-0GkXUE",
  },
  {
    name: "EdTech Italy",
    countries: [
      "Italy",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/kHd70hiadk-2Ek6YdfO2Mg/QoPrm6LxezNyHkehR9wExAAGuP_WmI-DlhqP1oEvMbQT-XfjcjD2zr1vyarv0t2j7_onTnO0PYLoxE0BWtMGf6VvWEfjHmkl_b2lSXSKI5aFhjrAtOlo5DlrC6LoJ0qmDGmkAQ3zpcCqh8VDZVVX0A/Lll0lDrdBpfUmZJtFD0KAvb6DEWRb-y4o1o_foTypDQ",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Philippines",
      "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/dIXtagtzwndfKWYYP_uVwA/KWJxCs39YfqIGaEc_BpKIq-IO31wYvhganVkHmvIrAYGcT6VvJFGgPDEnnuzszjaETgwbBsJJgUCEX5mk-ZkUe2WERQjwR2gbyv6afjoIHI7cqKCHtqz9ASr8RyxmnlHiBxwfEqyOWJQ2a5pI7Bkqg/SwCuy3KsyzMOuznhiEdyO4Mj4jjhXfJEFgAhrSCddj0",
  },
  {
    name: "Eduvation",
    countries: [
      "Germany",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/SVAegJpbPQaThL03NucsnA/0aE0cf4ZKpwEHKw13vXDNfBhYHaWWmak0IfNW4AT8YKIrY8ThBrgr29UwNgn4UnHdN468L9-qkDD9J6TYdB2zrd6_fxxhc_CVbqucT6ofQjJbFEfyWq7_tfp1L4xZcc_BJW6Pc9_k7Pn8UGlN7f5cBkbBeLsYb-jRqJf26pYPho/tyyq99DYGZiiMO_aCDUb_SzU9bdPdyFv5QqZo5qbZB0",
  },
  {
    name: "Esperanza",
    countries: [
      "Hong Kong", "China",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/vtdaZiE1WIvcSuEyh7E5MQ/OyAngxt7kUuZ-kiOnIDgyMBYAj_XQyFjIxyTixCi6vZw1Kou82xDd0I7vPkYQut7FkdbrZag18DXwJOMaqeGdMb8guJdFWtBWCbK84nzSE1VORoH2RsjkSXcGh4-MBzLutflCRWu_j61SfLSkJSd7w/9rXbh1ed5Ml85e-Dd4prwditxYgDG-ujbOd81iunCYw",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/aW598LTXFKmmJ4d48E2kxg/lyFRwtuBvIAAY-WVawNHtGAuJsE7FAYMq1c4fMn2te1SQ-GJ3DFlUsIU27EvzAqmD8LxHziulg521oZUiG10meTOze6x_B93nYhcuNIuWdmOuvs6DJO0t4ghnz-eljiAzXJoyqU0diJTei96XfaXOA/3Lgcq1rKWFAu53370AZxHDi3cCPuNQzUfdD4MOY3L5k",
  },
  {
    name: "Ingenious Faces",
    countries: [
      "India",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/fdT93PI-zPbsPG00PVKynw/gvONaRmISH3DLoL5HxMVc5mXNGA5ePTSztusQ_L7ojbNzAL1lquMvP9fl0f3ZQNCXsHGlW_VP1filvStExp6OC9Ni97VBOMts-9cNQfV9RYzq5RdxQ_x2cnTQxy-5h2vEjtnbHMf-00vep_02bvGWA/k4zJ6qp3nuflpgNxMh7iUleyufLCSAbIRtiPMgheZqg",
  },
  {
    name: "Learning Spark",
    countries: [
      "South Korea", "North Korea",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/r_J94JHNS4-dPEyS-k5XaQ/h08pnoFWnGjrQtkFaC22VvA5dY1W-9PwinBL0cjwdLiOR9OUEczxD0Y2lFGiPwx9fULZ6PqPTZ7jBgm2RmRXcEmtT3eEAjZNejCHCxwMQmJqiwgx-C3KWODknlCjCChi7Pb9Hx_kw47NpEGA6AmtrQ/zo24u3cx0sjy29rVnGmNnRXBZ6rim-U3eyd2sF5u1O8",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/p1N4tC16qjjHdYZtsq_fGQ/QN-J07_aEHNAfZLIy1E5DXbDqvfhNoXbZx2GiQrlP1LZp3joRrFDed6ymH_YW6J6llEUDlL56KGVI5z46_9Usivgc-mMVfW-QGGPz1pTTZ-BCZs1IAkFP07Qk0foLS-pSawPMzfP61FAhLdoBZV8RYxCRDVu3duAc-2TqRU1zFs/UkWg6Ct-GT4oN6bOfkdHGcsB0H_ukJd0uPX5-2gYTM8",
  },
  {
    name: "METI Japan",
    countries: [
      "Japan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/2t8x1THfQya34bKs8mPoTw/5xzkmzq0wPX7FdP7NQJ9IZCw93fNAGJ0W-k6cITUUmEmJMElCS7ciTQmRu1orI5M88kXQa5DNfyAEiAu4CeYc7af1wM0bQCd46gkycWKwJWn3KlTkV_xH4Wl0et71WTGtRH6LkGcTEI5dNAXoN0VpQ/4WVZReVDrMRjnnhNtVzPB84bXRInl2f9Ylsp6EFPL3o",
  },
  {
    name: "Positivo",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/6akwowubjFUi6iThiCQiXw/vf_ATScKlfTzEwI7AHFr0ygLdCvcMn_94DnPz3yfTJs6B8C9JsEO1zzNrvNIELPbf9827W3QDuOsH-uaToYKUEjbPLJ4UX4Lm2Wh7yADDmCl9bDpJ-isAtFF6QN_uzkbpF9EQyyiQQWgoBnq0LQNiA/7__9V6KqOjcym_wgZ4NJXIC2YjINZl2ca-WHpSlv6QM",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/zrj133maYHRvXcyoSbVZTA/ffhbmFJqC2BuhM9wLhcMrTeqhZz0pHXm8-bDuhY77UwsWgBz5auLqvu9bxiun5FNaQ5vPGH3mYQOnK3-AIW1hrVp-6wbfYTco14Z6Eyd7DL98GKwlqegT5OxmNIWxUQki5DchyjRv9X__waNsmZzfg/o-wQ7MknWyNwu65l1yvzwS-GtMJWTilp8fBRbYVQJao",
  },
  {
    name: "SEK Lab",
    countries: [
      "Portugal", "Spain",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/e0ywjD0qYRQOcTztrbbsMQ/mWGhp-4FEEBPO-UYBdgZBuam8y1EkeY48gDdP11_eTAcwYjWO3M8349v4KcPIX5_v15w3U965y0URC5U1JHp5eZtPrftLg4eVtj9MOGeDpsZdR_dO4mn7RebKZUy57ObtQHPM5unrAy9je4d4IIVQA/VF3tb_5EGre1fEEPFTYFt5_D3NTFl9LjAdKmr14EzWE",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado", "USA - Montana",
      "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/7aHzM9KxiccOC7U2xlawqg/z061QHdUe8c7eoLpHLnuSZBaXl4GYZh6lkbHOVdrBnmgXDnYkDVHHZCrkfhMtWMPNiA8qzYoaArhODQzpyGuRutukP4VuNeyl2cfXRkr4e7h0iV2ZyR8KEF6LiubMVCzk7_imQuHQ_Ip6znj1NDc7A/YxxX_usOEbgZ1N8s0kVo-DaRER8rGFyt6LG19b500wE",
  },
  {
    name: "Startup Braga",
    countries: [
      "Portugal",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/GPnv0mKiPCI2_YfSJHs0Rg/fio_JTQ07tp_V5-NJp78i1ikRaHyCFZ7EXllYmRxVYCoM7F76EYc4igKffWKjkfbU0wbgX3i5LMn_i4E9bBq0Q6QpIen88xG0Qf1iNkvepUy60d6ldXb3xkt8mdkGFksUDaxKjig_KO9oSMGvaL4IQ/0RkaA_bKLk1tq_8-pxfFvAn3BzOdxgbw6b7hSwqMux0",
  },
  {
    name: "Taipei Computer Association (TCA)",
    countries: [
      "Taiwan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/4VglxWa5NNK1DlsJB6RMhQ/3EEvE_qiSmD-bPNZ1CXTktP89KZekx7BPiV-0FKvl5JazMj-yfyzlagJqKQu_mYqO7PCLUTjcEbUwFiL0lId4XaL_x09OBJhDEw5VKaQlAuHZsy9kecfoBfmILUKnNEgcNzTalOweHCHrBjnC0GXGCqrkKp_Epv76bfraTREWEA/QkYkImJmEvN4odMztKbi7XzpAhMsBIQLeeNEfbNpkYc",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/u5V_FgbXYkvlLeachtcCbg/-VudV78Dj8Zjr3hr7gKthdwRQJeogJ3ueuRMiqKRVoDyiX0KFD0kSAHhs8gWuPwtW7OSfoRR9WUG6PYwtGBclueAiJaBAqvP7AqWxInuKtKIi2xi6DedYVmeDWKxs8x11V6pDay90OY84n05kUqcNcc5G4zTMj2nPczpWCQYZ2M/CSeN-K856slAx8HfeIaSeUJTWNfLIuc9lbm2iflPIvs",
  },
  {
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal", "Pakistan",
      "Papua New Guinea", "Saudi Arabia", "United Arab Emirates (UAE)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/d9mt899Ljq7k-x57SRPE3Q/rhvdDxiI5MloiRXlVBur6PPNc9R0UD9tbYRAji7l4n7_EV5V7959iMQfie0YRjHTC6T9B8dqzMTuCuGNjjSlGQyeqemeH_Ku_OSeKvIQYWJR5NKEFPwuGlZKeUujuBH0ctBFyDLolx9PO0Z5lzvd8FXKoz4S4luLNaYoGFBV_zU/Nkm34WU8sV1vf80OKTiQeYxrb8xF7oY79gaQqMPbFco",
  },
  {
    name: "UCL EdTech Labs",
    countries: [
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/17dKYu71d8kByPAAEQR5Xw/1yWfEUxojQ_zO5qfRN68ZZMvGqLSyWVqIguw0SaE8UL0m4FtDCZTbDy-F6T3DpRwRaFF10Imj_HkURv2kkcQsT8-hrmBakRu0Tcav5-1II09f6R4M95jxAJs19-12FVVzgpxFGLQdUWR4jwFsml8NQ/poSMfZVWj-4a0mG1VR0Zvbgd8w4u2pTbawSHshbe0cQ",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania", "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784138400000/S0eMN9KD7xVcZ4hi5Wd5lg/RtQEnzxjghCmwmltORkkMiX8tnavVYGJCESebsEubycNX93QZYWOj8Sz-uLkd0L7Jj2KMZV9lbDcacvbDk5TMcHWGJhK6vPloYEZOQy9OF8rhEzbLDZJ-rnEtcB9UCNsiznIYnC0OHOsiGNYp-mXmw/ARCK8TEf1fRzqN1bKJPH0NCSlLD_7zogKIVVH7g5WHE",
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
