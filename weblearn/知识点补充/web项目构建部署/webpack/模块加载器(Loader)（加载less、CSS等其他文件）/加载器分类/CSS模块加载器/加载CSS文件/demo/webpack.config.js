module.exports={
	entry:'./js/mian.js',
	output:{
		path:'/home/tomsure/demo/build', //这里要绝对路径
		filename:'build.js'
	},
	module:{
		rules:[{  //设置模块加载器 
			test:/\.css$/,  //正则表达式
			use:[
			   {loader:'style-loader' },
			   { loader:'css-loader' }
			    //使用的加载器，放在数组里面，每个加载器使用json对象的格式
			]
			
			
		}]
		
	}
	
}
