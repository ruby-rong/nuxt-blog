---
title: 'node'
description: 'node'
published: 2024/4/29
slug: 'node'
---

# API介绍

## 1. process.env

process.env 属性返回一个包含用户环境信息的对象。

## 2. process.cwd()

process.cwd() 方法返回 Node.js 进程当前工作的目录。

## 3.process.platform

process.platform 属性返回一个字符串，表示 Node.js 进程运行的操作系统平台。

# 环境变量场景

区分开发环境 和 生产环境 npm install cross-env

```js
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open",
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js"
  }
}
```
