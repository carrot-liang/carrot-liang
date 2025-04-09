#!/bin/sh

pnpm docs:build

cd docs/.vuepress

zip -r dist.zip dist

scp dist.zip root@1.94.233.75:/var/www

ssh root@1.94.233.75 "cd /var/www && mv html html-`date +%Y%m%d%H%M%S` && unzip dist.zip && mv dist html"

rm -rf dist

rm -rf dist.zip
