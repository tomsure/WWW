require.config({
	
	baseUrl:'js/ylmk',
	
	paths:{
		'A':'a',
		'B':'b',
		'C':'c'
	}
	
})


   require(['A','B','C'],function(x,y,z){
   	       x.hello()
   }) //这里x指的是A，A指的又是ylmk下的a.js
   
//     可以使用baseUrl的方式改变模块的根路径,这样每个模块就不用都写原生js的相对路径
   
   
// 
// 如果ylmk这个目录下还有目录,依赖模块在最下面的目录中,就可以在peths中这样设置:
//    paths:{
//		'A':'ylmk的下及目录/../a模块的上级目录/a',
//		
//	}
