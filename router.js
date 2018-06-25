// 路由设计页

// 使用路由的步骤
	// 1 安装express
	// 2 express.Router() 
	// 3 router.get()
	// 4 导出router
	// 5 在app.js导入 并且 挂载路由 app.use(router)


// 加载express模块
var express = require('express');
// 创建一个路由实例
var router = express.Router();

// 引入相关的js模块
var index = require('./callback/index.js');
var user = require('./callback/user.js');
var topic = require('./callback/topic.js');

// 设计路由：【首页路由、用户路由、话题路由】

// 首页路由
router.get('/',index.index);

// 用户路由
router
	.get('/signin',user.signin)
	.post('/signin',user.handleSignin)
	.get('/signup',user.signup)
	.post('/signup',user.handleSignup)
	.post('/signout',user.handleSignout)


// 话题路由
router
	.get('/topic/create',topic.showTopic)
	.post('/topic/create',topic.handleTopic)
	.get('/topic/:topicID',topic.showTopicID)
	.get('/topic/:topicID/edit',topic.showTopicEdit)
	.post('/topic/:topicID/edit',topic.handleTopicEdit)
	.post('/topic/:topicID/delete',topic.handleTopicDel)


// 导出路由模块
module.exports = router;
