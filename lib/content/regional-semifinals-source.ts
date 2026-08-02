// lib/content/regional-semifinals-source.ts
//
// GENERATED FILE — do not edit by hand. Regenerate with: npm run refresh:semifinals
// (scripts/pull-regional-semifinals.mjs pulls the GESAwards Airtable base appyTu8uOPQUVXD4x
// and rewrites this file, then re-downloads logos and rebuilds regionalSemifinals.ts.)
//
// Sources:
// - Table "Partners" (tblAfv3rYs6GyXQEF): partner name + linked countries + logo attachment.
// - Table "all countries" (tbl7wFk8g0AbGx7ee): each country's real "Geographic Area".
// Last refreshed: 2026-08-02.

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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/hBlXnezEwIGRIsj43TQvMg/oDX_yo5dZJH1mrfwFO2BYqKtp4CO25ESO0C6PaQ8RrHq8mjiXMDm4lKXT2qUZXvbNhCBPZEFyOlVEv2ECS5nvNwtcBIzYWUGrDkAf910JwQZpcrRPbUUJi4rQiJdGcVLm97F_zL6pl7v6SfKsfkHX0he3sVYwQ_Kre0v0q0HO2w/vbG-WKmTijr8DaT5p-naxLkLw2FS-02iw0dXYLovT0Q",
  },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/3PLZD8gRdkNTHtWsoJ_kYg/Bs0ZHj_kLeRvpvKdj7ow7icw62a53N_-ZxyZOrNoaY2iF4vVHffLOk2OZCPJ96GBzP1n68Y21Vz_SgjutU2Nu6bT9TnAgpKZ-523zpYMVX40bCQqGXpWYhMVaWCs73rjNy92W_OBtGUElwphZartQA/bKdf6rXQDfRw-EOwUVXcDNokGlUrC662VnmccjN9WKU",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/RVn-VOkO9U2v_S_LGr4SCg/8mhurG_Jb0M-RrXFtpfpeFt8pumOZSHPLkihR5xJ0EnY6cZOgA46tokzyUZD4w0mofDcM1sK3vVgvXZk8QUw0VF6QSCpanhFLuMijfHQAGK7loO8aqlMdWJ8AqaUidnbs-yRASXpQZFjsxKfpCN2F-VWvVontB2U01ZO3VV3CAI/AFPIuqFl0Jp5Sn-cVBYVRX_J8AFg0EFmdJ9dOnqbZbs",
  },
  {
    name: "Dutch EdTech",
    countries: [
      "Netherlands",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/uqDbzjZZSxHDRue6sUAfHg/08dkVBS1iGKv2OFlKSCQmpd_bx2wbtmvmarernofsRzr2ZKgZ1JcCpkwfV9TPdWCwYrkRKKwzcXAQaS9SIqJoU2q-ANqUtkAV3zF353NDEl9VLTxzLQcE8nyzEZatP9Ya7ZFJN9tcpVSKxkAOgVT_Q/R1zj6Btm52vLcaTzr16FHXjHH9LZ4MvtsZHjVx6_UKc",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/6SQc8dnC5pbsKJ89wtu9Nw/_0bT1wtuvb5NssdbkkWEaKiBlppTospallL-SByLS81fQFOXYz1ycmy7e8QRutqyS1Yjz8KBJRuAd2TqOit6II3bgw6gS7ZQIKcCMhKhqQ-yEzDNP1mLwjexvZKjnQDwcdHCO8q0BtyguPVWzAXy4w/T9np5hGcgpClgX-lCUqCmB8WwCIBtr1BmWEtkghPKh0",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/eRYqzEIqqcFH30ykYVG0-w/3_rTKgq11-kOu_Opdh3kxoRxAPzEunS_-Yph7oKcyLMhVZiqe80jCnh80E69h2Xa6bhbnFx8WMCXx1IrkNfBn9AnawjYq_6k3y47-GIgi08CyHoDCSapQARxCq7CYWOVYpeaj9e6Hmtlq3S1acQBRg/oZdofhTnMOfeOHtTnznefExtqBdkgMpcbiUzZbWReaU",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: [
      "Austria",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/fU9c6dk25dklzk3QtUERcg/vtkOSm3jaDg7RZz5gkM83fHNjOPp2MPhkQKuRLcR_7PUSuxo3AtwTIV6ZrGDJyNHJuxbbz27aN-aN7Jbny5RJR0L2Q6d0CN0Ykt0D0-n3gwjLyv9rysI-EUASi_xprPZlBin1DlcUnzT4lBDe2Erqg/UmZaxcFC6SUPWnJYHBlnHdQAQcuWgAgk_3B88RGarog",
  },
  {
    name: "EdTech France",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/VD7PwrPQeVEs-TUf6QdXCQ/Wb3Nd5ZvoqbmlVpt_MP6Kf3dqVw3TkcMjnMeCXzYSaI8SMOgXhAh8ZRI4-mSsEqEb9hcV_d8Q0k7hX2FYLByySWLDJtg3ePulvCek0fGj6-PuD2G72GRoib1I2CECzIf9oVtqVH9HcpDSUDPa6Yn108KRVFXCGPXyr90lvzGPI8/7zzY8VDTJ8lqeonjXJy9VrIqDC9e0l6z7U-cVJCat28",
  },
  {
    name: "EdTech Italy",
    countries: [
      "Italy",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/StW6mMLgNouM7eRlolNaig/-22-1gdRzxQMZbanuLbKQRmuoiwoqSPWHhGY5XmSt0aGwsNxMZG7FOGnQKKODKoPVpW5q3heI3IYnsjNJeqOuCeijw23Iite_G92OeYnyynKwIdXiLLHsZGzLGeEhrhCYZTPX_Qw6l9RSIyU6C5Qlg/ilcBEkldcdVLHim_zXtv29X7Vr8MwCEBIsdzmYK5qX0",
  },
  {
    name: "EdTech Ukraine",
    countries: [
      "Ukraine",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/5cqnj7IA4dt4yul_DDIxmw/mp6VLrnqJGaPpqoBNfw3dERTxDD1sM5mtkgkok3bPozTpHfnqJbpqgThj10qTClsq40nzn3GVozy7O0JLQRHzd5XKd-RFhoPvTAbG7ZcDcVNW4JAoKAuUhVXfqRRBcOb0aXWOK6PWWx2BLUvrZFHJwYd6pmdckAko8VG5YESOKo/BjANVB6wkR13sf6Ju-m9K2YnqRFXw7638RC6MaqSZyY",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Philippines",
      "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/JgZJMTzniTsCijj3iUyr7A/UJmE_KB9YpMTZ59GYpSoQP7LB7vHdhoG8xUL6-LdlFo6A46cqXRHi-gau3-AOkIlm0fQOiCpANtWiAy1JIIq6xcnswN4--YeEVxe6is8X3T36riC5MQCntYN-KQMFCROtRJX2ri4chSTENsb66EK5Q/ePs-6-nPfAEndjrKq-uoiCrx2PWYmgger8_AXCEVmM8",
  },
  {
    name: "EduTech Cluster",
    countries: [
      "Portugal", "Spain",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/oFMuZ_ipAXerzn_KPic3Kw/9ubz9pdvyEsuMkJOEjrH6Wz_fao54vyQ89E8m2HTkf9_72h1TdQsQt-UeC1wquvIJnPqDqKF90G9ttgbNCBDl6W_Ycj7OtiLaED8bIURKFrPD956WV3_rI0s8JgKy-y1aZ4VYsWM6wFIz7z8qjeY5vgf0xA4rXi1o-Qe0-wpB1g/ZCsnePgXrwCYit4fY48Zofi_5H8FnzCaVU2nCRkWZFU",
  },
  {
    name: "Eduvation",
    countries: [
      "Germany",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/zhoX9e9uatBmv8TO91JP1g/gjJvdj24K6J2IIYek2kHX5k6wPmNtimGYKhsjYsXqoGeK3CqSQf-0fXI4TSCy_IUnumkNZKtdzjdNEI3IiRrfmnFYKBR6rsBT1DhVeKxVqhqurMm0vS9lH6OqOo6QYm9VCLHL6-1Yr9ARQkxoUKA7U0Q_eNNDc_ZKitybUfEdXE/2FypL67YdqgqSlikqwkCFq3Rf17a6VjL_dxsYQ4oI-U",
  },
  {
    name: "Esperanza",
    countries: [
      "Hong Kong", "China",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/pvz1nVUkguSS3NxWddqlRw/FFr4m7P9T0gKKRhwK4bTDTGPsv6aHtQ8KyroVuxpgu1fXi67Hl0H8zl8_r-jxZEJs8knKrPrXg2Hy76j_ju9ew9NB1S1r12JF_TMRcuuLgthKIjFhutk_R3bWeh5656FnAfpKqH40eihNAjvsI8nlQ/J9OeCMxg7GRo5zvZuWA9r0lsfH4yC_kVw9cMsj58TtI",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/kVH2XOudYqDtPcv7pmy4Ew/Pa1vzELMC1aGw7ZlXN6zTXf9Ca7HGD---OVKimwuebdAoNm2zAlv9_sqi9s0UEP0mNft40Yp-jWGUnDKAWuP81vMo657e6LMpQvgYDEwOpsQKMZ0W6e-elGsLpyHjgzJjbIGF2mFrBHr_fviIIQyeg/hxH_ZXYYwrOMmd79xUpPPfV1CxS747HJAWwC2oz4vvY",
  },
  {
    name: "HiEdu",
    countries: [
      "Taiwan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/Az-ZIlFgCkGv0x21h5NDGg/dgNTtQjbxoxhDGatxvt7uBTFyyvZ8ufDfLgJukZiICq2uqh6hFqbi9BB1JvUzEkaXxxR-UFPRlMv03QaJ0tL2sidVpdyqM_kQODdK7y25dTGuaKIUSkU_8eZpUn76qmJd54CoA-JUFZxj8zEPPAvjFaeoCniTkjtomCUHX900jsZYfYu7IGDlOXNzZd9eqW_/fO9qGbDqx7iFXQn-7859vVLl_bxRj4yiokU9qXUKAIs",
  },
  {
    name: "Ingenious Faces",
    countries: [
      "India",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/fENtUy2_4-5_jtr5-7U3MA/miWrAlX152XRoOZL-vBGMJiBJgk5HwZN49qWN77gJ1KoV-aA1J494xMkfVD3QBHBs_T1VSsx8dpSLNCCgjtTNlHcQny2UNDp-nIJziMFIrdCYYUOEY0D2TyqXdohoUaHgKgfPr8eP8tQqVJbUiQnPg/AuMw969rzxFe9mkjd4gXQ7bkPSfE-8nugSZvtCmLbss",
  },
  {
    name: "Learning Spark",
    countries: [
      "South Korea", "North Korea",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/ouMzkTUvKMEMHsGPxp23wA/o7AbRxfF9FXb0C68iF1n9X7xJ9gwKBXYW-i2DJoqEZkxEpaGYvJrdzERzuQW4B-uKIh0qxytJt8vChYpNqHepbZnYDtMiS1X3YS8JBOqsWweHcShk_daLnkKUlPASN2AYMPbfxxe0FI6D5cExC43bw/t1VxW-EAD64VdMI9fR_Hyf7Evryqs102OgGaDE7tbGE",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/MaKXvg1pLXFzdu38eC6J1w/lBZf4dnERdpKBsTVWQO491xtY525Z5SBhMbjg4EJfoAn_hOQdXSepibB3REql8tZrmfSqaDaSKJ_9Ry--ucnB3cIHKL0QHQB22DoR8xt46K68vdPyDu4NrOpJGuuZVh4cle23YToHbddKdb7e7-r5G1qg3lKIz497J3srPYgQ4s/aIKUvFCpYSZeAkJjWLpER3WjRY0ReGpVNGvpIgpjmsU",
  },
  {
    name: "METI Japan",
    countries: [
      "Japan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/kiyA_yWp7n6fvbAutSeElA/Ez1Z9GrynrPtNjh9DRuTer60UpBDtFC3veDWr2-nnadN8T_8YjyuIQ87QGj0ZQpf62tHntQrwH72rLoQcvsaqotZrEClZ3Maqmf6YEwFMI0Mp6FLC2Hd0Hg_VT9kzucrvBwBL1MuuPw7yNyTQOkdVQ/z7b0TXodYDcCPlXDguBFdFh0SOr9egtmIUr3CcT4ZoE",
  },
  {
    name: "Mindcet Labs",
    countries: [
      "Israel",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/j1S7weKCem-ZUf7t0cMIKg/gXMKzKV2i4ye0gnYfy0cC3IxqFqEMPSs4akeaLGT98XcMuIjW00Yt4TduBDguPK6V9dVO_4272JTDfwpE0rMVesoPLM6GwKxXXdhX2p_y7UpqwkxShd2Ug9jhL3QRag55Ckgbf4RhUndMUb0ZexSGQ/PfwqMW1Mo-29_4xu7ibc3mFlLpytv-YZo9CRF539Mp0",
  },
  {
    name: "Positivo",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/onXkLzaKiLRtpvNmOSXAwA/a5TAEzcp1eWU3NHw49GRXtGWXAQD3qQn9X6_MdVJ9WMMRbI1aV9R0DuIuitNnDhJ70flOeZo8xX1SsD8BC85YIIYSF78r0G29uw5fPqTQ_8WheFcHjYs23_u_CrhSOQyFJiidgsjuHMJytJpVeBe2A/U60yMc8d-WWQABjzgYgouswApO3rEIBdLQ0_4EKvqEA",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/7-Ta8sJSXzjWNMOJFTnqZg/01jCUL0uLNe_8t_8UrYBD858s3A2gDsQr13dDqK-7LwPjwPa95rdS1Zbp2sfPt_-NSFQ-2n4G58A0FyglESaN_2LRWApW0BxIQZ63TJ02VKqPusPi1rJPGsUvzb7Y_RYVuqpMf3LDegkLIFzYx0zSA/KOoL9gztzx-ch0c82T9aFhh5FuET8zVKSClGRGb75PY",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado", "USA - Montana",
      "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/9m4gToVhdq-p7uZPGYD-sQ/6B9FTtlG9rpOqwGlYZ0tqFrLHOcBwCS3BRFawdeKTZHuzlkbVghXgH5fY-IWxhG1khSgTbvNG3axdMu6ivsG9PSwwJtjg3EWD4eGBlZO04kbh_1UucGQLBggQg0AYzp1akY6UBayLkmC34vS-eSJLA/IOV1QfoeT8UXiRRlLcGu8xLs2CLb_3ndPB5kOoh8LTw",
  },
  {
    name: "Startup Braga",
    countries: [
      "Portugal",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/sDWAOUQ0ZcGFJrnfJHogIw/6USrDe7NOGUhkkRLiVAnAczttzIvs4Qj_PZgPuiqxCaRohH-AMFIihG4KuVV2Dwd95UHKbkdh78xm4r0FmgND4Q8x0Sy8_3sFSzrPQeTo6h-x3abgFuZ_GysDCZnhVRY75kaBzlR2cS1rHql5WPZpQ/U_8yAll7CLhDH502id6whbuQfbH-KCjL_VHImBMOThc",
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
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/AcYj1Rjvu2XkwXmsWWeYfw/0ioLotkRaYLbirDBHS-rhwM_i5oZziV6avuwnMm7yEIGEGMqknmwrsybEtTY4SpXMbWGjlWA8l5M0iFjsl4jgc5-wDG0MIX1hiztyMavt3zETuv4k1kBCSwtQcGXF-jHBh7n0ctfs83yP1SkZU6ca8FFIfMR2C3p7P3sK-G2HKIBqhnBBBF_OOf23mHQ1-qM/A-U594-_K-U1HGOsNELUT3wHhIlk0SGzEmlJhqbmvX8",
  },
  {
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal", "Pakistan",
      "Papua New Guinea", "Saudi Arabia", "United Arab Emirates (UAE)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/d0Btqms8R6CKRNk6vLhxJg/Q3KoijscxYKXGwTouctw4PjZPVfBR6QFliPT6q4MwrIEyTCut4qoQ-Ih-scc2D3CqF-tVt0xAhXTwdyzd29WoptXWPDbtjB7_A8t4dB77AJkAtoI0dAWQMdpepNLm_LMFdikQDxWXDhMZYdJbYhVAnNo-voZxMYiadZh1S1jRG4/61TbCiF8dqccnJtfbkizNty39GoLBk_FEhPPkyKHLsE",
  },
  {
    name: "UCL EdTech Labs",
    countries: [
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/RcVhX5eVL18SwEmoAMAZnA/-JzI0SrvwspxuBGmV3yfjLEo1QZp6_RnWyghscfzl3odTcX0YYUucyiRLv9AuoFLIVK6OC31wS54MPXdXBwTPyYMbFQ9sxO5myeXaYj78KCUVCBffmQ3yzF7mnReDvyZA5dotYllc239AoEaKT67qw/ODIAofJv7ZNMzzZhBeCht_iYk2BjAmaT8Xd5cnFnB_Q",
  },
  {
    name: "XEdu",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Latvia", "Lithuania", "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/55/55/1785664800000/KtKIwnZzDkvNKJuraXnsfg/3Ki92vpoegLkpOrb5YYuYkmKZRZRyfP3nx3qK37DEl5xjmi7DughPPH-iAgAHOkJHXN0L_COwya3cii14hOoHLHy2e2gtFKupNTp_uW8uPWIeG6U4Ti_q7oVS2LGX5occ8VBPMWXBnADfl8X7-UnHQ/mA3ebBnz3zg5kd7aidonVlRETiN33lciD1vOXCC1qnM",
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
