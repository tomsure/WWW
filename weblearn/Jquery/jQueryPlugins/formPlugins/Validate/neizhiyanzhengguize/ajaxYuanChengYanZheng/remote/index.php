<?php
if( $_REQUEST['username'] == 'php' )
{
    exit( "false" ); //用户名已存在
}
else
{
    exit( "true" ); //用户名不存在，验证通过，输出“true”，并结束程序
}
?>