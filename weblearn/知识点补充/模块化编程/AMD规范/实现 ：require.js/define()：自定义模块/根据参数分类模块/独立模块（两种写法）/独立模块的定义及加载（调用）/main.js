require.config({
	paths:{
		'mk':'js/mk' 
	}
})

require(['mk'],function(aa){
	
	aa.x();
	aa.y()
})

//独立模块值得就是不依赖其他模块的模块


//如果使用require.config()方法配置了依赖模块的路径,则方法和其他类型加载相同
