# 启动开发服务器指南

## 问题诊断

如果网站打不开，请按照以下步骤操作：

## 方法 1：手动启动（推荐）

### 步骤 1：打开终端
在项目目录下打开终端（Terminal）

### 步骤 2：清理并启动
```bash
cd /Users/ouyangheng/coding/chainsaw-chain-supplier-nextjs

# 清理构建缓存
rm -rf .next

# 停止可能正在运行的进程
lsof -ti:3000,8080 | xargs kill -9 2>/dev/null

# 启动开发服务器
npm run dev
```

### 步骤 3：等待启动完成
看到以下信息表示启动成功：
```
✓ Ready in XXXXms
- Local:        http://localhost:3000
```

### 步骤 4：访问网站
在浏览器中打开：**http://localhost:3000/**

---

## 方法 2：使用启动脚本

```bash
cd /Users/ouyangheng/coding/chainsaw-chain-supplier-nextjs
./start-dev.sh
```

---

## 方法 3：使用不同端口（如果 3000 被占用）

```bash
npm run dev:8080
```
然后访问：**http://localhost:8080/**

---

## 常见问题排查

### 1. 端口被占用
如果看到 `Error: listen EPERM` 或端口被占用：
```bash
# 查看占用端口的进程
lsof -i:3000
lsof -i:8080

# 杀死占用端口的进程（替换 PID 为实际进程号）
kill -9 <PID>
```

### 2. 构建错误
如果构建失败：
```bash
# 清理所有缓存
rm -rf .next node_modules

# 重新安装依赖
npm install

# 重新构建
npm run build

# 启动服务器
npm run dev
```

### 3. 权限问题
如果遇到权限错误：
```bash
# 确保有执行权限
chmod +x start-dev.sh

# 或者直接使用 npm
npm run dev
```

---

## 验证服务器是否运行

在浏览器中访问：
- http://localhost:3000/
- http://localhost:8080/

如果看到网站首页，说明服务器运行正常。

---

## 如果仍然无法访问

1. **检查防火墙设置**
2. **检查浏览器控制台**（F12）查看错误信息
3. **检查终端输出**查看服务器日志
4. **尝试其他端口**：修改 `package.json` 中的端口号
