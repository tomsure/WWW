window.onload=function(){
	var bt=document.getElementById("bt");//获得按钮
	bt.onclick=function(){//当 鼠标点击时候
		var ajax;//创建ajax
		if(window.XMLHttpRequest){//如果浏览器兼容
			var ajax=new XMLHttpRequest()//则实例化
		}

	else{
		var ajax=new ActiveXObject("Microsoft.XMLHTTP")//如果不兼容，则实例化
	}
	
	   ajax.open("GET","aa.html",true);
	   ajax.send();
	   ajax.onreadystatechange=function(){//监听
	   	if(ajax.readyState==4){//如果执行完毕
	   		if(ajax.status==200){//如果执行成功
	   			alert("ajax.responseText")
	   		}
	   	}
	   }
	}
}
