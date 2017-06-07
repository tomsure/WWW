function aa(){
	this.name="hhh";
	this.play=function(){
		alert("aaaa")
	}
}

var ss=new aa();
document.write(ss.name);
ss.play();  //以上是创建对象以及添加对象和调用访问对象；
delete ss.name//这里是删除属性；
delete ss.say//这里是删除方法，如果连续删除则一个删除后加分号继续删除；

ss=null;//这里是销毁（回收）对象,在对象用完后为了不占用内存资源，需要将用过而后面不再用的对象回收；

