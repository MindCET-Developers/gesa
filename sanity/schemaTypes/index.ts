/* ----------------------------------------------------------------------------
   Sanity schema definitions for the GESAwards site.

   These are plain schema objects (no `sanity` import) so the Next.js build stays
   green before the CMS runtime is installed. When you run `sanity init`, register
   them in sanity.config.ts:

     import { schemaTypes } from "./sanity/schemaTypes";
     export default defineConfig({ ...rest, schema: { types: schemaTypes } });

   Each type mirrors a content shape in lib/content/types.ts. See docs/CMS-SETUP.md
   for the full activation guide (Studio route, env vars, switching the content
   layer from seed data to GROQ).
---------------------------------------------------------------------------- */

const navItem = {
  name: "navItem",
  title: "Navigation item",
  type: "object",
  fields: [
    { name: "label", title: "Label", type: "string" },
    { name: "href", title: "Path", type: "string" },
  ],
};

const stat = {
  name: "stat",
  title: "Statistic",
  type: "object",
  fields: [
    { name: "value", title: "Value", type: "string" },
    { name: "label", title: "Label", type: "string" },
  ],
};

const criterion = {
  name: "criterion",
  title: "Criterion",
  type: "object",
  fields: [
    { name: "index", title: "Number", type: "number" },
    { name: "title", title: "Title", type: "string" },
  ],
};

const timelineEvent = {
  name: "timelineEvent",
  title: "Timeline event",
  type: "object",
  fields: [
    { name: "date", title: "Date label", type: "string" },
    { name: "label", title: "Description", type: "string" },
  ],
};

const siteSettings = {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    { name: "siteName", title: "Site name", type: "string" },
    { name: "tagline", title: "Tagline", type: "text", rows: 2 },
    { name: "logoText", title: "Logo text", type: "string" },
    { name: "logo", title: "Logo", type: "image" },
    { name: "nav", title: "Navigation", type: "array", of: [navItem] },
    { name: "applyUrl", title: "Apply (Airtable) URL", type: "url" },
    { name: "videoUrl", title: "Promo video embed URL", type: "url" },
    { name: "poweredByUrl", title: "Powered-by URL", type: "url" },
    {
      name: "social",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: ["facebook", "linkedin", "youtube", "instagram", "x"],
              },
            },
            { name: "href", title: "URL", type: "url" },
          ],
        },
      ],
    },
  ],
};

const homePage = {
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    { name: "heroKicker", title: "Hero kicker", type: "string" },
    { name: "heroTitle", title: "Hero title", type: "text", rows: 2 },
    { name: "heroSubtitle", title: "Hero subtitle", type: "text", rows: 3 },
    {
      name: "gallery",
      title: "Gallery images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    { name: "introTitle", title: "Intro title", type: "text", rows: 2 },
    { name: "stats", title: "Statistics", type: "array", of: [stat] },
    { name: "joinTitle", title: "Join title", type: "text", rows: 2 },
    { name: "joinBody", title: "Join body", type: "text", rows: 3 },
    { name: "criteriaTitle", title: "Criteria title", type: "string" },
    { name: "criteria", title: "Criteria", type: "array", of: [criterion] },
    { name: "editionYear", title: "Edition year", type: "number" },
    { name: "timelineTitle", title: "Timeline title", type: "string" },
    { name: "timeline", title: "Timeline", type: "array", of: [timelineEvent] },
    { name: "currentEditionKicker", title: "Current edition kicker", type: "string" },
    { name: "currentEditionTitle", title: "Current edition title", type: "string" },
    { name: "currentEditionBody", title: "Current edition body", type: "text", rows: 3 },
    { name: "newsletterTitle", title: "Newsletter title", type: "string" },
    { name: "newsletterBody", title: "Newsletter body", type: "text", rows: 2 },
  ],
};

const judge = {
  name: "judge",
  title: "Judge",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "title", title: "Role / title", type: "string" },
    { name: "company", title: "Company", type: "string" },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "linkedin", title: "LinkedIn URL", type: "url" },
    { name: "edition", title: "Edition year", type: "number" },
    { name: "order", title: "Sort order", type: "number" },
  ],
  preview: { select: { title: "name", subtitle: "company", media: "photo" } },
};

const prizeCategory = {
  name: "prizeCategory",
  title: "Prize category",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 2 },
    { name: "image", title: "Image", type: "image" },
    {
      name: "color",
      title: "Accent colour",
      type: "string",
      options: { list: ["brand", "sky", "red", "yellow"] },
    },
    { name: "order", title: "Sort order", type: "number" },
  ],
};

const track = {
  name: "track",
  title: "Track",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "year", title: "Year", type: "number" },
    { name: "order", title: "Display order", type: "number" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "sponsor", title: "Sponsor", type: "string" },
    {
      name: "criteria",
      title: "What we're looking for",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "benefits",
      title: "What winners gain",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name / alt text", type: "string" },
            {
              name: "role",
              title: "Role",
              type: "string",
              options: {
                list: ["award", "sponsor", "partner", "benefit-provider"],
              },
            },
            { name: "image", title: "Image", type: "image" },
            { name: "url", title: "Website", type: "url" },
          ],
        },
      ],
    },
    { name: "sourceUrl", title: "Original source", type: "url", readOnly: true },
  ],
  preview: { select: { title: "title", subtitle: "year", media: "logos.0.image" } },
};

const winner = {
  name: "winner",
  title: "Winner",
  type: "document",
  fields: [
    { name: "name", title: "Startup name", type: "string" },
    { name: "year", title: "Edition year", type: "number" },
    { name: "track", title: "Track", type: "string" },
    { name: "website", title: "Website", type: "url" },
    { name: "country", title: "Country", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "logo", title: "Logo", type: "image" },
    { name: "sourceUrl", title: "Original source", type: "url", readOnly: true },
  ],
  preview: { select: { title: "name", subtitle: "year", media: "logo" } },
};

const partner = {
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "logo", title: "Logo", type: "image" },
    { name: "url", title: "URL", type: "url" },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["powered-by", "worldwide", "prize-sponsor"] },
    },
    { name: "order", title: "Sort order", type: "number" },
  ],
};

const page = {
  name: "page",
  title: "Content page",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "intro", title: "Intro", type: "text", rows: 3 },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
};

export const schemaTypes = [
  siteSettings,
  homePage,
  judge,
  prizeCategory,
  track,
  winner,
  partner,
  page,
];
