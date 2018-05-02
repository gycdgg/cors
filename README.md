## 跨域的几种解决方案（附带完整demo）

一直都在网上看别人写的跨域解决方案，今天花时间写了几个demo

* cors: 后端设置cors，每个框架设置的防范都差不多，koa有第三方的middleware koa-cors，其实内部也很简单。不用koa-cors的自己也写了一下
* jsonp: 一个装逼的名字，跟json并没有什么关系，利用了src get远程脚本没有跨域限制的特性，缺点很明显，只能用在GET请求，原因就是src访问远程脚本就是GET请求


## demo
#### 运行
1. 确保本地node环境已经安装
2. npm i 
3. npm start

#### demo结构
```
client
    |-appjs     //前端页面端server启动
    |-xxx.html  //页面demo
routers
    |-index.js  //server端路由、
babel           // es6转译
app.js          // server端主文件
index.js        // 项目主文件
package.json    // 依赖
```