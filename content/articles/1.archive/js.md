---
title: 'JS'
description: 'A simple way to convert a SVG to PNG using Canvas'
published: 2024/01/25
slug: 'JS'
---

## 属性描述符

```js bash
const obj = {
  value:'1'
  name:'2'
}

//得到属性描述符
var keys = Object.keys(obj)
const desc = keys.getOwnPropertyDescriptor(obj,value)

//设置属性描述符

Object.defineProperty(obj,'a',{
  value: 10,
  writable: false,//不可重写
  enumerable: false,//不可遍历
  configurable: false,// 属性描述符不可修改
})

Object.defineProperty(obj,'b',{
  get: function(){

  }, // 读取器
  set: function(){

  }, // 设置器
})

```
