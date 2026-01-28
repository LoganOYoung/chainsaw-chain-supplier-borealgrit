# EmailJS 详细配置步骤

## 📋 当前状态

✅ 你已经登录 EmailJS Dashboard  
✅ 当前在 "Email Services" 页面  
✅ 免费版：200 次/月（足够使用）

---

## 🚀 第一步：添加邮件服务（使用域名邮箱）

### 步骤 1.1：点击 "Add New Service"

1. 在 Email Services 页面，点击蓝色的 **"Add New Service"** 按钮

### 步骤 1.2：选择邮件服务类型

你会看到几个选项：

**推荐选择：Custom SMTP**（用于域名邮箱 `@borealgrit.com`）

### 步骤 1.3：配置 Custom SMTP

填写以下信息：

#### 如果使用 Google Workspace（推荐）

```
Service Name: Borealgrit Domain Email
Host: smtp.gmail.com
Port: 587
Username: sales@borealgrit.com（或你的域名邮箱）
Password: [你的邮箱密码或应用专用密码]
Secure: TLS
```

**注意：** 如果启用了两步验证，需要使用"应用专用密码"：
- 访问：https://myaccount.google.com/apppasswords
- 创建新的应用专用密码
- 使用这个密码（不是邮箱密码）

#### 如果使用 Microsoft 365

```
Service Name: Borealgrit Domain Email
Host: smtp.office365.com
Port: 587
Username: sales@borealgrit.com
Password: [你的邮箱密码]
Secure: STARTTLS
```

#### 如果使用 Zoho Mail（免费）

```
Service Name: Borealgrit Domain Email
Host: smtp.zoho.com
Port: 587
Username: sales@borealgrit.com
Password: [你的邮箱密码]
Secure: TLS
```

#### 如果使用其他邮箱服务商

- **GoDaddy**: Host: `smtpout.secureserver.net`, Port: `465`, Secure: `SSL`
- **Namecheap**: Host: `mail.privateemail.com`, Port: `587`, Secure: `TLS`
- 其他：查看你的邮箱服务商文档

### 步骤 1.4：测试连接

1. 点击 **"Create Service"** 或 **"Test"** 按钮
2. 如果配置正确，会显示成功消息
3. **重要：** 记录下 **Service ID**（格式：`service_xxxxx`）

---

## 📧 第二步：创建邮件模板

### 步骤 2.1：进入 Email Templates

1. 在左侧边栏，点击 **"Email Templates"**
2. 点击 **"Create New Template"** 按钮

### 步骤 2.2：配置模板基本信息

**Template Name:** `RFQ Request Template`

**To Email:** `sales@borealgrit.com`（接收询盘的邮箱）

**From Name:** `Borealgrit Website`

**From Email:** `sales@borealgrit.com` 或 `noreply@borealgrit.com`

**Reply To:** `{{email}}`（使用客户提交的邮箱，方便回复）

**Subject:** `RFQ Request from {{company_name}}`

### 步骤 2.3：编写邮件内容

在邮件内容框中，粘贴以下模板：

```
Hello,

You have received a new RFQ request from your website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPANY INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Company Name: {{company_name}}
Contact Name: {{contact_name}}
Email: {{email}}
Phone: {{phone}}
Country: {{country}}
City: {{city}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Expected First Order Quantity: {{expected_quantity}}
Estimated Annual Volume: {{annual_volume}}
Target Market: {{target_market}}
Incoterms: {{incoterms}}
Currency: {{currency}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCTS REQUESTED ({{product_count}} items)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{products}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted on: {{submission_date}}

Please respond to this inquiry promptly.
```

### 步骤 2.4：保存模板

1. 点击 **"Save"** 按钮
2. **重要：** 记录下 **Template ID**（格式：`template_xxxxx`）

---

## 🔑 第三步：获取 Public Key

### 步骤 3.1：进入 Account 设置

1. 在左侧边栏，点击 **"Account"**
2. 选择 **"General"** 标签页

### 步骤 3.2：复制 Public Key

1. 找到 **"Public Key"** 字段
2. 点击复制按钮或手动复制
3. **重要：** 记录下 Public Key（格式：`xxxxxxxxxxxxx`）

---

## 💻 第四步：在代码中配置

### 步骤 4.1：打开代码文件

打开项目文件：`app/request-quote/page.tsx`

### 步骤 4.2：找到配置位置

找到以下代码（大约在第 15-17 行）：

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

### 步骤 4.3：替换为实际值

将你刚才记录的三个值填入：

```typescript
const EMAILJS_SERVICE_ID = 'service_abc123'  // 从步骤 1.4 获取
const EMAILJS_TEMPLATE_ID = 'template_xyz789'  // 从步骤 2.4 获取
const EMAILJS_PUBLIC_KEY = 'abcdefghijklmnop'  // 从步骤 3.2 获取
```

**示例：**

```typescript
const EMAILJS_SERVICE_ID = 'service_abc12345'
const EMAILJS_TEMPLATE_ID = 'template_xyz67890'
const EMAILJS_PUBLIC_KEY = 'abcdefghijklmnopqrstuvwxyz'
```

### 步骤 4.4：保存文件

保存文件后，代码会自动更新。

---

## 🧪 第五步：测试配置

### 步骤 5.1：在 EmailJS Dashboard 测试

1. 进入 **"Email Templates"**
2. 找到你创建的模板
3. 点击 **"Test"** 按钮
4. 填写测试数据
5. 点击 **"Send Test Email"**
6. 检查你的邮箱（`sales@borealgrit.com`）是否收到测试邮件

### 步骤 5.2：在网站上测试

1. 访问你的网站：`https://borealgrit.com/products`
2. 添加几个产品到购物车
3. 点击 "Request Quote for X Items"
4. 填写表单
5. 提交表单
6. 检查邮箱是否收到询盘邮件

---

## ✅ 配置检查清单

- [ ] EmailJS 账号已注册并登录
- [ ] 邮件服务已创建（Custom SMTP）
- [ ] SMTP 配置正确（Host、Port、Username、Password）
- [ ] 测试连接成功
- [ ] Service ID 已记录
- [ ] 邮件模板已创建
- [ ] 模板中的变量正确（{{company_name}}、{{email}} 等）
- [ ] Template ID 已记录
- [ ] Public Key 已获取
- [ ] 代码中的三个配置常量已更新
- [ ] 测试邮件发送成功
- [ ] 网站表单提交测试成功

---

## 🆘 常见问题

### Q: SMTP 连接失败怎么办？

**A:** 检查以下几点：
1. Host 和 Port 是否正确
2. Username 是否完整（包含 @borealgrit.com）
3. Password 是否正确（如果启用两步验证，使用应用专用密码）
4. Secure 设置是否正确（TLS/SSL/STARTTLS）

### Q: 邮件发送失败怎么办？

**A:** 
1. 检查 EmailJS Dashboard 的 **"Email History"** 查看错误信息
2. 确认 Service ID、Template ID、Public Key 配置正确
3. 检查邮件模板中的变量是否正确

### Q: 邮件进入垃圾邮件文件夹？

**A:**
1. 确保 From Email 使用域名邮箱（@borealgrit.com）
2. 配置 SPF 和 DKIM 记录（联系你的域名服务商）
3. 避免使用 "noreply" 作为发件人（使用 "sales" 更好）

### Q: 免费版 200 次/月不够用？

**A:**
1. 考虑升级到付费版（$15/月起）
2. 或者使用备用方案（mailto 链接）

---

## 📊 配置完成后

配置完成后，你的表单功能将：

✅ 自动发送邮件到 `sales@borealgrit.com`  
✅ 邮件来自 `sales@borealgrit.com`（专业域名邮箱）  
✅ 包含所有客户信息和产品信息  
✅ 客户可以直接回复邮件（Reply To 设置为客户邮箱）

---

## 🎯 快速参考

**三个关键 ID：**
1. **Service ID**: `service_xxxxx`（从 Email Services 获取）
2. **Template ID**: `template_xxxxx`（从 Email Templates 获取）
3. **Public Key**: `xxxxxxxxxxxxx`（从 Account → General 获取）

**配置位置：**
- 文件：`app/request-quote/page.tsx`
- 行数：约第 15-17 行

---

**按照以上步骤，你的 EmailJS 配置就完成了！** 🎉
