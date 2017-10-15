module.exports={
	entry:'./js/main.js',  //这里填写打包的入口文件，如果是多个入口文件则写成对象额形式
	
	output:{
path:'C:\\AppServ\www\weblearn\知识点补充\web项目构建部署\webpack\\4、webpack配置文件（快速打包）demo\build' ,
		//打包到当前目录的build目录下面，这里设置打包后文件的位置，需要写绝对路径
//		 目前windows环境下测试未成功,linux下测试成功
		filename:'build.js'  //打包后的文件名称
	},
	
	module:{ //设置要加载的模块
		loaders:[ //加载器设置  webpack 2.x版本的使用rules
		    {
		      test:/.css$/,  //这里test的值是一个正则表达式，里面设置加载的模块的后缀名，例如这里以.css结尾，就写成 /.css$/
		      loaders:['style-loader!css-loader'],  //这里设置加载器，如果只有一个加载器
		             // 的话，就设置成 loader:"css-loader"的形式
		      exclude:'/node_modules/', //这里面设置要排除的目录，因为加载器加载文件会在各个目录查找文件，所以这里可以设置排除查找的目录       
		      

		    }
		
		]
	}
	
	
	
	
}
