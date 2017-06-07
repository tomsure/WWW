var webpack=require('webpack');
var webpackPlugin=require('extract-text-webpack-plugin')
   module.exports={
   	entry:'./js/main.js',
   	output:{
   		path:'/home/tomsure/demo/dist',
   		filename:'build.js'
   	},
   	module:{
   		rules:[{
   			test:/\.css$/,
   			use:webpackPlugin.extract({
   				fallback:'style-loader',
   				use:'css-loader',
   				publicPath:'./dist'
   			}),
   				
   			
   		}]
   	},
   	devServer:{
   		host:'192.168.78.128',
   		port:'9000',
   		historyApiFallback: true,
    inline: true,
    hot:true
   		
   	},
   	plugins:[
   		      new webpackPlugin('style.css'),
   		      new webpack.HotModuleReplacementPlugin(),
   	         ]
   		
   	
   }
