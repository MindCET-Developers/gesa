# מדריך קמפיין גוגל ומעקב — gesawards.io

מטרה: שכל מי שמחפש **gesa / global edtech startup awards / edtech startup competition** יגיע ל-gesawards.io — ושנדע למדוד את זה.

**סדר עדיפויות (מהחינמי לחזק ביותר → למשלם):**

1. 🆓 **העברה אורגנית מהדומיין הישן** — המהלך החשוב ביותר, בחינם (שלב א').
2. 🆓 **Google Ad Grants** — עד $10,000/חודש פרסום חינם לארגונים ללא מטרות רווח (שלב ב').
3. 💰 **קמפיין בתשלום** — רק אם רוצים להאיץ או שה-Grants לא מתאים (שלב ג').

בכל התרחישים, תשתית המדידה בקוד כבר מוכנה (ראו "מה הוכן בקוד" בסוף).

---

## שלב א' — העברת התנועה האורגנית (חינם, לעשות מיד)

היום גוגל עדיין מדרג את `globaledtechawards.org`. בלי העברה מסודרת, מי שמחפש "gesa awards" ימשיך להגיע לאתר הישן או לדף מת. ההעברה מורכבת מ-4 צעדים:

### 1. הפניות 301 מהאתר הישן (ב-Wix)

יש לכם גישה ל-Wix (לא לדומיין עצמו) — זה מספיק כל עוד הדומיין ממשיך להצביע על Wix:

1. ב-Wix: **Settings → SEO → URL Redirect Manager**.
2. להוסיף הפניות מכל עמוד באתר הישן לעמוד המקביל ב-gesawards.io (Wix תומך בהפניה לדומיין חיצוני). לפחות:
   - `/` → `https://www.gesawards.io/`
   - `/about` (או המקבילה) → `https://www.gesawards.io/about`
   - עמודי זוכים (`/2023-winners` וכו') → `https://www.gesawards.io/winners/2023` וכו'
   - עמודי tracks → `https://www.gesawards.io/tracks/...`
   - ⚠️ אם Wix לא מאפשר להפנות את דף הבית עצמו — לרוקן אותו ולהשאיר רק הודעה + קישור בולט ותגית `canonical` לאתר החדש, ולהפנות את כל שאר העמודים.
3. **לא לסגור את חשבון ה-Wix ולא לתת לדומיין לפוג לפחות 12 חודשים** — ההפניות חייבות להישאר חיות כדי שגוגל יעביר את ה"סמכות" (link equity).

> ⚠️ **סיכון שצריך לטפל בו:** הדומיין `globaledtechawards.org` לא בשליטתכם. לברר מי מחזיק בו (מי משלם על החידוש), ולוודא שהוא לא יפוג. אם הדומיין ייפול — כל ההפניות והדירוג הישן נעלמים. אידיאלית: להעביר את ניהול הדומיין אליכם, ואז אפשר גם להפנות אותו ישירות ל-Vercel (הקוד כבר כולל הפניית 301 מוכנה לכל הנתיבים).

### 2. אימות שני האתרים ב-Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) — להתחבר עם חשבון הארגון.
2. להוסיף Property לאתר **הישן**: אימות באמצעות תגית HTML — ב-Wix: **Settings → SEO → Verify your site** (מדביקים את ה-meta tag של גוגל).
3. להוסיף Property לאתר **החדש** `https://www.gesawards.io` — ב-Vercel הכי פשוט לאמת דרך רשומת DNS או תגית HTML.
4. באתר החדש: **Sitemaps → להגיש** `https://www.gesawards.io/sitemap.xml` (כבר מצביע נכון אחרי התיקון בקוד).

### 3. Change of Address

אחרי שההפניות מ-Wix פעילות ושני האתרים מאומתים:

- ב-Search Console של האתר **הישן**: **Settings → Change of Address** → לבחור את gesawards.io.
- גוגל יעביר את הדירוג לאתר החדש בהדרגה (בדרך כלל 2–12 שבועות). חיפושי מותג ("gesa awards") עוברים ראשונים.

### 4. עדכון כל הנכסים החיצוniyim

להחליף את הקישור הישן בכל מקום שבשליטתכם — זה גם SEO וגם מונע אובדן תנועה:

- פרופילי LinkedIn / Facebook / YouTube של GESA
- חתימות מייל, ניוזלטרים, עמודי שותפים (semifinals hosts!)
- ויקיפדיה/Crunchbase אם קיימים, ואתרי MindCET/CET שמקשרים לתחרות
- לבקש מהשותפים האזוריים לעדכן את הקישורים באתרים שלהם — קישורים נכנסים לדומיין החדש מאיצים את ההעברה יותר מכל דבר אחר.

---

## שלב ב' — Google Ad Grants (פרסום חינם, אם יש זכאות)

אם GESA פועל תחת ארגון ללא מטרות רווח (מלכ"ר/עמותה רשומה — למשל המרכז לטכנולוגיה חינוכית), כנראה שמגיע לכם **$10,000 לחודש** בפרסום חיפוש חינם:

1. להירשם ל-[Google for Nonprofits](https://www.google.com/nonprofits/) (בישראל הזכאות נבדקת דרך Percent; דרוש מספר עמותה/חל"צ).
2. אחרי האישור: להפעיל **Google Ad Grants** מתוך חשבון ה-Nonprofits ולעבור את תהליך ה-activation.
3. מגבלות חשובות של Grants:
   - מודעות חיפוש בלבד (לא Display/YouTube).
   - CPC מוגבל ל-$2 בהצעת מחיר ידנית — לכן משתמשים באסטרטגיית **Maximize Conversions** (עוקפת את התקרה). זו עוד סיבה שאירועי ההמרה שהוכנו בקוד קריטיים.
   - חובה לשמור על CTR של 5% ומעלה, מילות מפתח באיכות סבירה (לא מילה בודדת גנרית), וחשבון פעיל.
4. מבנה הקמפיין — זהה לשלב ג' למטה.

---

## שלב ג' — קמפיין חיפוש (Grants או בתשלום)

### מבנה מומלץ

**קמפיין 1 — Brand (הגנה על המותג):** תקציב קטן, החזר עצום. תופס את מי שכבר מחפש אתכם ומגיע היום לאתר הישן/למתחרים.

- מילות מפתח (Exact + Phrase):
  - `[gesa]`, `[gesa awards]`, `[gesawards]`
  - `[global edtech startup awards]`, `[global edtech startups awards]`
  - `[global edtech awards]`, `"edtech startup awards"`
- עמוד נחיתה: `https://www.gesawards.io/`

**קמפיין 2 — Category (ביקוש גנרי):** תופס מחפשים שלא מכירים אתכם.

- Ad Group A — תחרות: `"edtech startup competition"`, `"edtech competition"`, `"education startup competition"` → נחיתה: `/apply`
- Ad Group B — פרסים: `"edtech awards"`, `"edtech startup award"`, `"education technology awards"` → נחיתה: `/`
- Ad Group C — לפי track (אופציונלי): מילות מפתח לפי נושא (AI in education, workforce skills…) → נחיתה: `/tracks/[slug]`

### הגדרות קמפיין

- **גיאוגרפיה:** עולמי (או לפי אזורי הסמיפיינל), **שפה:** אנגלית.
- **Networks:** Search בלבד — לכבות Display Network ו-Search Partners בהתחלה.
- **Negative keywords:** `jobs`, `salary`, `course`, `degree`, `certification`, `mba`, `teacher training` — כל מה שמנפח קליקים לא רלוונטיים.
- **Sitelinks:** Apply, Tracks, Winners, Semifinals. **Callouts:** "9,000+ startups", "155 countries", "Free to apply".
- **טקסט מודעה לדוגמה:**
  - H: `Global EdTech Startup Awards` / `The World's Largest EdTech Competition` / `Apply for the 2026 Edition`
  - D: `Join 9,000+ startups from 155 countries. Pitch on the global EdTech stage — applications are open.`
- **Bidding:** להתחיל Maximize Clicks (שבועיים לאיסוף דאטה) → לעבור Maximize Conversions ברגע שיש ~15–30 המרות (`apply_form_open`/`apply_submitted`).

---

## חיבור המדידה (חד-פעמי, ~חצי שעה)

### 1. Airtable — מדידת ההגשה האמיתית

בטופס ה-Airtable (form settings): להפעיל **"Redirect to URL after the form is submitted"** ולכוון ל:
`https://www.gesawards.io/apply/thank-you`
עמוד התודה כבר קיים בקוד, יורה אירוע `apply_submitted`, לא נכנס לאינדקס, ויודע "לפרוץ" מה-iframe.

### 2. Vercel — משתני סביבה

ב-Vercel (Project → Settings → Environment Variables), ואז **Redeploy** (הערכים נאפים בזמן build):

| משתנה | ערך |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.gesawards.io` |
| `NEXT_PUBLIC_GA_ID` | `G-4JBT3Y2KMR` |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | `AW-XXXXXXXXXX` (מתוך Ads → Tools → Data manager → Google tag) |

### 3. GA4 — סימון האירועים כהמרות

ב-GA4 (Admin → Events): אחרי שהאירועים מופיעים (24–48 שעות מהדיפלוי), לסמן כ-**Key events**:

| אירוע | משמעות |
|---|---|
| `apply_submitted` | ⭐ הגשת מועמדות בפועל (ההמרה הראשית) |
| `apply_form_open` | פתיחת טופס ההגשה |
| `apply_engaged` | שהייה של 15 שניות ומעלה בעמוד ההגשה |
| `newsletter_signup` | הרשמה לניוזלטר |

### 4. קישור GA4 ↔ Google Ads וייבוא ההמרות

1. GA4: **Admin → Product links → Google Ads Links** → לקשר את החשבון.
2. Google Ads: **Goals → Conversions → New conversion action → Import → GA4** → לייבא את `apply_submitted` (Primary) ואת `apply_form_open` (Secondary).
3. ב-Google Ads לוודא ש-**Consent mode** מזוהה (Data manager → diagnostics) — הקוד כבר משדר Consent Mode v2.

---

## איך עוקבים — שגרת מעקב

### דשבורדים

- **GA4 → Reports → Acquisition → Traffic acquisition:** כמה תנועה מגיעה מ-`google / organic` ומ-`google / cpc`, וכמה מהם מסיימים ב-Key events.
- **GA4 → Advertising:** ביצועי ההמרות לפי ערוץ.
- **Search Console (שני ה-Properties):** בישן — Impressions/Clicks אמורים **לרדת** בהדרגה; בחדש — **לעלות**. לחפש את השאילתות "gesa", "global edtech startup awards" ולוודא שהאתר החדש מחליף את הישן בתוצאות.
- **Google Ads → Campaigns:** CTR (יעד: 5%+ ב-brand, 2%+ ב-category), CPC, Conversions, Search impression share.

### צ'קליסט שבועי (5 דקות)

- [ ] Search Console חדש: impressions במגמת עלייה? שאילתות מותג מגיעות לאתר החדש?
- [ ] GA4: יש `apply_submitted` השבוע? מאיזה ערוץ?
- [ ] Ads: יש מילות חיפוש לא רלוונטיות בדוח Search terms? → להוסיף כ-negative.
- [ ] הדומיין הישן עדיין חי ומפנה? (לגלוש ל-globaledtechawards.org ולוודא הפניה)

### UTM לערוצים אחרים

כדי שגם ניוזלטר/סושיאל יימדדו נכון, לכל קישור שמפרסמים מחוץ לגוגל להוסיף פרמטרים, למשל:
`https://www.gesawards.io/apply?utm_source=linkedin&utm_medium=social&utm_campaign=apply2026`

---

## מה הוכן בקוד (רפרנס)

- **Consent Mode v2 + תג Google Ads:** `components/analytics/GtagInit.tsx` — ברירת מחדל של consent לפני טעינת גוגל, `url_passthrough` לשימור מזהה הקליק (gclid) גם בלי הסכמה, ותג `AW-` שנטען רק כש-`NEXT_PUBLIC_GOOGLE_ADS_ID` מוגדר. באנר הקוקיז מעניק עכשיו גם הסכמת פרסום ב-Accept.
- **אירועי המרה:** `lib/analytics.ts` + `components/apply/*` + עמוד `/apply/thank-you`.
- **SEO:** `sitemap.xml` ו-`robots.txt` תוקנו לדומיין החדש; JSON-LD של Organization (layout) ו-Event (דף הבית — להוסיף תאריכים כשיהיו); הפניית 301 ברמת host מוכנה ב-`next.config.ts` ליום שבו הדומיין הישן יופנה ל-Vercel.

### ⚠️ משימת תוכן פתוחה

עמוד **Privacy Policy** צריך פסקה על שימוש בקוקיז של פרסום/המרות (Google Ads) בנוסף לאנליטיקס — לעדכן לפני הפעלת קמפיין.
