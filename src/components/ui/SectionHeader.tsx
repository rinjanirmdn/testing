import { RichText } from "./RichText";

interface SectionHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
  headingId: string;
  tone?: "light" | "dark";
}

/**
 * Kepala section dengan treatment signature: nomor section berjenis serif,
 * garis ukur tipis, dan label kecil berhuruf kapital.
 */
export function SectionHeader({ number, eyebrow, title, intro, headingId, tone = "light" }: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <header className="grid-12 reveal gap-y-6">
      <div className="col-span-12 flex items-center gap-4">
        <span
          aria-hidden="true"
          className={`font-serif text-2xl leading-none tabular-nums ${dark ? "text-white" : "text-navy-900"}`}
        >
          {number}
        </span>
        <span aria-hidden="true" className={`h-px w-12 ${dark ? "bg-white/40" : "bg-navy-900"}`} />
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-navy-100" : "text-muted"}`}
        >
          {eyebrow}
        </p>
        <span aria-hidden="true" className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-line"}`} />
      </div>
      <h2
        id={headingId}
        className={`col-span-12 text-3xl leading-[1.15] tracking-[-0.01em] md:text-4xl lg:col-span-7 lg:text-[2.75rem] ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`col-span-12 max-w-prose text-base leading-relaxed lg:col-span-4 lg:col-start-9 lg:self-end lg:text-[1.0625rem] ${
            dark ? "text-navy-100" : "text-muted"
          }`}
        >
          <RichText text={intro} />
        </p>
      ) : null}
    </header>
  );
}
