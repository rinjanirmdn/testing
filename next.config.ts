import type { NextConfig } from "next";

/**
 * Dua mode build:
 *  - Biasa (`npm run build`): server Next.js dengan optimasi gambar.
 *  - GitHub Pages (`GITHUB_PAGES=true`): ekspor statis ke folder `out/`.
 *    Pages hanya menyajikan file statis, jadi optimasi gambar dimatikan dan
 *    situs berjalan di bawah sub-path repo (mis. /testing), yang diisi
 *    otomatis oleh workflow lewat NEXT_PUBLIC_BASE_PATH.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  basePath,
  output: isPages ? "export" : undefined,
  trailingSlash: isPages,
  images: {
    // Semua gambar berasal dari /public/images — tidak ada domain eksternal.
    formats: ["image/avif", "image/webp"],
    unoptimized: isPages,
  },
};

export default nextConfig;
