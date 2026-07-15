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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/LS-oHxaWr8uIN_1yYyjGfw/J8sKy9KNsUTX7HwhH0KWlDtadCIjtUcBeTPNsRfM6ZhA5yWyolGLb5xHQE1s33f-pl7-s0vZx6iTLwUVY3LLiCobzBvUzNrrIJ_efyElL9eZS_hwUosLCAEdhaRPWVUjPGSsOFQehgv0G6edFMmL_K6c_jn-KZr-PA69a-KGDCw/5OmCfHfstXqb8nuQOGHpTxw6ppszV9M73b_PrdfzLeQ",
  },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/iLKjj6j9ayIenPiYvj9uxg/XjKFUNioYsbPcsOyYAGvySc1TW4dB9UXqtmPEB8QLnug-Uau__gTeqBvxvGwjaGx_FewSxlGWmolRBh5TOMaVmNne278CO-YJf2qmouWbq4Hwttur3sfQFPuUP1qlcrzUcbjIbOJMGhC-F6wBuT4jQ/iZ61IBg8rPD9Fbp98yYDIEi7nLEcP47I4_W5qg6Brq8",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/nWBX6CGIn0toDQMbMOEf4w/EoHe5e8wSEDMfUzY8ci9ct4gSQfIU4ZH1htWRqvmpicF_FbCZbYBd1yMRIbq3U72J9dKASYQD5UYGSW7Ikou0ycRRG4pKQIkx2gbGv_m3lzfjnk5NuCpLQpWtSBjheVf0H0p6tDQa30EsK0P2GDOys0S9eXv2iv5rsMngk9Dhjk/UUq1v2-Tt2EgiFj6lMpMAMxQQw4LpZNklG9GJ33mqkY",
  },
  {
    name: "Dutch EdTech",
    countries: [
      "Netherlands",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/1SeaeeuFVWMRJo9NPzQ3NA/RDA9rFXcpFU0QXR3IjRfq-oHPy3uzJL3Y1Hu337eegN-GFl6MFjPFLcWjjBcK9H9cokA8n0KJlPplV6f9V3IFwzlTxe0Q3TBmeqw0slX4SxmKL1ojQCDjhwfOiwkevVwr_VBtk0Tde0X6fYcORvXGw/yEABhj9PD5qV8xr53u_FwRvucvqjfRAJ5FUbgTfnE0Y",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/I42CoPmF9eZncXymt7KmPA/4EYOE2UERwE1jE62rNHsd272S_crUopRtzWdlWH13qQzyYtOX1BbLdKGlXIsslmw_SiTXWOBEEmwfquDnabard1FGpxJpYvUr7ONtuOmCqUZpZB64AnM0xqDiK0nCEFTKbszn-tCibuZ5NeJTb4tZA/3VJf7fFM9ZcYFkFis3r-OumeWRx0qwQtUTbZvYsKQTw",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/jvMlOCiKwxqNCuxQG74p_g/L3g7OINqJUu-Ru_PRbsmB0sUVCnusxvsJrLaxsnklXgeN-aUqeuvrjupS_Gi3vKcHnNGDbHuYbJAoHi6iNWkFeSdlqXAsbixwhJKPYXX1EdvvJ1yLgZuYiqnFXkzrM9BEK03s4RjYC1vZQohEBhdcw/t6lV8Y6M2wIlkhYMK9B7u-MoG0FHB7w8G0J347RkKMk",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: [
      "Austria",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/VULjWNqsX-bqPcVsivNwzg/sNn0jNIv7e5euIJfojgPJJCI38mU06XfmQYqg-lYkHlSdDYo0eWGkbevaE_NjAe1l06ejZTWY1_OjftjIq88BrqNVS654vH2HjqKqwSec3Wp_Jo45ueWU7hs2ZfEEGOIFk3tboAd9W_FE09B_6Z_bQ/lsDZtiU7H1oBkBwn8ErPeJG3znsjeU7szUv-BkRmCns",
  },
  {
    name: "EdTech France",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/OSl9RXcI6ca-MPVe-e3Ymw/p144kGiB0dfckUopQIlAv4GNsTMsWc6sOPUebf8nJPczPDkdlbeV7OMqCy2EnxO8iKuvbp0hWggayqKDbgad23K4sUGZ1Cm3Fh7YCQuaESuk5HJHUIsaakT2-9UvhFovrhG4U9EAlGzEH3ZrqEOTpmKUdN4LwmwVvQbkIxo-lUo/Tk6_EAZJhTwu-wwS693IAoGrOVXYiT6xC5n-Zcj6e-o",
  },
  {
    name: "EdTech Italy",
    countries: [
      "Italy",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/Dv538fCBFWqDdCiGF7r07g/7iz5Tvb-C9DG_40r7c0NHCNNKE9tkw7c0rkjpPM6PytpVU3vieZgMwKqU0D3tYXFz5vQkDW1MVCl7TLHIv34uXxAv1Sg5DoT2ezWIR8QneRpX5BQeMZX0Y3lP9ouNq2sLmbgJkhRWJlHW0hOypcR0g/JWvkX4bvp1KASpBmenX7LcUyEDFNpQhhHu-ORCEd368",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Philippines",
      "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/boUwBa8fhZzCNZ8diEYusg/rppX1rPONSgam_FW2S6a5sCeEUNBL4_UhqyjnExyMEmMYiJ65i3MRr-GhFwJSEC2htmQzD08bs_Wdm7ikD3A2_83qkTTH6bKuRuEAb4-KJs9eUhgm253v4pxRXU2LpN75Dq4fsUSGLllFNhUh8OZEw/iIaKF6UTns60UkoCXk_jwV-f52x7wi_SJNgJbHQWcMo",
  },
  {
    name: "Eduvation",
    countries: [
      "Germany",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/TwpwltzcZWAyYoUnvXjOPw/E4zF2w-KfjaOelMrveuHV9wPrLYr9u7TcIO_Wf6Lx7n0B8iT5lnuuVVSVhCHTk-Q-QDpiKy9YMh2BFzR-WG0rLFgNl8inFzeAj6R9Ai4nE2AQF69l-moqs8964_iVLyRF9KTb41SMKHRS5aZhE4ZziYaDl6qHSOpfdo0o7PPAD8/RZzUpE6jcRAC7e2If1FTp9MDpCDL_nZe04M4fH23ck8",
  },
  {
    name: "Esperanza",
    countries: [
      "Hong Kong", "China",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/YdmTswdgDkeBX2R4Ep_S-A/DHwHyXLALKqZotcneHf_MXdGSHbGS5wfDkoH9FRYKHBCiArHnjp9kDYx02CnlZWfR3hN_Yx-EI8kZIjl1fq-cJx7sTnerLxOizXLTqRbfYWyl8wUsssYxSEETC3GwrMSLG7rrTzuA-EohIAoe0FwSw/2lFZLZeZEI-kAeTPeyDi9sV0p9WG0ehPs7wdxRLUaCg",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/YD3bayigcIf6evka8jF0Hg/e_pp_dHMaygYtg7ffNUZELiRV3xVXp_TBKr9fxh8TJCIr_zhljEt9giL7sx98LvIb5KWEhwEOLfh2AlIrgFGOL9oXux01l2awhmqDmoaljb443xeK25sOrHSWsIWNQJaZIucD1qEP7QUNFV8ambKeg/-oM_OiBmEYfy6Qsg9Rx3BCgjWi1bNMFteGiCZlx8aes",
  },
  {
    name: "Ingenious Faces",
    countries: [
      "India",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/Tnno2F35pnKbG1uMUL4C_w/8OnX_e_fo2yRbMHRA5arMQweVtILrd-cp7pCxhNgRVYB1-75sjVR0OSjQBxfJo7oYMyRP6A8L5mvBp7Ek9JOtbc3NxKW4N4EUWZYVkk4T5pv4m_u3GCiEQNItUDfrKXc3xFiY3Thxeivjz55_XaqgA/_k7eiGXd4wZnrVAOlRt_NX85wAzgqffrksA1QKmoGlM",
  },
  {
    name: "Learning Spark",
    countries: [
      "South Korea", "North Korea",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/qUgfzG78DjtSV2pmav-0Tw/-KxmGG4kT7c5kZ-VpKu7QGt1J-AS2wzRa1OYsdNpbCu0PAvouOz99-7oy3AjvVyNAT_dcdyjVTJI1cin7rvt9R2MnyJEATWdtwqGgIBrZ85Ob8cQgvxdZAQ8ZbqIJIf87r5suAEAzAr4MY7fQSWM4g/ebhEypK273LFkExI-LaN2SDILhqMXClllt-N54_-ku0",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/7wTkvH0ykLNcPnH2CURfjA/FxogCDnr5N6MGTo78eFjJxNOEp1bJiVPEDfKFlYhoxYw6_bbqSrSFpbGmtF8FdbjO-VP-mRVhLFmZCH1xdbz6aRX-OwVeoukQFocXnhgQ5tqxercvHEMTpWT9h4c8sxXVkiGQnv_elzqATM2912ANEBzL0WWlTkgrq6QTzK50sc/Yh6LPerwa4FN4Qc4CJKSofzycaBSoWOAsgRbeSR01pA",
  },
  {
    name: "METI Japan",
    countries: [
      "Japan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/1tCX5Do4d9Ri3-5TGoeO7g/-QVsVTzmcel3Ld1THLxL6dANJTMppcGJv01lbNISNXHC4vMvzDDakV4beWqiaMy3m24O44F2iXmPCZG2ikqzVZO29LjHZCX7MfHbseoNVrWh6fJT2-kIAkfhTujJ4JayCgNes8jCWhhmX2Z4ve6kMA/iWz54LkAK-odCjkFw4CJkDjPpmtmhKkvPD8YXPTnxjA",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/XOptmt8CTRraVvvHr_tANA/z8J1MFPUnBtBiYI0-9M8HoZgwgIzZ3kVbJYk6SU4nnwH-NwkRUPPLBfGxRGmM5DIr25WcjMB3I7a-M_289Leaj5cYuOJrn_4Gj1BFSm5CYQWuriUmyUovNu4zBD001gMMVm272IWlf-RT1rU7inoQA/fxqH1QYHRXuENZ8aLPqVldUSZ8DQU6iPj-Nw55I5U6Q",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/Um6Yr-YyfxZkwsPrfuLquQ/1G8JrCm1J4o6QvFg2nVAs2mPCrJiRs8t-Co_Mkhpb1fQIGjjl9qzU3kCB6oI36zXmlGl_as0EwHgk2KVkWAFsBNReRdAUP0hQg5p_CWXdTo3GINBd3jiVQWiljfQ1TpjB4yVXD4pzVlkyr_IIt7dmg/kJYg9OCgUvfOhebCHul_uXPhpbl3-a9GVSGO9QByZgs",
  },
  {
    name: "SEK Lab",
    countries: [
      "Portugal", "Spain",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/EKZE4JDTp_J9BQbqnxx_8A/xgjV7q6dMLxguO7YkbQQus8ywxL3CrjlmOr2TS9QQLkbrzhCSQCC3sC7OzBUpemjpr52O7Zwe1nOK-ZLyaIT00r4JZxW3skyevzwcQRGsmtXhrO5lHBWHm9NcWsz8iJ9a5xcp1gLVB8SGO8Zck0RRg/8j2z7DgQsQJcYmXsFTBe3rAjuS5GGuztelo3JmcA1aI",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado", "USA - Montana",
      "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/SkxEFfj-Z7WFKaBEFoZklQ/zmQbiNliKkWFv7bS-5EriQdgNLpmt6ORfRgvRSUMdp1NYFDsYP0achVhpfjL17DU1u_WS4l_DSng4pci9Z18hO9ZA0_ZywRX40iA7t0jSJ8Ud47QC4dOxiJ1MbscRift-9fwbPNrV0gobRMFLCp1aQ/aLdLy1bEaPJcL_TgT6epln4a0j6WgsreAefOu1V7KT0",
  },
  {
    name: "Startup Braga",
    countries: [
      "Portugal",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/iCqgj39qvBWzwPAWXWl6lQ/J-vqtOCRoJ2lHCHtxs2-y8f846I8excvjLpi9vwXPEx22tjLiHXiqpftdI12hWfWtRb8Rkx_GUxuBuGX4zgak5vyoYzEq84PHNn0VLZ_mQGkgVFvUvLsihJYQwi3KPiiL9g42y3-L6N5GqWx3PwZZA/GZP5VgB9_lR1H9ml0lGY0Excx6MKZ_C6a6FKl4_gmRY",
  },
  {
    name: "Taipei Computer Association (TCA)",
    countries: [
      "Taiwan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/c4pF7i56M6ZaaQS1vx0z8g/3coiaf_3uPQbTNv9y04Rik6aLtZGzsWa39uXm_8x63To6aF2xjw42PHc37ncBgRZvyCuedfjRAeQ09-UwzOasKqBswJMgJ_3m4-E7EvgWmi8jnJmzT2cjKX4z6utayv2egrt-ses2sgM1Jv6cerjWOKsX1rSYC_8z6dsUTQZuHA/8v2Pa9_QzHJfqPS-YE4v1FsTzSRi4XE0OluZ55mqsiI",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/02o_HTu_o2KiozUwSrxa1g/M6i1L-fKcdRnRFgkgLoiT6zKn162UvB9oBY-yOn4HuQOnEEmlpdv9nGrKbrENEWzXQo87bC_zj1idu2GJwnNJ6LrxWdOmNSHV5wjSVbnRRCJOzKdLaKH13Lo-xNFKQEdf_2YePSqvmEhSHj-Tnd9p05JPQi5mYVOmaP7ES8T-Ps/XiUu5iSz4u6MXGvTQTENEo9byuPiYdjAcqOI7tS2Jfk",
  },
  {
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal", "Pakistan",
      "Papua New Guinea", "Saudi Arabia", "United Arab Emirates (UAE)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/ZIAH-PLLNo9IVRJUkqhI8g/Omgj_3cyGpeB53SMT_Bg32BOGkUYW_yBtsryyOzIgaJ-gkcQOOuuo_4W8aOWr0fidgydUXs6HB2GbHqJ8kC_nsoSlzGJHOw3LMYGuK45DJHjPcgIHGdnERIPlR3a8e20C-5vNXzqpUBV3MzfAT9arN8BS4z9-oH2R7I8mMvoqGM/uvZmGrT6PlMOjuAyZ-NshaLk1zUegYXVagd-67nqDA8",
  },
  {
    name: "UCL EdTech Labs",
    countries: [
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/B0Y1P2abFYPHNjPK2_dqbQ/3PYSO15g41o4bXY73utrFKxHDmrElbWY7JW5uMfgC2x-1Z8_nawOriWy6-BfqglNoNBe9vWS3giinyuezuBfmpseqVF4tytPHVV2OC5PiS1JluGLbrgr8_7QeJUn510mNyyyAOM0n8ODll5pAj9rqA/Gz4PSE_Ve9jTcPBA31F7HmiFkUWMTlMuzMWvYJXTOVM",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania", "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1784160000000/DwIOIcu5k9uq797O_ei0Gg/502RldreoLxv61TvJIFbR56kiA-4hR4nlvi1J4zbxtA24Q1AW9S6PIOhp4AXa3v1ZkAlhae6TA70o6K4Zs7EGZG8FqMxWZk0cYmiCouaAZaRV_5bLZ2pVORoyC8OPpl4hBwAHeJ5RH_UDTgj43RJ-A/RUwdAKSeVV1SBp1CgMN5ndudBfuonS6de4IexJ2WlJE",
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
