require.config({
	paths:{
		'mk':'js/mk'
	}
})

require(['mk'],function(mkk){
	
	 mkk.m1(); //调用mk模块的方法
	 mkk.m2()
})


