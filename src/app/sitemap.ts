import type { MetadataRoute } from "next";
import { company } from "@/config/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: company.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
