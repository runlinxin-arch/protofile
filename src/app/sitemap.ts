import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// 静态导出（output: "export"）要求该路由显式声明为静态
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
