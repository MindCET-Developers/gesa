/* GROQ queries for the GESAwards content. Build-safe string constants — import
   these in lib/content/index.ts once the Sanity client is wired (see
   docs/CMS-SETUP.md). Field names match lib/content/types.ts exactly, so the
   getters can return query results without reshaping. */

export const siteSettingsQuery = /* groq */ `
  *[_type == "siteSettings"][0]{
    siteName, tagline, logoText, applyUrl, videoUrl, poweredByUrl,
    nav[]{label, href},
    social[]{platform, href}
  }`;

export const homeQuery = /* groq */ `
  *[_type == "homePage"][0]{
    heroKicker, heroTitle, heroSubtitle,
    "gallery": gallery[]{ "src": asset->url, "alt": coalesce(alt, "") },
    introTitle, stats[]{value, label},
    joinTitle, joinBody,
    criteriaTitle, criteria[]{index, title} | order(index asc),
    editionYear, timelineTitle, timeline[]{date, label},
    currentEditionKicker, currentEditionTitle, currentEditionBody,
    newsletterTitle, newsletterBody
  }`;

export const prizeCategoriesQuery = /* groq */ `
  *[_type == "prizeCategory"] | order(order asc){ title, description, color, "image": image.asset->url }`;

export const judgesQuery = /* groq */ `
  *[_type == "judge"] | order(order asc){ name, title, company, linkedin, "photo": photo.asset->url }`;

export const partnersQuery = /* groq */ `
  *[_type == "partner"] | order(order asc){ name, url, type, "logo": logo.asset->url }`;

export const tracksQuery = /* groq */ `
  *[_type == "track" && ($year == null || year == $year)] | order(order asc, title asc){
    "slug": slug.current, title, year, order, subtitle, description, sponsor,
    criteria, benefits, logos[]{name, role, url, "image": image.asset->url}, sourceUrl
  }`;

export const trackBySlugQuery = /* groq */ `
  *[_type == "track" && slug.current == $slug][0]{
    "slug": slug.current, title, year, order, subtitle, description, sponsor,
    criteria, benefits, logos[]{name, role, url, "image": image.asset->url}, sourceUrl
  }`;

export const winnerYearsQuery = /* groq */ `
  array::unique(*[_type == "winner"].year) | order(@ desc)`;

export const winnersByYearQuery = /* groq */ `
  *[_type == "winner" && year == $year]{ name, year, track, website, country, description, "logo": logo.asset->url }`;

export const pageQuery = /* groq */ `
  *[_type == "page" && slug.current == $slug][0]{ "slug": slug.current, title, intro, body }`;
