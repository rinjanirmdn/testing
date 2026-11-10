import { ImageResponse } from "next/og";
import { company } from "@/config/company";

/**
 * Gambar Open Graph dibuat otomatis dari konfigurasi perusahaan — tidak perlu
 * file gambar. Ganti dengan `opengraph-image.jpg` (1200x630) bila ingin desain khusus.
 */
export const alt = `${company.legalName} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Wajib statis agar ikut terekspor pada build GitHub Pages.
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0e2238",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 72, height: 1, background: "rgba(255,255,255,0.6)" }} />
          <div style={{ fontSize: 24, letterSpacing: 5, textTransform: "uppercase", color: "#dce3ec" }}>
            {company.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 84, lineHeight: 1.1, maxWidth: 960 }}>{company.legalName}</div>
        <div style={{ display: "flex", width: "100%", height: 1, background: "rgba(255,255,255,0.3)" }} />
      </div>
    ),
    size,
  );
}
