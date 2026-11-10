import type { SiteContent } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services({ content }: { content: SiteContent }) {
  const { services } = content;
  const headingId = `${services.id}-judul`;

  return (
    <section id={services.id} aria-labelledby={headingId} className="border-y border-line bg-paper py-20 lg:py-28">
      <div className="container-grid">
        <SectionHeader
          number={services.number}
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
          headingId={headingId}
        />

        {/* Grid bergaris tipis: garis atas/kiri pada wadah, garis kanan/bawah pada sel. */}
        <ul className="mt-12 grid grid-cols-1 border-l border-t border-line bg-white sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {services.items.map((service, index) => (
            <li key={service.title} className="reveal flex flex-col border-b border-r border-line p-7 lg:p-8">
              <div className="flex items-start justify-between">
                <Icon name={service.icon} size={32} className="text-navy-900" />
                <span aria-hidden="true" className="font-serif text-sm text-muted tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 text-xl leading-snug text-navy-900">{service.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{service.description}</p>
            </li>
          ))}
          <li className="reveal on-dark flex flex-col justify-between border-b border-r border-line bg-navy-900 p-7 text-white lg:p-8">
            <div>
              <h3 className="text-xl leading-snug">{services.other.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-navy-100">{services.other.description}</p>
            </div>
            <a
              href={services.other.cta.href}
              className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-white underline decoration-white/50 decoration-1 underline-offset-[5px] hover:decoration-white"
            >
              {services.other.cta.label}
              <Icon name="arrowRight" size={18} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
