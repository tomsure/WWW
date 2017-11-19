<?php
header('Content-Type:text/event-stream');//注意PHP每一句后面必须加分号
//服务器发送的响应内容应该使用这种`text/event-stream`的MIME;这样客户端才能理解你这是发送的不是普通的数据， eventsource对象才能识别

for($i=0; $i<100;$i++){
	date_default_timezone_set("Asia/Shanghai");
	echo 'data:'.date('Y-m-d H-i-s');
	echo "\n\n";
	flush();
	sleep(0.5);
	//这是属于后端只是，这里需要达到每隔一秒向页面显示一次日期，共打印100次但是现在还没有达到这个效果，目前只能一次性全部打印100次。
};

?>