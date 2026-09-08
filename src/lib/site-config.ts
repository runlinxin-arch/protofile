/**
 * 站点全局配置 —— 上线后只需改这里
 * url: 公网域名（上线后替换成你的真实域名，如 https://yourname.com）
 */
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
