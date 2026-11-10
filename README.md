# Website Company Profile — Event Organizer Korporat & Kenegaraan

Website satu halaman untuk perusahaan event organizer yang menyasar korporasi, BUMN,
dan instansi pemerintah. Dibuat dengan **HTML, CSS, dan JavaScript biasa** — tanpa
Node.js, tanpa proses build, tanpa instalasi apa pun.

> **Status: versi demo berisi DATA DUMMY.** Angka, nomor legalitas, nama pimpinan,
> alamat, kontak, daftar klien, dan studi kasus di halaman ini karangan untuk keperluan
> tampilan, bukan data perusahaan nyata. Halaman diberi tanda `noindex` agar tidak
> muncul di mesin pencari. **Jangan dipakai untuk penawaran atau tender sebelum seluruh
> data diganti dengan data resmi.**

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

## Data dummy dan cara menggantinya

Setiap nilai dummy di `index.html` dibungkus elemen beratribut `data-placeholder="..."`,
misalnya `<span data-placeholder="NIB">1234567890123</span>`. Cari `data-placeholder`
(Ctrl+F) untuk menemukan semuanya, ganti isinya dengan data resmi, lalu hapus atributnya.

## Daftar periksa sebelum dipakai sungguhan

- [ ] **Nama perusahaan** `PT Sinergi Acara Nusantara` (placeholder) — cari-ganti di `index.html`, termasuk teks logo `Sinergi Acara` / `NUSANTARA` di dua `<svg>` (header dan footer) dan tagline
- [ ] **Hero:** tahun berdiri, jumlah acara, jumlah klien, jumlah provinsi
- [ ] **Naskah:** narasi Tentang Kami, visi, misi, nilai kerja, layanan, metodologi — tinjau agar sesuai kondisi perusahaan
- [ ] **Portofolio:** enam studi kasus dan isi modal (klien, lokasi, waktu, angka hasil) seluruhnya karangan
- [ ] **Legalitas:** NIB, NPWP, akta, SK, KBLI, sertifikat, pengalaman pengadaan, K3, asuransi, dokumen tender — semua dummy; nomor resmi wajib menggantikannya
- [ ] **Klien:** 12 label sektor anonim; nama atau logo institusi hanya dipasang dengan izin tertulis
- [ ] **Tim:** empat nama dan profil fiktif
- [ ] **Kontak dan alamat:** email, telepon, jam operasional, alamat kantor fiktif — setelah diisi, jadikan tautan `mailto:` / `tel:`
- [ ] **Footer:** pernyataan kepatuhan, NIB, NPWP
- [ ] **Pertanyaan umum dan langkah tindak lanjut:** lima tanya-jawab serta janji "dihubungi paling lambat satu hari kerja" adalah draf — sesuaikan dengan praktik perusahaan
- [ ] **Bilah informasi atas:** telepon dan email dummy tampil juga di sini
- [ ] **Foto:** foto sementara yang lisensinya belum diverifikasi (lihat `IMAGES.md`) — ganti dengan dokumentasi sendiri atau foto stok berlisensi jelas, lalu hapus label `Visual ilustrasi` (baris `<span class="badge">`)
- [ ] **Formulir** (`assets/js/main.js`): `submitInquiry()` masih simulasi — menampilkan pesan sukses tetapi tidak mengirim apa pun. GitHub Pages tidak punya server, jadi sambungkan ke layanan formulir atau API perusahaan (petunjuk ada di komentar fungsi)
- [ ] **SEO** (`<head>`): hapus `noindex`, aktifkan `canonical` / `og:url` / `og:image` dengan domain final, lengkapi JSON-LD
- [ ] **Pemeriksaan akhir:** Ctrl+F `data-placeholder` tidak lagi menemukan data yang belum ditinjau

## Catatan desain dan aksesibilitas

- Palet netral dengan navy sebagai warna utama dan satu aksen tembaga khusus tombol ajakan.
- Font Source Serif 4 (judul) dan Public Sans (isi) dari Google Fonts.
- Elemen khas: nomor section berjenis serif dengan garis tipis, dan garis vertikal halus di bidang navy.
- Animasi masuk saat scroll memakai CSS murni; nonaktif bila pengguna meminta gerak dikurangi, dan pada peramban yang belum mendukung konten langsung tampil.
- Tautan lewati-ke-konten, fokus keyboard yang terlihat, hierarki judul berjenjang, modal `<dialog>` bawaan, dan formulir dengan ringkasan galat.
