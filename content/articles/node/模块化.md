---
title: '模块化'
description: 'node模块化'
published: 2024/1/1
slug: 'commonjs-and-ems'
---

## 1.commonJS规范

```bash
const fs = require('node:fs');  // 导入核心模块
const express = require('express');  // 导入 node_modules 目录下的模块
const myModule = require('./myModule.js');  // 导入相对路径下的模块
const nodeModule = require('./myModule.node');  // 导入扩展模块
```

## 2.ESM模块规范

打开package.json 设置 type:module

```bash
import fs from 'node:fs'
```

## 3.区别

- [Cjs同步加载，ESM异步加载]
- [Cjs可修改，esm可读的]
- [Cjs不tree shaking，esm tree shaking]

## 4.全局变量

- [__dirname]表示当前模块的所在目录的绝对路径
- [__filename]表示当前模块文件的绝对路径，包括文件名和文件扩展名

```bash
process

process.env包含当前环境变量的对象
```
