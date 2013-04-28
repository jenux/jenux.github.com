---
layout: post
title: Git初学者基础知识
tags: 
- Git
- Development
---

《[看日记学GIT](http://roclinux.cn/?p=343)》是Git入门不错的系列文章，最近开始在[GitHub](http://github.com)上托管自己的一些代码，也用Github Pages服务来搭建自己的笔记库，经常在上下班路上翻阅一下《看日记学GIT》，颇有收获。  
其第9章是对前8章的复习总结，基本上涵盖了入门者使用Git的流程和基本命令，在这里摘录一下部分内容，如果你对Git感兴趣，推荐阅读本系列文章。  
点击[这里](http://dl.dbank.com/c0n8xljq3a)是我收藏的一份pdf版本  

---

#1 获得帮助可以使用类似 `man git-****`的命令格式, 如:  

 
    man git-commit 
    man git-pull
    man git-merge


#2 使用Git之前，应该提交简单的个人信息，以便区分不同的提交者的身份  

    git config -global user.name "your name"
    git config -global user.email "your email address"


#3 新开启一个项目，先建立一个目录(eg:myproject)，然后:

    cd myproject
    git init
    git add .
    git commit -m 'Start my git project.'

这样一个新项目就诞生了。

#4 修改了项目源代码，需要提交时:

    git add '新建或修改的文件'  #git add .
    git commit
    或git commit -a //直接提交修改过的文件


#5 源码修改对比:

    git diff    //git add使用之前有效，如果已经add,此命令输出为空 
    git diff -cached //这个命令在git add之后，git commit之前有效
    git status //这个命令在git commit之前有效，会输出文件修改状态

#6 查看日志

    git log
    git log -p  // 输入更详细的日志内容，包括修改了哪些源码


#7 创建分支，分支开发成功则合并到主分支，否则放弃该分支

    git branch experimental //创建一个名为experimental的分支
    git branch //显示当前分支，标注*号的为当前所在分支
    git checkout experimental  //切换到experimental分支
    ...开发过程
    git commit -a //在experimental分支上修改源代码并提交
    git checkout master //切回主分支
    git merge experimental  //合并到主分支
    git commit -a //彻底完成分支合并，提交主分支
    git branch -d experimental // 删除已合并的experimental分支

    如果分支开发失败:
    git checkout master
    git branch -D experimental 


#8 查看图形化分支信息

    gitk


#9 Git协作

