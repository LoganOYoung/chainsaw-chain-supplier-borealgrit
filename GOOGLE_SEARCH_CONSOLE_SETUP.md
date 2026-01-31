# Google Search Console 连接指南

## 📍 网站信息
- **网站URL**: https://borealgrit.com
- **Sitemap URL**: https://borealgrit.com/sitemap.xml

---

## 步骤 1：访问 Google Search Console

1. **打开浏览器**，访问：https://search.google.com/search-console
2. **登录**：使用你的 Google 账号登录
   - 如果没有 Google 账号，先注册一个：https://accounts.google.com/signup

---

## 步骤 2：添加网站属性

### 方法 A：使用网址前缀（推荐）

1. 在 Google Search Console 首页，点击左上角的**属性选择器**（显示当前属性名称的下拉菜单）
2. 点击 **"添加属性"**
3. 选择 **"网址前缀"** 方式
4. 输入你的网站URL：`https://borealgrit.com`
5. 点击 **"继续"**

### 方法 B：使用域名（如果你拥有整个域名）

1. 选择 **"域名"** 方式
2. 输入域名：`borealgrit.com`
3. 点击 **"继续"**

---

## 步骤 3：验证网站所有权

Google 需要验证你是网站的所有者。有以下几种验证方式：

### 方式 1：HTML 文件验证（最简单，推荐）

1. **下载验证文件**
   - Google 会提供一个 HTML 文件（例如：`google1234567890.html`）
   - 点击 **"下载文件"** 按钮

2. **上传文件到网站根目录**
   - 将下载的 HTML 文件上传到网站的根目录（`public/` 文件夹）
   - 文件应该可以通过 `https://borealgrit.com/google1234567890.html` 访问

3. **在 Search Console 中点击"验证"**
   - 上传文件后，返回 Search Console
   - 点击 **"验证"** 按钮
   - Google 会检查文件是否可以访问

**对于你的 Next.js 项目**：
- 将验证文件放到 `public/` 文件夹
- 重新部署网站
- 验证文件会自动在根目录可访问

### 方式 2：HTML 标签验证（如果无法上传文件）

1. **复制验证代码**
   - Google 会提供一个 `<meta>` 标签代码
   - 复制这段代码

2. **添加到网站**
   - 打开 `app/layout.tsx`
   - 在 `<head>` 部分添加验证代码
   - 重新部署网站

3. **验证**
   - 返回 Search Console
   - 点击 **"验证"** 按钮

### 方式 3：DNS 验证（最可靠，但需要域名管理权限）

1. **获取验证记录**
   - Google 会提供一个 TXT 记录
   - 例如：`google-site-verification=xxxxxxxxxxxxxxxxxxxxx`

2. **添加到 DNS**
   - 登录你的域名注册商（如 GoDaddy、Namecheap、Cloudflare 等）
   - 找到 DNS 管理页面
   - 添加一条 TXT 记录：
     - **名称/主机**：`@` 或留空
     - **类型**：`TXT`
     - **值**：Google 提供的验证字符串
     - **TTL**：默认值即可

3. **等待 DNS 传播**
   - 通常需要几分钟到几小时
   - 可以使用工具检查：https://dnschecker.org/

4. **验证**
   - DNS 传播后，返回 Search Console
   - 点击 **"验证"** 按钮

### 方式 4：Google Analytics（如果已安装）

如果你已经在网站上安装了 Google Analytics：
- 选择 **"Google Analytics"** 验证方式
- 确保使用的 Google Analytics 账号有管理员权限

### 方式 5：Google Tag Manager（如果已安装）

如果你已经在网站上安装了 Google Tag Manager：
- 选择 **"Google Tag Manager"** 验证方式
- 确保使用的 GTM 容器有发布权限

---

## 步骤 4：验证成功后的操作

验证成功后，你会看到：

1. **欢迎页面**
   - Google 会显示欢迎信息
   - 提供一些快速入门指南

2. **提交 Sitemap**
   - 在左侧菜单中，点击 **"Sitemap"**
   - 在"添加新的 sitemap"输入框中输入：`sitemap.xml`
   - 点击 **"提交"**
   - 等待 Google 处理（通常几分钟到几小时）

3. **检查索引状态**
   - 在左侧菜单中，点击 **"页面"**
   - 查看哪些页面已被索引

---

## 步骤 5：提交 Sitemap（重要！）

### 方法 1：通过 Search Console 提交

1. 在左侧菜单中，点击 **"Sitemap"**
2. 在"添加新的 sitemap"输入框中输入：`sitemap.xml`
3. 点击 **"提交"**
4. 等待状态变为"成功"

### 方法 2：通过 robots.txt（已自动配置）

你的 `robots.txt` 已经包含了 sitemap 链接：
```
Sitemap: https://borealgrit.com/sitemap.xml
```

Google 会自动发现这个 sitemap，但手动提交会更快。

---

## 常见问题解决

### 问题 1：验证失败

**可能原因**：
- 文件未正确上传
- DNS 记录未正确添加
- 网站无法访问

**解决方法**：
1. 确认文件可以通过浏览器访问（例如：`https://borealgrit.com/google1234567890.html`）
2. 检查 DNS 记录是否正确（使用 https://dnschecker.org/）
3. 确认网站可以正常访问

### 问题 2：Sitemap 无法获取

**可能原因**：
- sitemap.xml 文件不存在
- sitemap.xml 格式错误
- 网站未正确部署

**解决方法**：
1. 访问 `https://borealgrit.com/sitemap.xml` 确认文件存在
2. 检查 sitemap.xml 格式是否正确
3. 确认网站已正确部署

### 问题 3：页面未被索引

**可能原因**：
- 网站刚添加，Google 还未抓取
- robots.txt 阻止了抓取
- 页面有 noindex 标签

**解决方法**：
1. 等待几天（Google 需要时间抓取）
2. 检查 robots.txt 是否允许抓取
3. 使用"URL 检查"工具请求索引

---

## 验证后的后续步骤

### 1. 请求索引（可选但推荐）

对于重要页面，可以手动请求索引：

1. 在 Search Console 中，点击 **"URL 检查"**（顶部搜索框）
2. 输入要索引的 URL，例如：`https://borealgrit.com`
3. 点击 **"请求编入索引"**
4. 等待 Google 处理

### 2. 监控索引状态

1. 在左侧菜单中，点击 **"页面"**
2. 查看：
   - 已编入索引的页面数量
   - 有效页面
   - 需要修复的问题

### 3. 检查覆盖范围报告

1. 在左侧菜单中，点击 **"页面"**
2. 查看：
   - 有效页面
   - 警告
   - 错误
   - 已排除的页面

### 4. 设置提醒（可选）

1. 在 Search Console 设置中
2. 配置电子邮件通知
3. 选择要接收的通知类型：
   - 重要问题
   - 手动操作
   - 增强功能

---

## 重要提示

1. **验证是必需的**：只有验证网站所有权后，才能使用 Search Console 的所有功能

2. **DNS 验证最可靠**：如果你有域名管理权限，推荐使用 DNS 验证

3. **HTML 文件验证最简单**：如果没有域名管理权限，使用 HTML 文件验证

4. **验证后不要删除**：
   - HTML 验证文件：验证后可以删除，但建议保留
   - DNS 记录：验证后必须保留，删除会导致验证失效

5. **多个验证方式**：可以同时使用多种验证方式，增加可靠性

---

## 快速检查清单

- [ ] 访问 Google Search Console
- [ ] 登录 Google 账号
- [ ] 添加网站属性（网址前缀方式）
- [ ] 选择验证方式（推荐 HTML 文件或 DNS）
- [ ] 完成验证
- [ ] 提交 sitemap.xml
- [ ] 检查 sitemap 状态
- [ ] 请求重要页面索引
- [ ] 设置通知提醒（可选）

---

## 需要帮助？

如果遇到问题：
1. 查看 Google Search Console 帮助中心：https://support.google.com/webmasters
2. 检查网站是否可以正常访问
3. 确认 sitemap.xml 可以访问：https://borealgrit.com/sitemap.xml
4. 确认 robots.txt 可以访问：https://borealgrit.com/robots.txt

---

**完成这些步骤后，你的网站就会连接到 Google Search Console，可以开始监控 SEO 表现和索引状态了！** 🎉
