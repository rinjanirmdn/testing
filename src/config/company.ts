/**
 * KONFIGURASI IDENTITAS PERUSAHAAN — SATU-SATUNYA SUMBER KEBENARAN
 * ---------------------------------------------------------------------------
 * Seluruh komponen, metadata SEO, JSON-LD, dan footer membaca identitas dari
 * file ini. Ganti nilai di sini; tidak perlu menyentuh komponen.
 *
 * Konvensi placeholder:
 *   - Nilai berbentuk "{{TOKEN}}" dirender di halaman sebagai teks bertanda
 *     (atribut `data-placeholder="TOKEN"`) dan otomatis DIKECUALIKAN dari
 *     JSON-LD serta tautan mailto/tel, sehingga data dummy tidak pernah
 *     terkirim ke mesin pencari sebagai fakta.
 *   - Jangan mengisi nomor legalitas dengan angka contoh. Biarkan token sampai
 *     data resmi tersedia.
 */

export const company = {
  /** Nama badan hukum lengkap. */
  legalName: "PT Sinergi Acara Nusantara", // PLACEHOLDER — ganti sebelum produksi

  /** Nama pendek untuk judul halaman dan penyebutan singkat. */
  shortName: "Sinergi Acara Nusantara", // PLACEHOLDER — ganti sebelum produksi

  /** Dua baris teks pada logo wordmark (SVG dibuat otomatis dari teks ini). */
  wordmark: {
    primary: "Sinergi Acara", // PLACEHOLDER — ganti sebelum produksi
    secondary: "Nusantara", // PLACEHOLDER — ganti sebelum produksi
  },

  tagline: "Penyelenggara Acara Korporat dan Kenegaraan", // PLACEHOLDER — ganti sebelum produksi

  /** Tahun berdiri, mis. "2012". */
  foundedYear: "{{TAHUN_BERDIRI}}", // PLACEHOLDER — ganti sebelum produksi

  /** URL produksi tanpa garis miring di akhir. Dipakai untuk canonical, Open Graph, sitemap. */
  siteUrl: "https://www.example.com", // PLACEHOLDER — ganti sebelum produksi

  /**
   * Izinkan mesin pencari mengindeks situs. Setel `false` pada lingkungan
   * staging selama konten masih placeholder.
   */
  allowIndexing: true, // PLACEHOLDER — tinjau sebelum produksi

  contact: {
    email: "{{EMAIL_PERUSAHAAN}}", // PLACEHOLDER — ganti sebelum produksi
    phone: "{{NOMOR_TELEPON}}", // PLACEHOLDER — ganti sebelum produksi (format tampilan, mis. "(021) ...")
    /** Format internasional tanpa spasi untuk tautan tel:, mis. "+6221...". */
    phoneHref: "{{NOMOR_TELEPON_E164}}", // PLACEHOLDER — ganti sebelum produksi
    whatsapp: "{{NOMOR_WHATSAPP}}", // PLACEHOLDER — ganti sebelum produksi
    officeHours: "{{JAM_OPERASIONAL}}", // PLACEHOLDER — ganti sebelum produksi
  },

  address: {
    street: "{{ALAMAT_JALAN}}", // PLACEHOLDER — ganti sebelum produksi
    district: "{{KELURAHAN_KECAMATAN}}", // PLACEHOLDER — ganti sebelum produksi
    city: "{{KOTA}}", // PLACEHOLDER — ganti sebelum produksi
    province: "{{PROVINSI}}", // PLACEHOLDER — ganti sebelum produksi
    postalCode: "{{KODE_POS}}", // PLACEHOLDER — ganti sebelum produksi
    countryCode: "ID",
  },

  /**
   * Nomor legalitas. JANGAN diisi angka contoh — isi hanya dengan nomor resmi.
   */
  legal: {
    nib: "{{NIB}}", // PLACEHOLDER — ganti sebelum produksi
    npwp: "{{NPWP}}", // PLACEHOLDER — ganti sebelum produksi
    deedNumber: "{{NOMOR_AKTA_PENDIRIAN}}", // PLACEHOLDER — ganti sebelum produksi
    ministryDecree: "{{NOMOR_SK_KEMENKUMHAM}}", // PLACEHOLDER — ganti sebelum produksi
    kbli: "{{KODE_KBLI}}", // PLACEHOLDER — ganti sebelum produksi
    businessCertificate: "{{NOMOR_SERTIFIKAT_BADAN_USAHA}}", // PLACEHOLDER — ganti sebelum produksi
  },

  /** URL profil media sosial resmi. Kosongkan array bila belum ada. */
  social: [] as { label: string; href: string }[], // PLACEHOLDER — isi sebelum produksi
};

export type Company = typeof company;
