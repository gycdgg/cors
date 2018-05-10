## 跨域的几种解决方案（附带完整demo）

一直都在网上看别人写的跨域解决方案，今天花时间写了几个demo

* cors: 后端设置cors，每个框架设置的防范都差不多，koa有第三方的middleware koa-cors，其实内部也很简单。不用koa-cors的自己也写了一下
* jsonp: 一个装逼的名字，跟json并没有什么关系，利用了src get远程脚本没有跨域限制的特性，缺点很明显，只能用在GET请求，原因就是src访问远程脚本就是GET请求
* postMessage: H5的标签,主要用于不同页面间的信息传递。
* nginx： 将api请求代理到后端。

## demo
#### 运行
1. 确保本地node环境已经安装
2. npm i 
3. npm start

#### 说明
1. http://localhost:3002/cors 使用后端设置Access-Control-Allow-Origin实现跨域。测试这个demo的时候先取消注释
```js
//  app.use(cors())
/**
 * cors()中间件的本质就是设置允许跨域的方法和跨域允许的origin
 * 以下是简单实现
 */
// app.use(async(ctx, next)=>{
//     console.log(ctx.get('origin'))
//     ctx.set('Access-Control-Allow-Methods', "GET,POST,DELETE,PUT");
//     ctx.set("Access-Control-Allow-Origin",ctx.get('origin'))
//     await next()
// })
```

2. http://localhost:3002/jsonp。传说中的jsonp跨域

3. http://localhost:3002/jsonp iframe配合postMessage跨域

4. http://localhost:3004/nginx api请求代理

#### demo结构
```
client
    |-appjs       //前端页面端server启动
    |-cors.html   // 后台需使用中间件koa-cors或者set Access-Control-Allow-Methods 和 Access-Control-Allow-Origin。
    |-iframe.html // iframe跨域
    |-nginx.html  // nginx跨域
    |-jsonp.html  // jsonp跨域
routers
    |-index.js  //server端路由、
babel           // es6转译
app.js          // server端主文件
index.js        // 项目主文件
index.html      // 后端页面，直接调用接口没有跨域限制。相同域名相同端口
package.json    // 依赖
nginx.conf      // nginx配置信息
```
### 补充一个cache的demo
接口为http://localhost:3003/api/cache
koa设置cache-control的max-age，以及Etag等
## 总结
跨域的方法还是蛮多的，但是现在用的比较多的应该是Nginx和设置cors的方法，webpack也有相关的插件和解决方案。
虽然postMessage和Jsonp确实能解决某些场景下的问题，但是个人觉得这是规避问题，不是解决问题的优先解。