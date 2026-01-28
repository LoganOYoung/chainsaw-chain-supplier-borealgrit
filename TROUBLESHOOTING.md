# 故障排除指南 - Connection Error & Planning Moves

## 问题描述
项目卡在 "connection error" 和 "planning moves" 状态。

## 可能原因

### 1. Next.js 开发服务器 WebSocket 连接问题
Next.js 使用 WebSocket 进行热重载（HMR），连接失败会导致开发体验问题。

### 2. Cursor AI 编辑器连接超时
Cursor 的 AI 功能在处理大型项目时可能遇到连接超时。

### 3. 端口冲突
端口 8080 可能被其他进程占用。

## 解决方案

### 方案 1: 重启开发服务器

```bash
# 停止当前运行的服务器 (Ctrl+C)
# 然后重新启动
cd chainsaw-chain-supplier-nextjs
npm run dev
```

### 方案 2: 清理并重新安装依赖

```bash
cd chainsaw-chain-supplier-nextjs
rm -rf .next node_modules
npm install
npm run dev
```

### 方案 3: 检查端口占用

```bash
# 检查端口 8080 是否被占用
lsof -i :8080

# 如果被占用，可以：
# 1. 杀死占用进程
kill -9 <PID>

# 2. 或者修改 package.json 使用其他端口（如 3000）
```

### 方案 4: 修改端口（如果 8080 被占用）

编辑 `package.json`:
```json
{
  "scripts": {
    "dev": "next dev -p 3000",
    "start": "next start -p 3000"
  }
}
```

### 方案 5: 检查网络连接

- 确保网络连接正常
- 如果使用代理，检查代理设置
- 检查防火墙是否阻止了 WebSocket 连接

### 方案 6: 重启 Cursor 编辑器

1. 完全退出 Cursor
2. 重新打开 Cursor
3. 重新打开项目

### 方案 7: 清除 Cursor 缓存

```bash
# macOS
rm -rf ~/Library/Application\ Support/Cursor/Cache
rm -rf ~/Library/Application\ Support/Cursor/CachedData
```

### 方案 8: 检查 Next.js 配置

已更新 `next.config.js` 以改善 WebSocket 连接稳定性：
- 添加了 `webpackDevMiddleware` 配置
- 添加了 `onDemandEntries` 配置

## 验证修复

1. 重启开发服务器后，检查终端是否有错误信息
2. 打开浏览器访问 http://localhost:8080
3. 检查浏览器控制台是否有 WebSocket 连接错误
4. 尝试修改代码，确认热重载是否正常工作

## 如果问题仍然存在

1. 检查 Next.js 版本兼容性
2. 查看 Cursor 的错误日志
3. 尝试使用其他编辑器（如 VS Code）验证是否是 Cursor 特定问题
4. 检查系统资源（内存、CPU）是否充足

## 相关文件

- `next.config.js` - Next.js 配置文件（已更新）
- `package.json` - 项目依赖和脚本配置
