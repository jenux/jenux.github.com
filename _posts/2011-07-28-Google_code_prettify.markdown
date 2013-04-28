---
layout: post
title: 为任意项目甚至html静态页面增加代码高亮的插件
tags:
- Javascript
---

这个教程运用 [Google code prettify](http://code.google.com/p/google-code-prettify/) 简单快捷地为任意项目，甚至是单纯的HTML静态页面添加代码高亮。

<embed src="http://www.youtube.com/v/_ggWarwhv9M?version=3&amp;hl=en_US&amp;hd=1" width="550" height="338" allowscriptaccess="never" allowfullscreen="true" wmode="transparent" type="application/x-shockwave-flash">
    
#第1步: 下载源码
下载源码: [Google code](http://code.google.com/p/google-code-prettify/)

#第2步: 把src目录拷进你的项目
我习惯把src目录重命名为: highlighter

#第3步: 在项目页面中引用文件
在你的页面中引用prettify.css和prettify.js

    <!Doctype html>
    <html>
        <head>
            <meta charset='utf-8'>
            <title>Google code prettify demo</title>
            <link rel="stylesheet" href="highlighter/prettify.css">
            <script src='highlighter/prettify.js'></script>
        </head>
        <body>
            
        </body>
    </html>

代码高亮插件将对带有'prettyprint'样式的 pre|code标签起作用。
    <body>
        <pre class='prettyprint'>
            (function(){
               var jenux = 'Jenux'; 
            });
        </pre>
    </body>

#第4步: 调用 prettyPrint()方法
    <body>
        <pre class='prettyprint'>
            (function(){
               var jenux = 'Jenux'; 
            });
        </pre>    
        <script>
            prettyPrint();
        </script>
    </body>

#第5步: 其他
*可以增加或修改pre样式lang-js等以指定高亮语言。
*在[这里](http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html)可以选择其他配色方案

---

[原文链接](http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-how-to-add-syntax-highlighting-to-any-project/)

