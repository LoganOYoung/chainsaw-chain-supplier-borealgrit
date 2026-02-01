# Favicon 与 Google 搜索结果图标

## 当前配置

- **根 layout**（`app/layout.tsx`）已配置 `metadata.icons`：
  - 优先：`public/favicon.ico`（Google 常抓取此路径）
  - 备用：`public/favicon.png`、`public/logo-bg-icon.svg`
  - Apple：`public/favicon.png`
- **文件**：`public/favicon.ico` 与 `public/favicon.png` 已存在（松林 + BG 图标）。

## 为何 SERP 里还是显示蓝色地球？

1. **Google 更新有延迟**  
   站上已经加上 favicon 并部署，但 **Google 不会立刻换掉 SERP 里的图标**。它要重新抓取首页和 `/favicon.ico`，再更新索引，通常需要 **几天到几周**。所以「优化已经做了」和「SERP 里马上变」是两回事。

2. **已按 Google 习惯做了配置**  
   项目里已提供 `public/favicon.ico`，并在 layout 里把它放在 `icons` 的第一项，首页会输出 `<link rel="icon" href="/favicon.ico">`。部署后，Google 抓取首页时会请求 `https://borealgrit.com/favicon.ico` 并拿到你的图标。

3. **若仍长期不更新**  
   - 在 [Google Search Console](https://search.google.com/search-console) 用 **URL 检查** 对首页 `https://borealgrit.com` 请求编入索引，促使其重新抓取。  
   - 确认线上能直接打开 `https://borealgrit.com/favicon.ico` 且返回 200、无 404。  
   - 若 Google 对当前 `favicon.ico`（实为 PNG 内容）不认可，可用 [favicon.io](https://favicon.io/) 等工具把 `favicon.png` 转成标准 ICO 再替换 `public/favicon.ico`。

## 标题在 SERP 里和站内不一致

SERP 显示的标题（如 "Borealgrit - Professional Chainsaw Chain Manufacturer"）也可能来自旧缓存或 Google 自动改写。根 layout 里的 `metadata.title` 已设为 "BorealGrit™ | Industrial Chainsaw Chain Manufacturer for North America"。标题更新同样要等 Google 重新抓取和更新索引，通常也是数天到数周。同样可用 Search Console 的「URL 检查 → 请求编入索引」加速。

## 检查清单

- 部署后浏览器访问 `https://borealgrit.com/`，标签页应显示松林 + BG 图标。
- 直接访问 `https://borealgrit.com/favicon.ico`，应返回 200、无 404。
- 若超过 2–4 周仍无变化，在 Search Console 对首页请求编入索引，并确认 `favicon.ico` 未被 robots.txt 或 noindex 限制。
