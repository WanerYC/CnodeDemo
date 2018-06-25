exports.signin = (req,res)=>{
	res.send('登录首页');
}


exports.handleSignin = (req,res)=>{
	res.send('处理登录页');
}

exports.signup = (req,res)=>{
	res.send('注册');
}


exports.handleSignup = (req,res)=>{
	res.send('处理注册');
}

exports.handleSignout  =(req,res)=>{
	res.send('处理退出');
}