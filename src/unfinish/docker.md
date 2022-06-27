---
lang: zh-CN
title: 前端静态资源服务
description: 使用docker和nginx搭建前端静态资源服务
---
# 使用docker和nginx搭建前端静态资源服务

## Docker

`docker` 使应用部署更加轻量，可移植，可扩展，更好的环境隔离也更大程度地避免了生产环境与测试环境不一致

### Dockerfile

```docker
FROM nginx:1.21.6-alpine
```

### 指令详细介绍

- **`FROM nginx:<version>-alpine`** : 表示基于`Alpine Linux nginx`构建镜像。(Alpine Linux 比大多数发行版基础镜像小得多，因此通常会导致镜像体积更小)

#### nginx镜像对比

```shell
# 拉取完整版镜像
$ docker pull nginx

# 拉取alpine版镜像
$ docker pull nginx:stable-alpine

# 查看本地镜像列表
$ docker images

REPOSITORY   TAG             IMAGE ID       CREATED        SIZE
nginx        latest          605c77e624dd   5 months ago   141MB
nginx        stable-alpine   373f8d4d4c60   6 months ago   23.2MB
```

::: tip
如果从 ``docker hub`` 拉取镜像较慢, 可以通过修改docker的 `daemon.json` 配置文件来使用镜像加速, 如 
`"registry-mirrors": ["https://emrlqcfa.mirror.aliyuncs.com"]` 使用阿里云镜像源
:::



