import { company } from "@/config/company";

/**
 * Logo wordmark berbasis SVG inline (bukan file gambar).
 * Teks diambil dari `company.wordmark`, sehingga mengganti nama perusahaan di
 * konfigurasi otomatis memperbarui logo. Lebar viewBox dihitung dari panjang teks.
 */
export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const { primary, secondary } = company.wordmark;
  const textWidth = Math.max(primary.length * 10.4, secondary.length * 9.6);
  const width = Math.ceil(46 + textWidth);
  const color = tone === "dark" ? "var(--color-navy-900)" : "#ffffff";

  return (
    <svg
      role="img"
      aria-label={company.legalName}
      data-placeholder="company.wordmark"
      viewBox={`0 0 ${width} 36`}
      width={width}
      height={36}
      className={className}
      style={{ color }}
    >
      {/* Monogram: bingkai persegi dengan garis ukur yang menaik */}
      <rect x="0.5" y="0.5" width="35" height="35" fill="none" stroke="currentColor" strokeWidth="1" />
      <g stroke="currentColor" strokeWidth="1.5">
        <line x1="8" y1="28" x2="8" y2="21" />
        <line x1="13" y1="28" x2="13" y2="17" />
        <line x1="18" y1="28" x2="18" y2="8" />
        <line x1="23" y1="28" x2="23" y2="13" />
        <line x1="28" y1="28" x2="28" y2="19" />
      </g>
      <text
        x="46"
        y="16"
        fill="currentColor"
        fontFamily="var(--font-serif)"
        fontSize="18"
        fontWeight="600"
        letterSpacing="0.1"
      >
        {primary}
      </text>
      <text
        x="46.5"
        y="31"
        fill="currentColor"
        fontFamily="var(--font-sans)"
        fontSize="9.5"
        fontWeight="600"
        letterSpacing="2.6"
      >
        {secondary.toUpperCase()}
      </text>
    </svg>
  );
}
