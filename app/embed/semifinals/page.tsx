import type { Metadata } from "next";
import { EmbedFrame } from "@/components/embed/EmbedFrame";
import { SemifinalsExplorer } from "@/components/semifinals/SemifinalsExplorer";
import { getRegionalSemifinals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Regional Semifinals Embed",
  robots: { index: false, follow: false },
};

export default async function EmbeddedSemifinalsPage() {
  const entries = await getRegionalSemifinals();

  return (
    <EmbedFrame>
      <section aria-labelledby="semifinals-embed-title" className="mx-auto max-w-7xl">
        <h1 id="semifinals-embed-title" className="sr-only">
          GESAwards Regional Semifinals
        </h1>
        <SemifinalsExplorer entries={entries} />
      </section>
    </EmbedFrame>
  );
}
