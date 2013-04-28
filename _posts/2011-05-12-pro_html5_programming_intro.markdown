---
layout: post
title: HTML5高级编程之概述
tags: 
- 读书笔记 
- HTML
---

#新的认识
HTML5基于各种各样的理念进行设计，这些设计理念体现了对可能性和可行性的新认识。  
- 兼容性
- 实用性
- 互通性 
- 通用访问性

1. 兼容性
HTML5不是颠覆性的革新，其核心理念是保持一切新特性平滑过渡。

2. 效率和用户优先
在遇到无法解决的冲突时，规范会把用户放在第一位， 其次是页面作者，再次是实现者(或浏览器),接着是规范制定者，最后才考虑理论的纯粹性。  
下面几种代码写法在HTML5中都能被识别:  
    id='prohtml5'  
    id=prohtml5  
    id="prohtml5"

3. 化繁为简
HTML5要的就是简单，避免不必要的复杂性，口号是“简单至上，尽可能简化”，有以下改进：  
- 以浏览器原生能力替代复杂的javascript代码
- 新的简化的DOCTYPE
- 新的简化的字符集声明
- 简单而强大的HTML5 API

4. 通用访问
- 可访问性  
出于对残障用户的考虑，HTML5与WAI(Web Accessibility Initiative,Web可访问性倡议)和ARIA(Accessible Rich Internet Applications,可访问的富Internet应用)做到了紧密结合，WAI-ARIA中以屏幕阅读器为基础元素已经被添加到HTML中。
- 媒体中立
如果可能的话，HTML5的功能在所有不同的设备和平台上应该都能正常运行。
- 支持所有语种
如，新的`<ruby>`元素支持在东亚页面排版中会用到的Ruby注释

#无插件范式

#HTML5新功能
1. 新的DOCTYPE和字符集
`<!DOCTYPE html>`  
`<meta charset='utf-8'>`

2. 新元素和旧元素

-----
内容类型        描述  

-----
内嵌          向文档中添加其他类型的内容，如audio, video, canvas和iframe等  
流           在文档和应用的body中使用的元素，如form, h1和small等  
标题          段落标题，如h1, h2和hgroup等  
交互          与用户交互的内容，如音频和视频的控件，button和textarea等  
元数据         通常出现在页面head中，设置页面其他部分的表现和行为，如script, style和title等  
短语          文本和文本票房，如mark, kbd, sub和sup等  
片断          用于定义页面片断的元素，如article, aside和title等

-----

3. 语义化标记
HTML5中新的片断类元素

---
元素名         描述

---
header      标记头部区域内容  
footer      标记脚部区域内容  
section     web页面中的一块区域  
article     独立的文章内容  
aside       相关内容或引文  
nav         导航类辅助内容

---

4. 使用Selectors API简化选取操作

新QuerySelector方法

---
函数                  描述                  示例                                            
querySelector()     根据规则，返回找到的第一个匹配元素   `querySelector("input.error")`
querySelectorAll()  根据规则，返回所有匹配的元素      `querySelectorAll('#results td')`

---

可为Selector API同时批定多个选择规则，如:  
`var x = document.querySelector('.highlight', '.lowClass');`  
对querySelector来说，选择的是满足规则中任意条件的第一个元素，  
对于querySelectorAll来说，选择的是只要满足规则中任何一个条件的元素

#资源
- [www.caniuse.com](http://www.caniuse.com)
按浏览器的版本提供了详尽的html5的功能支持情况

- [html5test.com](http://www.html5tst.com)
用浏览器访问该网站，会直接显示用户浏览器对HTML5规范支持情况

- **[Modernizr](http://www.modernizr.com)**
提供非常先进的HTML5和CSS3检测功能
