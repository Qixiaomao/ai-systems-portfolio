# Lucas Portfolio — Pixel Calico Edition

以项目根目录的 `设计图.png` 为视觉参考的英文个人站。使用 Next.js App Router、React、TypeScript、Tailwind CSS；保留浅色纸张、衬线标题、手写等宽文字和三花像素猫插画。

这个实现作为现有 `Qixiaomao/ai-systems-portfolio` 仓库的迁移版本，主入口为 Home、Projects、Writing、About。研究进展放在 Writing，公开履历展示放在 About。当前阶段保留原站的视觉和占位内容；旧版已经核实的履历、项目资料和经作者批准的英文文章会在后续阶段逐项迁入。

## 本次设计调整

- 首页按参考图组成：导航、左侧头像与介绍、右侧像素工作台、引用条、三张入口卡片、动态时间线、纸张终端和页脚。
- 工作台、阅读 / 电脑 / 睡眠 / 坐姿猫、手写 Logo 均提取自用户提供的设计图，保留其轮廓、配色和像素细节。
- 卡片、文字、时间线和控件均为真实的 HTML / React 组件；没有把整张设计图当作网页背景。
- 首页、项目、写作和关于页面支持顶部导航、当前页面指示和返回首页；旧的研究与简历地址导向 Writing 和 About。
- 保留主题切换及本地记忆、手机布局、键盘焦点、跳转到主内容和减少动画偏好。

正文使用本地打包的 [Comic Mono](https://github.com/dtinth/comic-mono-font) 字体（MIT 许可证）；无需运行时访问外部字体服务。字体许可证随 `@fontsource/comic-mono` 包提供。

这是一个展示型前端项目，没有数据库、登录或后端 API，不需要环境变量。

## 本地运行

需要 Node.js 20.9 或更新版本；本次使用 Node.js 24。依赖版本已固定并保存锁文件。

```bash
npm ci
npm run dev
```

访问 <http://localhost:3000>。开发服务仅监听 `127.0.0.1`；终端中按 `Ctrl+C` 停止。

PowerShell 如果阻止执行 `npm.ps1`，改用 `npm.cmd ci` 和 `npm.cmd run dev`。`.npmrc` 将 npm 缓存放到项目的 `.npm-cache/`，无需修改系统缓存权限。

端口占用时使用 `npm run dev -- --port 3001`。

## 项目结构

| 路径                                   | 职责                                                 |
| -------------------------------------- | ---------------------------------------------------- |
| `设计图.png`                           | 本次实现的视觉参考                                   |
| `src/app/page.tsx`                     | 参考图首页                                           |
| `src/app/projects/page.tsx`            | 项目列表                                             |
| `src/app/writing/page.tsx`             | 动态列表与研究方向                                   |
| `src/app/about/page.tsx`               | 个人介绍与公开 CV 概览                               |
| `next.config.ts`                       | 旧版路径到四个主页面的临时重定向                     |
| `src/app/layout.tsx`                   | 共享导航、页脚、元信息、字体和主题初始化             |
| `src/app/globals.css`                  | 布局尺寸、主题颜色、响应式和动画                     |
| `src/data/site.ts`                     | 个人资料、入口卡片、联系信息、研究、项目、动态和兴趣 |
| `src/components/Header.tsx`            | 导航和当前页面指示                                   |
| `src/components/ThemeToggle.tsx`       | 主题切换及存储                                       |
| `src/components/ProfileLinks.tsx`      | 联系按钮与页脚图标                                   |
| `src/components/SectionPage.tsx`       | 内容页共用版式                                       |
| `src/components/UpdatesList.tsx`       | 动态时间线                                           |
| `src/components/Terminal.tsx`          | 终端兴趣展示                                         |
| `src/components/PixelCat.tsx`          | 四种原图像素猫                                       |
| `src/components/HeroWorkspace.tsx`     | 原图工作台插画                                       |
| `src/components/LucasLogo.tsx`         | 原图手写品牌标识                                     |
| `public/pixel/`                        | 提取后的透明 PNG 素材                                |
| `scripts/extract-reference-assets.mjs` | 可复现的素材提取脚本                                 |

## 素材维护

修改参考图后可运行：

```bash
npm run assets:extract
```

脚本使用 Sharp 提取指定插画区域，并从边缘移除连通的浅色背景，保留被深色轮廓包围的白色猫毛。当前裁切坐标针对 1214 × 1295 的设计图；如果参考图尺寸或布局改变，需要同步调整脚本中的 `regions`。

图中的手写标注和书本字样属于插画素材。正文、导航、卡片标题与动态均为可维护文字。插画使用原尺寸 PNG 和 `image-rendering: pixelated`，避免图像压缩模糊像素细节。

## 内容与链接

编辑 `src/data/site.ts`：

- `profile`：头像、个人介绍、所在地、学历、当前角色和页脚文字。
- `portals`：首页三张入口卡片。
- `research` / `projects`：研究与项目列表，支持可选的 `href`。
- `updates`：动态，支持 `YYYY-MM` 或 `YYYY-MM-DD` 日期及可选的 `href`。
- `contact.github` / `contact.email` / `contact.cv` / `contact.x`：真实联系方式。空值会禁用相应入口，并提供待补充的提示，不使用假地址。CV 目前指向 `/about#cv`；对外邮箱由作者确认后再填写。

首页动态和兴趣文字来自本次参考图，研究 / 项目介绍保留原始项目内容。上线前应确认文字及个人资料，并补充真实论文、仓库和文章链接。

## 检查和构建

```bash
npm run check
```

依次执行零警告的 ESLint、路由类型生成 / TypeScript 检查和生产构建。`npm run format` 格式化源码、脚本和配置。

生产预览：

```bash
npm run build
npm run start -- --hostname 127.0.0.1 --port 3001
```

目前应验收首页、三个内容页、旧版地址重定向以及六个像素素材。建议人工检查 1214px 桌面和 375px 手机布局、主题刷新记忆及导航。写作页的真实文章导入属于后续阶段。

## 已知开发依赖告警

2026-10-06 的生产依赖审计没有告警；完整审计的 5 条高危告警来自同一个开发工具链问题：`eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`。[上游公告](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) 当前没有修复版本。该问题涉及深层嵌套模式导致栈溢出，本项目不提供用户输入的模式解析接口。本次保留兼容的 lint 配置，等待上游修复；不要直接执行会降级配置的 `npm audit fix --force`。
