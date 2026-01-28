#!/bin/bash

cd "$(dirname "$0")"

echo "═══════════════════════════════════════════════════════"
echo "   推送到 GitHub"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "仓库地址: https://github.com/LoganOYoung/chainsaw-chain-supplier-borealgrit.git"
echo ""
echo "⚠️  推送时需要身份验证："
echo "   1. Username: 输入 LoganOYoung"
echo "   2. Password: 输入你的 Personal Access Token（不是 GitHub 密码）"
echo ""
echo "═══════════════════════════════════════════════════════"
echo ""

git push -u origin main

echo ""
if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo "访问: https://github.com/LoganOYoung/chainsaw-chain-supplier-borealgrit"
else
    echo "❌ 推送失败，请检查："
    echo "   1. 是否已创建 Personal Access Token"
    echo "   2. Token 是否正确"
    echo "   3. 仓库是否存在且有权限"
fi
