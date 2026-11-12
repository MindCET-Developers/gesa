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

Everything is in the **GESAwards 2026** base (`appyTu8uOPQUVXD4x`):

- **Read only:** `Semifinals` (name + 1st/2nd/3rd place) and the `Startup Name` of the linked
  `2026 Registration` rows. The browser receives only startup names, semifinal names and record IDs.
- **New table `Bootcamp 2027 RSVP`:** Startup Name, **Startup** (real link to the `2026 Registration`
  record), Startup record ID, Semifinal, Place, P1/P2 Full name, Role, Email, Phone, Participants,
  First submitted, Last updated, Update count. View: *Registrations by semifinal*.
- Side effect of the link: Airtable automatically added the reverse-link column
  **`Bootcamp 2027 RSVP`** on `2026 Registration`. No existing record or field was edited.

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
| `BOOTCAMP_RSVP_AIRTABLE_TOKEN` | **new**, writes registrations | `data.records:read` + `data.records:write` on GESAwards 2026 only |

Airtable PATs are scoped per base, not per table, so this token can technically write to every
table in GESAwards 2026. The code only ever writes to `Bootcamp 2027 RSVP`, and the token is
server-side only.

Create the new token at https://airtable.com/create/tokens and add it to `.env.local` and Vercel
(Production + Preview).

## Why not a native Airtable form

A native form would also need an "eligible" field or view on `2026 Registration`, and it cannot block a second registration for the same startup,
cannot enforce "all of Participant 2 or none", and cannot update an existing row.
