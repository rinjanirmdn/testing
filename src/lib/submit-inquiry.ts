export interface InquiryPayload {
  name: string;
  organization: string;
  email: string;
  phone: string;
  eventType: string;
  attendees: string;
  /** Format ISO "YYYY-MM-DD"; string kosong bila tidak diisi. */
  date: string;
  message: string;
}

export interface InquiryResult {
  ok: boolean;
}

/**
 * Mengirim permintaan penawaran.
 *
 * SAAT INI BELUM TERHUBUNG KE BACKEND. Fungsi ini hanya mensimulasikan jeda
 * jaringan lalu mengembalikan sukses — tidak ada data yang dikirim atau disimpan.
 *
 * CARA MENYAMBUNGKAN:
 *
 * 1) Route Handler Next.js (disarankan)
 *    - Buat `src/app/api/inquiry/route.ts` dengan `export async function POST(req)`.
 *    - Validasi ulang payload di server (jangan percaya validasi klien).
 *    - Teruskan ke layanan email (SMTP/penyedia email transaksional), CRM,
 *      atau simpan ke basis data. Simpan kredensial di variabel lingkungan.
 *    - Ganti isi fungsi ini dengan:
 *
 *        const res = await fetch("/api/inquiry", {
 *          method: "POST",
 *          headers: { "Content-Type": "application/json" },
 *          body: JSON.stringify(payload),
 *        });
 *        return { ok: res.ok };
 *
 * 2) Layanan formulir pihak ketiga
 *    - Ganti URL fetch di atas dengan endpoint layanan tersebut.
 *
 * Sebelum produksi, tambahkan juga: pembatasan laju (rate limiting), proteksi
 * spam (mis. honeypot atau CAPTCHA), dan pencatatan persetujuan pengolahan data
 * pribadi sesuai UU Pelindungan Data Pribadi.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  // PLACEHOLDER — ganti dengan pemanggilan backend sebelum produksi.
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return { ok: true };
}
