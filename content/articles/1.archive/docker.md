---
title: 'docker'
description: 'docker的使用'
published: 2023/11/22
slug: 'docker'
---

### 操作系统内核

```js
cat / etc / redhat - release

uname - r
```

### docker

```js
// 运行docker

docker run -it ubantu bash


```

### Dockerfile

[] FROM 用于指定基础镜像
[] WORKDIR用于指定 Docker 的工作目录
[] COPY 用于将文件拷贝到 Docker
[] RUN 用于执行命令行命令。这里我们安装了项目依赖
[] CMD 用于指定容器启动命令
[] EXPOSE 用于声明容器运行时提供服务的端口

```ts
//  查看 redis 容器的 container id
docker container ls
//  进入 redis 容器
docker exec -it b0a18 bash
```
