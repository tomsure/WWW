<?php
    //注意PHP语言每一句后面必须加分号
	//print_r($_FILES)//打印上传文件的相关信息
	if(empty($_FILES)){//如果未选取文件
		exit('no file');//则返回...
	};
	if($_FILES['pic']['error']!=0){//如果选取的文件（file对象）的'error'不为零
		exit('fail');//则返回，此时说明上传失败
};
  move_uploaded_file($_FILES['pic']['tmp_name'],'fileroom/'.$_FILES['pic']['name'] );
  //移动文件 move_uploaded_file()中两个参数，第一个是移动文件的路径和名称，第二个是移动到的位置和移动后文件的名称
 
 
//echo "ok";//这里实际上应该放在上传成功的PHP条件语句中