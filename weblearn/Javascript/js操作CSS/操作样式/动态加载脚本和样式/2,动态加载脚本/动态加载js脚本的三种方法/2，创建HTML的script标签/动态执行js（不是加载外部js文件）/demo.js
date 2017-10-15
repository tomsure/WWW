window.onload=function(){
//。。。。。。。。。。。。。
}

var flag=true;
if(flag){
	
	var script=document.createElement('script');
	script.type='text/javascript';
script.appendChild(document.createTextNode('alert(1)'))
//	把"alert(1)"追加给script
/*
 * 但是上面给script追加内容额写法不兼容IE，所以兼容的写法最好是：
 *   script.text='alert(1)'，用这句话代替第10行
 *    
 */

   //当然，如果不支持 text，那么就可以针对不同的浏览器特性来使用不同的方法。这
//里就忽略写法了 
	document.getElementsByTagName('head')[0].appendChild(script)
	
	
	
}
//这里是动态执行js,也是创建js标签,但是不是加载外部js,而是动态的执行js语句,也就是把script标签里的内容通过动态的语句创建出来