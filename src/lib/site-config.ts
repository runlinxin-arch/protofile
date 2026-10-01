/**
 * 站点全局配置 —— 上线后只需改这里
 * url: 公网域名（上线后替换成你的真实域名，如 https://yourname.com）
 */
/**
 * 部署子路径前缀（GitHub Pages 项目站为 /<仓库名>；本地与 Vercel 为空字符串）。
 * 由构建时环境变量注入，见 next.config.ts。
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * 给 public/ 下的静态资源补上 basePath。
 * next/link、next/image 会自动加前缀，但手写的 <img src="/photos/x.jpg"> 不会，
 * 在子路径部署下会 404，因此统一走这个函数。
 */
export const asset = (path: string) => `${basePath}${path}`;

export const siteConfig = {
  name: "辛润林",
  nameEn: "Rain",
  title: "辛润林 — 作品集 / Portfolio",
  description: "AI 时代的简历与个人作品集：摄影与工作项目。",
  descriptionEn: "A portfolio & resume for the AI era: photography and selected works.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourname.vercel.app",
  locale: "zh_CN",
  keywords: [
    "摄影",
    "作品集",
    "个人网站",
    "摄影师",
    "Web 开发",
    "AI 时代",
    "portfolio",
    "photography",
    "personal website",
  ],
};
