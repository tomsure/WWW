<?php

	ini_set('date.timezone','Asia/Shanghai');
   echo date('h:i:s') . "<br />";

//暂停 10 秒
sleep(3);//模拟网络响应速度很慢

//重新开始
echo date('h:i:s');

	
	?>