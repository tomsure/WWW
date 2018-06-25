module.exports={
	entry:'./2、let和const命令/3、const命令/main.js',
	output:{
		path:__dirname ,
		filename:'build.js'
	},
	module:{
	    rules:[
	         {
	         	test:/\.js$/,
	         	use:'babel-loader'
	         }
	          ]
	}
}
