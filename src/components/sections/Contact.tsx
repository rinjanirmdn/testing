import { company } from "@/config/company";
import type { SiteContent } from "@/content";
import { resolveImage } from "@/lib/images.server";
import { isPlaceholder } from "@/lib/placeholder";
import { RichText } from "@/components/ui/RichText";
import { SiteImage } from "@/components/ui/SiteImage";
import { ContactForm } from "./ContactForm";

export function Contact({ content }: { content: SiteContent }) {
  const { contact, a11y } = content;
  const image = resolveImage(contact.image);
  const headingId = `${contact.id}-judul`;
  const { address } = company;
  const labelClass = "text-xs font-semibold uppercase tracking-[0.18em] text-navy-100";
  const linkClass = "underline decoration-white/50 decoration-1 underline-offset-4 hover:decoration-white";

  return (
    <section id={contact.id} aria-labelledby={headingId} className="on-dark relative isolate bg-navy-900 text-white">
      {/* Foto latar + overlay gelap bertingkat. Alfa terendah 0,86 sehingga teks
          putih tetap berkontras jauh di atas 4,5:1 apa pun isi fotonya. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <SiteImage image={image} fill sizes="100vw" placeholderLabel={a11y.placeholderImage} compactPlaceholder />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/[0.97] via-navy-900/[0.92] to-navy-900/[0.86]" />
        <div className="rule-field absolute inset-0" />
      </div>

      <div className="container-grid py-20 lg:py-28">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="font-serif text-2xl leading-none tabular-nums">
                {contact.number}
              </span>
              <span aria-hidden="true" className="h-px w-12 bg-white/40" />
              <p className={labelClass}>{contact.eyebrow}</p>
            </div>
            <h2 id={headingId} className="mt-6 text-3xl leading-[1.15] tracking-[-0.01em] md:text-4xl lg:text-[2.75rem]">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-navy-100">{contact.intro}</p>

            <div className="mt-10 border-t border-white/20 pt-8">
              <h3 className={`${labelClass} font-sans`}>{contact.directLabel}</h3>
              <dl className="mt-5 space-y-5 text-[0.9375rem]">
                <div>
                  <dt className="text-navy-100">{contact.emailLabel}</dt>
                  <dd className="mt-1 font-medium">
                    {isPlaceholder(company.contact.email) ? (
                      <RichText text={company.contact.email} />
                    ) : (
                      <a href={`mailto:${company.contact.email}`} className={linkClass}>
                        {company.contact.email}
                      </a>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-navy-100">{contact.phoneLabel}</dt>
                  <dd className="mt-1 font-medium">
                    {isPlaceholder(company.contact.phoneHref) ? (
                      <RichText text={company.contact.phone} />
                    ) : (
                      <a href={`tel:${company.contact.phoneHref}`} className={linkClass}>
                        {company.contact.phone}
                      </a>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-navy-100">{contact.hoursLabel}</dt>
                  <dd className="mt-1 font-medium">
                    <RichText text={company.contact.officeHours} />
                  </dd>
                </div>
                <div>
                  <dt className="text-navy-100">{contact.addressLabel}</dt>
                  <dd className="mt-1 font-medium leading-relaxed">
                    <RichText
                      text={`${address.street}, ${address.district}, ${address.city}, ${address.province} ${address.postalCode}`}
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            {/* Panel formulir memakai fokus gelap bawaan (bukan .on-dark). */}
            <div className="form-panel bg-white text-ink">
              <ContactForm form={contact.form} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
