alert(1)
require.config({
	paths:{
		'css':'js/css.min',//引入css.js
		'bs':'js/bootstrap',
		'jquery':'js/jquery',
		'yl':'js/yl',
        
	},
	
	shim:{
	'bs':{
		'deps':['jquery','css!js/bootstrap.css']
			
		
	}
	}
})

 require(['bs'],function(){
 	alert(2)
 })
 
// 设置依赖得CSS模块的路径书写方式:
   // 1，加载CSS文件,需要引入css.js文件进行处理,css.js可以在网上下载
//    2,在deps后面的数组 中设置CSS文件路径的时候,需要以css!开头,后面跟CSS文件的相对路径
//  目前学习存在一个问题,就是CSS路径问题,