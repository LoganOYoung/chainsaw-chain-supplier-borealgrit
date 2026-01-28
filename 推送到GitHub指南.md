# 推送 Next.js 版本到 GitHub 指南

## 📍 项目路径
```
/Users/ouyangheng/coding/chainsaw-chain-supplier-nextjs
```

---

## 📋 准备工作

### 步骤 1：在 GitHub 创建新仓库

1. 访问 https://github.com
2. 登录你的账号
3. 点击右上角 "+" → "New repository"
4. 填写信息：
   - **Repository name**: `chainsaw-chain-supplier`（或你喜欢的名字）
   - **Description**: `Professional B2B chainsaw chain supplier website - Next.js version`
   - **Visibility**: Public 或 Private（根据你的需要）
   - ⚠️ **不要勾选** "Initialize this repository with a README"
5. 点击 "Create repository"
6. **复制仓库地址**（例如：`https://github.com/你的用户名/chainsaw-chain-supplier.git`）

---

## 🚀 推送步骤

### 步骤 2：在终端中执行以下命令

```bash
# 1. 进入项目目录
cd /Users/ouyangheng/coding/chainsaw-chain-supplier-nextjs

# 2. 初始化 Git 仓库
git init

# 3. 配置 Git 用户信息（如果还没有配置）
git config user.name "你的名字"
git config user.email "your_email@example.com"

# 4. 添加所有文件
git add .

# 5. 提交代码
git commit -m "Initial commit: Chainsaw chain supplier website - Next.js version"

# 6. 添加 GitHub 远程仓库（替换为你的实际仓库地址）
git remote add origin https://github.com/你的用户名/仓库名.git

# 7. 重命名分支为 main
git branch -M main

# 8. 推送到 GitHub
git push -u origin main
```

---

## ⚠️ 重要提示

### 身份验证

GitHub 不再支持密码推送，你需要：

**方法 A：使用 Personal Access Token（推荐）**

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 点击 "Generate token"
5. **复制 token**（只显示一次，请保存好）
6. 推送时，密码处输入这个 token

**方法 B：使用 SSH 密钥**

1. 生成 SSH 密钥：
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. 复制公钥：
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
3. GitHub → Settings → SSH and GPG keys → New SSH key
4. 粘贴公钥并保存
5. 将远程地址改为 SSH：
   ```bash
   git remote set-url origin git@github.com:你的用户名/仓库名.git
   ```

---

## ✅ 验证推送成功

推送成功后：
1. 访问你的 GitHub 仓库页面
2. 应该能看到所有项目文件
3. 如果看到文件列表，说明推送成功！

---

## 📝 后续更新代码

修改代码后，使用以下命令更新：

```bash
cd /Users/ouyangheng/coding/chainsaw-chain-supplier-nextjs
git add .
git commit -m "描述你的更改"
git push
```

---

## 🆘 如果遇到问题

### 问题 1：需要身份验证
- 使用 Personal Access Token 或 SSH 密钥

### 问题 2：仓库已存在文件
```bash
git pull origin main --allow-unrelated-histories
```

### 问题 3：推送被拒绝
```bash
git push -u origin main --force
```
（谨慎使用，会覆盖远程代码）

---

## 📦 会被上传的文件

✅ **会上传**：
- `app/` - 所有页面代码
- `components/` - React 组件
- `public/` - 静态资源
- `package.json` - 项目配置
- 所有配置文件

❌ **不会上传**（已在 `.gitignore` 中）：
- `node_modules/` - 依赖包
- `.next/` - 构建缓存
- `.env*.local` - 本地环境变量
