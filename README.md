# Website Company Profile — Event Organizer Korporat & Kenegaraan

Landing page multi-section untuk perusahaan event organizer yang menyasar korporasi,
BUMN, dan instansi pemerintah. Dibangun dengan Next.js (App Router), TypeScript, dan
Tailwind CSS.

> **Status: kerangka dengan konten placeholder.** Nama perusahaan, angka, nomor
> legalitas, klien, tim, dan studi kasus belum berisi data nyata. Jangan
> dipublikasikan sebelum daftar periksa di bawah selesai.

## Menjalankan

```bash
npm install
```

```bash
npm run dev
```

Perintah lain: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`,
dan `npm run placeholders` (menampilkan semua placeholder yang tersisa di kode).

## Pratinjau di GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` membangun situs sebagai file statis dan
menerbitkannya ke GitHub Pages setiap ada push. Syaratnya satu kali saja: di GitHub buka
**Settings → Pages → Build and deployment → Source**, pilih **GitHub Actions**.

Catatan mode Pages: optimasi gambar `next/image` dimatikan (Pages hanya menyajikan file
statis) dan halaman diberi `noindex`. Untuk produksi, gunakan hosting yang menjalankan
Next.js agar optimasi gambar aktif.

## Struktur

```
src/
  app/                  layout, halaman, metadata SEO, robots, sitemap, gambar Open Graph
  config/
    company.ts          identitas perusahaan — SATU tempat untuk mengganti nama, kontak, legalitas
    images.ts           daftar semua gambar: key, path lokal, alt, rasio, catatan foto
  content/
    id.ts               seluruh teks halaman (Bahasa Indonesia)
    index.ts            registri bahasa
  components/
    layout/             Header, Footer
    sections/           satu file per section (Hero, About, Services, ...)
    ui/                 Logo (SVG), Icon, SiteImage, ImagePlaceholder, RichText, ...
  lib/
    submit-inquiry.ts   fungsi submitInquiry() — titik sambung backend formulir
    validate-inquiry.ts validasi formulir sisi klien
    images.server.ts    memeriksa apakah file gambar sudah ada
public/images/          tempat menaruh foto (lihat IMAGES.md)
```

## Cara kerja placeholder

Ada tiga jenis penanda, semuanya bisa dicari:

| Penanda | Di mana | Cara mencari |
| --- | --- | --- |
| `// PLACEHOLDER — ganti sebelum produksi` | `src/config/company.ts`, `src/lib/submit-inquiry.ts` | `npm run placeholders` |
| Token `{{NAMA_TOKEN}}` | `src/config/company.ts`, `src/content/id.ts` | `npm run placeholders` |
| Atribut `data-placeholder="..."` | HTML hasil render | DevTools: `document.querySelectorAll("[data-placeholder]")` |

Token `{{...}}` dirender dengan gaya monospace bergaris putus-putus supaya jelas belum
final. Nilai yang masih berupa token otomatis **tidak** dimasukkan ke JSON-LD dan tidak
dijadikan tautan `mailto:`/`tel:`.

**Aturan isi:** ganti token hanya dengan data yang dapat dipertanggungjawabkan. Jangan
mengisi angka perkiraan, nomor legalitas contoh, nama klien, atau testimoni tanpa
dasar dan izin tertulis.

## Daftar periksa sebelum publikasi

### 1. Identitas perusahaan — `src/config/company.ts`

- [ ] `legalName`, `shortName`, `wordmark.primary`, `wordmark.secondary` (logo SVG ikut berubah otomatis)
- [ ] `tagline`
- [ ] `foundedYear` — `{{TAHUN_BERDIRI}}`
- [ ] `siteUrl` — saat ini `https://www.example.com`
- [ ] `allowIndexing` — `false` untuk staging, `true` untuk produksi
- [ ] `contact`: `{{EMAIL_PERUSAHAAN}}`, `{{NOMOR_TELEPON}}`, `{{NOMOR_TELEPON_E164}}`, `{{NOMOR_WHATSAPP}}`, `{{JAM_OPERASIONAL}}`
- [ ] `address`: `{{ALAMAT_JALAN}}`, `{{KELURAHAN_KECAMATAN}}`, `{{KOTA}}`, `{{PROVINSI}}`, `{{KODE_POS}}`
- [ ] `legal`: `{{NIB}}`, `{{NPWP}}`, `{{NOMOR_AKTA_PENDIRIAN}}`, `{{NOMOR_SK_KEMENKUMHAM}}`, `{{KODE_KBLI}}`, `{{NOMOR_SERTIFIKAT_BADAN_USAHA}}`
- [ ] `social` — daftar tautan media sosial resmi (saat ini kosong)

### 2. Konten — `src/content/id.ts`

- [ ] **Hero, strip kredibilitas:** `{{TAHUN_BERDIRI}}`, `{{JUMLAH_EVENT}}`, `{{JUMLAH_KLIEN}}`, `{{JUMLAH_PROVINSI}}`
- [ ] **Naskah (copy):** judul hero, narasi Tentang Kami, visi, misi, nilai kerja, deskripsi layanan, dan metodologi adalah draf — tinjau agar sesuai kondisi perusahaan yang sebenarnya
- [ ] **Portofolio:** enam kartu berjudul generik dengan skala `{{JUMLAH_PESERTA}}` — ganti dengan proyek aktual; hapus `placeholderNotice` setelahnya
- [ ] **Template studi kasus** (`portfolio.details`): `{{NAMA_KLIEN}}`, `{{KOTA_PELAKSANAAN}}`, `{{BULAN_TAHUN}}`, `{{JUMLAH_HARI}}`, `{{JUMLAH_PESERTA}}`, `{{JUMLAH_SESI}}`, `{{SKOR_KEPUASAN}}`, serta teks petunjuk pada Latar belakang / Tantangan / Pendekatan dan `templateNotice`
- [ ] **Kapabilitas & Legalitas:**
  - Pengadaan: `{{JUMLAH_PAKET_PENGADAAN}}`, `{{METODE_PENGADAAN}}`, `{{STATUS_AKUN_PENYEDIA}}`, `{{TAUTAN_DAFTAR_PENGALAMAN}}`
  - K3: `{{SERTIFIKASI_K3}}`, `{{JUMLAH_PERSONEL_K3}}`, `{{STATUS_DOKUMEN_K3}}`, `{{STATUS_PROSEDUR_DARURAT}}`
  - Asuransi: `{{PENYEDIA_ASURANSI}}`, `{{JENIS_PERTANGGUNGAN}}`, `{{NILAI_PERTANGGUNGAN}}`
  - Dokumen tender: `{{STATUS_DOKUMEN_PAJAK}}`, `{{STATUS_LAPORAN_KEUANGAN}}`, `{{STATUS_PAKTA_INTEGRITAS}}`, `{{STATUS_DUKUNGAN_BANK}}`, `{{STATUS_DAFTAR_TENAGA_AHLI}}`
  - Hapus baris yang tidak relevan dan `placeholderNotice` setelah semua terisi
- [ ] **Klien & Mitra:** 12 kotak "Logo Klien" (`clients.slots`) dan catatan `clients.note` — pasang logo hanya dengan izin tertulis; tinjau juga kalimat `clients.title` dan `clients.intro`
- [ ] **Tim Kepemimpinan:** `{{NAMA_PIMPINAN_1..4}}`, `{{PROFIL_PIMPINAN_1..4}}`, inisial, dan jabatan
- [ ] **Footer:** `{{PERNYATAAN_KEPATUHAN}}` dan hapus `complianceHint`
- [ ] **Formulir:** pernyataan privasi (`contact.form.privacy`) disesuaikan dengan kebijakan perusahaan

### 3. Gambar — lihat `IMAGES.md`

- [ ] Sembilan foto di `public/images/` (hero, tentang, enam portofolio, latar kontak)
- [ ] Perbarui `alt` di `src/config/images.ts` sesuai isi foto
- [ ] Setelah dokumentasi asli proyek dipasang, setel `isIllustrative={false}` pada kartu terkait

### 4. Formulir — `src/lib/submit-inquiry.ts`

- [ ] `submitInquiry()` saat ini **hanya simulasi**: tidak ada data yang dikirim. Petunjuk penyambungan ada di komentar file tersebut
- [ ] Tambahkan validasi sisi server, proteksi spam, dan pembatasan laju

### 5. Pemeriksaan akhir

- [ ] `npm run placeholders` tidak lagi menampilkan token `{{...}}`
- [ ] `document.querySelectorAll("[data-placeholder]").length` bernilai 0 untuk elemen konten (atribut pada logo/nama perusahaan boleh dihapus dari komponen setelah nama final)
- [ ] `npm run lint`, `npm run typecheck`, `npm run build` lolos

## Gambar dan label "Visual ilustrasi"

- Semua gambar dipanggil lewat `<SiteImage>` dari path lokal; tidak ada URL eksternal.
- Bila file belum ada, `<ImagePlaceholder>` merender kotak abu-abu dengan rasio terkunci dan deskripsi foto.
- `<PortfolioCard>` punya prop `isIllustrative` (default `true`) yang menampilkan label "Visual ilustrasi" di pojok gambar. Setel `false` di `src/components/sections/PortfolioExplorer.tsx` ketika foto tersebut sudah merupakan dokumentasi asli.

## Menambah Bahasa Inggris

1. Salin `src/content/id.ts` menjadi `src/content/en.ts` dan terjemahkan (tipe `SiteContent` menjaga strukturnya tetap sama).
2. Daftarkan `en` di `src/content/index.ts`.
3. Pindahkan `src/app/page.tsx` ke `src/app/[locale]/page.tsx`, panggil `getContent(locale)`, dan tambahkan `alternates.languages` pada metadata.

## Catatan desain dan aksesibilitas

- Palet: netral + navy, satu aksen tembaga khusus tombol CTA. Token warna ada di `src/app/globals.css`.
- Tipografi: Source Serif 4 (heading) dan Public Sans (body) melalui `next/font` — font di-host sendiri saat build.
- Elemen signature: nomor section berjenis serif dengan garis ukur tipis, serta garis vertikal halus di bidang navy.
- Animasi masuk memakai CSS scroll-driven animation tanpa JavaScript; nonaktif pada `prefers-reduced-motion` dan pada peramban yang belum mendukung (konten tetap langsung tampil).
- Skip link, fokus keyboard yang terlihat, hierarki heading berjenjang, modal `<dialog>` bawaan, serta formulir dengan ringkasan galat dan `aria-describedby`.
