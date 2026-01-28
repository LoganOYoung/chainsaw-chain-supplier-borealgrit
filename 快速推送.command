#!/bin/bash

cd "$(dirname "$0")"

echo "═══════════════════════════════════════════════════════"
echo "   推送到 GitHub"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "仓库: chainsaw-chain-supplier-borealgrit"
echo ""
echo "请输入以下信息："
echo "  Username: LoganOYoung"
echo "  Password: [粘贴你的 Personal Access Token]"
echo ""
echo "═══════════════════════════════════════════════════════"
echo ""

git push -u origin main

echo ""
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    echo "访问仓库: https://github.com/LoganOYoung/chainsaw-chain-supplier-borealgrit"
    echo ""
    read -p "按回车键关闭..."
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "请检查："
    echo "  1. Token 是否正确"
    echo "  2. Token 是否有 repo 权限"
    echo "  3. 网络连接是否正常"
    echo ""
    read -p "按回车键关闭..."
fi
