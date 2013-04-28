---
layout: post
title: 在Mac Lion下安装Node.js 
tags:
- node.js 
- Mac
---
# 用homebrew 进行安装 
`brew update`
`brew install node`

<small>
当前环境:
Mac Lion 10.7.2
node.js: 0.6.9
</small>

# 手动安装 
* install Xcode
* install git
* 执行以下命令:
<pre>
    git clone git://github.com/joyent/node.git
    cd node
    ./configure
    make
    sudo make install
</pre>

---
# Update 1:
用homebrew在Lion下安装，运行hello world应用，控制台报错:Segmentation fault: 11,
同时发现用homebrew安装时编译参数带有 --without npm

在node.js主页下载Mac下的[安装包](http://nodejs.org/dist/v0.6.9/node-v0.6.9.pkg)重新安装:

<pre>
Node was installed at: */usr/local/bin/node*
npm was installed at: */usr/local/bin/npm*
</pre>

#用nvm(node version managerment)安装
nvm是一个像ruby rvm的东西，可以让你切换node的版本以便在开发中切换.
目前初学还无此需求，记录备查
<pre>
    $ git clone git://github.com/creationix/nvm.git ~/.nvm
    $ echo ". ~/.nvm/nvm.sh" >> ~/.bashrc
    $ nvm install v0.6.9
    $ nvm alias default v0.6.9
</pre>
