import { existsSync } from "node:fs";
import path from "node:path";
import { images, type ImageDefinition, type ImageKey } from "@/config/images";

export interface ResolvedImage extends ImageDefinition {
  /** `true` bila file sudah ada di /public sesuai `src`. */
  available: boolean;
}

/**
 * Memeriksa keberadaan file gambar di /public. HANYA untuk Server Component.
 * Hasilnya diteruskan ke <SiteImage>, yang memilih antara next/image dan
 * <ImagePlaceholder>. Halaman dirender statis, jadi pemeriksaan terjadi saat
 * build (atau per permintaan pada `next dev`).
 */
export function resolveImage(key: ImageKey): ResolvedImage {
  const definition = images[key];
  const filePath = path.join(process.cwd(), "public", definition.src);
  return { ...definition, available: existsSync(filePath) };
}
