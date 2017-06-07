<?php
 if($_GET['user']=='admin'){
 	echo "false";
	 //这里的意思是如果通过get方法获得到user表单元素的值为admin则返回false，这样就表示用户名重复
 }else {
 	echo "true";
 }
 
//服务器会有自己的验证规则，php会根据不同的验证规则返回true或者false，只有这俩个返回值
?>