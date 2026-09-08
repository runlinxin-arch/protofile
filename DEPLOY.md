# 部署上线指南 —— GitHub + Vercel + 自定义域名

本指南把网站从 localhost 变成**公网常驻、可被搜索**的个人品牌站。

## 0. 前置：准备好这些账号
- **GitHub** 账号（免费）：https://github.com
- **Vercel** 账号（免费，用 GitHub 登录即可）：https://vercel.com
- （可选）一个想用的**域名**，如 `yourname.com`

> 本机已 `git init` 并完成首次提交，`.gitignore` 已忽略 `node_modules` / `.next`，可直接推仓库。

---

## 步骤 1：创建 GitHub 仓库并推送代码

在 GitHub 网页点 **New repository**，建一个**公开**仓库（例如 `my-portfolio`），然后**不要**勾选任何初始化文件（README/.gitignore/license），保持空仓库。建好后运行：

```bash
cd "/Users/rain/Documents/dpsk workplace/portfolio-site"
git remote add origin https://github.com/<你的用户名>/my-portfolio.git
git branch -M main
git push -u origin main
```

> 推送时需要 GitHub 登录凭证（HTTPS 会让你输入用户名 + 个人访问令牌，或在 GitHub 首次提示时授权；也可以改用 SSH）。如果你已配置 SSH,用 ssh 地址即可。

---

## 步骤 2：Vercel 导入仓库，自动部署

1. 打开 https://vercel.com/new ，用 GitHub 账号登录。
2. **Import Git Repository** → 选择刚创建的 `my-portfolio` 仓库。
3. Framework Preset 会自动识别为 **Next.js**（保持默认）。
4. 点击 **Deploy**。Vercel 会构建并发布，完成后给你一个 `https://my-portfolio-xxxx.vercel.app` 地址（每项目一次的临时域名）。
5. 之后每次 `git push` 到 `main`，Vercel **自动重新部署**。

---

## 步骤 3：绑定自定义域名（个人品牌，强烈建议）

1. 在域名服务商处购买域名（如 `yourname.com`）：Namecheap / Porkbun / Cloudflare Registrar / 阿里云 / 腾讯云 均可。
2. Vercel 项目 → **Settings → Domains** → 输入 `yourname.com` → **Add**。
3. 按 Vercel 提示在域名商后台配置 DNS：
   - **A 记录**：指向 `76.76.21.21`
   - （或按 Vercel 显示的 CNAME / 其它值设置）
4. 等 DNS 生效（几分钟到几小时），Vercel 自动签发 **HTTPS 证书**。
5. 在 **Domains** 里把 `yourname.com` 设为 **Primary / 主域名**。

---

## 步骤 4：配置网站 URL（让 SEO 用真实域名）

站点 URL 由环境变量控制。在 **Vercel → Settings → Environment Variables** 添加：

```
NEXT_PUBLIC_SITE_URL = https://yourname.com
```

（`src/lib/site-config.ts` 已读取该变量；未设时用占位 `https://yourname.vercel.app`。）
添加后**重新部署**，`canonical / sitemap / og:url` 等会自动指向真实域名。

---

## 步骤 5：让搜索引擎收录

1. 打开 **Google Search Console**：https://search.google.com/search-console
2. 添加资源 → 选 **域名** 或 **网址前缀** `https://yourname.com`（按提示验证所有权，Vercel 可直接加 DNS TXT 记录）。
3. 左侧 **Sitemaps** → 提交 `https://yourname.com/sitemap.xml`。
4. 之后用 **URL Inspect** 请求首页收录，并让 **Bing/百度** 的站长后台也提交一次 sitemap。

搜索引擎会在几天到几周内索引，网站即可被搜到。

---

## 常用命令（本机）

```bash
npm run dev        # 本地开发（热更新）
npm run build      # 生产构建
npm run start -- -p 3210   # 本地预览构建产物
```

## 上线前务必
把 `src/lib/data.ts` 里的**占位内容换成真实内容**（真名、介绍、作品、照片）——这是个人品牌站的核心，占位内容上线会损害形象与 SEO。
