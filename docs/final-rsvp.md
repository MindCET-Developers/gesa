# Grand Final 2027 details form: setup & handover

**Form URL (shared, one for everyone):** `https://www.gesawards.io/final/register`.
Sent manually by the GESAwards team to the Grand Finalists. Not linked on the site, not in
the sitemap, `noindex`, and blocked in robots.txt.

## Why a separate form from the Bootcamp registration

Some Bootcamp startups are not Grand Finalists, and some Grand Finalists present online and
never come to London, so they are not in the Bootcamp either. The two forms, their eligibility
lists and their Airtable tables are therefore fully separate.

## What it collects

1. **Judging panel** (during the Bootcamp, end of day 1 or day 2, Jan 18–19, from about 16:00
   London time; hybrid on Zoom, so startups at the venue also present on Zoom; the team tells
   each startup its day later):
   - *During the judging, will you be in London?* → `Judging – Location`
   - Who presents to the judges: name, role, email, phone → `Judging presenter – …`
2. **Grand Final** (Jan 21, panels with the finalists, screening of edited videos, announcement
   of the winners decided beforehand):
   - *Will someone be on stage?* Yes, the judging presenter / Yes, someone else / No →
     `Final stage` (Yes/No), `Final stage – Same as judging presenter`, and the person's
     details in `Final stage – Full name / Role / Email / Phone` (copied from the judging
     presenter when it's the same person).
3. **Main contact:** the judging presenter by default, or a different person.
4. **Pitch video:** up to one minute, video only, up to 500 MB. The browser reads the length
   before uploading and refuses anything over 61 seconds; the length is stored in
   `Pitch video – Length (s)` (empty if the browser couldn't read it, so check those by hand).
   Required on the first submission; on a correction it can be left empty to keep the stored video.

## Eligibility

Eligible = the `Applications` linked to the **GESA Journey** milestone
**"2026 – Global – Finalist"** (`recJpD2mp1gPvLR8x`) in the GESAwards 2026 base. To add or
remove a finalist, link or unlink their `2026 Registration` record on that milestone. The list
is read live on every page load, every upload and every submission.

## Data

Base **GESAwards 2026** (`appyTu8uOPQUVXD4x`), new table **`Grand Final 2027`**
(`tblOFUmNAiLMmpqsO`), one row per startup:
Startup Name, Startup (link to `2026 Registration`), Judging – Location, Judging presenter –
Full name / Role / Email, Presenter – Phone, Final stage, Final stage – Same as judging presenter,
Final stage – Full name / Role / Email / Phone, Contact is judging presenter, Contact – Full name /
Role / Email / Phone (filled with the presenter's details when the checkbox is on), Pitch video
(attachment), Pitch video URL, Pitch video – Length (s), First submitted, Last updated, Update count.

`UNUSED – Attendance (delete me)` is the old single attendance question; no code writes to it.

Side effect of the link: Airtable added a reverse-link column `Grand Final 2027` on
`2026 Registration`.

> The six `Final – …` columns that were added earlier to `Bootcamp 2027 RSVP` (from the
> single-form plan) are **not used** by any code. Delete them manually in Airtable.

## Video upload flow

1. The browser asks `/api/final/video-upload` for a one-hour upload token. The route only
   issues one for a current Grand Finalist, for `video/*` files up to 500 MB, under
   `final-2027/<recordId>/` with a random suffix.
2. The browser uploads straight to Vercel Blob (public store **bootcamp-videos**), with a
   progress bar. Server actions can't take files this large.
3. On submit, the server checks that the URL belongs to that store and that startup's folder,
   then writes it to Airtable as an attachment. Airtable copies the file; the Blob URL is also
   kept in `Pitch video URL`.

## Duplicates & corrections

Same rules as the Bootcamp form: one row per startup. Submitting again with the **same main
contact email** updates the row; a different email is refused and the team fixes it in Airtable.
There is no identity check: anyone with the link can pick any finalist, so review the rows.

## Environment variables

| Variable | Purpose |
|---|---|
| `AIRTABLE_API_KEY` | existing. Reads the finalist list |
| `FINAL_RSVP_AIRTABLE_TOKEN` | optional. Writes the rows. Falls back to `BOOTCAMP_RSVP_AIRTABLE_TOKEN` (already set in Vercel, same base scope) |
| `BLOB_READ_WRITE_TOKEN` | already set in Vercel by the `bootcamp-videos` Blob store |
