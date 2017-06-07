//1,创建节点
window.onload=function(){
	var qq=document.createElement("a");//创建一个a标签，这里一定要写"a"
	qq.href="http://www.info-link.com.cn";//给a标签创建 链接
	qq.innerHTML="英龙华通";//给标签取名，这里相当于两个<a></a>中间的字
	qq.style.color="#F08080";//设置标签的样式；
	
	document.body.appendChild(qq)//这里声明标签添加的位置，是添加在body标签的子元素里面最后一个元素最后一行的后面
}
//insertBefore()创建对象；
//2删除节点；




