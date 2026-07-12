import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { RichBody } from "@/components/ui/rich-body";
import { getPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Eligibility, judging and participation terms for the GESAwards competition.",
};

export default async function TermsPage() {
  const page = await getPage("terms-and-condition");
  if (!page) notFound();

  return (
    <>
      <PageHero kicker="Competition" title={page.title} intro={page.intro} />
      <article className="container-page max-w-3xl py-16 md:py-20">
        <RichBody body={page.body} />
      </article>
    </>
  );
}
