---
layout: post
title: Contenteditable开发的一些问题
tags: 
- Javascript
- Development
---
最近用contenteditable实现页面实时编辑的一个交互组件，发现一些问题不是很好处理。  
  
##在不同浏览器下回车生成的标签是不同的，如:  
    - 在Chrome下生成div,  
    - 在IE下生成p,  
    - 在Firefox下生成br  
        IE下网上有很多方法可以截获回车事件，修改为br，  
        Chrome下暂时我是在提交时手动替换生成的div标签来不完美处理的;  
<br>  
  
##在Firefox和Opera下如果contenteditable元素是嵌套在li元素下的，会引发bug,表现如下:  
    - 在Firefox下无法换行  
    - 在Opera下会生成li元素  
        暂时还没有好的解决办法, 我只能修改原来ul>li的结构，改成section>.li  
<br>
  
##在Firefox和Opera下contenteditable的元素无法绑定键盘事件，如  
    - 我想绑定按下Esc键时触发取消编辑的方法  
    - 我想绑定按下ctrl+Enter时触发提交编辑的方法  
    - 等等  
<br>  
    
  
##其他应该注意的一些问题是：  
- 设置contenteditable='true'的元素，在粘贴从外部拷贝的内容时，会连带原有的格式（如样式）等。

