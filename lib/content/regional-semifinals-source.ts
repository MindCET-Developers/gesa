// lib/content/regional-semifinals-source.ts
//
// GENERATED FILE — do not edit by hand. Regenerate with: npm run refresh:semifinals
// (scripts/pull-regional-semifinals.mjs pulls the GESAwards Airtable base appyTu8uOPQUVXD4x
// and rewrites this file, then re-downloads logos and rebuilds regionalSemifinals.ts.)
//
// Sources:
// - Table "Partners" (tblAfv3rYs6GyXQEF): partner name + linked countries + logo attachment.
// - Table "all countries" (tbl7wFk8g0AbGx7ee): each country's real "Geographic Area".
// Last refreshed: 2026-09-08.

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
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/Wbx-CjBYmKtNYcyrkJY1QQ/LP8irkm6AcggHWuPrvfrR6-seeXUw2azoSwuUcIaAS5fwWHgJFwmDAgo807wqOq91ai6hS3_3AafnFNMX5wXkPt_l8ArpjrbCaRKsC468-EM07xFEMKxrmuR7R7PpTdGGp8ZS-vP8_lHE88AW-gkYbDOfwcCrtSMlDQywV-kdK8/YrGMwDvmwbfq9IZF6l1yraOF83Dag6k5djljdwnrb_A",
  },
  {
    name: "BR Founder Institute/ SchoolGuardian",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/jdJIx6l6TfMCiqytMwoDgQ/1dQHX1tnLDVluF96KccPhxREqfh1NeIavnCSk_i7HUV4VFeklnKPygvkAO_21xL1KOK0sucZWyRZUsVtY0mGkY448fqjLJwG5ZkVyjL_keqrCpJ4ATFK6JtHXc0LCkfrJXVKweKReVbgot3RWLr8PA/I2kLMGAsXE8ijzvBZkCTcHaM8dYg8QkJ0oe7HyWhBJ8",
  },
  {
    name: "DOHE - EdTech HUB",
    countries: [
      "Albania", "Belgium", "Croatia", "Cyprus", "Czech Republic", "Greece", "Hungary",
      "Malta", "Moldova", "Monaco", "Serbia", "Slovenia", "Switzerland", "Turkey", "Ukraine",
      "Andorra", "Belarus", "Bosnia and Herzegovina", "Bulgaria", "Kosovo", "Liechtenstein",
      "Luxembourg", "Macedonia (FYROM)", "Montenegro", "Netherlands", "Poland", "Romania",
      "San Marino", "Slovakia", "France", "Austria", "Germany", "Italy", "Spain",
      "United Kingdom (UK)", "Estonia", "Latvia", "Lithuania",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/3ozA36sRZ6j9Bydoo06rhQ/IivUzfV3gz_0wYK6IF2Ao12rzjjtOHN-yQXTiUW9OihJ120d9WW4-PWxD1p3OlSMrok6Z0M7uONMGqOX2tSAVxpO1ITCr95-v-BUaQwqvPoEr9BY3dByV-I0KJKqhMLbatOR3U-a8cr9psH4a22aL_kUpk0bw6uRjxasohd1XdlXwTgjkjsKIv-hc-yQrnVJ/Ml6jl1fWuTbGKzZ8sscRts7u8ESla7Jn9oM2XiJ8DEQ",
  },
  {
    name: "DOHE - EdTech HUB",
    countries: [
      "Albania", "Belgium", "Croatia", "Cyprus", "Czech Republic", "Greece", "Hungary",
      "Malta", "Moldova", "Monaco", "Serbia", "Slovenia", "Switzerland", "Turkey", "Ukraine",
      "Andorra", "Belarus", "Bosnia and Herzegovina", "Bulgaria", "Kosovo", "Liechtenstein",
      "Luxembourg", "Macedonia (FYROM)", "Montenegro", "Netherlands", "Poland", "Romania",
      "San Marino", "Slovakia", "France", "Austria", "Germany", "Italy", "Spain",
      "United Kingdom (UK)", "Estonia", "Latvia", "Lithuania",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/m-potp8THb9ErQewaGS-tg/pPkZyHvhlbHU0zSoJHYyYCiesx38A3P4LR4I4-Wvy80VI7Xoh7Cb_I0h0-3-9FbUuFHfZU7-1SY1lpP2Q8PTtxvK6arHTJDsvcc2MwQwfWc9qXoM-nIdcVWgLWdMiA1srEAC7X0WOegCSZ5waiCmEcVvEQMORlF7PqmB8TQF8U9Wczm7AdfscxGYqHCwHAk6dZtdwSSe-C5DlHXQyhhFXw/2FHduH0AB4j7B3ibvXtjbOgToYG6KqBfoERwBpPkVbY",
  },
  {
    name: "Dutch EdTech",
    countries: [
      "Netherlands",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/-ph1QaMS_nDIl3Y8qE-O_w/g0CMcezFNtiziZ52Dp-ndj5L2_UTken6xecUFOqWvFqlQVRH_4TndGqRiGDgBnVN66cpVwN6WOzZz8QBfQaqbN0rp3te1rToYDvdDfT56GQC6T71N6XFTJkeIuOxeLdnLH_vl7DRzNlSL3zfQPL6WA/Xl6FEMA9vzjhk36jyrZ7_DF410TdqNfSxdPjNFv7yxM",
  },
  {
    name: "Edcrunch",
    countries: [
      "Russia", "Azerbaijan", "Kazakhstan", "Armenia", "Kyrgyzstan", "Uzbekistan",
      "Tajikistan", "Turkmenistan", "Mongolia", "Georgia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/9Zx-17qsJ98pts37Sclm4g/vyeHfotkacHgMpIkBtsUPFKGEeNr4HFGMQRRLbHJwytJTLzvr0FmiZ1tI5VxnL1YBGLNdGiFmlw1iJmx5ZVI821mcAx8GBmyCqXQ2Z6qWhW2vJWk-f1RcSnYo7LOXmZKgh83by1u7i33MMClsQ2Mug/PAvG-Ub2AFT5B95ikHAWJhSOTTKZlbaxhJB_dPtZRoU",
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
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/OK8asu4BxKCniNUkiaf72Q/UYcpKIg0JKlNC09OUdGtiE8Eh_DfkphF6W6-mkLFfa8XMSnwCVosIPM0DSlr29VZ-Ize_VRusB2oxEvL9462-Vg-kpz-fCeYy_e5sQlAnEYhX4fU9Td8SbIXw3vk1ctPfDU_L5Dhr5u60tfefqcngQ/X7FvqYOVMZ_3ahJrpZ4e4ut1Q7i8IDLGLNVE8GEeAmE",
  },
  {
    name: "EdTech Austria - Innovation Salzburg",
    countries: [
      "Austria",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/kkoCtsGhn043AhJSnrg91g/m-gsrUlEZ50GuKfwxxJNG8UIJh75YasNGtG0DXKZZbnqZJu2HECRfexgAkRmuer2JdkhUSNAUIZz1WrqkiYi8AokwojC-MNX1OyOVZSNjU5OAkUWb8QkRcNidEUQje3gr_Sn4S-4b5lrFbmhJMAI8A/ksv0IYydX1frL_E1w2GwyP4XievRy5MRXm84hzKf2Qs",
  },
  {
    name: "EdTech France",
    countries: [
      "France",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/7QRa2ygWlI7XIYA5obtm7w/2FHOR8OD6JeZfnYzs1GxmymCWQedrekIofcpO9BsOzg2pdOVmv7BVeKcQTUyG-qcdDzstxnk8sRT-d0Fk-Vndph2I1dEzDlzpUPWw3D6WCGVk9xQTW6ocsb2C9hYSBobxhhHHFR58Heg48XPqJ4r-w/YMEHbj4YTuFTpeirBqndjV0fLG-G1_Z3Zh3EhyGg0s8",
  },
  {
    name: "EdTech Italia",
    countries: [
      "Italy",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/xcfQzTCon5aAGrC381TTAw/SVf2UJlCri0IFSQMer6R4X1cpB_Eszwer2tHkDc-Num8XP0zF7-hQMOHFi-AE1PbgCupvK2jEP7CUDOR0H6s0-ljQDIwyt_lFNaNgNPfr87UtHbJW5EUuVlDO99DzeaWae2nYdIvfnrGq059BTCDmA/8ezdzr6ihYkWe_jX0KyXlEE1y4-xuiLchGmr0AhgCjM",
  },
  {
    name: "EdTech Lithuania",
    countries: [
      "Lithuania", "Estonia", "Latvia",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/xJ5PPstdy7Zh8LOWo0BYTQ/6OL9bGa-x1nkSSEC6GLnER2JcACnHmGoyzygtJfGkeKqQ4Y2OIw5DfNJvIuXQLC31Xt4yiFOHMZhgx63bcrz8zo-5EsuoGPMtGNe9ptpiN5fLRZEUZ8974sl9pJq_5Omt8SfCmowPxk2vfzhcWLUeg/cYVhaiysbmvPHzQzE5aipcH-VEQwI37164RIFXNqxqQ",
  },
  {
    name: "EdTech Ukraine",
    countries: [
      "Ukraine",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/3VKzJ0d0pvUZqkPJFKbufw/kyhgNTCxzWGkpdP-gIwDd5sPxZmHCPES1jagWPVxDp8SCMtnAu77XMpGVDMJJ0o5MXoyRB78jIbDUtM3w5hTXmGWEQ3gZkr8PQR9XRLsYjybf9YDbyIhRwr2oEVJLexkz282HIYI72Dnh7S_KZqlG9C45OZX0RTVQMmZLfrehaA/6KfI9VIsOWOF9UQ4FMK0EHWFoRctxeuMwW4Tn-lEZ0M",
  },
  {
    name: "Eduspaze",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Philippines",
      "Thailand", "East Timor", "Vietnam", "Myanmar (formerly Burma)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/BODd-aF2n7bK-u-ZaVGbXg/1NmsTvUFC1kUBxbWmRhb1QTcEjkCYIRv51tqSjUnlOGIy5vyVw5efk-FEtTsyaWO7dR4DKYVBSGI3fqfaDzASPCbj2hbKrIykqjD2ZD71yu_dVcfGJnRKW7hc79hw7w6Ilh-QbVF-HuF1UzWJpVflA/rmdR3rLdSf8J6v8c6DrGcFmYLhXDrmRtCLBf7YuNqMY",
  },
  {
    name: "EduTech Cluster",
    countries: [
      "Portugal", "Spain",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/mcxGBkHy7o-W3V_fy1AjWA/29bGMsS4XN5bYRyOE9T2HZHG9pbxbKkEYlpnJx9t4QYMFsFMoSolPdXu3QkwA30feQsCWfAqrBSDQg0jtqze5Yy9WBSwl5g8Nu-YfUSOkCzzPu4qMtwz2JiGy6Gi38Z6qwBK8XD3I6J0q9TcBGQ-LIwUnnvjKQxlGT0SS2o1F8g/s9bRk5soKNmeAouqfxWgFOi28YKO5yCvkoYXvAwcMOY",
  },
  {
    name: "Eduvation",
    countries: [
      "Germany",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/pzf96MY_RxLK_LxiWvgzsw/Tx0GIsoaYQtz4qN69vR5yvCrFAlPs_mlnF9FfpAoYCLQFpqwk29hxBtr7eR7u5odgjdUp5Tt5rtYpMB7k5HU_VO3kOtqYjXjbCiH1C_wd3zxPhs44h0FL0W3Biu5vqB4whc9Bls1hIBNA-A6gVq29dYRkl3J8pMAHjW9YQfj2HM/j4KnqzaCe3x62W9GXD2AHwmgU3e4ZkvoZoLQv2gvuxQ",
  },
  {
    name: "Esperanza Life",
    countries: [
      "Hong Kong", "China",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/z13zfAbY-CKgwZngiq1bag/p2LSFKCHLGYAgBrJcoS0vBR72dwaTG0X0ORIboY0MTg-7Oyc9s4EGqEqPu9ppXGSJBpGo40oI7AhNaJKXn7xT3XczlxKBp5JPDq6xNdj0Fnf8JAqWnXdrxDBwvaJC9N7BOJvCBtt9G-haqmFqovKpA/q9MZLAxOmOB_yrfwyqYbPokLbVW0yvbebdXh5g1Q--0",
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
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/m-fgCQxRL-os5Ui1cOlK8Q/02L7BvwxDg_cEnmyYsiRz5bPg7TOv9_2CDg27KiXq9fzWOUSIN_LwGX6KSxMDuyfvb1IaqxIvmmGkTsLYWatFi3_LHS0adsr0xNBKPAjMz6uM5xNcAueXmiqmCtOxDuQhwhZK0kIABiRDNhF9GaHsA/09bT67GkUaa8yQeAHugrtOSy82wCE5qQdvlBRm7qaa4",
  },
  {
    name: "HiEdu",
    countries: [
      "Taiwan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/2L_4WnNNlQgoPMWZiic1GQ/KKlYZV94pxJ_ke6eRzM3JhoFKMOu0u6aYFAuqAcsnMxDpta6G1vYTArb06Pt887jOH-tw5MmnBTWFad2tMFnXillFXbb0hginz1PvgBUX6rEkpBJRAZfV8gUMDxSoq5-BphUnX3KVvG3xvv6JAy4v4K9RkHrtMxf0zOvcImXpchLa0VhvVb4bP4M2lf5m_tZ/Idvu2odzq_EwuWU0GikZiY58UGIfro1224dDxJ12GEw",
  },
  {
    name: "Ingenious Faces",
    countries: [
      "India",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/pCHz7nvs41wWzaRVwqJ-dw/4gJdQshodPMeWM2cnkP1c7gAUEINcXUtEJayqs7VOOF6WHGyss1PHVJEXvWHBICp8F83n_jdoBgJ7surSOJq32Iq27kwaMUOU8GMHToLEKzjDSBgS_KKjgo2IUxfB7InBN68h4ObFkLxQzkiIkUMOQ/RlIwZ4WcU_wISaslds2hjlexgVpCU9sRCiOwt4tRAo4",
  },
  {
    name: "Learning Spark",
    countries: [
      "South Korea", "North Korea",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/-P2hzXrF9cWw7EXaC8slNw/jmFEXm1jsWrv0ImwS94JyrU2uAU5VQe2VD5dPmz3USvbakuaRsr_-gE5MIYrtg4VjeQgst6AWoX_KU2Kp3kekgjtR_ofDw8H_fsJeJdg21eBJYTA9wfGbgXdN2ABZalXnYN994pLDCCOrSSP6J6hXg/JJwiDwbuJpZ8zot6NUjvFc69rbxyXe3zDPk5Lwgku6E",
  },
  {
    name: "Learnlaunch",
    countries: [
      "USA - Alabama", "USA - Arkansas", "USA - Illinois", "USA - New Jersey",
      "USA - Pennsylvania", "USA - Washington D.C", "Canada", "USA - Virginia",
      "USA - New York", "USA - Florida", "USA - Connecticut", "USA - West Virginia",
      "USA - North Carolina", "USA - Michigan", "USA - Minnesota", "USA - Rhode Island",
      "USA - Mississippi", "USA - Maine", "USA - Tennessee", "USA - Ohio", "USA - Louisiana",
      "USA - Vermont", "USA - Kentucky", "USA - Wisconsin", "USA - Maryland", "USA - Iowa",
      "USA - Georgia", "USA - South Carolina", "USA - Indiana", "USA - New Hampshire",
      "USA - Massachusetts", "USA - Missouri", "USA - Delaware", "USA - Nebraska",
      "USA - New Mexico", "USA - North Dakota", "USA - Hawaii", "USA - Kansas",
      "USA - Arizona", "USA - Wyoming", "USA - Nevada", "USA - Idaho", "USA - Oregon",
      "USA - Utah", "USA - South Dakota", "USA - California", "USA - Texas", "USA - Colorado",
      "USA - Oklahoma", "USA - Montana", "USA - Alaska", "USA - Washington",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/nJswsXpJ3-_LAqzGrOPz_Q/fZnVKFlrO-gJa4UUEFy7S46wOPnulb-k5rL77nImhgHX-62-Wp60m1dZaHW-frtEfEpqMkPq1tLIMB-Jha6Mny1NU1bY_3Z5lkM66uUvtegCneWglbYqUDW2UOi3-BFXBZI2sbQXaSK6A0x1qxyADgC0w9He_TMeR4fvgV9pGqo/UIfw8Ihs8r9zOqa8lYdaHh3Rafe6G9HM7jCmnQxk7OE",
  },
  {
    name: "METI Japan",
    countries: [
      "Japan",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/kay-3Ksft8Ps01XbE5N3Fw/PCRG5BBtVESJfNNBKKe7jUqxYzQVLkOoj2tKJg9axyK5IcUQZaqzTZBg8O3VHEH2R8oFvy3etRbDnkY6LFRY6VdB_kATXFk8_cqdSgthJQgOrn0hfAHbcKU1G95F-V5YhZukORTmPUB1rdyIb9wI0A/rCKrTtNOa9Xwh3hrNqWgjhNPnqyUczOlkKxR4qE-zO0",
  },
  {
    name: "Mindcet Labs",
    countries: [
      "Israel",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/aIvBd24NW1O3T6_HAUHUyQ/2tRvF4xqbwn3VVb6fTtjftZJOQsSSqO7CR24mA-0zTE7fqYXNy7SPMhdq3F7YXbp2VuZ4KplqiIfyWVbsuN2RA-aYcqeyDNifS8KSyPuPi-tAqmZMK9c-ZkAAbzdTYqFgPk-2gbVEqFQWZLNqsmHYw/-pq7ySl5rt_WBaWfIDH5I1EQsxIdGaf9TLJsY3vEPUI",
  },
  {
    name: "Nordic",
    countries: [
      "Denmark", "Sweden", "Estonia", "Finland", "Iceland", "Norway",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/zkpRDmlVvrEG75Ovdo7bRw/TKoQMJOvs7WcYEBMgND9pPEyOa6q8bXG0u5woD1-WTC0GctCCD_ns5pj7D8dXXhmtYBpqDmFHAUVxpmc970pWjhRdcI9qiOnctolDMgftO5rNxmCjk0ib41wqyNDSOaXwvy2eCsHq82IaZybOzsPIg/JEF1PHfnS4R1LXhjOhctLbdB5OXiPpy4i1pyO6aekhA",
  },
  {
    name: "Positivo",
    countries: [
      "Brazil",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/MTJtpfqFP4oPg97yio2cNw/_d6Zs9lyBchVOABbXroPzqfbnBAE9KGOvkBh02YdA1af0UzzWMzxFfiN9jqL6obJ52BaG-1VstCLn4VsukmbGggAqGJabfPIGNpTzDxuZ0CbWH7h-kXtioExo1jbhi-hX3mLLFppJoTfcPI2ixS3TQ/pvFypatNX51HQOrdhwVZFFfAabkJPKvER2bvmaz2_Mw",
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
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/hMJvyy6mBc6swTW5Zt0-VA/9SiLzfLLfOgxia5kI9NTRtQb-CSx0HI5f_6A6Ylr4mZtHSnLRkGXabEbTCrT_-uGcsKyDYxlEedqS1I6ZypLSq0ct6NdmgtGf33zdN3mdbF9U7KtmRZjviQtK2pWqal2vjkSwqnD3vjQDBd4JCjjew/_vN1Nni4SQ-wilXZaW-CRtUe_FMahbBMjOjNGlGj5hw",
  },
  {
    name: "StartEdAccelerator",
    countries: [
      "USA - Alaska", "USA - Arizona", "USA - California", "USA - Colorado", "USA - Montana",
      "USA - Wyoming",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/GO5EgW3sDdrMldSZcPpteg/2vUj7sk4AW43lFoBEloGwBvdQaKdpx9PlgZmquI5kSUVnMQYvmzmlmbqNZB4OrEVzzNFxqWxeMAm60TXdYs-cD_YXApT_qWRq8pOlfZxhY4O627lU1VaEtaagcbZoG_mpnNBAWtBkANqOU2Owy39MQ/2QBF-RX4a-pddIkTaZ19z9rPXaX7kAKn8yH2lEpiXY0",
  },
  {
    name: "Startup Braga",
    countries: [
      "Portugal",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/pS66tYxKLgOwrHYykA2y1g/mRJlzRbVKaUp7_hmSwCRnjnlDFSCxJ9YGWWD_BI3NX43rXVfU9Jpdns0oD6NvKBAvfVEedtC-eoQ9pLsFws0PAdyQ99OBVKYFWHA8cranCruQhnPX5htPR7_3z7nWg15KXJF29DIuvqu-69xep7Qhg/t3Wx85f_rVQZpov5lINv5dRgekm1X_pb8p_zGLjDaXM",
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
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/rbW0EdrfBqSYHgoebvXrqw/KnJ1fM2IsPzUZCidUYVb00R-bqDxvNxzvaspY2APm8O-Cff4Zxfojm0GqW_EBaM8mwBUjXVo7xzEazg7o8qM0fv-615eM2Vu0t5k2O64LyhxCtM60zgsdN91ChZI2QAZRu6xsgfTZ5i0RHCtwG8_SfWSzS3mkvXnc-I2_9fLdRw/iKqJGIAY5Fp6e5uxNfQMaTBVcBMSxlg8rYicIyZ3krg",
  },
  {
    name: "Tyme Education",
    countries: [
      "Australia", "Bangladesh", "Iraq", "Jordan", "Kuwait", "Lebanon", "Nepal", "Pakistan",
      "Papua New Guinea", "Saudi Arabia", "United Arab Emirates (UAE)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/IT05qAC6I8E9hDAmj4c3jw/N4ngn1j2KCXwWaHQGnM_vMY3WkXkimvz2CsE1D-UYbVa7XEX_SR4fPpz7NfL40rBWUvBSep6CCoXqMcrTr6DuPEhD8c3lEmsoBwM1v90w-edtWmkoqt3-LSWKuYJ4Sy2XGFOEOplKdynhvNZrxaBVdRZyOUN9k-iBNRktrQ89hw/1oB8h9xOP_TTPqSGwTPFgH9ueTmzuXcPOIGKsNXKn4Y",
  },
  {
    name: "UCL EdTech Labs",
    countries: [
      "United Kingdom (UK)",
    ],
    logoUrl:
      "https://v5.airtableusercontent.com/v3/u/57/57/1788861600000/h_6Ec8OCP4lP1NGIojMRCg/BAjsx6sCkySFHUuJ1yWaXcXwatd7xV0JbWtpmW_St3ra8olRtZHmI5b_no-ftLfARcqE7HJIUbbE5YFwvHlx84kv3dXg3_IvQv1ZkJP09wcz_TltiHMecU5AAmC6mxXE0pMi1N77Mz_vTHPZYFSTqg/ThvPbgTZfUgXkOYl4a_hsEXBjx-YoGDvsnhFHAJaGP0",
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
