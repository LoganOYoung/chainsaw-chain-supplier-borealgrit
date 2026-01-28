# Vercel 自定义域名配置指南

## 📋 前提条件

- ✅ Vercel 部署已成功
- ✅ 拥有一个域名（如：example.com）
- ✅ 可以访问域名的 DNS 管理面板

---

## 🚀 步骤 1：在 Vercel 中添加域名

### 方法 A：从项目页面添加

1. 登录 Vercel：https://vercel.com/dashboard
2. 点击你的项目：**HengQin Marketing**（或 chainsaw-chain-supplier-borealgrit）
3. 进入项目后，点击顶部菜单的 **"Settings"**（设置）
4. 在左侧菜单中找到 **"Domains"**（域名）
5. 在输入框中输入你的域名（例如：`yourdomain.com`）
6. 点击 **"Add"**（添加）

### 方法 B：从部署成功页面添加（你当前看到的页面）

1. 在 "Next Steps" 部分，点击 **"Add Domain"**（添加域名）
2. 输入你的域名
3. 点击添加

---

## 🔧 步骤 2：配置 DNS 记录

添加域名后，Vercel 会显示需要配置的 DNS 记录。根据你的域名提供商，选择以下方式之一：

### 方式 1：使用 CNAME 记录（推荐，适用于子域名）

如果你的域名是 `www.yourdomain.com` 或 `app.yourdomain.com`：

1. 登录你的域名注册商（如：GoDaddy、Namecheap、Cloudflare、阿里云等）
2. 进入 DNS 管理页面
3. 添加一条 **CNAME 记录**：
   - **类型**：CNAME
   - **名称**：`www`（或你想要的子域名）
   - **值/目标**：Vercel 提供的 CNAME 值（通常是 `cname.vercel-dns.com`）
   - **TTL**：3600（或自动）

### 方式 2：使用 A 记录（适用于根域名）

如果你的域名是 `yourdomain.com`（根域名）：

1. 在 DNS 管理页面添加 **A 记录**：
   - **类型**：A
   - **名称**：`@` 或留空（表示根域名）
   - **值/目标**：Vercel 提供的 IP 地址（通常是 `76.76.21.21`）
   - **TTL**：3600

**注意**：Vercel 会显示具体的 DNS 配置值，请按照 Vercel 页面上的指示操作。

---

## ⏱️ 步骤 3：等待 DNS 生效

1. DNS 记录添加后，需要等待 **几分钟到几小时** 才能生效
2. 在 Vercel 的 Domains 页面，你可以看到域名状态：
   - 🟡 **Pending**：DNS 正在验证中
   - 🟢 **Valid**：配置成功，可以使用了

### 检查 DNS 是否生效

在终端运行：
```bash
# 检查 CNAME 记录
dig www.yourdomain.com CNAME

# 或检查 A 记录
dig yourdomain.com A
```

---

## 🔒 步骤 4：SSL 证书自动配置

✅ **好消息**：Vercel 会自动为你的域名配置 SSL 证书（HTTPS）

- 无需手动操作
- 通常在 DNS 生效后几分钟内自动完成
- 证书由 Let's Encrypt 提供，自动续期

---

## 📝 常见域名提供商配置示例

### Cloudflare
1. 登录 Cloudflare Dashboard
2. 选择你的域名
3. 进入 **DNS** → **Records**
4. 添加记录（CNAME 或 A 记录）
5. 确保 **Proxy status** 设置为 **DNS only**（灰色云朵）或 **Proxied**（橙色云朵）

### GoDaddy
1. 登录 GoDaddy
2. 进入 **My Products** → **DNS**
3. 在 **Records** 部分添加新记录
4. 保存更改

### Namecheap
1. 登录 Namecheap
2. 进入 **Domain List** → 点击 **Manage**
3. 进入 **Advanced DNS**
4. 添加新的 DNS 记录

### 阿里云（万网）
1. 登录阿里云控制台
2. 进入 **域名** → **解析设置**
3. 添加 **CNAME** 或 **A** 记录
4. 保存

---

## 🎯 推荐配置（根域名 + www）

最佳实践是同时配置根域名和 www 子域名：

### 配置 1：根域名（yourdomain.com）
- 使用 **A 记录** 指向 Vercel IP

### 配置 2：www 子域名（www.yourdomain.com）
- 使用 **CNAME 记录** 指向 Vercel

在 Vercel 中，你可以同时添加两个域名：
- `yourdomain.com`
- `www.yourdomain.com`

Vercel 会自动处理重定向（通常将根域名重定向到 www，或反之）。

---

## ✅ 验证配置

配置完成后：

1. **检查 Vercel 状态**：
   - 在 Domains 页面查看域名状态应为 **Valid**（绿色）

2. **访问网站**：
   - 打开浏览器访问：`https://yourdomain.com`
   - 应该能看到你的网站，并且有 HTTPS 锁图标

3. **测试重定向**：
   - 访问 `http://yourdomain.com`（HTTP）应该自动跳转到 `https://yourdomain.com`（HTTPS）

---

## 🐛 常见问题

### Q: DNS 记录添加后，Vercel 一直显示 "Pending"
A: 
- 等待 5-10 分钟（DNS 传播需要时间）
- 检查 DNS 记录是否正确
- 使用 `dig` 或在线工具检查 DNS 是否已生效

### Q: 域名显示 "Invalid Configuration"
A:
- 检查 DNS 记录的值是否正确
- 确保记录类型（CNAME/A）正确
- 等待更长时间让 DNS 传播

### Q: 网站可以访问，但没有 HTTPS
A:
- 等待几分钟，Vercel 会自动配置 SSL
- 如果超过 1 小时仍未配置，检查 DNS 是否正确

### Q: 根域名和 www 都配置了，但访问根域名不跳转
A:
- 在 Vercel Domains 设置中，可以设置重定向规则
- 或使用域名提供商的 URL 重定向功能

### Q: 域名在其他地方使用，想迁移到 Vercel
A:
- 先配置 DNS 记录
- 等待 DNS 生效
- Vercel 会自动接管域名

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 Vercel 的 DNS 配置页面，确保按照指示操作
2. 检查你的域名提供商的 DNS 文档
3. Vercel 支持文档：https://vercel.com/docs/concepts/projects/domains

---

## 🎉 完成！

配置完成后，你的网站就可以通过自定义域名访问了！

**示例**：
- ✅ `https://yourdomain.com`
- ✅ `https://www.yourdomain.com`

每次代码更新推送到 GitHub，Vercel 会自动部署，域名也会自动更新！
