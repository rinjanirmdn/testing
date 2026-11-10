import type { MetadataRoute } from "next";
import { company } from "@/config/company";

// Wajib statis agar ikut terekspor pada build GitHub Pages.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: company.allowIndexing && process.env.GITHUB_PAGES !== "true" ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}
