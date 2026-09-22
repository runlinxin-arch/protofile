import type { NextConfig } from "next";

/**
 * 部署形态由环境变量控制，本地开发与「根路径托管」（如 Vercel）行为完全不变：
 *
 * - `STATIC_EXPORT=1`       → 产出纯静态站点到 out/（GitHub Pages 等静态托管）
 * - `NEXT_PUBLIC_BASE_PATH` → 站点部署在子路径时注入前缀
 *                             （GitHub Pages 项目站为 /<仓库名>）
 *
 * 本地 / Vercel 不设这两个变量，因此仍走默认的服务端构建 + `next start`。
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        // 静态托管下 `/about` 会 404，`/about/` 才能命中 about/index.html
        trailingSlash: true,
        // 静态导出不支持默认图片优化器，如日后使用 next/image 需保持此项
        images: { unoptimized: true },
      }
    : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
