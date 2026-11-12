# Bootcamp 2027 RSVP — setup & handover

## How it works

- **Airtable base:** `GESAwards Bootcamp 2027 RSVP` (`appkgKBfdmjHBG8JR`), workspace *London bootcamp*.
  It's a separate base, so the historical GESAwards databases are never touched and the
  website's token can be limited to this base only.
  - `Bootcamp 2027 RSVP`: one row per **invited** startup (Startup, Invitee email, Token,
    Invitation sent, Attending, Representative name/email, Country / region,
    Number of attendees, Comments, Last submitted, Submission count, plus the formulas
    **RSVP link** and **Status**, and the rollup **Dietary summary**).
  - `Bootcamp 2027 Attendees`: one row per person (Full name, Email, Dietary requirements),
    linked to the startup row.
  - Views: *Invitations by status* (grouped: Yes / No / Not sure yet / No reply yet /
    Not invited yet, with counts) and *Attendees by startup*.
- **Website:** `/bootcamp/rsvp/<token>` (not indexed, not in the sitemap, blocked in robots.txt).
  The server looks up the token. Unknown tokens see "This RSVP link is not valid".
  When a startup submits again, its existing row is updated and its attendee list is
  replaced, so no duplicate records are created.

## One-time setup (developer)

1. Create a Personal Access Token at https://airtable.com/create/tokens
   - Scopes: `data.records:read`, `data.records:write` (nothing else)
   - Access: **only** the base `GESAwards Bootcamp 2027 RSVP`
2. Add it to `.env.local` and to Vercel (Production + Preview):
   ```
   BOOTCAMP_RSVP_AIRTABLE_TOKEN=pat...
   BOOTCAMP_RSVP_BASE_ID=appkgKBfdmjHBG8JR   # optional, this is the default
   ```
3. Delete the test row `TEST — Sample Startup (delete before launch)` and its attendees before launch.

## How Cecilia sends invitations

1. In the *Invitations by status* view, add one row per **eligible** startup: `Startup` and `Invitee email`.
2. A developer runs `npm run bootcamp:tokens` to generate a secret token for every new row
   (existing tokens never change). The **RSVP link** column then shows the personal link.
3. Copy the startup's **RSVP link** into its email and tick **Invitation sent**.
4. Track replies in the *Invitations by status* view. The group headers show how many startups
   are in each status, and *No reply yet* lists the startups to chase. The **Number of attendees**
   column can be summed in the footer, **Dietary summary** shows dietary needs per startup, and
   *Attendees by startup* has the full list of people.

Each link only opens and edits its own startup's RSVP. A startup can reopen its link to change
its answer. Don't forward a link to a different startup. To cancel a link, clear or replace its Token.

## Limits / notes

- Up to 5 attendees per startup (`lib/bootcamp-rsvp/constants.ts`).
- Tokens are 24 random bytes (base64url), so they can't be guessed.
- No emails are sent automatically. Cecilia sends the invitations herself.
