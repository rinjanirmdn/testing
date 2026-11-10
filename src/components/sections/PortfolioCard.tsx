import type { ResolvedImage } from "@/lib/images.server";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { SiteImage } from "@/components/ui/SiteImage";

export interface PortfolioCardLabels {
  illustrative: string;
  scale: string;
  scope: string;
  openDetail: string;
  placeholderImage: string;
}

interface PortfolioCardProps {
  category: string;
  title: string;
  scale: string;
  scope: string[];
  image: ResolvedImage;
  labels: PortfolioCardLabels;
  /**
   * `true` (default): menampilkan label "Visual ilustrasi" di pojok gambar.
   * Setel `false` ketika dokumentasi asli proyek sudah dipasang.
   */
  isIllustrative?: boolean;
  /** Bila diisi, kartu menampilkan tombol untuk membuka studi kasus lengkap. */
  onOpenDetail?: () => void;
}

export function PortfolioCard({
  category,
  title,
  scale,
  scope,
  image,
  labels,
  isIllustrative = true,
  onOpenDetail,
}: PortfolioCardProps) {
  return (
    <article data-placeholder="portfolio.item" className="flex h-full flex-col border border-line bg-white">
      <div className="relative">
        <SiteImage
          image={image}
          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 46vw, 100vw"
          placeholderLabel={labels.placeholderImage}
          compactPlaceholder
        />
        {isIllustrative ? (
          <span className="absolute left-0 top-0 bg-navy-950 px-2.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white">
            {labels.illustrative}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{category}</p>
        <h3 className="mt-3 text-xl leading-snug text-navy-900">{title}</h3>

        <dl className="mt-6 space-y-4 border-t border-line pt-5 text-[0.9375rem]">
          <div className="grid grid-cols-[6.5rem_1fr] gap-3">
            <dt className="text-muted">{labels.scale}</dt>
            <dd className="text-ink">
              <RichText text={scale} />
            </dd>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] gap-3">
            <dt className="text-muted">{labels.scope}</dt>
            <dd className="text-ink">
              <ul className="space-y-1">
                {scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {onOpenDetail ? (
          <div className="mt-auto pt-7">
            <button type="button" onClick={onOpenDetail} className="link-arrow" aria-haspopup="dialog">
              {labels.openDetail}
              <span className="sr-only">: {title}</span>
              <Icon name="arrowRight" size={18} />
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
