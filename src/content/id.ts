/**
 * KONTEN BAHASA INDONESIA
 * ---------------------------------------------------------------------------
 * Seluruh teks halaman ada di file ini — tidak ada teks yang di-hardcode di JSX.
 * Untuk menambah Bahasa Inggris: salin file ini menjadi `en.ts`, terjemahkan,
 * lalu daftarkan di `src/content/index.ts`.
 *
 * ATURAN ISI:
 *   - Token "{{NAMA_TOKEN}}" adalah placeholder data faktual (angka, nama,
 *     nomor). Token dirender bertanda dengan `data-placeholder`.
 *   - Jangan mengganti token dengan angka/nama perkiraan. Isi hanya dengan
 *     data yang dapat dipertanggungjawabkan.
 *   - Identitas perusahaan TIDAK ditulis di sini; lihat `src/config/company.ts`.
 */

import type { ImageKey } from "@/config/images";

export type ServiceIcon =
  | "conference"
  | "ceremony"
  | "launch"
  | "exhibition"
  | "gathering"
  | "hybrid"
  | "production";

export type CapabilityIcon = "entity" | "procurement" | "safety" | "insurance" | "documents";

const content = {
  meta: {
    /** Dipakai sebagai <title> beranda: "{nama perusahaan} — {titleSuffix}". */
    titleSuffix: "Penyelenggara Acara Korporat dan Kenegaraan",
    description:
      "Penyelenggara acara untuk korporasi, BUMN, dan instansi pemerintah: rapat kerja, konferensi, seremonial kenegaraan, peluncuran produk, pameran, dan acara hybrid dengan tata kelola yang tertib dan akuntabel.",
    keywords: [
      "event organizer korporat",
      "event organizer BUMN",
      "event organizer pemerintah",
      "penyelenggara rapat kerja",
      "penyelenggara konferensi",
      "seremonial peresmian",
      "event management Indonesia",
    ],
  },

  a11y: {
    skipToContent: "Lewati ke konten utama",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    mainNav: "Navigasi utama",
    footerNav: "Navigasi footer",
    placeholderImage: "Placeholder foto",
    closeDialog: "Tutup",
  },

  nav: {
    items: [
      { label: "Tentang", href: "#tentang" },
      { label: "Layanan", href: "#layanan" },
      { label: "Metodologi", href: "#metodologi" },
      { label: "Portofolio", href: "#portofolio" },
      { label: "Legalitas", href: "#kapabilitas" },
      { label: "Tim", href: "#tim" },
      { label: "Kontak", href: "#kontak" },
    ],
    cta: { label: "Ajukan Penawaran", href: "#kontak" },
  },

  hero: {
    eyebrow: "Event Management untuk Korporasi, BUMN, dan Pemerintah",
    title: "Penyelenggara acara korporat dan kenegaraan yang tertib, terukur, dan akuntabel.",
    subtitle:
      "Kami mendampingi korporasi, BUMN, dan instansi pemerintah sejak perencanaan hingga pelaporan, dengan tata kelola yang rapi dan administrasi yang dapat dipertanggungjawabkan.",
    primaryCta: { label: "Ajukan Penawaran", href: "#kontak" },
    secondaryCta: { label: "Lihat Portofolio", href: "#portofolio" },
    image: "hero" as ImageKey,
    credibilityLabel: "Ringkasan kredibilitas",
    credibility: [
      { value: "{{TAHUN_BERDIRI}}", label: "Tahun berdiri" },
      { value: "{{JUMLAH_EVENT}}+", label: "Acara terselenggara" },
      { value: "{{JUMLAH_KLIEN}}+", label: "Klien institusi" },
      { value: "{{JUMLAH_PROVINSI}}", label: "Provinsi jangkauan pelaksanaan" },
    ],
  },

  about: {
    id: "tentang",
    number: "01",
    eyebrow: "Tentang Kami",
    title: "Mitra pelaksana yang memahami tata cara, protokol, dan pertanggungjawaban.",
    paragraphs: [
      "Acara institusi bukan sekadar soal panggung yang megah. Di baliknya ada protokol yang harus dihormati, anggaran yang harus dipertanggungjawabkan, dan reputasi lembaga yang harus dijaga.",
      "Kami bekerja dengan cara yang dikenal baik oleh organisasi besar: perencanaan tertulis, alur persetujuan yang jelas, satu penanggung jawab proyek, serta laporan akhir yang lengkap dan mudah diperiksa.",
    ],
    image: "about" as ImageKey,
    visionLabel: "Visi",
    vision:
      "Menjadi mitra penyelenggara acara yang dipercaya institusi di Indonesia karena ketertiban proses dan ketepatan pelaksanaan.",
    missionLabel: "Misi",
    mission: [
      "Menyelenggarakan acara yang selaras dengan tujuan dan protokol lembaga.",
      "Menjaga transparansi anggaran dan kelengkapan administrasi di setiap tahap.",
      "Mengutamakan keselamatan peserta, tamu, dan seluruh petugas acara.",
      "Menyampaikan pelaporan yang lengkap, tepat waktu, dan dapat diaudit.",
    ],
    valuesLabel: "Nilai Kerja",
    values: [
      {
        title: "Tertib",
        description: "Setiap pekerjaan mengikuti rencana tertulis, jadwal, dan daftar periksa yang disepakati.",
      },
      {
        title: "Akuntabel",
        description: "Setiap pengeluaran dan keputusan terdokumentasi serta dapat ditelusuri.",
      },
      {
        title: "Presisi",
        description: "Detail protokoler, urutan acara, dan teknis produksi diperiksa berlapis sebelum hari pelaksanaan.",
      },
      {
        title: "Siaga",
        description: "Rencana cadangan disiapkan untuk setiap titik kritis, dari cuaca hingga kelistrikan.",
      },
    ],
  },

  services: {
    id: "layanan",
    number: "02",
    eyebrow: "Layanan",
    title: "Lingkup layanan untuk kebutuhan acara institusi.",
    intro:
      "Setiap layanan dapat dikerjakan sebagai paket menyeluruh maupun sebagai dukungan pada bagian tertentu, menyesuaikan struktur kepanitiaan internal Anda.",
    items: [
      {
        icon: "conference" as ServiceIcon,
        title: "Rapat Kerja & Konferensi",
        description:
          "Rakernas, rapat pimpinan, seminar, dan konferensi: pengelolaan venue, registrasi, persidangan, hingga notulensi.",
      },
      {
        icon: "ceremony" as ServiceIcon,
        title: "Seremonial Kenegaraan & Peresmian",
        description:
          "Peresmian, penandatanganan, dan upacara resmi dengan koordinasi protokoler serta pengaturan tamu VIP/VVIP.",
      },
      {
        icon: "launch" as ServiceIcon,
        title: "Peluncuran Produk Korporat",
        description:
          "Konsep, tata panggung, dan alur acara peluncuran yang menjaga pesan korporat tetap tegas dan terarah.",
      },
      {
        icon: "exhibition" as ServiceIcon,
        title: "Pameran & Exhibition",
        description:
          "Perancangan dan pembangunan stan, pengelolaan peserta pameran, serta pengaturan arus pengunjung.",
      },
      {
        icon: "gathering" as ServiceIcon,
        title: "Gathering & Townhall Karyawan",
        description:
          "Pertemuan internal skala besar yang tertata, mulai dari townhall manajemen hingga apresiasi karyawan.",
      },
      {
        icon: "hybrid" as ServiceIcon,
        title: "Hybrid & Virtual Event",
        description:
          "Siaran langsung multi-kamera, platform peserta daring, dan integrasi interaksi antara lokasi fisik dan virtual.",
      },
      {
        icon: "production" as ServiceIcon,
        title: "Dukungan Produksi Panggung & Multimedia",
        description:
          "Tata panggung, tata suara, tata cahaya, layar LED, dan konten multimedia sebagai dukungan bagi panitia Anda.",
      },
    ],
    other: {
      title: "Kebutuhan di luar daftar ini?",
      description: "Sampaikan kerangka acuan kerja Anda. Kami akan menyusun lingkup pekerjaan yang sesuai.",
      cta: { label: "Konsultasikan kebutuhan", href: "#kontak" },
    },
  },

  methodology: {
    id: "metodologi",
    number: "03",
    eyebrow: "Metodologi Kerja",
    title: "Lima tahap kerja dengan keluaran yang jelas di setiap tahap.",
    intro:
      "Setiap tahap ditutup dengan dokumen yang disetujui bersama, sehingga panitia selalu mengetahui posisi pekerjaan dan langkah berikutnya.",
    stepLabel: "Tahap",
    outputLabel: "Keluaran",
    steps: [
      {
        title: "Konsultasi",
        description: "Memahami tujuan acara, pemangku kepentingan, ketentuan protokoler, dan batasan anggaran.",
        output: "Ringkasan kebutuhan",
      },
      {
        title: "Perencanaan & Anggaran",
        description: "Menyusun konsep, rencana kerja, dan rincian anggaran biaya yang transparan per pos pekerjaan.",
        output: "Proposal teknis dan RAB",
      },
      {
        title: "Pra-Produksi",
        description: "Survei lokasi, perizinan, koordinasi vendor, gladi, serta penyusunan rencana keselamatan.",
        output: "Rundown, denah, dan rencana K3",
      },
      {
        title: "Eksekusi",
        description: "Pelaksanaan di bawah satu komando dengan pemantauan waktu dan pengendalian mutu di lapangan.",
        output: "Acara terselenggara sesuai rundown",
      },
      {
        title: "Pelaporan & Evaluasi",
        description: "Menyerahkan laporan pelaksanaan, dokumentasi, dan pertanggungjawaban administrasi.",
        output: "Laporan akhir dan dokumentasi",
      },
    ],
  },

  portfolio: {
    id: "portofolio",
    number: "04",
    eyebrow: "Portofolio",
    title: "Studi kasus berdasarkan jenis acara.",
    intro: "Gambaran lingkup pekerjaan yang kami tangani pada berbagai jenis acara institusi.",
    placeholderNotice:
      "Catatan: seluruh studi kasus di bawah ini adalah contoh format. Isinya akan diganti dengan proyek aktual beserta dokumentasinya.",
    filterLabel: "Saring berdasarkan kategori",
    allLabel: "Semua",
    illustrativeLabel: "Visual ilustrasi",
    scaleLabel: "Skala",
    scopeLabel: "Ruang lingkup",
    openDetailLabel: "Lihat studi kasus",
    resultCount: "{count} studi kasus ditampilkan",
    categories: [
      { id: "konferensi", label: "Rapat Kerja & Konferensi" },
      { id: "seremonial", label: "Seremonial & Peresmian" },
      { id: "peluncuran", label: "Peluncuran Produk" },
      { id: "pameran", label: "Pameran" },
      { id: "gathering", label: "Gathering & Townhall" },
      { id: "hybrid", label: "Hybrid & Virtual" },
    ],
    items: [
      {
        id: "rakernas-sektor-energi",
        category: "konferensi",
        title: "Rapat Kerja Nasional — Sektor Energi",
        scale: "{{JUMLAH_PESERTA}} peserta",
        scope: ["Manajemen venue", "Registrasi peserta", "Produksi panggung", "Akomodasi & transportasi"],
        image: "portfolioKonferensi" as ImageKey,
        hasDetail: true,
      },
      {
        id: "peresmian-fasilitas-infrastruktur",
        category: "seremonial",
        title: "Peresmian Fasilitas Infrastruktur — Instansi Pemerintah",
        scale: "{{JUMLAH_PESERTA}} undangan",
        scope: ["Koordinasi protokoler", "Tata panggung seremonial", "Pengaturan tamu VIP", "Dokumentasi"],
        image: "portfolioSeremonial" as ImageKey,
        hasDetail: false,
      },
      {
        id: "peluncuran-layanan-digital",
        category: "peluncuran",
        title: "Peluncuran Layanan Digital — Sektor Perbankan",
        scale: "{{JUMLAH_PESERTA}} undangan",
        scope: ["Konsep acara", "Konten multimedia", "Tata cahaya & suara", "Pengelolaan media"],
        image: "portfolioPeluncuran" as ImageKey,
        hasDetail: false,
      },
      {
        id: "pameran-inovasi-layanan-publik",
        category: "pameran",
        title: "Pameran Inovasi Layanan Publik — Tingkat Nasional",
        scale: "{{JUMLAH_PESERTA}} pengunjung",
        scope: ["Desain & konstruksi stan", "Pengelolaan peserta pameran", "Arus pengunjung", "Keamanan area"],
        image: "portfolioPameran" as ImageKey,
        hasDetail: false,
      },
      {
        id: "townhall-karyawan-tahunan",
        category: "gathering",
        title: "Townhall Karyawan Tahunan — Sektor Telekomunikasi",
        scale: "{{JUMLAH_PESERTA}} karyawan",
        scope: ["Rundown & pengisi acara", "Produksi panggung", "Konsumsi", "Siaran ke kantor wilayah"],
        image: "portfolioGathering" as ImageKey,
        hasDetail: false,
      },
      {
        id: "forum-koordinasi-hybrid",
        category: "hybrid",
        title: "Forum Koordinasi Hybrid — Lintas Lembaga",
        scale: "{{JUMLAH_PESERTA}} peserta luring dan daring",
        scope: ["Siaran multi-kamera", "Platform peserta daring", "Penerjemahan simultan", "Rekaman & arsip"],
        image: "portfolioHybrid" as ImageKey,
        hasDetail: false,
      },
    ],

    /**
     * TEMPLATE STUDI KASUS LENGKAP
     * Salin struktur ini untuk setiap proyek aktual. Kunci objek = `id` item di atas.
     */
    details: {
      "rakernas-sektor-energi": {
        templateNotice: "Template studi kasus — seluruh isi di bawah adalah contoh struktur, bukan data proyek nyata.",
        facts: [
          { label: "Klien", value: "{{NAMA_KLIEN}}" },
          { label: "Lokasi", value: "{{KOTA_PELAKSANAAN}}" },
          { label: "Waktu", value: "{{BULAN_TAHUN}}" },
          { label: "Durasi", value: "{{JUMLAH_HARI}} hari" },
          { label: "Peserta", value: "{{JUMLAH_PESERTA}} orang" },
        ],
        sections: [
          {
            heading: "Latar belakang",
            body: "Jelaskan konteks acara dalam dua sampai tiga kalimat: siapa penyelenggaranya, apa tujuan rapat kerja, dan siapa saja yang hadir.",
          },
          {
            heading: "Tantangan",
            body: "Uraikan kendala utama yang harus dijawab, misalnya jumlah peserta dari banyak daerah, jadwal pimpinan yang padat, atau waktu persiapan yang singkat.",
          },
          {
            heading: "Pendekatan",
            body: "Terangkan cara kerja yang dipilih: struktur tim, pembagian zona, alur registrasi, pengaturan sidang pleno dan sidang komisi, serta rencana cadangan.",
          },
        ],
        scopeHeading: "Ruang lingkup pekerjaan",
        scope: [
          "Survei dan pengelolaan venue utama serta ruang sidang komisi",
          "Sistem registrasi dan pencetakan tanda pengenal peserta",
          "Tata panggung, tata suara, tata cahaya, dan layar LED",
          "Pengaturan akomodasi serta transportasi peserta",
          "Koordinasi protokoler untuk pimpinan dan tamu undangan",
          "Dokumentasi foto, video, dan laporan pelaksanaan",
        ],
        resultsHeading: "Hasil",
        results: [
          { value: "{{JUMLAH_PESERTA}}", label: "Peserta terlayani" },
          { value: "{{JUMLAH_SESI}}", label: "Sesi sidang terselenggara" },
          { value: "{{SKOR_KEPUASAN}}", label: "Skor kepuasan peserta" },
        ],
        resultsNote: "Cantumkan hanya angka yang bersumber dari laporan pelaksanaan resmi.",
      },
    },
  },

  capabilities: {
    id: "kapabilitas",
    number: "05",
    eyebrow: "Kapabilitas & Legalitas",
    title: "Informasi untuk panitia pengadaan.",
    intro:
      "Bagian ini merangkum kelengkapan badan usaha dan kesiapan administrasi kami untuk mengikuti proses pengadaan barang dan jasa.",
    placeholderNotice:
      "Catatan: nilai bertanda placeholder pada bagian ini belum diisi dan akan dilengkapi dengan data resmi perusahaan.",
    groups: [
      {
        icon: "entity" as CapabilityIcon,
        title: "Kelengkapan Badan Usaha",
        description: "Identitas dan perizinan badan usaha sesuai ketentuan yang berlaku.",
        // Nilai `companyLegal` diambil dari src/config/company.ts (kunci di objek `legal`).
        items: [
          { label: "Nomor Induk Berusaha (NIB)", companyLegal: "nib" },
          { label: "NPWP Badan", companyLegal: "npwp" },
          { label: "Akta Pendirian", companyLegal: "deedNumber" },
          { label: "SK Pengesahan Badan Hukum", companyLegal: "ministryDecree" },
          { label: "Klasifikasi KBLI", companyLegal: "kbli" },
          { label: "Sertifikat Badan Usaha", companyLegal: "businessCertificate" },
        ],
      },
      {
        icon: "procurement" as CapabilityIcon,
        title: "Pengalaman Pengadaan Pemerintah",
        description: "Rekam jejak keikutsertaan dalam pengadaan barang dan jasa pemerintah.",
        items: [
          { label: "Paket pekerjaan diselesaikan", value: "{{JUMLAH_PAKET_PENGADAAN}}" },
          { label: "Metode pengadaan yang pernah diikuti", value: "{{METODE_PENGADAAN}}" },
          { label: "Akun penyedia pada sistem pengadaan", value: "{{STATUS_AKUN_PENYEDIA}}" },
          { label: "Daftar pengalaman kerja", value: "{{TAUTAN_DAFTAR_PENGALAMAN}}" },
        ],
      },
      {
        icon: "safety" as CapabilityIcon,
        title: "Standar K3 Acara",
        description: "Pengelolaan keselamatan dan kesehatan kerja pada setiap pelaksanaan acara.",
        items: [
          { label: "Sertifikasi sistem manajemen K3", value: "{{SERTIFIKASI_K3}}" },
          { label: "Personel K3 bersertifikat", value: "{{JUMLAH_PERSONEL_K3}}" },
          { label: "Dokumen rencana keselamatan acara", value: "{{STATUS_DOKUMEN_K3}}" },
          { label: "Prosedur tanggap darurat", value: "{{STATUS_PROSEDUR_DARURAT}}" },
        ],
      },
      {
        icon: "insurance" as CapabilityIcon,
        title: "Asuransi Kegiatan",
        description: "Perlindungan risiko bagi peserta, petugas, dan penyelenggara.",
        items: [
          { label: "Penyedia asuransi", value: "{{PENYEDIA_ASURANSI}}" },
          { label: "Jenis pertanggungan", value: "{{JENIS_PERTANGGUNGAN}}" },
          { label: "Nilai pertanggungan", value: "{{NILAI_PERTANGGUNGAN}}" },
        ],
      },
      {
        icon: "documents" as CapabilityIcon,
        title: "Kesiapan Dokumen Tender",
        description: "Dokumen administrasi yang umum dipersyaratkan dalam proses tender.",
        items: [
          { label: "Surat keterangan fiskal / SPT tahunan", value: "{{STATUS_DOKUMEN_PAJAK}}" },
          { label: "Laporan keuangan (audit)", value: "{{STATUS_LAPORAN_KEUANGAN}}" },
          { label: "Pakta integritas", value: "{{STATUS_PAKTA_INTEGRITAS}}" },
          { label: "Surat dukungan bank", value: "{{STATUS_DUKUNGAN_BANK}}" },
          { label: "Daftar tenaga ahli dan peralatan", value: "{{STATUS_DAFTAR_TENAGA_AHLI}}" },
        ],
      },
    ],
    request: {
      title: "Membutuhkan salinan dokumen?",
      description: "Dokumen legalitas dan profil perusahaan dapat diminta untuk keperluan kualifikasi.",
      cta: { label: "Minta dokumen kualifikasi", href: "#kontak" },
    },
  },

  clients: {
    id: "klien",
    number: "06",
    eyebrow: "Klien & Mitra",
    title: "Institusi yang telah bekerja bersama kami.",
    intro: "Kami melayani kementerian dan lembaga, pemerintah daerah, BUMN, serta korporasi swasta.",
    logoLabel: "Logo Klien",
    /** Jumlah kotak placeholder pada client wall. */
    slots: 12,
    note: "Catatan: logo klien dan mitra akan ditampilkan setelah memperoleh persetujuan tertulis dari masing-masing institusi.",
  },

  leadership: {
    id: "tim",
    number: "07",
    eyebrow: "Tim Kepemimpinan",
    title: "Penanggung jawab di balik setiap acara.",
    intro: "Setiap proyek dipimpin langsung oleh jajaran manajemen yang bertanggung jawab penuh atas pelaksanaannya.",
    members: [
      {
        initials: "DU",
        name: "{{NAMA_PIMPINAN_1}}",
        role: "Direktur Utama",
        bio: "{{PROFIL_PIMPINAN_1}}",
      },
      {
        initials: "DO",
        name: "{{NAMA_PIMPINAN_2}}",
        role: "Direktur Operasional",
        bio: "{{PROFIL_PIMPINAN_2}}",
      },
      {
        initials: "DK",
        name: "{{NAMA_PIMPINAN_3}}",
        role: "Direktur Keuangan & Administrasi",
        bio: "{{PROFIL_PIMPINAN_3}}",
      },
      {
        initials: "KP",
        name: "{{NAMA_PIMPINAN_4}}",
        role: "Kepala Produksi & Teknis",
        bio: "{{PROFIL_PIMPINAN_4}}",
      },
    ],
  },

  contact: {
    id: "kontak",
    number: "08",
    eyebrow: "Ajukan Penawaran",
    title: "Sampaikan rencana acara Anda.",
    intro:
      "Isi formulir berikut. Tim kami akan menghubungi Anda untuk menjadwalkan konsultasi awal dan menyiapkan penawaran sesuai kebutuhan.",
    image: "ctaBackground" as ImageKey,
    directLabel: "Kontak langsung",
    emailLabel: "Email",
    phoneLabel: "Telepon",
    hoursLabel: "Jam operasional",
    addressLabel: "Alamat kantor",
    form: {
      title: "Formulir permintaan penawaran",
      requiredNote: "Kolom bertanda * wajib diisi.",
      optional: "opsional",
      fields: {
        name: { label: "Nama lengkap", placeholder: "" },
        organization: { label: "Instansi / perusahaan", placeholder: "" },
        email: { label: "Email kedinasan", placeholder: "nama@instansi.go.id" },
        phone: { label: "Nomor telepon", placeholder: "08xx xxxx xxxx" },
        eventType: { label: "Jenis acara", placeholder: "Pilih jenis acara" },
        attendees: { label: "Perkiraan jumlah peserta", placeholder: "Pilih rentang" },
        date: { label: "Perkiraan tanggal pelaksanaan", placeholder: "" },
        message: {
          label: "Pesan",
          placeholder: "Uraikan singkat tujuan acara, lokasi yang direncanakan, dan kebutuhan khusus.",
        },
      },
      eventTypes: [
        "Rapat Kerja & Konferensi",
        "Seremonial Kenegaraan & Peresmian",
        "Peluncuran Produk Korporat",
        "Pameran & Exhibition",
        "Gathering & Townhall Karyawan",
        "Hybrid & Virtual Event",
        "Dukungan Produksi Panggung & Multimedia",
        "Lainnya",
      ],
      attendeeRanges: ["Kurang dari 100", "100 – 500", "500 – 1.000", "1.000 – 5.000", "Lebih dari 5.000"],
      errors: {
        summary: "Formulir belum dapat dikirim. Periksa kembali kolom berikut:",
        nameRequired: "Nama lengkap wajib diisi.",
        organizationRequired: "Nama instansi atau perusahaan wajib diisi.",
        emailRequired: "Email wajib diisi.",
        emailInvalid: "Format email tidak valid. Contoh: nama@instansi.go.id",
        phoneRequired: "Nomor telepon wajib diisi.",
        phoneInvalid: "Nomor telepon tidak valid. Gunakan 8–15 digit angka.",
        eventTypeRequired: "Pilih jenis acara.",
        attendeesRequired: "Pilih perkiraan jumlah peserta.",
        datePast: "Tanggal pelaksanaan tidak boleh sudah lewat.",
        messageRequired: "Pesan wajib diisi.",
        messageTooShort: "Pesan terlalu singkat. Tulis minimal 20 karakter.",
        submitFailed: "Permintaan belum terkirim karena gangguan teknis. Silakan coba lagi beberapa saat.",
      },
      privacy:
        "Data yang Anda kirim hanya digunakan untuk menindaklanjuti permintaan penawaran ini.",
      submit: "Kirim Permintaan",
      submitting: "Mengirim…",
      success: {
        title: "Permintaan Anda telah kami terima.",
        description: "Terima kasih. Tim kami akan menghubungi Anda melalui email atau telepon yang dicantumkan.",
        reset: "Kirim permintaan lain",
      },
    },
  },

  footer: {
    navigationLabel: "Navigasi",
    servicesLabel: "Layanan",
    officeLabel: "Kantor",
    contactLabel: "Kontak",
    legalLabel: "Legalitas",
    nibLabel: "NIB",
    npwpLabel: "NPWP",
    complianceLabel: "Pernyataan kepatuhan",
    /** Ruang untuk pernyataan kepatuhan resmi (antisuap, kode etik, pelindungan data pribadi). */
    compliance: "{{PERNYATAAN_KEPATUHAN}}",
    complianceHint:
      "Ruang untuk pernyataan kepatuhan perusahaan, misalnya kebijakan antisuap, kode etik, dan pelindungan data pribadi.",
    rights: "Hak cipta dilindungi undang-undang.",
    backToTop: "Kembali ke atas",
  },
};

export default content;
export type SiteContent = typeof content;
