import type { SiteContent } from "@/content";
import { resolveImage } from "@/lib/images.server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteImage } from "@/components/ui/SiteImage";

export function About({ content }: { content: SiteContent }) {
  const { about, a11y } = content;
  const image = resolveImage(about.image);
  const headingId = `${about.id}-judul`;
  const labelClass = "text-xs font-semibold uppercase tracking-[0.18em] text-muted";

  return (
    <section id={about.id} aria-labelledby={headingId} className="bg-white py-20 lg:py-28">
      <div className="container-grid">
        <SectionHeader number={about.number} eyebrow={about.eyebrow} title={about.title} headingId={headingId} />

        <div className="grid-12 mt-12 gap-y-12 lg:mt-16">
          <div className="reveal col-span-12 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <SiteImage
              image={image}
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholderLabel={a11y.placeholderImage}
            />
          </div>

          <div className="reveal col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <h3 className={`${labelClass} font-sans`}>{about.visionLabel}</h3>
              <p className="mt-3 font-serif text-xl leading-snug text-navy-900 lg:text-2xl">{about.vision}</p>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <h3 className={`${labelClass} font-sans`}>{about.missionLabel}</h3>
              <ol className="mt-4 space-y-3">
                {about.mission.map((item, index) => (
                  <li key={item} className="flex gap-4 text-base leading-relaxed text-ink">
                    <span aria-hidden="true" className="w-6 shrink-0 font-serif text-muted tabular-nums">
                      {index + 1}.
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <h3 className={`${labelClass} font-sans`}>{about.valuesLabel}</h3>
          <ul className="mt-6 grid grid-cols-1 border-t border-navy-900 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value, index) => (
              <li
                key={value.title}
                className="reveal border-b border-line py-7 sm:pr-8 lg:border-b-0 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <span aria-hidden="true" className="font-serif text-sm text-muted tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 font-serif text-xl text-navy-900">{value.title}</h4>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
