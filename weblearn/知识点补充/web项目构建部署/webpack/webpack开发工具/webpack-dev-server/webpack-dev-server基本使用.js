/*使用方法:
  准备工作，共两个步骤:
     1,全局安装webpack-dev-server：
          npm install webpack-dev-server -g；
          
     2，在项目目录下安装  npm install webpack-dev-server --save-dev，这样会将依赖安装到package.json文件中
     
 在webpack.config.js中做以下设置：
     1，使用require()方法加载weback模块，并赋值给变量;
        var webpack=require('webpack')
     2,设置devServe选项,基本设置内容如下:
        devServer: {
             host:'192.168.78.128', //设置访问ip
             port:'8090',   //设置访问端口号
    
    
      },
      
      3,在plugins选项中设置:
   
      plugins:[
      new webpack.HotModuleReplacementPlugin()
              ]
              
              
       4,在服务器执行webpack命令；
       5，在服务器执行webpack-dev-server命令

*/