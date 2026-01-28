# EmailJS 配置指南

## 📋 概述

已集成 EmailJS 用于纯前端表单提交。当用户从购物车点击 "Request for Bulk Quote" 后，会显示表单收集客户信息，并通过 EmailJS 发送邮件。

---

## 🚀 快速开始

### 步骤 1：注册 EmailJS 账号

1. 访问：https://www.emailjs.com/
2. 点击 "Sign Up" 注册免费账号
3. 免费版支持 **200 次/月**

### 步骤 2：创建邮件服务

**推荐方案：使用域名邮箱（@borealgrit.com）**

#### 方案 A：使用域名邮箱（推荐）⭐

**优点：**
- ✅ 更专业，使用公司域名邮箱
- ✅ 提升品牌形象
- ✅ 邮件来自 `noreply@borealgrit.com` 或 `sales@borealgrit.com`

**配置步骤：**

1. 登录 EmailJS，进入 **Email Services**
2. 点击 **Add New Service**
3. 选择 **Custom SMTP**
4. 配置 SMTP 设置：
   - **Service Name**: `Borealgrit Domain Email`
   - **Host**: 根据你的邮箱服务商选择：
     - **Google Workspace**: `smtp.gmail.com`
     - **Microsoft 365**: `smtp.office365.com`
     - **其他服务商**: 查看你的邮箱服务商文档
   - **Port**: 
     - Gmail/Google Workspace: `587` (TLS) 或 `465` (SSL)
     - Microsoft 365: `587` (STARTTLS)
   - **Username**: 你的域名邮箱（例如：`sales@borealgrit.com`）
   - **Password**: 邮箱密码或应用专用密码
   - **Secure**: 选择 `TLS` 或 `SSL`
5. 点击 **Create Service**
6. 记录下 **Service ID**（例如：`service_xxxxx`）

**注意：**
- 如果使用 Gmail/Google Workspace，可能需要启用"允许不够安全的应用"或使用"应用专用密码"
- 如果使用 Microsoft 365，可能需要启用 SMTP AUTH

#### 方案 B：使用 Gmail（简单快速）

**适合：** 快速测试或临时使用

1. 登录 EmailJS，进入 **Email Services**
2. 点击 **Add New Service**
3. 选择 **Gmail**
4. 按照提示连接你的 Gmail 账号
5. 记录下 **Service ID**

**注意：** 使用 Gmail 时，邮件会显示来自你的 Gmail 地址，不是 `@borealgrit.com`

### 步骤 3：创建邮件模板

1. 进入 **Email Templates**
2. 点击 **Create New Template**
3. 使用以下模板内容：

```
Subject: RFQ Request from {{company_name}}

Hello,

You have received a new RFQ request from your website.

Company Information:
- Company Name: {{company_name}}
- Contact Name: {{contact_name}}
- Email: {{email}}
- Phone: {{phone}}
- Country: {{country}}
- City: {{city}}

Order Details:
- Expected First Order Quantity: {{expected_quantity}}
- Estimated Annual Volume: {{annual_volume}}
- Target Market: {{target_market}}
- Incoterms: {{incoterms}}
- Currency: {{currency}}

Products Requested ({{product_count}} items):
{{products}}

Additional Message:
{{message}}

---
Submitted on: {{submission_date}}
```

4. 设置 **To Email** 为你的接收邮箱（例如：`sales@borealgrit.com`）
5. 设置 **From Name** 为 `Borealgrit Website`
6. 设置 **From Email**：
   - 如果使用域名邮箱：`noreply@borealgrit.com` 或 `sales@borealgrit.com`
   - 如果使用 Gmail：你的 Gmail 地址
7. 设置 **Reply To** 为 `{{email}}`（使用表单提交的客户邮箱）
8. 点击 **Save**
9. 记录下 **Template ID**（例如：`template_xxxxx`）

### 步骤 4：获取 Public Key

1. 进入 **Account** → **General**
2. 找到 **Public Key**
3. 复制 Public Key（例如：`xxxxxxxxxxxxx`）

### 步骤 5：配置代码

打开 `app/request-quote/page.tsx`，找到以下配置：

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // 替换为你的 Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // 替换为你的 Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // 替换为你的 Public Key
```

替换为你的实际值：

```typescript
const EMAILJS_SERVICE_ID = 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'abcdefghijklmnop'
```

---

## 🔄 备用方案：邮件链接

如果 EmailJS 未配置，系统会自动使用 `mailto:` 链接作为备用方案。用户点击提交后，会打开邮件客户端，自动填充所有信息。

---

## 📧 邮件模板变量说明

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `{{company_name}}` | 公司名称 | ABC Distributors |
| `{{contact_name}}` | 联系人姓名 | John Smith |
| `{{email}}` | 邮箱地址 | john@example.com |
| `{{phone}}` | 电话号码 | +1 (555) 123-4567 |
| `{{country}}` | 国家 | USA |
| `{{city}}` | 城市 | New York |
| `{{message}}` | 附加消息 | 用户输入的额外信息 |
| `{{expected_quantity}}` | 预期首次订单量 | 1000 units |
| `{{annual_volume}}` | 年采购量 | 10000 units/year |
| `{{target_market}}` | 目标市场 | USA / Canada |
| `{{incoterms}}` | 贸易条款 | FOB China |
| `{{currency}}` | 货币 | USD |
| `{{products}}` | 产品列表 | 格式化的产品信息 |
| `{{product_count}}` | 产品数量 | 3 |
| `{{submission_date}}` | 提交时间 | 2026-01-28 10:30 AM |

---

## 🧪 测试

1. 在 Product Catalog 页面添加产品到购物车
2. 点击 "Request Quote for X Items"
3. 填写表单
4. 提交表单
5. 检查你的邮箱是否收到邮件

---

## ⚙️ 高级配置

### 自定义邮件模板

你可以在 EmailJS 后台自定义邮件模板：
- 添加 HTML 格式
- 添加公司 Logo
- 自定义样式

### 添加更多字段

如果需要添加更多表单字段：

1. 在表单中添加输入框
2. 在 `formData` state 中添加字段
3. 在 `templateParams` 中添加对应的变量
4. 在 EmailJS 模板中使用 `{{variable_name}}`

---

## 🔒 安全性

- ✅ Public Key 是安全的，可以暴露在前端代码中
- ✅ EmailJS 会自动验证请求
- ✅ 免费版有速率限制，防止滥用

---

## 💰 价格

- **免费版：** 200 次/月
- **付费版：** $15/月起，更多配额和功能

对于 B2B 网站，200 次/月通常足够使用。

---

## 🆘 故障排除

### 邮件未收到

1. 检查垃圾邮件文件夹
2. 确认 EmailJS 服务已连接
3. 检查模板配置是否正确
4. 查看 EmailJS Dashboard 的日志

### 表单提交失败

1. 检查浏览器控制台错误
2. 确认 Public Key 配置正确
3. 确认 Service ID 和 Template ID 正确

### 备用方案

如果 EmailJS 配置有问题，系统会自动使用 `mailto:` 链接作为备用方案。

---

## 📞 支持

- EmailJS 文档：https://www.emailjs.com/docs/
- EmailJS 支持：support@emailjs.com

---

**配置完成后，表单功能即可正常工作！** 🎉
