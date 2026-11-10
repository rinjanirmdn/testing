"use client";

import { useState } from "react";
import type { SiteContent } from "@/content";
import type { ResolvedImage } from "@/lib/images.server";
import { CaseStudyDialog } from "./CaseStudyDialog";
import { PortfolioCard } from "./PortfolioCard";

type Portfolio = SiteContent["portfolio"];

interface PortfolioExplorerProps {
  portfolio: Portfolio;
  /** Peta kunci gambar -> gambar yang sudah diperiksa keberadaannya di server. */
  images: Record<string, ResolvedImage>;
  labels: { close: string; placeholderImage: string };
}

/** Filter kategori + grid kartu + modal studi kasus. */
export function PortfolioExplorer({ portfolio, images, labels }: PortfolioExplorerProps) {
  const [active, setActive] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const categoryLabel = (id: string) => portfolio.categories.find((category) => category.id === id)?.label ?? id;
  const visible = portfolio.items.filter((item) => active === "all" || item.category === active);
  const details = portfolio.details as Record<string, Portfolio["details"][keyof Portfolio["details"]] | undefined>;
  const openItem = portfolio.items.find((item) => item.id === openId);
  const openDetail = openItem ? details[openItem.id] : undefined;

  const filters = [{ id: "all", label: portfolio.allLabel }, ...portfolio.categories];

  return (
    <div>
      <div role="group" aria-label={portfolio.filterLabel} className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const selected = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter.id)}
              className={`min-h-11 rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-line bg-white text-ink hover:border-navy-900"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {portfolio.resultCount.replace("{count}", String(visible.length))}
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        {visible.map((item) => (
          <li key={item.id}>
            <PortfolioCard
              category={categoryLabel(item.category)}
              title={item.title}
              scale={item.scale}
              scope={item.scope}
              image={images[item.image]}
              // Ubah menjadi `false` per proyek setelah dokumentasi asli dipasang.
              isIllustrative
              onOpenDetail={item.hasDetail && details[item.id] ? () => setOpenId(item.id) : undefined}
              labels={{
                illustrative: portfolio.illustrativeLabel,
                scale: portfolio.scaleLabel,
                scope: portfolio.scopeLabel,
                openDetail: portfolio.openDetailLabel,
                placeholderImage: labels.placeholderImage,
              }}
            />
          </li>
        ))}
      </ul>

      {openItem && openDetail ? (
        <CaseStudyDialog
          open
          onClose={() => setOpenId(null)}
          category={categoryLabel(openItem.category)}
          title={openItem.title}
          image={images[openItem.image]}
          detail={openDetail}
          isIllustrative
          labels={{
            close: labels.close,
            illustrative: portfolio.illustrativeLabel,
            placeholderImage: labels.placeholderImage,
          }}
        />
      ) : null}
    </div>
  );
}
