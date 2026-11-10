import type { SiteContent } from "@/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Clients({ content }: { content: SiteContent }) {
  const { clients } = content;
  const headingId = `${clients.id}-judul`;

  return (
    <section id={clients.id} aria-labelledby={headingId} className="bg-white py-20 lg:py-28">
      <div className="container-grid">
        <SectionHeader
          number={clients.number}
          eyebrow={clients.eyebrow}
          title={clients.title}
          intro={clients.intro}
          headingId={headingId}
        />

        {/* Client wall: kotak placeholder — TIDAK memuat logo institusi nyata. */}
        <ul className="reveal mt-12 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:mt-16 lg:grid-cols-4 xl:grid-cols-6">
          {Array.from({ length: clients.slots }, (_, index) => (
            <li key={index} className="border-b border-r border-line p-3 sm:p-4">
              <div
                data-placeholder={`client.logo.${index + 1}`}
                className="flex aspect-[3/2] items-center justify-center bg-stone text-xs font-semibold uppercase tracking-[0.14em] text-muted"
              >
                {clients.logoLabel}
              </div>
            </li>
          ))}
        </ul>

        <p data-placeholder="clients.note" className="mt-6 text-sm leading-relaxed text-muted">
          {clients.note}
        </p>
      </div>
    </section>
  );
}
