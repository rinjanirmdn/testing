import id, { type SiteContent } from "./id";

/**
 * Registri bahasa. Untuk menambah Bahasa Inggris:
 *   1. Buat `src/content/en.ts` yang mengekspor objek bertipe `SiteContent`.
 *   2. Tambahkan `en` ke `locales` dan ke `dictionaries` di bawah.
 *   3. (Opsional) pindahkan `src/app/page.tsx` ke `src/app/[locale]/page.tsx`
 *      dan panggil `getContent(params.locale)`.
 */
export const locales = ["id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

const dictionaries: Record<Locale, SiteContent> = { id };

export function getContent(locale: Locale = defaultLocale): SiteContent {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type { SiteContent };
