

   require("!style-loader!css-loader!./css/style.css")
   
// require("style!css!./css/style.css") 老版本webpack这样写,新版本在webpack.config.js中配置
   

/*
加载CSS文件需要在项目中安装CSS加载器,命令如下:

   cnpm install --save-dev css-loder style-loder
    此命令安装的是两个加载器  css-loader和 style-loader 
  
   
   安装之后，使用webpack打包
   
   
   
   加载CSS文件的时候，由于加载时分为两步执行的，第一步是
   将CSS加载，第二部是讲加载的样式内容使用style-loader添加到html的style标签中


*/