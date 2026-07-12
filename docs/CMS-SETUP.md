# Connecting the Sanity CMS

The site ships with local **seed content** (`lib/content/seed.ts`) so it runs and
looks complete immediately. Editors can take over content without touching code by
connecting Sanity. The schemas are already written in
[`sanity/schemaTypes/index.ts`](../sanity/schemaTypes/index.ts) and the GROQ queries
in [`sanity/queries.ts`](../sanity/queries.ts).

## 1. Create the Sanity project

```bash
npm install sanity next-sanity @sanity/image-url styled-components
npx sanity@latest init --env
```

Pick **"production"** as the dataset. This writes `NEXT_PUBLIC_SANITY_PROJECT_ID`
and `NEXT_PUBLIC_SANITY_DATASET` into `.env.local`.

## 2. Add the embedded Studio

Create `sanity.config.ts` in the project root:

```ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
```

Create the route `app/studio/[[...tool]]/page.tsx`:

```tsx
"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
export const dynamic = "force-static";
export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

Editors now manage content at `/studio` on the same domain. (It is already
disallowed in `robots.ts`.)

## 3. Add the client

Create `lib/sanity/client.ts`:

```ts
import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01",
  useCdn: true,
});
```

## 4. Switch the content layer to Sanity

In [`lib/content/index.ts`](../lib/content/index.ts), each getter currently returns
seed data. Replace the bodies with the matching query — the function signatures and
return shapes are identical, so **no component changes are needed**. Example:

```ts
import { sanityClient } from "@/lib/sanity/client";
import { homeQuery } from "@/sanity/queries";

export async function getHomeContent() {
  return sanityClient.fetch(homeQuery);
}
```

Keep a fallback to seed data if you want the site to render before content is
entered: `return (await sanityClient.fetch(homeQuery)) ?? homeContent;`

## 5. Migrate the content

1. Recreate the homepage singleton, judges, categories, partners, tracks, and the
   About / Terms pages in the Studio (copy from `lib/content/seed.ts`).
2. Upload images into Sanity (drag-and-drop) so the site no longer depends on the
   Wix CDN. The `next.config.ts` already allows `cdn.sanity.io`.
3. Add past winners per year — each populates `/winners/[year]` automatically.

## 6. Revalidation

For instant updates after publishing, add a Sanity webhook to a revalidate route
(`app/api/revalidate/route.ts`) or use `revalidateTag`. Until then, content uses the
build/ISR cache.
