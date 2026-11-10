/**
 * KONFIGURASI GAMBAR TERPUSAT
 * ---------------------------------------------------------------------------
 * Semua gambar dipanggil dari path lokal di /public/images/. Tidak ada URL
 * eksternal di dalam kode.
 *
 * Cara kerja:
 *   1. Taruh file sesuai `src` di bawah (lihat IMAGES.md untuk spesifikasi).
 *   2. Saat build, `resolveImage()` memeriksa apakah file ada.
 *      - Ada      -> dirender dengan next/image (responsif, blur placeholder).
 *      - Belum ada -> dirender <ImagePlaceholder> berisi deskripsi `note`.
 *   Tidak ada kode yang perlu diubah saat file ditambahkan.
 */

export type ImageKey =
  | "hero"
  | "about"
  | "portfolioKonferensi"
  | "portfolioSeremonial"
  | "portfolioPeluncuran"
  | "portfolioPameran"
  | "portfolioGathering"
  | "portfolioHybrid"
  | "ctaBackground";

export interface ImageDefinition {
  key: ImageKey;
  /** Path lokal relatif terhadap /public. */
  src: string;
  /** Alt text Bahasa Indonesia. Perbarui bila isi foto berbeda dari deskripsi. */
  alt: string;
  /** Rasio aspek lebar/tinggi yang dikunci pada layout. */
  ratio: { width: number; height: number };
  /** Ukuran minimum file sumber dalam piksel. */
  minSize: { width: number; height: number };
  /** Deskripsi foto yang dibutuhkan — tampil pada placeholder. */
  note: string;
  /** Opsional: blurDataURL khusus gambar ini. Bila kosong dipakai blur netral. */
  blurDataURL?: string;
}

/**
 * Blur placeholder netral (abu kebiruan) untuk semua gambar yang belum punya
 * blurDataURL sendiri. SVG 8x8 yang sangat kecil, di-inline sebagai data URL.
 */
export const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjZmQ1ZGMiLz48L3N2Zz4=";

export const images: Record<ImageKey, ImageDefinition> = {
  hero: {
    key: "hero",
    src: "/images/hero/hero-konferensi.jpg",
    alt: "Suasana ruang konferensi formal dengan panggung utama dan deretan kursi peserta",
    ratio: { width: 4, height: 5 },
    minSize: { width: 1600, height: 2000 },
    note: "Ruang konferensi atau ballroom formal dengan panggung, tata cahaya rapi, dan peserta berbusana resmi. Tanpa logo merek yang terbaca.",
  },
  about: {
    key: "about",
    src: "/images/about/tim-perencanaan.jpg",
    alt: "Tim perencana acara berdiskusi di meja kerja dengan denah tata ruang",
    ratio: { width: 4, height: 3 },
    minSize: { width: 1600, height: 1200 },
    note: "Tim kecil sedang rapat perencanaan: denah venue, laptop, dokumen rundown. Suasana kantor profesional.",
  },
  portfolioKonferensi: {
    key: "portfolioKonferensi",
    src: "/images/portfolio/konferensi.jpg",
    alt: "Rapat kerja dengan peserta duduk menghadap panggung dan layar presentasi",
    ratio: { width: 3, height: 2 },
    minSize: { width: 1500, height: 1000 },
    note: "Rapat kerja atau konferensi skala besar: peserta duduk formasi kelas/teater, layar LED, podium.",
  },
  portfolioSeremonial: {
    key: "portfolioSeremonial",
    src: "/images/portfolio/seremonial.jpg",
    alt: "Panggung seremonial peresmian dengan podium dan dekorasi formal",
    ratio: { width: 3, height: 2 },
    minSize: { width: 1500, height: 1000 },
    note: "Seremoni peresmian: podium, pita atau tombol peresmian, karpet, tata panggung formal. Hindari wajah pejabat yang dikenali.",
  },
  portfolioPeluncuran: {
    key: "portfolioPeluncuran",
    src: "/images/portfolio/peluncuran.jpg",
    alt: "Panggung peluncuran produk dengan layar lebar dan tata cahaya",
    ratio: { width: 3, height: 2 },
    minSize: { width: 1500, height: 1000 },
    note: "Acara peluncuran produk korporat: panggung dengan layar lebar, tata cahaya, audiens. Tanpa merek yang terbaca.",
  },
  portfolioPameran: {
    key: "portfolioPameran",
    src: "/images/portfolio/pameran.jpg",
    alt: "Aula pameran dengan deretan stan dan pengunjung",
    ratio: { width: 3, height: 2 },
    minSize: { width: 1500, height: 1000 },
    note: "Aula pameran: deretan stan (booth), lorong pengunjung, signage netral.",
  },
  portfolioGathering: {
    key: "portfolioGathering",
    src: "/images/portfolio/gathering.jpg",
    alt: "Pertemuan townhall karyawan di aula dengan pembicara di panggung",
    ratio: { width: 3, height: 2 },
    minSize: { width: 1500, height: 1000 },
    note: "Townhall atau gathering karyawan: audiens besar di aula, pembicara di panggung, suasana hangat namun rapi.",
  },
  portfolioHybrid: {
    key: "portfolioHybrid",
    src: "/images/portfolio/hybrid.jpg",
    alt: "Ruang kendali siaran dengan operator, monitor, dan perangkat streaming",
    ratio: { width: 3, height: 2 },
    minSize: { width: 1500, height: 1000 },
    note: "Ruang kendali (control room) acara hybrid: operator, switcher video, deretan monitor, kamera siaran.",
  },
  ctaBackground: {
    key: "ctaBackground",
    src: "/images/cta/latar-panggung.jpg",
    alt: "",
    ratio: { width: 21, height: 9 },
    minSize: { width: 2400, height: 1030 },
    note: "Latar dekoratif: panggung kosong atau venue saat persiapan, komposisi tenang, sedikit detail. Akan ditutup overlay gelap.",
  },
};
