	window.onload=function(){
			var bt=document.getElementById("bt");
			bt.onclick=function(){
				//创建div
				var divs=document.createElement("div");//创建div
				divs.style.width="200px";//设置新增div的样式
				divs.style.height="150px";
				divs.style.border="1px solid #ff0000";
                divs.style.position="absolute";
                divs.style.top="100px";
				divs.style.left="300px";
				divs.innerHTML="<div style='width:50px;border:1px solid #7FFF00;float:right' id='dv'>x</div>";//创建div中的div,这里是创建关闭窗口的叉叉,注意添加时候的格式
				//div添加到body
				document.body.appendChild(divs);//设置创建div的位置
				var dv=document.getElementById("dv");//获得div中div的id，来绑定事件；
				dv.onclick=function(){//当点击按钮后发生
                 document.body.removeChild(divs)//删除divs这个div
                 
                 divs=null;//此时divs的值必须为空
				}
			}
	}
	