function vv(){
		
	
}
var aa= new vv();

aa.name="fff";
aa.player=function(){
	document.write("aaaaa");
	
}
//alert(aa.name);//这里是常规调用；
//aa.player();
alert(aa["name"])//这里是利用数组的形式调用

	


var ss={};
ss.name="aa";
ss.play=function(){
alert("tomsure")
}
for(var i in ss ){
	alert(ss[i])
	
}

