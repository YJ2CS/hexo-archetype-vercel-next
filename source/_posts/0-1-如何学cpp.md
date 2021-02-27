---
title: 如何学C++
alias:
  - 0-1-如何学cpp/index.html
categories:
  - learn_cpp
tags:
  - 悦读
no-photos: 'https://random.52ecy.cn/randbg.php?size=1&rid-e4f6'
lastmod: '2020-12-26T11:56:04+08:00'
date: 2020-11-10 22:16:00
---

## 环境

system: windows 10
IDE: Clion VS2019
compiler: CMake 3.17.3 MSBuild 16.0

-   选择Clion只是为了不增加一门IDE的学习成本

明确一个核心点:

在此之前已经对C/C++有基础了解，能拿出手的就一个学生管理系统。

学习C++分为以下几个阶段：

## 基础知识

刚上手的时候肯定是先过一遍C++最基本的知识，讲C++基础的书籍比如《C++ primer》

也就是三大块：变量、语法、数据结构

基础基本上1~2周时间过完

如果你有一定的英语水平，已经不是初学者，这里还有一些英文网站：

### 小项目巩固

C++的项目实践，这之前将书中源码调通

学习C++，光学不练肯定是不行的。一定阶段的学习后，我们就需要一个项目来进行实践。

实现一个丐版学生信息管理系统
下面放一些C实现

-   [C-超级简单的通讯录程序](https://github.com/jackforlove/address-list-c-projrct)

-   [学生管理系统（简易版）- C 语言大作业](https://github.com/bobby285271/stu-management)

-   [用c++实现《统计学习方法》中的算法](https://github.com/bBobxx/statistical-learning)

-   [Cpp Primer 学习学习仓库，包括笔记和课后练习答案。](https://github.com/applenob/Cpp_Primer_Practice)

### 巩固基础

阅读《C++ primer》，在巩固一遍基础的同时你会发现自己诸多没有学习到的边边角角，这一步是对自己基础知识的补充。

## 标准库

### C++ 资源大全

awesome-C++ 是 vinta 发起维护的 C++ 资源列表，内容包括：Web 框架、网络爬虫、网络内容提取、模板引擎、数据库、数据可视化、图片处理、文本处理、自然语言处理、机器学习、日志、代码分析等。

-   [awesome-C++](https://github.com/vinta/awesome-cpp)

有更详细的中文介绍，对相应开发者的帮助会更大。

-   [C++ 资源大全中文版](https://github.com/jobbole/awesome-cpp-cn)

## C++设计模式

学习使用了这些C++库，此时的你应该是对C++十分满意，也十分激动能遇到这样的语言，就是这个时候不妨开始学习C++数据结构与算法，C++设计模式，这是你进一步学习的一个重要步骤：[C++-patterns](https://github.com/faif/C++-patterns)

## 研究方向与项目实战

此时选择你要研究的方向，如果你想做后端开发，不妨研究研究

### 项目实战

-   学生管理系统

“学生管理系统”依旧是个很好的练手系统。作为一个练手项目，目标就是把C++的主要技能点串起来，所以自不求尽善尽美（也不可能），

在前端上，只要实现一个包含table、textbox、button，能发送REST请求到server，能实现学生的“增删改查”的简单页面即可。
