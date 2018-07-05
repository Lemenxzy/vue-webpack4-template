# 业务组通用组件模板

## 介绍

本模板基于[组件脚手架模板](https://git.souche-inc.com/souche-f2e/component-template)修改。本模板支持特点功能如下：
* webpack版本升级 =>  webpack3 ---> webpack4

* 仿vue-cil，dev下 错误信息 友好显示 , 显示在游览器中

* dev环境下和 build 环境下公用一个html模板，自动生成对应的 script 标签

* karma 单元测试

* postcss 兼容

* eslint 代码检测工具

* karma 覆盖率检测，生成本地 html 代码检测报告

* ...


Bug 联系人: 许智源

## 安装
```bash
npm install
```

## 使用

### dev环境使用
```bash
npm run dev
```

### 生产环境使用

```bash
npm run build
```

### karma测试
```bash
npm run karma
```

- 新开命令行

```bash
npm run test
```

## 代码结构目录结构说明


```
├─ build   (webpack相关配置)
│ |– webpack.base.config.js
│ |- webpack.dev.config.js
│ |- webpack.prod.config.js
│ |- webpack.test.config.js
│– coverage   (karma测试报告)
│ |– html
│ | |– index.html
│- node_modules
│- src   (主目录)
│- test   (karma单元测试脚本)
│-|- unit
│-|-|- *.spec.js
│-.eslintignore
│-.eslintrc.js   (eslint配置文件)
│-index.html   (模板)
│- karma.config.js   (karma配置文件)
│- package.json
│- postcss.config.js   (postcss配置文件)
│- README.md
```


