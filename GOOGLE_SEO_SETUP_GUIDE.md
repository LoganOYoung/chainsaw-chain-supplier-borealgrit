# Google SEO 工具使用指南

## 📍 网站信息
- **网站URL**: https://borealgrit.com
- **Sitemap URL**: https://borealgrit.com/sitemap.xml
- **Robots.txt URL**: https://borealgrit.com/robots.txt

---

## 1. Google Search Console 提交 Sitemap

### 步骤 1：访问 Google Search Console
1. 访问：https://search.google.com/search-console
2. 使用你的 Google 账号登录

### 步骤 2：添加属性（如果还没有添加）
1. 点击左上角的属性下拉菜单
2. 选择"添加属性"
3. 选择"网址前缀"方式
4. 输入：`https://borealgrit.com`
5. 点击"继续"
6. 按照提示验证网站所有权（推荐使用 HTML 文件验证或 DNS 验证）

### 步骤 3：提交 Sitemap
1. 在左侧菜单中，点击"Sitemap"
2. 在"添加新的 sitemap"输入框中输入：`sitemap.xml`
3. 点击"提交"
4. 等待 Google 处理（通常需要几分钟到几小时）

### 步骤 4：验证提交状态
- 提交后，sitemap 状态会显示为"已提交"
- 处理完成后，状态会变为"成功"
- 如果显示"无法获取"，检查 sitemap.xml 是否可以正常访问

### 验证 Sitemap 可访问性
在浏览器中访问以下 URL 确认 sitemap 可以正常访问：
```
https://borealgrit.com/sitemap.xml
```

如果部署后无法访问，可能需要：
- 确认 Next.js 已正确生成 sitemap.xml
- 检查 Vercel 部署配置
- 确认路由配置正确

---

## 2. Google Rich Results Test 验证结构化数据

### 步骤 1：访问测试工具
访问：https://search.google.com/test/rich-results

### 步骤 2：测试页面
有两种测试方式：

#### 方式 A：通过 URL 测试（推荐）
1. 选择"按 URL 测试"
2. 输入要测试的页面 URL，例如：
   - 首页：`https://borealgrit.com`
   - 产品页面：`https://borealgrit.com/products`
   - 系列页面：`https://borealgrit.com/products/series-e`
3. 点击"测试 URL"
4. 等待测试完成

#### 方式 B：通过代码测试
1. 选择"按代码测试"
2. 复制页面的 HTML 源代码
3. 粘贴到输入框中
4. 点击"测试代码"

### 步骤 3：查看结果
测试完成后，你会看到：
- ✅ **有效项目**：检测到的结构化数据类型
- ⚠️ **警告**：需要修复的问题
- ❌ **错误**：必须修复的问题

### 步骤 4：验证的结构化数据类型
你的网站包含以下结构化数据，应该都能被检测到：

1. **Organization Schema**（首页）
   - 组织名称、描述、联系方式
   - URL: `https://borealgrit.com`

2. **Product Schema**（产品页面）
   - 产品名称、描述、品牌
   - URL: `https://borealgrit.com/products`
   - URL: `https://borealgrit.com/products/series-e`
   - URL: `https://borealgrit.com/products/series-w`
   - URL: `https://borealgrit.com/products/series-p`

3. **WebSite Schema**（首页）
   - 网站搜索功能
   - URL: `https://borealgrit.com`

4. **Service Schema**（OEM页面）
   - 服务描述
   - URL: `https://borealgrit.com/oem-private-label`

5. **Certification Schema**（质量页面）
   - ISO 9001、ANSI、CSA 认证
   - URL: `https://borealgrit.com/quality`

6. **BreadcrumbList Schema**（系列产品页面）
   - 面包屑导航
   - URL: `https://borealgrit.com/products/series-e`
   - URL: `https://borealgrit.com/products/series-w`
   - URL: `https://borealgrit.com/products/series-p`

### 步骤 5：修复问题（如果有）
如果测试发现错误或警告：
1. 查看错误详情
2. 根据提示修复代码
3. 重新测试直到通过

---

## 3. PageSpeed Insights 检查页面速度

### 步骤 1：访问工具
访问：https://pagespeed.web.dev/

### 步骤 2：输入 URL
1. 在输入框中输入要测试的页面 URL，例如：
   - 首页：`https://borealgrit.com`
   - 产品页面：`https://borealgrit.com/products`
   - 询价页面：`https://borealgrit.com/request-quote`
2. 点击"分析"

### 步骤 3：选择测试类型
- **移动设备**：默认测试移动端性能
- **桌面设备**：可以切换到桌面端测试

### 步骤 4：查看结果
测试完成后，你会看到：

#### 性能分数（Performance）
- **90-100**：优秀 ✅
- **50-89**：需要改进 ⚠️
- **0-49**：差 ❌

#### 核心 Web 指标（Core Web Vitals）
1. **LCP (Largest Contentful Paint)**
   - 理想值：< 2.5 秒
   - 需要改进：2.5-4.0 秒
   - 差：> 4.0 秒

2. **FID (First Input Delay)**
   - 理想值：< 100 毫秒
   - 需要改进：100-300 毫秒
   - 差：> 300 毫秒

3. **CLS (Cumulative Layout Shift)**
   - 理想值：< 0.1
   - 需要改进：0.1-0.25
   - 差：> 0.25

#### 其他指标
- **FCP (First Contentful Paint)**：首次内容绘制
- **TTI (Time to Interactive)**：可交互时间
- **TBT (Total Blocking Time)**：总阻塞时间
- **Speed Index**：速度指数

### 步骤 5：优化建议
PageSpeed Insights 会提供详细的优化建议：
- **图片优化**：压缩图片、使用现代格式（WebP）
- **代码优化**：缩小 CSS/JS、移除未使用的代码
- **服务器优化**：启用压缩、使用 CDN
- **缓存优化**：设置适当的缓存策略

### 步骤 6：针对你的网站的优化建议

你的网站已经具备的优势：
- ✅ **静态导出**：Next.js 静态导出，加载速度快
- ✅ **图片优化**：使用 Next.js Image 组件自动优化
- ✅ **代码分割**：Next.js 自动代码分割

可能需要优化的地方：
1. **图片格式**：确保使用 WebP 格式（Next.js Image 会自动处理）
2. **字体加载**：使用 `font-display: swap`（已在 CSS 中配置）
3. **CSS 优化**：确保 Tailwind CSS 只包含使用的样式
4. **JavaScript 优化**：确保没有不必要的客户端 JavaScript

---

## 4. 其他有用的 Google SEO 工具

### Google Mobile-Friendly Test
- URL: https://search.google.com/test/mobile-friendly
- 用途：测试移动端友好性
- 你的网站：✅ 完全响应式，应该通过测试

### Google URL Inspection Tool
- 位置：Google Search Console > URL 检查
- 用途：检查特定 URL 的索引状态
- 使用：输入 URL，查看索引状态、抓取信息等

### Google Analytics（可选）
- URL: https://analytics.google.com/
- 用途：跟踪网站流量和用户行为
- 建议：如果还没有设置，可以考虑添加

---

## 5. 定期维护检查清单

### 每周检查
- [ ] Google Search Console 中的错误和警告
- [ ] 新页面的索引状态

### 每月检查
- [ ] PageSpeed Insights 性能分数
- [ ] 结构化数据验证
- [ ] Sitemap 更新状态

### 每季度检查
- [ ] 完整的 SEO 审计
- [ ] 关键词排名变化
- [ ] 竞争对手分析

---

## 6. 常见问题解决

### Sitemap 无法访问
1. 确认网站已部署到生产环境
2. 访问 `https://borealgrit.com/sitemap.xml` 确认可访问
3. 检查 robots.txt 是否允许访问
4. 确认 Next.js 正确生成了 sitemap.xml

### 结构化数据测试失败
1. 检查 JSON-LD 代码是否正确
2. 确认所有必需字段都已填写
3. 使用 Schema.org Validator 验证：https://validator.schema.org/

### 页面速度分数低
1. 检查图片是否优化
2. 确认使用了 Next.js Image 组件
3. 检查是否有大型 JavaScript 文件
4. 考虑使用 CDN（Vercel 已提供）

---

## 7. 预期结果

### Sitemap 提交
- ✅ 状态：成功
- ✅ 发现的 URL：约 20+ 个页面
- ✅ 已编入索引：逐步增加

### 结构化数据验证
- ✅ Organization Schema：通过
- ✅ Product Schema：通过
- ✅ WebSite Schema：通过
- ✅ Service Schema：通过
- ✅ Certification Schema：通过
- ✅ BreadcrumbList Schema：通过

### PageSpeed Insights
- **移动端**：预期 80-95 分
- **桌面端**：预期 90-100 分
- **核心 Web 指标**：应该都在"良好"范围内

---

## 📝 注意事项

1. **首次索引需要时间**：Google 首次抓取和索引可能需要几天到几周
2. **持续监控**：定期检查 Search Console 中的状态
3. **保持更新**：当添加新页面时，sitemap 会自动更新
4. **性能优化**：根据 PageSpeed Insights 的建议持续优化

---

## ✅ 完成检查清单

- [ ] 在 Google Search Console 添加网站属性
- [ ] 验证网站所有权
- [ ] 提交 sitemap.xml
- [ ] 验证 sitemap 状态为"成功"
- [ ] 使用 Rich Results Test 测试首页
- [ ] 使用 Rich Results Test 测试产品页面
- [ ] 使用 Rich Results Test 测试其他重要页面
- [ ] 使用 PageSpeed Insights 测试移动端性能
- [ ] 使用 PageSpeed Insights 测试桌面端性能
- [ ] 根据建议进行优化（如果需要）

---

**祝你的网站 SEO 优化顺利！** 🚀
