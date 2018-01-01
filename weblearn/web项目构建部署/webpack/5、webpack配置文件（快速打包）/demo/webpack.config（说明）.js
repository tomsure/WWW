module.exports={ 
//	使用webpack加入口文件名加输出文件名打包的方式比较慢,可以使用webpack.config.js配置文件的方式,在里面定义配置项,配置完成后直接使用 “webpack"即可快速打包

  entry:  {   //配置打包的入口文件,可以是字符串,也可以是一个对象
              //这里使用的是一个对象

        },
        
  output:{ //配置打包结果,值是一个对象
  	     path: '', //定义文件路径，
  	     filename:'' //指定文件名称
  },
  module:  //定义对模块的处理逻辑
           {
  	      loaders://定义一系列的加载器，值是一个数组
  	             [{
  	             	test:'',//正则表达式，匹配到的文件后缀名
  	             	loader:'', //处理匹配到的文件，值是字符串或者数组
  	             	//上面可以写成loader/loaders:''
  	             	include:'String/Array', //包含的文件夹，
  	             	exlcude:'String/Array' //排除的文件夹
  	            
  	             	
  	             }],
  	       
  	       resolve:{
  	       	     extensions:['js','css' ,'less']
  	       }
  	  
          }
  
	
}



