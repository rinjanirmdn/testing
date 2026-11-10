import { company } from "@/config/company";
import type { SiteContent } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { SectionHeader } from "@/components/ui/SectionHeader";

type LegalKey = keyof typeof company.legal;

export function Capabilities({ content }: { content: SiteContent }) {
  const { capabilities } = content;
  const headingId = `${capabilities.id}-judul`;

  return (
    <section id={capabilities.id} aria-labelledby={headingId} className="on-dark bg-navy-900 py-20 text-white lg:py-28">
      <div className="container-grid">
        <SectionHeader
          number={capabilities.number}
          eyebrow={capabilities.eyebrow}
          title={capabilities.title}
          intro={capabilities.intro}
          headingId={headingId}
          tone="dark"
        />

        <p
          data-placeholder="capabilities.notice"
          className="mt-10 border-l-2 border-white/60 bg-white/5 px-4 py-3 text-sm leading-relaxed text-navy-100 lg:mt-12"
        >
          {capabilities.placeholderNotice}
        </p>

        <div className="mt-8 border-t border-white/20">
          {capabilities.groups.map((group) => (
            <article key={group.title} className="reveal grid-12 gap-y-6 border-b border-white/20 py-9 lg:py-10">
              <div className="col-span-12 lg:col-span-4">
                <Icon name={group.icon} size={30} className="text-navy-100" />
                <h3 className="mt-5 text-2xl leading-snug">{group.title}</h3>
                <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-navy-100">{group.description}</p>
              </div>
              <dl className="col-span-12 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
                {group.items.map((item) => (
                  <div key={item.label} className="border-t border-white/15 py-4">
                    <dt className="text-sm text-navy-100">{item.label}</dt>
                    <dd className="mt-1.5 text-base font-medium text-white">
                      <RichText
                        text={"companyLegal" in item ? company.legal[item.companyLegal as LegalKey] : item.value}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl">{capabilities.request.title}</h3>
            <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-navy-100">
              {capabilities.request.description}
            </p>
          </div>
          <a href={capabilities.request.cta.href} className="btn btn-outline-light shrink-0">
            {capabilities.request.cta.label}
            <Icon name="arrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
