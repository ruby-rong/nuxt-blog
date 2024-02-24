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

## 项目中遇到的困难

## zustand 原理

## slice 第三个参数

1.可选的第三个参数，用于指定切片步长 默认为1 2.负数表示从后往前切片

```JS
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 提取从索引1到索引7之间的元素，步长为2
const slice4 = array.slice(1, 7, 2);
console.log(slice4); // [2, 4, 6]


// 提取最后三个元素
const slice3 = array.slice(-3);
console.log(slice3); // [8, 9, 10]

```

## pop push 返回值

1. pop 返回被删除的元素

2. push 返回新数组的长度

## 数组去重

```JS
// set
const arr = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7]
const uniqueArr = [...new Set(arr)]


//filter
const array = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});







```

## 数组扁平化

```js bash
const nestedArray = [1, [2, [3, 4], 5], 6]
const flattenedArray = nestedArray.flat(Infinity)

console.log(flattenedArray) // [1, 2, 3, 4, 5, 6]
```

## 数组插入

```JS
// push
const array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]

// unshift
const array = [2, 3, 4];
array.unshift(1);
console.log(array); // [1, 2, 3, 4]


// splice splice(插入元素的起始索引,删除个数,要插入的元素) 方法可以在指定位置插入元素

const array = [1, 2, 4, 5];
array.splice(2, 0, 3);
console.log(array); // [1, 2, 3, 4, 5]


```

## 什么情况下使用useMemo callback

1.大量运算的时候

## some 方法

forEach break打断不了 可以用some 和 for 平替

1.some 方法用于检测数组中的元素是否满足指定条件（函数提供）。

some() 方法在判断条件满足时会立即返回，不会继续遍历剩余的元素。这使得它非常适合用于判断数组中是否存在满足特定条件的元素
