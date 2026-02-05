# Favicon 与 Google 搜索结果图标

## 当前配置

- **根 layout**（`app/layout.tsx`）已配置 `metadata.icons`：
  - `public/favicon.png`、`public/favicon.ico`、Apple 用 `favicon.png`。
- **文件**：`public/favicon.ico` 与 `public/favicon.png` 已存在（松林 + BG 图标）。

## ⚠️ 发现的问题：扩展名与真实格式不符

用 `file` 检查当前文件可知：

| 文件           | 声明类型 | 实际内容 |
|----------------|----------|----------|
| `favicon.ico`  | ICO      | **JPEG (JFIF)**，1024×1024 |
| `favicon.png`  | PNG      | **JPEG (JFIF)**，1024×1024 |

也就是说：**两个文件本质都是 JPEG，只是扩展名写成了 .ico 和 .png**。会导致：

- 浏览器/爬虫按扩展名期待 ICO 或 PNG，解析可能失败 → **标签页或 SERP 图标空白/异常**。
- 服务器若按扩展名返回 `image/x-icon` 或 `image/png`，与真实 JPEG 内容不一致，部分客户端会拒绝或显示异常。

## 已执行的修复（当前仓库）

1. **PNG**：用 macOS `sips` 将原错误扩展名的 JPEG 转为真实 PNG，已覆盖 `public/favicon.png`（现为 PNG image data, 1024×1024）。
2. **ICO**：用 npm 包 `png-to-ico` 从 `public/favicon.png` 生成标准 ICO，已覆盖 `public/favicon.ico`。  
   - 重新生成命令：`npx png-to-ico public/favicon.png > public/favicon.ico`

## 若需再次修复或手动生成

1. **生成真正的 ICO**  
   - 本地：`npx png-to-ico public/favicon.png > public/favicon.ico`  
   - 或用 [favicon.io](https://favicon.io/) / [realfavicongenerator.net](https://realfavicongenerator.net/) 生成后替换。

2. **提供真正的 PNG**  
   - 从设计稿导出 PNG，或用 `sips -s format png 源图.jpg --out public/favicon.png` 转换后覆盖。

3. **部署后验证**  
   - 访问 `https://borealgrit.com/` 和 `https://borealgrit.com/favicon.ico`，确认图标正常、无 404。  
   - 若 SERP 仍不更新，在 [Google Search Console](https://search.google.com/search-console) 对首页做 **URL 检查 → 请求编入索引**。

## 标题在 SERP 里和站内不一致

SERP 显示的标题可能来自旧缓存或 Google 自动改写。根 layout 的 `metadata.title` 已设为 "BorealGrit™ | Industrial Chainsaw Chain Supplier for North America"。标题更新要等 Google 重新抓取，通常数天到数周；可用 Search Console「URL 检查 → 请求编入索引」加速。

## 检查清单（修复格式后）

- 部署后访问 `https://borealgrit.com/`，标签页应显示松林 + BG 图标。
- 直接访问 `https://borealgrit.com/favicon.ico`，应返回 200，且为**真实 ICO 格式**（非 JPEG 改扩展名）。
- 若超过 2–4 周 SERP 仍无图标，在 Search Console 对首页请求编入索引，并确认 `favicon.ico` 未被 robots 或 noindex 限制。
