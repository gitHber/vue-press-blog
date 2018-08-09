#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.likun.fun' > CNAME

git init
git add *
git commit -m 'deploy'

git config http.postBuffer 104857600

# 发布到 https://<USERNAME>.github.io
git push -f git@github.com:gitHber/githber.github.io.git master 