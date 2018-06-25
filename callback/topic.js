
exports.showTopic = (req,res)=>{
	res.send('渲染发布话题页面');
}

exports.handleTopic = (req,res)=>{
	res.send('处理发布请求请求');
}

exports.showTopicID = (req,res)=>{
	res.send('渲染话题详情页面');
}

exports.showTopicEdit = (req,res)=>{
	res.send('渲染编辑话题页面');
}

exports.handleTopicEdit = (req,res)=>{
	res.send('处理编辑话题请求');
}

exports.handleTopicDel = (req,res)=>{
	res.send('处理删除话题请求');
}
