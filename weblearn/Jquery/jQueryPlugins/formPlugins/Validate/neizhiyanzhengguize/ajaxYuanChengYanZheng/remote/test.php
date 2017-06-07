<?php
if($_POST['user']=='admin'&&$_POST['password']=='test123'){
	//如果用户名是admin并且密码是test23
	
	echo "true";//则返回true
}else {
	echo "false";//否则返回false
}
?>