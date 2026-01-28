#!/bin/bash

# 清理构建缓存
echo "Cleaning build cache..."
rm -rf .next

# 停止可能正在运行的服务器
echo "Stopping existing servers..."
lsof -ti:3000 2>/dev/null | xargs kill -9 2>/dev/null || true

# 等待端口释放
sleep 2

# 启动开发服务器
echo "Starting development server..."
npm run dev
