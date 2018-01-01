var stylePlugin=require('extract-text-webpack-plugin');
module.exports={
	entry:'./js/main.js',
	output:{
		path:'/home/tomsure/demo/dist',
		filename:'build.js'
	},
	module:{
		rules:[{
		 test:/\.css$/,
		 use:stylePlugin.extract({
		 	fallback:'style-loader',
		 	use:'css-loader',
		 	
		 })
		}]
		
		
	},

 /***************************************************/
    resolve:{
		      extensions:['.css','.js']
         	},
         	
        	
	
//	resolve里面的extension选项用于设置模块中加载其他模块时候的文件后缀名,在这里设置之后,在加载模块的时候,就不用写后缀名
	  
	  /****************************************************/
	
	plugins:[
		new stylePlugin('build.css')  /*打包成独立CSS文件*/
	]
	
	
	
	
}
