/* ============================================================
   站点内容数据 —— 占位版本
   正式内容就绪后，只需修改本文件即可，无需改动组件。
   图片放入 public/photos/ 后，把 photos[i].src 填成 "/photos/xx.jpg"
   ============================================================ */

export type L = { zh: string; en: string };

export const profile = {
  name: { zh: "辛润林", en: "Rain" } as L,
  eyebrow: { zh: "PORTFOLIO · 作品集 · ANNO MMXXV", en: "PORTFOLIO · ANNO MMXXV" } as L,
  role: { zh: "摄影者 · 建造者 · 在 AI 时代保持人性", en: "Photographer · Builder · Staying human in the AI age" } as L,
  cta: { zh: "浏览作品", en: "View works" } as L,
  aboutTitle: { zh: "关于", en: "About" } as L,
  bioLead: {
    zh: "你好，我是你的名字——一位用相机和代码记录时代的创作者。占位介绍文字，请替换为真实的自我介绍。",
    en: "Hi, I'm Your Name — a creator documenting the era with a camera and with code. Placeholder intro, please replace with a real bio.",
  } as L,
  bioBody: {
    zh: "第二段占位：可以写你的背景、经历、理念——为什么摄影、为什么写代码、想在 AI 时代留下什么。保持简洁，两三句即可。",
    en: "Second paragraph placeholder: background, experience, philosophy — why photography, why code, what you want to leave in the AI age. Keep it short, two or three sentences.",
  } as L,
  facts: [
    { k: { zh: "坐标", en: "Location" }, v: { zh: "中国·上海", en: "Shanghai, China" } },
    { k: { zh: "专注", en: "Focus" }, v: { zh: "摄影 · Web 开发（占位）", en: "Photography · Web development (placeholder)" } },
    { k: { zh: "状态", en: "Status" }, v: { zh: "欢迎合作与交流", en: "Open to collaboration" } },
    { k: { zh: "简历", en: "Resume" }, v: { zh: "PDF — 待上传", en: "PDF — pending" } },
  ],
  email: "runlinxin053@qq.com",
  socials: [
    { label: { zh: "Instagram · 占位", en: "Instagram · TBD" }, href: "#" },
    { label: { zh: "GitHub", en: "GitHub" }, href: "https://github.com/runlinxin-arch/rainsbase" },
  ],
  footerNote: { zh: "© MMXXV · 辛润林 · Rain", en: "© MMXXV · Rain" } as L,
};

/* ---- 摄影作品：10 个占位位 ---- */
export interface Photo {
  id: number;
  roman: string;
  src: string;          // 空字符串 = 占位；填入 "/photos/xxx.jpg" 后显示图片
  title: L;
  date: string;
  meta: string;
}

const PHOTO_META = [
  "35mm · f/1.8 · ISO 400",
  "35mm · f/2.8 · ISO 200",
  "120 中画幅 · 黑白",
  "数码 · 城市",
  "35mm · 黑白 · 人像",
  "胶片 · 风景",
  "数码 · 静物",
  "35mm · 街头",
  "数码 · 建筑",
  "胶片 · 夜色",
];
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export const photos: Photo[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  roman: ROMAN[i],
  src: "", // ← 图片占位：放入 public/photos/ 后填写路径
  title: {
    zh: `《未命名作品 ${String(i + 1).padStart(2, "0")}》`,
    en: `Untitled ${String(i + 1).padStart(2, "0")}`,
  },
  date: "20XX — XX",
  meta: PHOTO_META[i],
}));

/* ---- 工作项目：3 个占位位 ---- */
export interface Project {
  year: string;
  title: L;
  desc: L;
  tags: string[];
  link: string;         // 项目链接占位
}

export const projects: Project[] = [
  {
    year: "2025",
    title: { zh: "项目名称占位", en: "Project title" },
    desc: {
      zh: "一句话描述占位：说明你在这个项目里做了什么、解决了什么问题。占位文字，替换为真实内容。",
      en: "One-line description placeholder: what you did and the problem you solved. Replace with real content.",
    },
    tags: ["Next.js", "Tailwind", "占位"],
    link: "#",
  },
  {
    year: "2024",
    title: { zh: "项目名称占位", en: "Project title" },
    desc: {
      zh: "一句话描述占位：说明你在这个项目里做了什么、解决了什么问题。占位文字，替换为真实内容。",
      en: "One-line description placeholder: what you did and the problem you solved. Replace with real content.",
    },
    tags: ["TypeScript", "占位"],
    link: "#",
  },
  {
    year: "2023",
    title: { zh: "项目名称占位", en: "Project title" },
    desc: {
      zh: "一句话描述占位：说明你在这个项目里做了什么、解决了什么问题。占位文字，替换为真实内容。",
      en: "One-line description placeholder: what you did and the problem you solved. Replace with real content.",
    },
    tags: ["React", "占位"],
    link: "#",
  },
];

/* 章节标记与标题 */
export const sections = {
  about: { char: "我", title: { zh: "关于", en: "About" }, en: { zh: "ABOUT · 自我介绍", en: "ABOUT · Bio" } },
  photo: { char: "影", title: { zh: "摄影", en: "Photography" }, en: { zh: "PHOTOGRAPHY · 画廊占位", en: "PHOTOGRAPHY · Gallery" } },
  works: { char: "作", title: { zh: "项目", en: "Works" }, en: { zh: "SELECTED WORKS · 工作项目", en: "SELECTED WORKS · Projects" } },
  nav: {
    about: { zh: "关于", en: "About" },
    photo: { zh: "摄影", en: "Photos" },
    works: { zh: "项目", en: "Works" },
    contact: { zh: "联系", en: "Contact" },
  },
};
