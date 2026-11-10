import Image from "next/image";
import { DEFAULT_BLUR_DATA_URL } from "@/config/images";
import type { ResolvedImage } from "@/lib/images.server";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface SiteImageProps {
  image: ResolvedImage;
  /** Atribut `sizes` responsif untuk next/image. */
  sizes: string;
  /** Label awalan placeholder (dari file konten). */
  placeholderLabel: string;
  /** Muat lebih awal — hanya untuk gambar di atas lipatan (hero). */
  priority?: boolean;
  /**
   * `true`: mengisi induk yang sudah `relative` dan berukuran pasti.
   * `false` (default): membuat kotak sendiri dengan rasio dari konfigurasi.
   */
  fill?: boolean;
  /** Timpa rasio konfigurasi, mis. "16 / 9" pada modal. */
  ratio?: string;
  compactPlaceholder?: boolean;
  className?: string;
}

/**
 * Satu-satunya pintu untuk menampilkan foto.
 * - File ada      -> next/image (sizes responsif, blur placeholder, rasio terkunci).
 * - File belum ada -> <ImagePlaceholder>.
 */
export function SiteImage({
  image,
  sizes,
  placeholderLabel,
  priority = false,
  fill = false,
  ratio,
  compactPlaceholder = false,
  className = "",
}: SiteImageProps) {
  const aspectRatio = ratio ?? `${image.ratio.width} / ${image.ratio.height}`;
  const wrapperClass = fill ? "absolute inset-0" : "relative w-full";
  const wrapperStyle = fill ? undefined : { aspectRatio };

  return (
    <div className={`${wrapperClass} overflow-hidden bg-stone ${className}`} style={wrapperStyle}>
      {image.available ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          blurDataURL={image.blurDataURL ?? DEFAULT_BLUR_DATA_URL}
          className="object-cover"
        />
      ) : (
        <ImagePlaceholder image={image} label={placeholderLabel} fill compact={compactPlaceholder} />
      )}
    </div>
  );
}
