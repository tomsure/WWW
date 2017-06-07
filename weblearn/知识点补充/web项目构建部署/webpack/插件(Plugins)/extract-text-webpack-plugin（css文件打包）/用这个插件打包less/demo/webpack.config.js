

var ExtractTextPlugin=require('extract-text-webpack-plugin')
   //加载插件
 
module.exports={
	entry:'./js/main.js',
	output:{
		path:'/home/tomsure/demo/build',
		filename:'build.js'
	},
	
	module:{
		rules:[{
			test:/\.css$/,
		    
			use:ExtractTextPlugin.extract({  //设置加载器，这里和不使用插件有区别
				fallback:"style-loader", 
				use:'css-loader' //必须加载的加载器
				
			})
			
		}]
	  },
	  plugins:[ //设置插件选项
	      new ExtractTextPlugin('stylefile.css')  
	      //实例化引入插件返回的对象，用于设置打包后的css文件名
	  
	  ]
	
}
   