import { Fragment } from "react";
import { splitPlaceholders } from "@/lib/placeholder";

/**
 * Merender teks dan menandai setiap token "{{TOKEN}}" sebagai placeholder
 * (`data-placeholder="TOKEN"`), sehingga mudah dicari dan terlihat belum final.
 */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {splitPlaceholders(text).map((part, index) =>
        part.type === "token" ? (
          <span key={index} className="ph" data-placeholder={part.value}>
            {`{{${part.value}}}`}
          </span>
        ) : (
          <Fragment key={index}>{part.value}</Fragment>
        ),
      )}
    </>
  );
}
