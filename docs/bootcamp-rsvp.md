# Bootcamp 2027 registration: setup & handover

**Form URL (shared, one for everyone):** `https://www.gesawards.io/bootcamp/register`.
It is distributed manually by the GESAwards team to semifinal partners, who pass it to their
startups. It is **not** linked anywhere on the site, not in the sitemap, `noindex`, and blocked in robots.txt.

## ⚠️ Limitation: no identity verification

Because the form is shared and has no accounts or personal links, **selecting a startup does
not prove the person represents that startup.** Anyone who has the URL can register any
eligible startup. Mitigations:

- Only eligible startups can be selected, and the server re-checks this on every submission.
- A startup can be registered only once. A second submission with a **different** Participant 1
  email is rejected and the existing record is not changed.
- The team should review registrations (see view below) before sending logistics. Compare the
  Participant 1 email domain with the startup's `Email` in `2026 Registration`
  (column *Original startup record* opens it).

## Eligibility

Eligible = any startup linked in `1st place`, `2nd place` or `3rd place` of a record in
**GESAwards 2026 › Semifinals**. `People's Choice` alone does **not** qualify. The list is read
live on every page load and every submission, so a winner recorded in Airtable appears
immediately. Startups listed in two semifinals appear once.

## Data

- Historical base **GESAwards 2026** (`appyTu8uOPQUVXD4x`): **read only, unchanged**. The site
  reads only the Semifinals name + place fields and the `Startup Name` of the linked
  `2026 Registration` rows. The browser receives only startup names, semifinal names and record IDs.
- New base **GESAwards Bootcamp 2027 RSVP** (`appkgKBfdmjHBG8JR`), table **Bootcamp 2027 RSVP**:
  Startup, Startup record ID, Original startup record (link), Semifinal, Place,
  P1/P2 Full name, Role, Email, Phone, Participants, First submitted, Last updated, Update count.
  View: *Registrations by semifinal*.
- **Link to the original record:** Airtable cannot link records across bases. The row stores the
  original `2026 Registration` record ID plus a clickable URL. (A true linked-record field would
  have required adding a table and a reverse-link column inside the historical base.)

## Duplicates & corrections

- One row per startup (keyed on the original record ID).
- **Correction:** submit the form again for the same startup **with the same Participant 1 email**.
  The row is updated in place (`Update count` increases).
- To change Participant 1's email, or if the startup lost access, the team edits the row in Airtable.

## Validation

All Participant 1 fields required. Participant 2 is optional, but if any of its fields is filled,
all four are required. Maximum two participants. Email format, phone 7–20 digits (international
format allowed), Participant 2 email must differ from Participant 1. Server-side validation;
honeypot field against bots.

## Environment variables

| Variable | Purpose | Scope |
|---|---|---|
| `AIRTABLE_API_KEY` | already exists (semifinals pages). Reads eligibility | `data.records:read` on GESAwards 2026 |
| `BOOTCAMP_RSVP_AIRTABLE_TOKEN` | **new**, writes registrations | `data.records:read` + `data.records:write`, base *GESAwards Bootcamp 2027 RSVP* only |
| `BOOTCAMP_RSVP_BASE_ID` | optional, defaults to `appkgKBfdmjHBG8JR` | |

Create the new token at https://airtable.com/create/tokens and add it to `.env.local` and Vercel
(Production + Preview).

## Why not a native Airtable form

A native form would need the RSVP table inside the historical base plus an "eligible" field/view
on `2026 Registration`. It also cannot block a second registration for the same startup,
cannot enforce "all of Participant 2 or none", and cannot update an existing row.
