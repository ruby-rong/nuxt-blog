---
title: CSS变量主题色
description: 'CSS变量主题色'
published: 2024/9/22
slug: 'CSS变量'
---

```bash
:root {
  --background: #ffffff;
  --foreground: #000000;
  --color-primary: #c6a648;
}

html[data-theme='light'] {
  --background: #f83ff8;
  --foreground: #4d3af9;
  --color-primary: #a61515;
}

html[data-theme='dark'] {
  --background: #6df83f;
  --foreground: #635ab0;
  --color-primary: #f6abab;
}

[data-theme='dark'] body {
  background-color: red;
}

[data-theme='light'] body {
  background-color: green;
}
```

- data-theme='light' 写在html标签上 后续可以改light
- data-theme 中的变量不可以改
