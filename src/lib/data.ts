/* ============================================================
   站点内容数据 —— 占位版本
   正式内容就绪后，只需修改本文件即可，无需改动组件。
   图片放入 public/photos/ 后，把 photos[i].src 填成 "/photos/xx.jpg"
   ============================================================ */

import { asset } from "./site-config";

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
  email: "xinrunlin616@outlook.com",
  socials: [
    { label: { zh: "Instagram · 占位", en: "Instagram · TBD" }, href: "#" },
    { label: { zh: "GitHub", en: "GitHub" }, href: "https://github.com/runlinxin-arch/protofile" },
  ],
  footerNote: { zh: "© MMXXV · 辛润林", en: "© MMXXV · Rain" } as L,
};

/* ---- 摄影作品：真实作品（图片位于 public/photos/，长边 2000px） ---- */
export interface Photo {
  id: number;
  roman: string;
  src: string;          // 空字符串 = 占位；填入 "/photos/xxx.jpg" 后显示图片
  w: number;            // 像素宽（与 h 一起决定画框比例，勿改）
  h: number;            // 像素高
  title: L;
  date: string;
  meta: string;
}

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/* 拍摄参数取自原图 EXIF（索尼 E 18-135mm F3.5-5.6 OSS / FE 24-240mm F3.5-6.3 OSS）。
   date 统一为 YYYY.MM.DD（由作者确认的拍摄日期；点分格式避免 日/月 歧义）。 */
const PHOTO_FILES: {
  file: string;
  w: number;
  h: number;
  tz: string;
  te: string;
  date: string;
  meta: string;
}[] = [
  { file: "01.jpg", w: 1333, h: 2000, tz: "踏雪夜行", te: "Night Walk in the Snow", date: "2025.01.20", meta: "39mm · f/4.5 · ISO 6400 · 1/40s" },
  { file: "02.jpg", w: 1332, h: 2000, tz: "扫雪者", te: "The Snow Sweeper", date: "2025.01.21", meta: "48mm · f/5.6 · ISO 100 · 1/1250s" },
  { file: "03.jpg", w: 1330, h: 2000, tz: "天使人间", te: "Angels Among Us", date: "2026.02.11", meta: "72mm · f/20 · ISO 1600 · 1/640s" },
  { file: "04.jpg", w: 2000, h: 1330, tz: "辛苦了面包师", te: "Thank You, Baker", date: "2026.02.01", meta: "126mm · f/6.3 · ISO 1600 · 1/125s" },
  { file: "05.jpg", w: 2000, h: 1330, tz: "塞纳河畔的书报亭", te: "Newsstand on the Seine", date: "2026.02.01", meta: "128mm · f/25 · ISO 1600 · 1/50s" },
  { file: "06.jpg", w: 1554, h: 2000, tz: "Leonardo da Vinci", te: "Leonardo da Vinci", date: "2026.02.06", meta: "FE 24-240mm" },
  { file: "07.jpg", w: 1330, h: 2000, tz: "爱在佛罗伦萨", te: "Love in Florence", date: "2026.02.09", meta: "103mm · f/6.3 · ISO 1600 · 1/100s" },
  { file: "08.jpg", w: 2000, h: 1330, tz: "圣母百花大教堂", te: "Florence Cathedral", date: "2026.02.09", meta: "184mm · f/6.3 · ISO 1600 · 1/30s" },
  { file: "09.jpg", w: 2000, h: 1330, tz: "look at us", te: "look at us", date: "2026.02.11", meta: "96mm · f/10 · ISO 1600 · 1/640s" },
];

export const photos: Photo[] = PHOTO_FILES.map((p, i) => ({
  id: i + 1,
  roman: ROMAN[i],
  src: asset(`/photos/${p.file}`),
  w: p.w,
  h: p.h,
  title: { zh: `《${p.tz}》`, en: p.te },
  date: p.date,
  meta: p.meta,
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
  photo: { char: "影", title: { zh: "摄影", en: "Photography" }, en: { zh: "PHOTOGRAPHY · 摄影作品", en: "PHOTOGRAPHY · Selected frames" } },
  works: { char: "作", title: { zh: "项目", en: "Works" }, en: { zh: "SELECTED WORKS · 工作项目", en: "SELECTED WORKS · Projects" } },
  nav: {
    about: { zh: "关于", en: "About" },
    photo: { zh: "摄影", en: "Photos" },
    works: { zh: "项目", en: "Works" },
    contact: { zh: "联系", en: "Contact" },
  },
};
