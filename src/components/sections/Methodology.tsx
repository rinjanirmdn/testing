import type { SiteContent } from "@/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Methodology({ content }: { content: SiteContent }) {
  const { methodology } = content;
  const headingId = `${methodology.id}-judul`;

  return (
    <section id={methodology.id} aria-labelledby={headingId} className="bg-white py-20 lg:py-28">
      <div className="container-grid">
        <SectionHeader
          number={methodology.number}
          eyebrow={methodology.eyebrow}
          title={methodology.title}
          intro={methodology.intro}
          headingId={headingId}
        />

        {/* Timeline: vertikal di mobile/tablet, horizontal mulai lg. */}
        <ol className="mt-12 lg:mt-20 lg:grid lg:grid-cols-5">
          {methodology.steps.map((step, index) => (
            <li
              key={step.title}
              className="reveal relative pb-10 pl-12 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-6 lg:pt-12 lg:last:pr-0"
            >
              {/* Garis penghubung */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[0.6875rem] top-0 w-px bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[0.6875rem] lg:h-px lg:w-auto"
              />
              {/* Titik tahap */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-[1.4375rem] w-[1.4375rem] items-center justify-center border border-navy-900 bg-white"
              >
                <span className="h-[0.4375rem] w-[0.4375rem] bg-navy-900" />
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {methodology.stepLabel} {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl leading-snug text-navy-900 xl:text-[1.375rem]">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{step.description}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm leading-snug text-ink">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {methodology.outputLabel}
                </span>
                <span className="mt-1 block font-medium">{step.output}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
