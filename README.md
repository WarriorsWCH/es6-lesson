###1.使用nvm管理node版本
- 安装wget：sudo brew install wget
- 安装nvm：wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
- 使用nvm列出全部可以安装的版本号：nvm ls-remote
- 安装指定版本：nvm install v7.9.0
- 切换指定版本，切换效果是全局的：nvm use v7.8.0
- 查看当前使用的版本：nvm current

###2.使用nodemon调试
这个工具和node-supervisor基本上是一致的，但是其功能比较强大，个人觉得在开发环境还是用 nodemon，因为配置比较方便，文档也很清晰。所以这里先主要讲 nodemon。 
- nodemon 的安装：npm install -g nodemon
- 配置："dev": "nodemon -w src --exec \"babel-node src --presets env\"",
- 运行：npm run dev
###3.es6知识点
- const，let
- 结构赋值
- String，NUmber，Array，function，Object扩展
- Symbol，Set，Map
- Class
- Proxy，Reflect
- Promise，Iterator，Generator，async