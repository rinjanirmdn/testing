# Daftar Gambar yang Dibutuhkan

Semua gambar ditaruh di `public/images/` dengan **nama file persis** seperti di bawah.
Selama file belum ada, situs menampilkan kotak placeholder abu-abu berisi deskripsi
foto. Begitu file ditaruh dan situs di-build ulang, foto tampil otomatis — tidak ada
kode yang perlu diubah.

Sumber kebenaran daftar ini adalah `src/config/images.ts`. Bila menambah atau
mengganti gambar, perbarui file tersebut dan dokumen ini.

## Ketentuan umum

- Format: JPG (kualitas 80–85) atau ganti ekstensi di `src/config/images.ts` bila memakai WebP/AVIF.
- Ukuran file: usahakan di bawah 500 KB per gambar; `next/image` akan membuat versi responsifnya.
- Pangkas (crop) sesuai rasio yang tertera agar komposisi tidak terpotong tak terduga.
- Hindari foto yang memuat logo merek, wajah tokoh yang dikenali, atau atribut instansi nyata.
- Periksa lisensi setiap foto stok (boleh dipakai komersial, tanpa kewajiban atribusi atau penuhi atribusinya).
- Setelah foto dipasang, sesuaikan `alt` di `src/config/images.ts` agar menggambarkan isi foto yang sebenarnya.

## Daftar gambar

| Key (`images.ts`) | File yang diharapkan | Rasio | Ukuran minimum (px) | Dipakai di | Saran kata kunci pencarian |
| --- | --- | --- | --- | --- | --- |
| `hero` | `public/images/hero/hero-konferensi.jpg` | 4:5 | 1600 × 2000 | Hero, kolom kanan | `conference hall stage`, `formal ballroom event`, `corporate conference audience`, `auditorium seminar` |
| `about` | `public/images/about/tim-perencanaan.jpg` | 4:3 | 1600 × 1200 | Tentang Kami | `event planning team meeting`, `floor plan discussion`, `project team office planning` |
| `portfolioKonferensi` | `public/images/portfolio/konferensi.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio + modal studi kasus | `business conference`, `plenary session`, `seminar audience LED screen` |
| `portfolioSeremonial` | `public/images/portfolio/seremonial.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `inauguration ceremony stage`, `ribbon cutting`, `official ceremony podium` |
| `portfolioPeluncuran` | `public/images/portfolio/peluncuran.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `product launch event stage`, `keynote stage lighting`, `corporate launch screen` |
| `portfolioPameran` | `public/images/portfolio/pameran.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `exhibition hall booths`, `trade show floor`, `expo visitors` |
| `portfolioGathering` | `public/images/portfolio/gathering.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `town hall meeting employees`, `company gathering audience`, `corporate all hands` |
| `portfolioHybrid` | `public/images/portfolio/hybrid.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `live streaming control room`, `video switcher operator`, `broadcast production desk` |
| `ctaBackground` | `public/images/cta/latar-panggung.jpg` | 21:9 | 2400 × 1030 | Latar section Kontak (di bawah overlay gelap) | `empty stage lights`, `event venue setup`, `stage truss dark` |

Catatan per gambar:

- **`hero`** — tampil potret di desktop, dan dipangkas menjadi 4:3 / 16:9 di mobile dan tablet. Letakkan subjek utama di tengah bingkai.
- **`ctaBackground`** — hanya dekoratif (alt kosong) dan tertutup overlay navy 86–97%. Pilih foto dengan sedikit detail.
- **Portofolio** — idealnya diganti dengan dokumentasi asli proyek. Selama masih foto stok, biarkan label "Visual ilustrasi" tampil (lihat README, bagian `isIllustrative`).

## Gambar Open Graph

Tidak perlu file. `src/app/opengraph-image.tsx` membuat gambar 1200 × 630 otomatis dari
nama dan tagline di `src/config/company.ts`. Untuk desain khusus, hapus file tersebut dan
taruh `src/app/opengraph-image.jpg` (1200 × 630).

## Logo klien

Client wall saat ini berupa kotak "Logo Klien". Logo institusi hanya boleh dipasang
setelah ada persetujuan tertulis dari pemiliknya. Saat itu tiba, tambahkan folder
`public/images/clients/` dan daftarkan tiap logo di `src/config/images.ts`.
