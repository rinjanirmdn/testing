import type { SiteContent } from "@/content";
import { resolveImage } from "@/lib/images.server";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { SiteImage } from "@/components/ui/SiteImage";

export function Hero({ content }: { content: SiteContent }) {
  const { hero, a11y } = content;
  const image = resolveImage(hero.image);

  return (
    <section id="beranda" aria-labelledby="beranda-judul">
      {/* Split layout: kiri teks di atas navy solid, kanan foto. Di mobile foto turun ke bawah teks. */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="on-dark rule-field bg-navy-900 text-white lg:col-span-7">
          <div className="px-5 py-16 md:px-10 md:py-20 lg:py-28 lg:pr-16 lg:pl-[max(2.5rem,calc((100vw-82rem)/2+2.5rem))] 3xl:pl-[calc((100vw-92rem)/2+2.5rem)]">
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy-100">
              <span aria-hidden="true" className="h-px w-10 shrink-0 bg-white/50" />
              {hero.eyebrow}
            </p>
            <h1
              id="beranda-judul"
              className="mt-7 max-w-[20ch] text-[2.25rem] leading-[1.1] tracking-[-0.015em] sm:text-5xl lg:text-[3.5rem] 2xl:text-6xl"
            >
              {hero.title}
            </h1>
            <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-navy-100">{hero.subtitle}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={hero.primaryCta.href} className="btn btn-accent">
                {hero.primaryCta.label}
                <Icon name="arrowRight" size={18} />
              </a>
              <a href={hero.secondaryCta.href} className="btn btn-outline-light">
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:col-span-5 lg:aspect-auto lg:min-h-[34rem]">
          <SiteImage
            image={image}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            placeholderLabel={a11y.placeholderImage}
          />
        </div>
      </div>

      {/* Strip kredibilitas — seluruh angka adalah placeholder sampai diisi data resmi. */}
      <div className="border-b border-line bg-white">
        <div className="container-grid">
          <h2 className="sr-only">{hero.credibilityLabel}</h2>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {hero.credibility.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col-reverse gap-2 py-7 pr-4 lg:py-9 ${
                  index % 2 === 1 ? "border-l border-line pl-5" : ""
                } ${index >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                  index === 2 ? "lg:border-l lg:pl-5" : ""
                } lg:pl-8 lg:first:pl-0`}
              >
                <dt className="text-sm leading-snug text-muted">{item.label}</dt>
                <dd className="font-serif text-xl text-navy-900 sm:text-2xl">
                  <RichText text={item.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
