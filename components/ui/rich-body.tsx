import type { RichPage } from "@/lib/content/types";

/** Minimal block renderer for the v1 `page` content. Swap for Portable Text
 *  (@portabletext/react) when the body comes from Sanity. */
export function RichBody({ body }: { body: RichPage["body"] }) {
  return (
    <div className="prose-gesa">
      {body.map((block, i) =>
        block.type === "h2" ? (
          <h2
            key={i}
            className="mt-10 font-display text-2xl font-bold text-navy first:mt-0"
          >
            {block.text}
          </h2>
        ) : (
          <p key={i} className="mt-4 text-lg leading-relaxed text-muted">
            {block.text}
          </p>
        )
      )}
    </div>
  );
}
