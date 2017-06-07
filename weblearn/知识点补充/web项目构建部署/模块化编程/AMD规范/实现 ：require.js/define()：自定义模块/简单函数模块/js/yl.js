

define(function(){
	
	var aa=function(){
		alert('aa')
	};
	var bb=function(){
		alert('bb')
	}
	
	return {
		qq:aa,
		ww:bb
	}
})

//  define()方法用于自定义模块,这个方法有多个参数,如果只有一个函数作为参数的时候，就表示这个文件不依赖其他模块，或者是里面的方法再使用require()方法加载其他的依赖模块



//  定义模块的时候,需要使用return返回对象的形式将数据返回,所以return后面跟一对大括号,里面就是返回的数据

