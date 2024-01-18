---
title: 'How to convert a SVG to PNG using Canvas'
description: 'A simple way to convert a SVG to PNG using Canvas'
published: 2023/11/22
slug: 'how-to-convert-a-svg-to-png-using-canvas'
---

<!-- ---
title: '第三方登录'
description: 'github 登录'
published: 2024/01/12
slug: '第三方登录'
--- -->

## 一.原理

1. A 网站让用户跳转到 GitHub

2. GitHub 要求用户登录，然后询问"A 网站要求获得 xx 权限，你是否同意？"

3. 用户同意，GitHub 就会重定向回 A 网站，同时发回一个授权码。

4. A 网站使用授权码，向 GitHub 请求令牌。

5. GitHub 返回令牌.

6. A 网站使用令牌，向 GitHub 请求用户数据。

## 二、应用登记

https://github.com/settings/applications/new

客户端 ID（client ID）和客户端密钥（client secret）

Client ID c400d2b7375e790251a9

client secret 2df0b56dd583c7ad315067d563dd01e30867d8ed
