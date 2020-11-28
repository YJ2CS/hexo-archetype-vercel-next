---
title: 
url: 
author: YJ2CS
avatar: 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/custom/avatar.jpg'
authorLink: YJ2CS.github.io
authorAbout: 愿青年摆脱了冷气，只是向前走！
authorDesc: 愿青年摆脱了冷气，只是向前走！
categories:
  - 文章
comments: true
tags:
  - 悦读
keywords: Sakura
photos: 'https://api.dongmanxingkong.com/suijitupian/acg/1080p/index.php'
abbrlink: f05b
date: 2020/11/28
---

## 初始化server失败的一个自我排除问题方法
*使用 npm-check 更新项目依赖*

在项目根目录(本README所在目录)运行

```cmd
npm-check -u
```


输出如下：

```cmd
? Choose which packages to update. (Press <space> to select)

 Update package.json to match version installed.
❯◯ chalk     ^1.1.3   ❯  2.4.2   https://github.com/chalk/chalk#readme
 ◯ cheerio   ^0.22.0  ❯  0.22.0  https://github.com/cheeriojs/cheerio#readme
 ◯ debug     ^2.3.3   ❯  4.1.1   https://github.com/visionmedia/debug#readme
 Space to select. Enter to start upgrading. Control-C to cancel.

```

**使用 `↑` `↓` `空格space` 选中要更新的包，`Ctrl + C` 取消更新，`回车` 就是执行更新。**

## 当您安装了错误的node依赖，或者您遇到了未知bug，可以尝试下面的修复方法

**重新安装node依赖**

linux中:

```cmd
rm -rf node_modules/ && npm i
```

windows中:
删除node_modules文件夹并执行
```bash
npm i
```



## 当您尝试git push到远程仓库，发现单次提交文件体积过大，提交失败，可以尝试以下解决方案

*git 远程仓库设置*
```bash
# 关闭ssl的安全验证
git config http.sslVerify "false"
# 增大缓冲池 `Buffer`
git config --global http.postBuffer 524288000
```
524288000代表B，524288000B也就是500MB。这个值得大小，可以根据项目酌情设置。

