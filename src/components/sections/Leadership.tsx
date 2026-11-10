import type { SiteContent } from "@/content";
import { RichText } from "@/components/ui/RichText";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Leadership({ content }: { content: SiteContent }) {
  const { leadership } = content;
  const headingId = `${leadership.id}-judul`;

  return (
    <section id={leadership.id} aria-labelledby={headingId} className="border-y border-line bg-paper py-20 lg:py-28">
      <div className="container-grid">
        <SectionHeader
          number={leadership.number}
          eyebrow={leadership.eyebrow}
          title={leadership.title}
          intro={leadership.intro}
          headingId={headingId}
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8 xl:grid-cols-4">
          {leadership.members.map((member) => (
            <li key={member.role} data-placeholder="leadership.member" className="reveal border border-line bg-white">
              {/* Foto placeholder berupa inisial jabatan — bukan foto orang. */}
              <div
                aria-hidden="true"
                data-placeholder="leadership.photo"
                className="flex aspect-[4/3] items-center justify-center border-b border-line bg-stone"
              >
                <span className="flex h-20 w-20 items-center justify-center border border-navy-900 font-serif text-2xl text-navy-900">
                  {member.initials}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg leading-snug text-navy-900">
                  <RichText text={member.name} />
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted">{member.role}</p>
                <p className="mt-4 border-t border-line pt-4 text-[0.9375rem] leading-relaxed text-muted">
                  <RichText text={member.bio} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
