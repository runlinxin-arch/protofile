import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// 静态导出（output: "export"）要求该路由显式声明为静态
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
