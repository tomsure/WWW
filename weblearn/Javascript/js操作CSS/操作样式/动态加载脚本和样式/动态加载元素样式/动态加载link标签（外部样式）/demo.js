window.onload=function(){
	
	
	
	
}

var flag=true;

if(flag){
	var Alink=document.createElement('link');
	Alink.rel="stylesheet";
	Alink.type='text/css';
	Alink.href='demo.css';
	document.getElementsByTagName('head')[0].appendChild(Alink);
	
	
	
}
//动态创建link标签,并添加link的属性，注意js执行顺序的问题；
//这里没有封装成函数，可以封装成函数