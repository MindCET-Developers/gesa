import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for may have moved. Head back to the
          GESAwards homepage.
        </p>
        <Link href="/" className={`${buttonClasses({ size: "lg" })} mt-8`}>
          Back to home
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
}
