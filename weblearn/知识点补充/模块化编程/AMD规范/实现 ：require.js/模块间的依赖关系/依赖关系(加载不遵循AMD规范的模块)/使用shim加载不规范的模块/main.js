//alert(1)
require.config({
	
	paths:{
	 	'jquery':'js/jquery',
	 	'yl':'js/yl',
	 	'bs':'js/bootstrap'
	},
	shim:{
		'yl':{ //这里main要加载yl
			'deps':['jquery'] //yl依赖jquery
		}
	}
	
})

require(['yl'],function(aa){
	
})
//  有时候有一些js模块(框架)不是遵循AMD规范来编写的,如果要加载这些模块作为依赖模块的话就要在require.config()方法里面使用shim来配置依赖模块,shim也作为 一个json格式的对象对象,里面第一层设置main要引入的依赖模块,这个模块名称里第一个选项'deps'面就以数组格式来设置它依赖的模块;
//  例如如果要依赖bootstrap,而bootstrapjs依赖jquery和bootstrap.css,这两个文件就可以写在'deps'后面的数组里
