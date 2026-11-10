import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Semua gambar berasal dari /public/images — tidak ada domain eksternal.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
