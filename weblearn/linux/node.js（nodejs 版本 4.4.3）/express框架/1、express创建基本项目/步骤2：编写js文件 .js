




     在项目目录（例如上一步的app目录）中新建一个js 文件，例如这里命名为app.js,在里面写入以下内容：
		   var express = require('express');
           var app = express();
			app.get('/', function (req, res) {
			  res.send('Hello World!');
			});
				var server = app.listen(3000, function () {   //设置监听端口号
			  var host = server.address().address;
			  var port = server.address().port;
	
			  console.log('Example app listening at http://%s:%s', host, port);
			});