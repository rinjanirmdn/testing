import type { ImageDefinition } from "@/config/images";

interface ImagePlaceholderProps {
  image: ImageDefinition;
  /** Label awalan, mis. "Placeholder foto". */
  label: string;
  /** `true` bila kotak mengisi induknya (rasio dikunci oleh induk). */
  fill?: boolean;
  /** Sembunyikan deskripsi panjang (untuk latar dekoratif / ukuran kecil). */
  compact?: boolean;
  className?: string;
}

/**
 * Dipakai ketika file gambar belum ada di /public/images/.
 * Kotak abu netral dengan rasio aspek terkunci dan label deskripsi foto yang
 * seharusnya ada di situ.
 */
export function ImagePlaceholder({ image, label, fill = false, compact = false, className = "" }: ImagePlaceholderProps) {
  const decorative = image.alt === "";
  return (
    <div
      data-placeholder={`image:${image.key}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : `${label}: ${image.alt}`}
      aria-hidden={decorative ? true : undefined}
      style={fill ? undefined : { aspectRatio: `${image.ratio.width} / ${image.ratio.height}` }}
      className={`flex overflow-hidden bg-stone text-muted ${fill ? "absolute inset-0 h-full w-full" : "relative w-full"} ${className}`}
    >
      {/* Garis silang tipis penanda bidang gambar */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-[#c9cfd6]" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>
      {decorative ? null : (
      <div aria-hidden="true" className="relative m-auto flex max-w-[26rem] flex-col items-center gap-2 p-5 text-center">
        <span className="bg-stone px-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink">
          {label} · {image.ratio.width}:{image.ratio.height}
        </span>
        {compact ? null : (
          <span className="bg-stone px-2 text-sm leading-snug text-muted">{image.note}</span>
        )}
        <span className="bg-stone px-2 font-mono text-[0.6875rem] text-muted [overflow-wrap:anywhere]">
          public{image.src}
        </span>
      </div>
      )}
    </div>
  );
}
