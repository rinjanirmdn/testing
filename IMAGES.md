# Daftar Gambar yang Dibutuhkan

Selama foto belum ada, situs menampilkan kotak placeholder abu-abu berisi deskripsi foto.

Cara memasang satu foto:

1. Taruh file di `assets/images/` dengan **nama file persis** seperti di tabel.
2. Buka `index.html`, cari nama file tersebut. Di dekatnya ada baris `<img ...>` yang
   diapit tanda komentar `<!-- FOTO: ...` dan `-->`. Hapus kedua tanda komentar itu
   sehingga baris `<img>` aktif.
3. Sesuaikan teks `alt` agar menggambarkan isi foto yang sebenarnya.

## Ketentuan umum

- Format: JPG (kualitas 80–85). Bila memakai WebP, sesuaikan nama file di `index.html`.
- Ukuran file: usahakan di bawah 400 KB per gambar — foto ditampilkan apa adanya, tanpa optimasi otomatis.
- Pangkas (crop) sesuai rasio yang tertera agar komposisi tidak terpotong tak terduga.
- Hindari foto yang memuat logo merek, wajah tokoh yang dikenali, atau atribut instansi nyata.
- Periksa lisensi setiap foto stok (boleh dipakai komersial, tanpa kewajiban atribusi atau penuhi atribusinya).

## Daftar gambar

| Kunci | File yang diharapkan | Rasio | Ukuran minimum (px) | Dipakai di | Saran kata kunci pencarian |
| --- | --- | --- | --- | --- | --- |
| `hero` | `assets/images/hero/hero-konferensi.jpg` | 4:5 | 1600 × 2000 | Hero, kolom kanan | `conference hall stage`, `formal ballroom event`, `corporate conference audience`, `auditorium seminar` |
| `about` | `assets/images/about/tim-perencanaan.jpg` | 4:3 | 1600 × 1200 | Tentang Kami | `event planning team meeting`, `floor plan discussion`, `project team office planning` |
| `konferensi` | `assets/images/portfolio/konferensi.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio + modal studi kasus | `business conference`, `plenary session`, `seminar audience LED screen` |
| `seremonial` | `assets/images/portfolio/seremonial.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `inauguration ceremony stage`, `ribbon cutting`, `official ceremony podium` |
| `peluncuran` | `assets/images/portfolio/peluncuran.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `product launch event stage`, `keynote stage lighting`, `corporate launch screen` |
| `pameran` | `assets/images/portfolio/pameran.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `exhibition hall booths`, `trade show floor`, `expo visitors` |
| `gathering` | `assets/images/portfolio/gathering.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `town hall meeting employees`, `company gathering audience`, `corporate all hands` |
| `hybrid` | `assets/images/portfolio/hybrid.jpg` | 3:2 | 1500 × 1000 | Kartu portofolio | `live streaming control room`, `video switcher operator`, `broadcast production desk` |
| `latar-kontak` | `assets/images/cta/latar-panggung.jpg` | 21:9 | 2400 × 1030 | Latar section Kontak (di bawah overlay gelap) | `empty stage lights`, `event venue setup`, `stage truss dark` |

Catatan per gambar:

- **`hero`** — tampil potret di desktop, dan dipangkas menjadi 4:3 / 16:9 di mobile dan tablet. Letakkan subjek utama di tengah bingkai.
- **`latar-kontak`** — hanya dekoratif (alt kosong) dan tertutup overlay navy 86–97%. Pilih foto dengan sedikit detail.
- **Portofolio** — idealnya diganti dengan dokumentasi asli proyek. Selama masih foto stok, biarkan label "Visual ilustrasi" tampil (lihat README).

## Gambar pratinjau tautan (Open Graph)

Belum dipasang. Setelah domain final ada, siapkan `assets/images/og-image.jpg`
(1200 × 630) dan aktifkan baris `og:image` yang dikomentari di bagian `<head>` `index.html`.

## Logo klien

Client wall saat ini berupa kotak "Logo Klien". Logo institusi hanya boleh dipasang
setelah ada persetujuan tertulis dari pemiliknya. Saat itu tiba, taruh file di
`assets/images/clients/` dan ganti isi kotak `logo-slot` di `index.html` dengan `<img>`.
