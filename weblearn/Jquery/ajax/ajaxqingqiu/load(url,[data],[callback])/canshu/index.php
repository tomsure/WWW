<?php
header('Content-type:text/html;Chartset:utf-8');

$username=$_GET['username'];//提交表单默认是post方法所以这样设置

if($username=="admin"){
	echo "false";
}else {
	echo "true";
}


//在服务器端可以设置对用户名的限制，也可以在本地HTML页面使用js正则表达式验证
?>