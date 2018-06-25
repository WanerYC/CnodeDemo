// 程序的入口页【使用express】

// 加载express模块
var express = require('express');
// 创建一个express实例
var app = express();
// 引入router.js模块 实现两个文件的通信
var router = require('./router.js')


// 路由设计单独提取到router.js中

// 挂载路由
app.use(router);

// 端口监听
app.listen(3000, () =>{
	console.log('访问的时候使用的localhost:3000');
})

