"use client";

import { useEffect, useRef } from "react";
import type { SiteContent } from "@/content";
import type { ResolvedImage } from "@/lib/images.server";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { SiteImage } from "@/components/ui/SiteImage";

export type CaseStudyDetail = SiteContent["portfolio"]["details"][keyof SiteContent["portfolio"]["details"]];

interface CaseStudyDialogProps {
  open: boolean;
  onClose: () => void;
  category: string;
  title: string;
  image: ResolvedImage;
  detail: CaseStudyDetail;
  isIllustrative?: boolean;
  labels: { close: string; illustrative: string; placeholderImage: string };
}

/**
 * Modal studi kasus berbasis elemen <dialog> bawaan: fokus terperangkap di
 * dalam modal, Esc menutup, dan fokus kembali ke tombol pemicu secara otomatis.
 */
export function CaseStudyDialog({
  open,
  onClose,
  category,
  title,
  image,
  detail,
  isIllustrative = true,
  labels,
}: CaseStudyDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="studi-kasus-judul"
      onClose={onClose}
      onClick={(event) => {
        // Klik pada latar (di luar panel) menutup modal.
        if (event.target === ref.current) onClose();
      }}
      className="m-auto max-h-[92dvh] w-[min(60rem,calc(100vw-1.5rem))] max-w-none overflow-y-auto overscroll-contain border border-line bg-white p-0 text-ink"
    >
      <div data-placeholder="portfolio.detail">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-white px-5 py-3 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{category}</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 items-center gap-2 px-2 text-sm font-semibold text-navy-900"
          >
            {labels.close}
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="relative">
          <SiteImage
            image={image}
            ratio="16 / 9"
            sizes="(min-width: 960px) 960px, 100vw"
            placeholderLabel={labels.placeholderImage}
          />
          {isIllustrative ? (
            <span className="absolute left-0 top-0 bg-navy-950 px-2.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white">
              {labels.illustrative}
            </span>
          ) : null}
        </div>

        <div className="px-5 py-8 md:px-8 md:py-10">
          <h2 id="studi-kasus-judul" className="text-2xl leading-tight text-navy-900 md:text-[2rem]">
            {title}
          </h2>
          <p className="mt-5 border-l-2 border-navy-900 bg-paper px-4 py-3 text-sm leading-relaxed text-muted">
            {detail.templateNotice}
          </p>

          <dl className="mt-8 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-5">
            {detail.facts.map((fact) => (
              <div key={fact.label} className="border-b border-r border-line p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{fact.label}</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">
                  <RichText text={fact.value} />
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-8">
              {detail.sections.map((section) => (
                <section key={section.heading}>
                  <h3 className="text-xl text-navy-900">{section.heading}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{section.body}</p>
                </section>
              ))}
            </div>

            <div>
              <h3 className="text-xl text-navy-900">{detail.scopeHeading}</h3>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {detail.scope.map((item) => (
                  <li key={item} className="flex gap-3 py-3 text-[0.9375rem] leading-relaxed text-ink">
                    <Icon name="check" size={18} className="mt-1 text-navy-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-navy-900 pt-8">
            <h3 className="text-xl text-navy-900">{detail.resultsHeading}</h3>
            <dl className="mt-5 grid gap-6 sm:grid-cols-3">
              {detail.results.map((result) => (
                <div key={result.label} className="flex flex-col-reverse gap-2">
                  <dt className="text-sm text-muted">{result.label}</dt>
                  <dd className="font-serif text-xl text-navy-900">
                    <RichText text={result.value} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted">{detail.resultsNote}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
