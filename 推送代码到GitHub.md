# 推送代码到 GitHub 指南

## 当前状态
- ✅ Git 仓库已初始化
- ✅ 远程仓库已配置：`https://github.com/LoganOYoung/chainsaw-chain-supplier-borealgrit.git`
- ✅ 代码已提交到本地仓库
- ⚠️ 需要身份验证才能推送到 GitHub

## 推送方法

### 方法 1：使用 Personal Access Token（推荐）

1. **创建 GitHub Personal Access Token**：
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   - 输入名称（如：chainsaw-project）
   - 勾选 `repo` 权限
   - 点击 "Generate token"
   - **重要**：复制生成的 token（只显示一次）

2. **推送代码**：
   ```bash
   git push origin main
   ```
   - 用户名：输入你的 GitHub 用户名
   - 密码：输入刚才复制的 Personal Access Token（不是 GitHub 密码）

### 方法 2：使用 SSH 密钥（更安全，推荐长期使用）

1. **检查是否已有 SSH 密钥**：
   ```bash
   ls -al ~/.ssh
   ```

2. **如果没有，生成新的 SSH 密钥**：
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   - 按 Enter 使用默认路径
   - 可以设置密码或直接按 Enter

3. **添加 SSH 密钥到 ssh-agent**：
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

4. **复制公钥**：
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   复制输出的内容

5. **添加到 GitHub**：
   - 访问：https://github.com/settings/keys
   - 点击 "New SSH key"
   - 粘贴公钥内容
   - 点击 "Add SSH key"

6. **更改远程仓库 URL 为 SSH**：
   ```bash
   git remote set-url origin git@github.com:LoganOYoung/chainsaw-chain-supplier-borealgrit.git
   ```

7. **推送代码**：
   ```bash
   git push origin main
   ```

### 方法 3：使用 GitHub CLI（最简单）

1. **安装 GitHub CLI**（如果未安装）：
   ```bash
   brew install gh
   ```

2. **登录**：
   ```bash
   gh auth login
   ```
   按照提示选择：
   - GitHub.com
   - HTTPS
   - 登录方式（浏览器或 token）

3. **推送代码**：
   ```bash
   git push origin main
   ```

## 快速推送命令

如果已经配置好身份验证，直接运行：

```bash
cd /Users/ouyangheng/coding/chainsaw-chain-supplier-nextjs
git push origin main
```

## 注意事项

- 确保 `.gitignore` 已正确配置，避免推送不必要的文件（如 `node_modules`、`.next` 等）
- 如果推送失败，检查网络连接和身份验证配置
- Personal Access Token 需要定期更新（建议设置过期时间）

## 检查推送状态

推送成功后，可以访问仓库查看：
https://github.com/LoganOYoung/chainsaw-chain-supplier-borealgrit
