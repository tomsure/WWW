module.exports={
	entry:'./main.js',
	output:{
		path:__dirname,
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

//  配置babel-loader和 css-loader步骤相同:
//     1,在rules的选项中设置test:/\.js$/正则
//     2,设置use选项,值值babel-loader