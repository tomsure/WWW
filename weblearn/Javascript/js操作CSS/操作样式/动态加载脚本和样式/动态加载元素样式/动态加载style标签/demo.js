var flag=true;
if(flag){
	var style=document.createElement('style')//创建style标签
	style.type='text/css';
	var box=document.createTextNode('#dv{width:100px;height:100px;background-color:red}');//创建文本节点
	style.appendChild(box) //给style标签追加文本节点
	//注意：这种写法不支持IE；
	document.getElementsByTagName('head')[0].appendChild(style)
	
//	将style追加到head标签
}
