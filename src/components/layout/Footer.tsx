import { company } from "@/config/company";
import type { SiteContent } from "@/content";
import { isPlaceholder } from "@/lib/placeholder";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { RichText } from "@/components/ui/RichText";

export function Footer({ content }: { content: SiteContent }) {
  const { footer, nav, services, a11y } = content;
  const { address, contact, legal } = company;
  const headingClass = "text-xs font-semibold uppercase tracking-[0.18em] text-navy-200";
  const linkClass = "text-[0.9375rem] text-navy-100 underline-offset-4 hover:text-white hover:underline";

  return (
    <footer className="on-dark bg-navy-950 text-navy-100">
      <div className="container-grid py-16 lg:py-20">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <Logo tone="light" className="h-9 w-auto" />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-navy-100">{company.tagline}</p>
            <dl className="mt-6 space-y-1.5 text-sm">
              <div className="flex gap-2">
                <dt className="text-navy-200">{footer.nibLabel}</dt>
                <dd>
                  <RichText text={legal.nib} />
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-navy-200">{footer.npwpLabel}</dt>
                <dd>
                  <RichText text={legal.npwp} />
                </dd>
              </div>
            </dl>
          </div>

          <nav aria-label={a11y.footerNav} className="col-span-6 md:col-span-3 lg:col-span-2">
            <h2 className={`${headingClass} font-sans`}>{footer.navigationLabel}</h2>
            <ul className="mt-5 space-y-3">
              {nav.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <h2 className={`${headingClass} font-sans`}>{footer.servicesLabel}</h2>
            <ul className="mt-5 space-y-3">
              {services.items.map((item) => (
                <li key={item.title}>
                  <a href={`#${services.id}`} className={linkClass}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h2 className={`${headingClass} font-sans`}>{footer.officeLabel}</h2>
            <address className="mt-5 space-y-1 text-[0.9375rem] not-italic leading-relaxed">
              <p data-placeholder="company.legalName" className="font-semibold text-white">
                {company.legalName}
              </p>
              <p>
                <RichText text={address.street} />
              </p>
              <p>
                <RichText text={address.district} />
              </p>
              <p>
                <RichText text={`${address.city}, ${address.province} ${address.postalCode}`} />
              </p>
            </address>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h2 className={`${headingClass} font-sans`}>{footer.contactLabel}</h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              <li>
                {isPlaceholder(contact.email) ? (
                  <RichText text={contact.email} />
                ) : (
                  <a href={`mailto:${contact.email}`} className={linkClass}>
                    {contact.email}
                  </a>
                )}
              </li>
              <li>
                {isPlaceholder(contact.phoneHref) ? (
                  <RichText text={contact.phone} />
                ) : (
                  <a href={`tel:${contact.phoneHref}`} className={linkClass}>
                    {contact.phone}
                  </a>
                )}
              </li>
              <li>
                <RichText text={contact.officeHours} />
              </li>
              {company.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} rel="noopener noreferrer" className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <div className="grid-12 gap-y-4">
            <h2 className={`${headingClass} col-span-12 font-sans lg:col-span-3`}>{footer.complianceLabel}</h2>
            <div className="col-span-12 space-y-2 text-sm leading-relaxed lg:col-span-9">
              <p>
                <RichText text={footer.compliance} />
              </p>
              <p data-placeholder="footer.complianceHint" className="text-navy-200">
                {footer.complianceHint}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-navy-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} <span data-placeholder="company.legalName">{company.legalName}</span>.{" "}
            {footer.rights}
          </p>
          <a href="#beranda" className="inline-flex items-center gap-2 text-navy-100 hover:text-white">
            {footer.backToTop}
            <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
