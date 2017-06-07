

define(['a','b','c'],function(a,b,c){
	
//	......
	
})

//上面的方式是正确的定一个非独立模块，但是这样写的话如果依赖的模块比较多的话写起来比较麻烦,可以使用以下方式编写
 
 
   define(function(require){
   	
   	var  a=require('a')   //调用自己依赖的模块
   	var  b=require('b')
   	var  c=require('c')
   	
   	
   })


