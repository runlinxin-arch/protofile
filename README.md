# 个人作品集网站（AI 时代的简历）

极简 × 日式排版 × 文艺复兴细节 × 复古未来动效的个人作品集单页。

## 技术栈

- Next.js 16（App Router）+ React 19 + TypeScript
- Tailwind CSS v4（仅作为基座，设计系统在 `src/app/globals.css`）
- 字体：Fraunces（展示衬线）+ Noto Sans SC（正文），next/font 自托管

## 快速开始

```bash
npm install
npm run dev      # 开发，默认 http://localhost:3000
npm run build    # 生产构建
npm run start    # 生产预览
```

## 如何填入真实内容

**所有内容都在 `src/lib/data.ts`，改它即可，无需动组件。**

### 1. 个人资料（profile）

```ts
profile.name / role / bioLead / bioBody / facts / email / socials ...
```
中英双语用 `{ zh, en }` 结构，填哪个语言都会即时生效。

### 2. 摄影作品（photos，已预留 10 个位）

1. 把图片文件放入 `public/photos/`（如 `public/photos/01.jpg`）
2. 在 `photos` 数组里给对应项填 `src: "/photos/01.jpg"`
3. 顺便更新 `title`（作品名）、`date`（拍摄时间）、`meta`（如 "35mm · f/1.8 · ISO 400"）

> `src` 为空时自动显示占位框（罗马数字编号），放图后自动切换为图片。

### 3. 工作项目（projects，已预留 3 个位）

每项填 `year`（年份）、`title`、`desc`（一句话描述）、`tags`（技术标签）、`link`（项目链接）。

想加更多项目，直接往 `projects` 数组里 push 一项即可。

## 结构

```
src/
  app/
    layout.tsx        字体 + 元信息 + 语言提供器
    page.tsx          页面组装（Hero → 关于 → 摄影 → 项目 → 联系）
    globals.css       设计系统（配色/字体/动效/响应式）
  components/
    Header.tsx        固定顶栏 + 导航高亮 + 中英切换 + 主题切换
    Hero.tsx          Hero + 磁吸 CTA
    DavidHead.tsx     线刻版画风大卫头像（签名形象）：浮动/呼吸 + 视线跟随 + 眨眼
    Motif.tsx         文艺复兴小母题（月桂花环/星盘/柱式，线刻风 SVG）
    About.tsx         个人介绍（母题：月桂）
    PhotoCarousel.tsx 3D 滚轮相册（滚轮/键盘/触屏/按钮 + 交互范围；母题：星盘）
    Lightbox.tsx      灯箱（键盘导航）
    Works.tsx         项目列表（母题：柱式）
    Footer.tsx        联系与页脚（母题：月桂）
    Reveal.tsx        滚动浮现包装
    SectionHead.tsx   章节标题（竖排字 + 遮罩上滑 + 角标母题）
  lib/
    data.ts           站点内容数据（占位 → 填真实内容）
    i18n.tsx          中英双语 Context
```

## 设计规范速查

- 色彩：和纸 `#F6F3EC` / 墨 `#181A1C` / 暖灰 `#8B8577` / 朱红 `#B3402A`
  - 深色模式：暖墨夜色 `#171512` 底 + 米白 `#E7E2D8` 字 + 亮朱红 `#D96A4F`
- 字体：Fraunces（标题衬线）+ Noto Sans SC（正文）
- 动效：`cubic-bezier(.22,1,.36,1)`，滚动浮现 + 遮罩揭示 + 磁吸 CTA，尊重 `prefers-reduced-motion`
- 相册交互范围：水平 = 左按钮→右按钮，垂直 = 中央大图上缘→下缘；范围外滚轮正常翻页
- 主题：顶栏 ☀/☾ 按钮切换深色/浅色，持久化到 localStorage，首次访问跟随系统偏好（防闪烁脚本保证首帧无闪变）
- 文艺复兴形象体系：Hero 大卫头像（线刻版画风，眼睛跟手 + 眨眼 + 浮动呼吸）+ 章节角标母题（月桂/星盘/柱式），均为内嵌 SVG + CSS，随主题自动变色

## 部署

```bash
npm run build
```
静态导出或部署到 Vercel 均可（本项目无需服务端能力）。
