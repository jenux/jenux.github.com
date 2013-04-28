---
layout: post
title: Css3之Media Queries相关样式
tags: 
- 读书笔记
- CSS
---

本篇是《HTML5与CSS3权威指南》(HTML5 and CSS3: The Definitive Guide)一书第21章的笔记。  

---

#1. 根据浏览器的窗口大小来选择使用不同的样式 
- CSS中，与媒体相关的样式定义从CSS2.1开始。 CSS2.1中定义了各种媒体类型，如显示器，便携设备，电视机等。
- CSS3中，加入Media Queries模块，允许添加媒体查询(media query)表达式,用以指定媒体类型，然后根据媒体类型来选择应该使用的样式。  
  即，不改变内容的情况下，在样式中选择一种页面的布局以精确适应不同设备。

#2. 在iPhone中的显示
iPhone 3GS分辨率是320 x 480, 在文中示例中打开demo页，却不是以设置的小布局渲染页面。因为iPhone中使用的safari显示页面时将窗口宽度作为980px来显示。 这种情况下，可以利用`<meta>`标签在页面中指定safari在处理本页面时按照多少像素的窗口宽度来进行:  


    <meta name="viewport" content="width=600px">
    待测试: <meta name="viewport" content="width=device-width">


#3. Media Queries的使用方法
    @media 设备类型 and (设备特性) { 样式代码 }
  
    
- 在Media Queries中可以指定的值与该值所代表的设备类型  

| 可以指定的值        | 设备类型                    |  
|:--------------|:------------------------|  
| all           | 所有设备                    |  
| screen        | 电脑显示器                   |  
| print         | 打印用纸或打印预览视图             |  
| handheld      | 便携设备                    |  
| tv            | 电视机类型的设备                |  
| speech        | 语音和音频合成器                |  
| braille       | 盲人用点字法触觉回馈设备            |  
| embossed      | 盲文打印机                   |  
| projection    | 各种投影设备                  |  
| tty           | 使用固定密度字母栅格的媒介， 如电传打字机和终端|  

- Css中的设备特性共13种

| 特性                  | 可指定的值                 | 是否允许min/max前缀  | 特性说明                                 |
|:--------------------|:----------------------|:--------------:|:-------------------------------------|
|width                | 带单位长度值:如400px         | 是              | 浏览器窗口的宽度                             |
|height               | 同上                    |                | 浏览器窗口的高度                             |
|device-width         | 同上                    |                | 设备屏幕分辨率的宽度值                          |
|device-height        | 同上                    |                | 设备屏幕分辨率的高度值                          |
|orientation          | portrait或landscape    | 否              | 浏览器窗口方向，高度大于宽度时为portrait             |
|aspect-radio         | 比例值:如16/9             |                | 浏览器窗口纵横比，宽度/高度                       |
|device-aspect-radio  | 同上                    |                | 屏幕分辨率纵横比，宽度/高度                       |
|color                | 整数值                   |                | 设备使用多少位的颜色值，如果不是彩色设备，该值为0            |
|color-index          | 同上                    |                | 色彩表中的色彩数                             |
|monochrome           | 同上                    |                | 单色帧缓冲器中每像素的字节数                       |
|resolution           | 分辨率值，如300dpi          |                | 设备分辨率                                |
|scan                 | progressive或interlace | 否              | 电视类型扫描方式，progressive逐行扫描             |
|grid                 | 0或1                   | 否              | 设备是基于樱格还是基于位图，基于栅格时为1                |

