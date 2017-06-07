require.config({
	paths:{
		'aa':'js/aa'
	},
	shim:{
		'aa':{
			'exports':"aa"  //使用exports
		}
	}
})

require(['aa'],function(q){
   	q() //只有一个方法时候调用里面的方法，直接用对象名+()
})

// 使用requirejs自己写的js文件或者不符合AMD规范的框架模块的话,由于没有遵守AD规范.没有以return的方式返回,所以在加载的时候,会加载不了;
// 例如上面的例子,如果不设置shim的话,在require方法这里执行q()就会报错

//解决这个故障发办法是,在require.config()配置中设置一个shim,里面设置对应的不符合规范的模块,然后使用expots选项设置一下,就可以执行了

  
