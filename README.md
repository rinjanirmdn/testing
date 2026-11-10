# Website Company Profile — Event Organizer Korporat & Kenegaraan

Website satu halaman untuk perusahaan event organizer yang menyasar korporasi, BUMN,
dan instansi pemerintah. Dibuat dengan **HTML, CSS, dan JavaScript biasa** — tanpa
Node.js, tanpa proses build, tanpa instalasi apa pun.

> **Status: kerangka dengan konten placeholder.** Nama perusahaan, angka, nomor
> legalitas, klien, tim, dan studi kasus belum berisi data nyata. Halaman masih diberi
> tanda `noindex` agar tidak muncul di mesin pencari.

## Isi repositori

```
index.html            seluruh isi halaman (teks, struktur, SEO)
assets/css/style.css  tampilan — warna dan font ada di bagian :root paling atas
assets/js/main.js     menu mobile, filter portofolio, modal studi kasus, formulir
assets/images/        tempat menaruh foto (lihat IMAGES.md)
assets/favicon.svg    ikon tab peramban
```

## Melihat dan menayangkan

- **Di komputer:** klik dua kali `index.html`.
- **GitHub Pages:** Settings → Pages → Source: *Deploy from a branch*, pilih branch ini
  dan folder `/ (root)`. Setiap push langsung tayang di
  `https://<nama-akun>.github.io/<nama-repo>/` dalam satu sampai dua menit.

## Cara mengedit

Buka `index.html` di editor teks apa pun, ubah teksnya, simpan, lalu push. Setiap
section diberi komentar pembatas, misalnya `<!-- ===== 02 LAYANAN ===== -->`.

## Placeholder

Ada tiga penanda, semuanya bisa dicari dengan Ctrl+F di `index.html`:

| Penanda | Arti |
| --- | --- |
| `{{NAMA_TOKEN}}` | Data faktual yang belum diisi. Tampil di halaman dengan gaya monospace bergaris putus-putus. |
| `data-placeholder="..."` | Atribut pada setiap elemen yang isinya belum final. |
| `PLACEHOLDER` | Komentar pada bagian teknis yang harus ditinjau (SEO, formulir). |

Untuk mengisi sebuah token, ganti seluruh elemennya, misalnya
`<span class="ph" data-placeholder="NIB">{{NIB}}</span>` menjadi nomor yang sebenarnya.

**Aturan isi:** isi hanya dengan data yang dapat dipertanggungjawabkan. Jangan memasang
angka perkiraan, nomor legalitas contoh, nama atau logo klien, maupun testimoni tanpa
dasar dan izin tertulis.

## Daftar periksa sebelum dipublikasikan

### Identitas perusahaan
- [ ] Nama `PT Sinergi Acara Nusantara` — cari-ganti di `index.html` (judul, metadata, footer, JSON-LD)
- [ ] Teks logo `Sinergi Acara` dan `NUSANTARA` di dalam `<svg>` logo (dua tempat: header dan footer); sesuaikan angka lebar pada `viewBox` bila panjang nama berubah
- [ ] Tagline `Penyelenggara Acara Korporat dan Kenegaraan`
- [ ] Kontak: `{{EMAIL_PERUSAHAAN}}`, `{{NOMOR_TELEPON}}`, `{{JAM_OPERASIONAL}}` — jadikan tautan `mailto:` / `tel:` setelah diisi
- [ ] Alamat: `{{ALAMAT_JALAN}}`, `{{KELURAHAN_KECAMATAN}}`, `{{KOTA}}`, `{{PROVINSI}}`, `{{KODE_POS}}`

### Hero
- [ ] `{{TAHUN_BERDIRI}}`, `{{JUMLAH_EVENT}}`, `{{JUMLAH_KLIEN}}`, `{{JUMLAH_PROVINSI}}`

### Naskah
- [ ] Judul hero, narasi Tentang Kami, visi, misi, nilai kerja, deskripsi layanan, dan metodologi adalah draf — tinjau agar sesuai kondisi perusahaan yang sebenarnya
- [ ] Kalimat section Klien ("Institusi yang telah bekerja bersama kami", "Kami melayani kementerian…") hanya dipertahankan bila memang benar

### Portofolio
- [ ] Enam kartu berjudul generik dengan skala `{{JUMLAH_PESERTA}}` — ganti dengan proyek aktual
- [ ] Template studi kasus (blok `<dialog id="studi-kasus">`): `{{NAMA_KLIEN}}`, `{{KOTA_PELAKSANAAN}}`, `{{BULAN_TAHUN}}`, `{{JUMLAH_HARI}}`, `{{JUMLAH_PESERTA}}`, `{{JUMLAH_SESI}}`, `{{SKOR_KEPUASAN}}`, dan teks petunjuk Latar belakang / Tantangan / Pendekatan
- [ ] Hapus label `Visual ilustrasi` (baris `<span class="badge">`) pada kartu yang fotonya sudah dokumentasi asli
- [ ] Hapus catatan "contoh format" di atas grid

### Kapabilitas & Legalitas
- [ ] Badan usaha: `{{NIB}}`, `{{NPWP}}`, `{{NOMOR_AKTA_PENDIRIAN}}`, `{{NOMOR_SK_KEMENKUMHAM}}`, `{{KODE_KBLI}}`, `{{NOMOR_SERTIFIKAT_BADAN_USAHA}}`
- [ ] Pengadaan: `{{JUMLAH_PAKET_PENGADAAN}}`, `{{METODE_PENGADAAN}}`, `{{STATUS_AKUN_PENYEDIA}}`, `{{TAUTAN_DAFTAR_PENGALAMAN}}`
- [ ] K3: `{{SERTIFIKASI_K3}}`, `{{JUMLAH_PERSONEL_K3}}`, `{{STATUS_DOKUMEN_K3}}`, `{{STATUS_PROSEDUR_DARURAT}}`
- [ ] Asuransi: `{{PENYEDIA_ASURANSI}}`, `{{JENIS_PERTANGGUNGAN}}`, `{{NILAI_PERTANGGUNGAN}}`
- [ ] Dokumen tender: `{{STATUS_DOKUMEN_PAJAK}}`, `{{STATUS_LAPORAN_KEUANGAN}}`, `{{STATUS_PAKTA_INTEGRITAS}}`, `{{STATUS_DUKUNGAN_BANK}}`, `{{STATUS_DAFTAR_TENAGA_AHLI}}`
- [ ] Hapus baris yang tidak relevan dan catatan placeholder di atasnya

### Klien, tim, footer
- [ ] 12 kotak `Logo Klien` — pasang logo hanya dengan izin tertulis; hapus catatan di bawahnya
- [ ] Tim: `{{NAMA_PIMPINAN_1..4}}`, `{{PROFIL_PIMPINAN_1..4}}`, inisial, dan jabatan
- [ ] Footer: `{{PERNYATAAN_KEPATUHAN}}` dan hapus kalimat petunjuk di bawahnya

### Foto — lihat `IMAGES.md`
- [ ] Sembilan foto di `assets/images/`, lalu aktifkan baris `<img>` masing-masing

### Formulir — `assets/js/main.js`
- [ ] Fungsi `submitInquiry()` saat ini **hanya simulasi**: formulir menampilkan pesan sukses tetapi tidak mengirim apa pun. GitHub Pages tidak punya server, jadi formulir perlu disambungkan ke layanan formulir atau API perusahaan; petunjuknya ada di komentar fungsi tersebut
- [ ] Sesuaikan pernyataan privasi di bawah formulir

### SEO — bagian `<head>` di `index.html`
- [ ] Hapus `<meta name="robots" content="noindex, nofollow">` saat situs siap publik
- [ ] Aktifkan `canonical`, `og:url`, dan `og:image` dengan domain final
- [ ] Lengkapi JSON-LD (alamat, telepon, email, url) dengan data resmi

### Pemeriksaan akhir
- [ ] Ctrl+F `{{` di `index.html` tidak menemukan apa pun
- [ ] Ctrl+F `data-placeholder` hanya tersisa pada elemen yang memang sudah ditinjau

## Catatan desain dan aksesibilitas

- Palet netral dengan navy sebagai warna utama dan satu aksen tembaga khusus tombol ajakan.
- Font Source Serif 4 (judul) dan Public Sans (isi) dari Google Fonts.
- Elemen khas: nomor section berjenis serif dengan garis tipis, dan garis vertikal halus di bidang navy.
- Animasi masuk saat scroll memakai CSS murni; nonaktif bila pengguna meminta gerak dikurangi, dan pada peramban yang belum mendukung konten langsung tampil.
- Tautan lewati-ke-konten, fokus keyboard yang terlihat, hierarki judul berjenjang, modal `<dialog>` bawaan, dan formulir dengan ringkasan galat.
