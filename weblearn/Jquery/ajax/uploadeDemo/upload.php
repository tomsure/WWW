<?php

$myfile=$_FILES["filemsg"];
$describe=$_POST["describe"];


$fileTypeArray=array(
'application/vnd.ms-excel',
'text/plain',
'application/msword',
'application/zip',
'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
'application/octet-stream'
);
$filename=myfile["name"];
$filetype=myfile["type"];
$filesize=myfile["size"];
$fileerror=myfile["error"];
if(in_array($filetype,$fileTypeArray)){
//限制大小
if($filesize<1024*1024*1024){
if($fileerror>0){
echo json_encode(myfile);
}else{
if(file_exists(iconv("UTF-8", "gb2312","../file/".$filename))){//防止中文乱码

myfile["myallowerror"]=$filename."已经存在!无需上传";
$url="../file/".$filename;
myfile["url"]=$url;
echo json_encode(myfile);

}else{
move_uploaded_file(myfile["tmp_name"],iconv("UTF-8", "gb2312","../file/".$filename));
$url="../file/".$filename;

echo json_encode(myfile);
}
}
}
}else{
myfile["myerror"]="不符合的文件类型";
echo json_encode(myfile);
}
