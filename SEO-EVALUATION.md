# BorealGrit.com SEO 性能检查与评估

评估时间：基于当前代码库静态检查。  
站点：borealgrit.com（Next.js 静态导出）

---

## 一、总体结论

| 维度         | 状态 | 说明 |
|--------------|------|------|
| 技术基础     | 良好 | metadataBase、sitemap、robots、静态导出 |
| 页面元数据   | 良好 | 多数页面有 title / description / OG / canonical |
| 结构化数据   | 良好 | Organization、Product、WebSite、BreadcrumbList、Service |
| 站内结构     | 良好 | 层级清晰、工具页与产品页分离 |
| 待改进项     | 见下 | 首页多 H1、少数页缺 canonical、1 处空 alt、品牌名不一致 |

---

## 二、做得好的部分

### 1. 根 layout 与全局 SEO

- **metadataBase**: `https://borealgrit.com`，利于相对 URL 解析。
- **title / description**: 与品牌定位一致（Industrial Chainsaw Chain Supplier for North America）。
- **openGraph / twitter**: 标题、描述、图片、locale、type 齐全。
- **robots**: index/follow，googleBot 配置合理（max-snippet 等）。
- **canonical**: 根路径已设。
- **icons**: favicon.ico、favicon.png、apple 已配置。
- **formatDetection**: 关闭电话/邮箱自动识别，减少误点。

### 2. Sitemap（`app/sitemap.ts`）

- 覆盖首页、产品目录、系列页、应用场景、工具、RFQ、OEM、Resources、Quality、About、For Buyers、Distributors、Contact。
- 使用合理 `changeFrequency` 与 `priority`。
- `/tools/cross-chain-reference` 为重定向至 `/tools#cross-chain-reference`，不列入 sitemap 合理。

### 3. Robots（`app/robots.ts`）

- 允许全站抓取，禁止 `/api/`、`/_next/`、`/private/`。
- 声明 `sitemap.xml` 与 `host`。
- 注意：若存在 `public/robots.txt`，Next 会优先使用 `app/robots.ts` 的生成结果。

### 4. 页面级 metadata

- 主要页面均有：`title`、`description`、`openGraph`、多数有 `alternates.canonical`。
- 关键词与页面主题匹配（产品、地域、认证、B2B 等）。

### 5. 结构化数据（JSON-LD）

- **首页**: Organization、Product（代表产品）、WebSite。
- **Quality**: Organization + Certification。
- **Series W/E/P**: Product + BreadcrumbList。
- **Products 目录**: Product（代表品类）。
- **OEM**: Service。
- 类型与内容匹配，利于摘要与知识图谱。

### 6. 内容与结构

- 各页均有单一主题的 **H1**（除首页见下）。
- 工具页（technical-specs、regional-guide、chain-selection-matrix）有清晰 H2/H3，利于长尾与精选摘要。
- 静态导出（`output: 'export'`）保证首屏 HTML 即含完整内容，爬虫友好。

### 7. 内部链接

- 导航、Footer、产品/工具页之间的交叉链接充足，有利于权重与发现。

---

## 三、待改进项与建议

### 1. 首页多个 H1（建议优先）

- **现状**: 首页轮播三张幻灯片各有一个 `<h1>`（“Professional Chainsaw Chain Manufacturer”“Precision in Every Link / Power in Every Cut”“Same Performance, Better Value”）。
- **影响**: 部分引擎仍建议每页一个 H1，多 H1 可能稀释主标题权重或造成理解歧义。
- **建议**: 保留第一张为唯一 H1，第二、三张改为 `<h2>` 并保持现有样式（仅改标签），或使用 `role="heading" aria-level="2"` 等保持视觉不变。

### 2. 缺失的 canonical

- **OEM 页**（`app/oem-private-label/page.tsx`）：有 title/description/OG，无 `alternates.canonical`。  
  **建议**: 增加 `alternates: { canonical: '/oem-private-label' }`。
- **Products 布局**（`app/products/layout.tsx`）：目录页 `/products` 使用该 layout，无 canonical。  
  **建议**: 在 layout 中增加 `alternates: { canonical: '/products' }`（或在该路由的 metadata 中设置，若后续改为 page 级 metadata 亦可）。

### 3. 品牌名拼写不一致

- 部分页面为 “Borealgrit”，根 layout 为 “BorealGrit™”。  
- **建议**: 全站统一为 “BorealGrit™”（与 layout 一致），便于品牌与检索一致性。

### 4. 图片无障碍与 SEO

- **fitment-finder/page.tsx** 存在 `alt=""`。若图为装饰性可保留空 alt；若含信息（如图例、说明），建议改为简短描述性 alt。
- 其余检查到的图片均带描述性 alt，表现良好。

### 5. Open Graph 图片

- 根 layout 使用 `/images/contact-banner.jpg`，尺寸声明 1200×630。  
- **建议**: 确认该文件存在且实际比例接近 1.91:1，避免社交分享时裁切异常。若后续为关键页面做单独 OG 图，可再在对应页覆盖 `openGraph.images`。

### 6. 可选增强（非必须）

- **BreadcrumbList**: 在更多子页（如 application 页、product 型号页）输出 BreadcrumbList，有利于 SERP 面包屑展示。
- **FAQPage**: 若 Quality 或 For Buyers 页有明确 Q&A 区块，可增加 FAQPage 结构化数据。
- **products 目录页**: 若希望强化“多 SKU 目录”的语义，可考虑 ItemList + 多个 Product 的聚合（需与当前单 Product 代表品类的方式二选一或分层使用）。

---

## 四、检查清单汇总

| 项目                     | 状态 |
|--------------------------|------|
| metadataBase             | 已设置 |
| 全局 title/description   | 已设置 |
| 各页独立 title/description | 已覆盖主要页面 |
| openGraph 全站/关键页    | 已设置 |
| canonical 全站            | 多数有，OEM、products 建议补 |
| Sitemap 覆盖             | 已覆盖，无遗漏重要路由 |
| robots.txt 规则          | 合理，sitemap 已声明 |
| 结构化数据（Organization/Product 等） | 已部署 |
| 单页单 H1（除首页）      | 满足；首页建议改为 1 个 H1 |
| 图片 alt                 | 1 处空 alt，建议复核 |
| 静态导出                 | 是，爬虫友好 |
| 内部链接                 | 充足 |

---

## 五、建议的优先修改（代码级）— 已完成

1. ~~**首页**: 将第 2、3 张轮播的 `<h1>` 改为 `<h2>`~~ ✅ 已改为 H2。
2. ~~**OEM 页**: 在 `metadata` 中增加 `alternates: { canonical: '/oem-private-label' }`~~ ✅ 已添加。
3. ~~**Products layout**: 在 `metadata` 中增加 `alternates: { canonical: '/products' }`~~ ✅ 已添加。
4. ~~**fitment-finder**: 检查 `alt=""` 的图片~~ ✅ 已改为描述性 alt。
5. ~~**品牌名**: 全局统一为 “BorealGrit™”（在 title/OG 等出现处）~~ ✅ 已统一。

技术侧 SEO 基础可视为**优秀**；持续迭代可再加强结构化数据与内容深度（如案例、地域长尾词）。
