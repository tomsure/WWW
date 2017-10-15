require.config({
	paths:{
		'aa':'js/aa'
	},
	shim:{
		'aa':{
			init:function(){ //有多个方法时候使用init
				return{
					xx:xx,//返回方法名
					yy:yy
				}
			}
		}
	}
})

require(['aa'],function(q){ //q表示模块对象aa
   	q.xx(); //调用方法
   	q.yy()
})


//如果一个非标准的js模块里面不止一个方法,若a使用exports则无效,执行的时候,只会执行第一个方法,这时候就可以使用init选项,后面值是一个函数,在这个函数里面返回模块里面的多个方法,使用json的格式,然后在require()方法里面调用的话就作为对象的方法调用
