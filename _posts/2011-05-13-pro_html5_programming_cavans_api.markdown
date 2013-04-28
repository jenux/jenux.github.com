---
layout: post
title: HTML5高级编程之Canvas API
tags: 
- 读书笔记 
- HTML
---

#Canvas是什么
1. 基本元素
`<canvas></canvas>`

2. canvas坐标
从左上角开始，x轴沿水平方向向右延伸， y轴沿垂直方向向下延伸， 左上角坐标为x=0,y=0，称为原点

3. 替代内容
`<canvas>Update your browser to enjoy canvas!</canvas>`

#HTML5 Canvas API
1. 检测浏览器支持情况
    try{
        document.createElement('canvas').getContext('2d');
    }catch(e){
        //
    }

2. 页历中加入canvas
    `<canvas width='200' height='200' style=''></canvas>`