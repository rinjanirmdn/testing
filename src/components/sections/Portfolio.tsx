import type { SiteContent } from "@/content";
import { resolveImage, type ResolvedImage } from "@/lib/images.server";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortfolioExplorer } from "./PortfolioExplorer";

export function Portfolio({ content }: { content: SiteContent }) {
  const { portfolio, a11y } = content;
  const headingId = `${portfolio.id}-judul`;

  // Keberadaan file gambar diperiksa di server, lalu diteruskan ke komponen klien.
  const images: Record<string, ResolvedImage> = {};
  for (const item of portfolio.items) images[item.image] = resolveImage(item.image);

  return (
    <section id={portfolio.id} aria-labelledby={headingId} className="border-y border-line bg-paper py-20 lg:py-28">
      <div className="container-grid">
        <SectionHeader
          number={portfolio.number}
          eyebrow={portfolio.eyebrow}
          title={portfolio.title}
          intro={portfolio.intro}
          headingId={headingId}
        />
        <div className="mt-10 lg:mt-12">
          <PlaceholderNotice text={portfolio.placeholderNotice} name="portfolio.notice" />
        </div>
        <div className="mt-8">
          <PortfolioExplorer
            portfolio={portfolio}
            images={images}
            labels={{ close: a11y.closeDialog, placeholderImage: a11y.placeholderImage }}
          />
        </div>
      </div>
    </section>
  );
}
