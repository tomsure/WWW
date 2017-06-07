
require.config({
	
	
	paths:{
		'aa':'js/yl',
		'jquery':'bb/jquery'  //这个url是给yl.js使用的，yl.js依赖这个文件
	}
	

})


require(['aa'],function(yl){
	 alert('依赖加载成功')
	 yl.play() //js/yl上面的方法
	 yl.show()  //js/yl上面的方法
	 
})

//看yl.js