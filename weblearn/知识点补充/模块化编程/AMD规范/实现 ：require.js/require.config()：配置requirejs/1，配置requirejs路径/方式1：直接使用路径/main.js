require.config({
	
	paths:{
		'a':'js/ylmk/a',
		'b':'js/ylmk/b',
		'c':'js/ylmk/c'
	}
})

require(['a','b'],function(a){
      a.hello()
})

     // 使用require.config()方法可以用来配置依赖模块的路径,使用json格式,设置在一个叫paths的对象中,一个k和一个value值,k值表示这个模块在这里的名称,value就写模块相对于main的路径,
//  在使用require()方法调用模块的时候,第一个参数是一个数组,这时候,数组元素就可以写paths中的k值,表示调用的模块

    