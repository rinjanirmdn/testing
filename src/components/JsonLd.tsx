import { company } from "@/config/company";
import { isPlaceholder } from "@/lib/placeholder";

/**
 * JSON-LD schema.org/Organization.
 * Nilai yang masih placeholder TIDAK disertakan, agar data dummy tidak
 * terbaca mesin pencari sebagai fakta. Kolom muncul otomatis setelah diisi.
 */
export function JsonLd({ description }: { description: string }) {
  const { address, contact } = company;
  const real = (value: string) => (isPlaceholder(value) ? undefined : value);
  const hasAddress = [address.street, address.city, address.province, address.postalCode].every(
    (value) => !isPlaceholder(value),
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${company.siteUrl}/#organization`,
    name: company.legalName,
    alternateName: company.shortName,
    url: company.siteUrl,
    slogan: company.tagline,
    description,
    foundingDate: real(company.foundedYear),
    email: real(contact.email),
    telephone: real(contact.phoneHref),
    taxID: real(company.legal.npwp),
    areaServed: { "@type": "Country", name: "Indonesia" },
    address: hasAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          addressRegion: address.province,
          postalCode: address.postalCode,
          addressCountry: address.countryCode,
        }
      : undefined,
    sameAs: company.social.length > 0 ? company.social.map((item) => item.href) : undefined,
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify membuang nilai undefined; "<" di-escape untuk keamanan.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
