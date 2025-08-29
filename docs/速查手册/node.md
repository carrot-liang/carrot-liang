---
title: Node 命令速查
createTime: 2025/08/13
permalink: /blog/fx8yl1r5/
---


### macOS
- 使用 Homebrew（简单）
  - 安装: `brew install node`
  - 升级: `brew upgrade node`
- 使用 nvm（推荐，便于多版本切换）
  - 安装 nvm（zsh）：
    - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
    - 重新打开终端或 `source ~/.zshrc`
  - 安装/切换 Node：
    - `nvm install --lts`
    - `nvm use --lts`
    - 设默认：`nvm alias default lts/*`

### Linux（Ubuntu/Debian）
- 使用 NodeSource（以 20.x 为例）
  - `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -`
  - `sudo apt-get install -y nodejs`

## 版本管理（nvm）
- 查看已装版本：`nvm ls`
- 安装指定版本：`nvm install 20`
- 切换版本：`nvm use 20`
- 设置默认：`nvm alias default 20`

## 包管理器

### pnpm（推荐，与本仓库一致）
- 安装：
  - 使用 corepack：`corepack enable && corepack prepare pnpm@latest --activate`
  - 或全局安装：`npm i -g pnpm`
- 安装依赖：`pnpm install`
- 运行脚本：`pnpm run <script>` 或 `pnpm <script>`
- 安装依赖：`pnpm add <pkg>`；开发依赖：`pnpm add -D <pkg>`
- 移除依赖：`pnpm remove <pkg>`
- 更新依赖：`pnpm update` 或 `pnpm up <pkg>`

### npm
- 安装依赖：`npm install`
- 运行脚本：`npm run <script>`
- 安装依赖：`npm i <pkg>`；开发依赖：`npm i -D <pkg>`
- 移除依赖：`npm uninstall <pkg>`

### yarn
- 安装依赖：`yarn`
- 运行脚本：`yarn <script>`
- 安装依赖：`yarn add <pkg>`；开发依赖：`yarn add -D <pkg>`
- 移除依赖：`yarn remove <pkg>`

## 运行与脚本
- 直接运行：`node app.js`
- 观察模式：`node --watch app.js`（Node 18+）
- 使用环境文件：`node --env-file=.env app.js`（Node 20+）
- npx 临时执行：`npx <cli> [...args]`
- package.json 脚本：
  - 定义示例：
    ```json
    {
      "scripts": {
        "dev": "node app.js",
        "build": "tsc -p .",
        "start": "node dist/index.js"
      }
    }
    ```
  - 运行：`pnpm dev` / `pnpm build` / `pnpm start`

## 调试
- 启动调试协议：`node --inspect app.js`
- 断点前暂停：`node --inspect-brk app.js`
- Chrome DevTools：打开 `chrome://inspect`，选择 Node 进程
- VSCode：使用 `launch.json` 附加/启动调试

## ESM 与 CJS
- CommonJS（CJS）：`require()` / `module.exports`，文件常为 `.cjs` 或默认在未开启 ESM 的项目中。
- ES Module（ESM）：`import` / `export`，在 `package.json` 中设置 `"type": "module"`，或使用 `.mjs` 扩展名。
- 注意：ESM 与 CJS 互操作需要留意默认导出与文件扩展名；Node 20+ 推荐优先 ESM。

## 常见技巧
- 查看版本：`node -v`，包管理器版本：`npm -v` / `pnpm -v`
- 查看路径：`which node`（macOS/Linux）/ `where node`（Windows）
- 端口被占用（macOS/Linux）：
  - `lsof -i :3000 | grep LISTEN`
  - `kill -9 <PID>`
- 提升内存上限（大型构建）：
  - macOS/Linux：`export NODE_OPTIONS=--max-old-space-size=4096`
  - Windows PowerShell：`$env:NODE_OPTIONS="--max-old-space-size=4096"`

## 验证运行时环境
- Node 信息：`node -p "process.versions"`
- 平台/架构：`node -p "process.platform + ' ' + process.arch"`