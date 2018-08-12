//方法一:
function fun(){
	this.name="zhangsan"//为类添加属性name：this代表当前对象
	
	this.play=function(){
		alert("斗地主")//这里的代码块是方法的主题，必须以输出的形式体现*********方法******
	}
}
aa= new fun();
document.write(aa.name);  //
aa.play();//这里是调用方法

//以上例子是给对象添加属性和方法。调用属性和方法的时候可以单独调用，例如只调用属性，或者只调用方法，但必须实例化；
  

//以下是方法一的例子：
function tangxu(){
	this.name="汤旭";
	this.sex="男";
	this.xueli="高中";
	this.aihao=function(){
		document.write("<br/>"+"爱好：打球");
	}		
}
var xiaotang=new tangxu();
document.write("<br/>"+xiaotang.name,xiaotang.sex,xiaotang.xueli);
xiaotang.aihao();
//方法二：
function fun1(){
	
}//先声明对象；
var aq=new fun1();//实例化
aq.name="tangxu";//再添加属性；
aq.play=function(){
	alert("daqiu");
	
}//添加方法；
 alert(aq.name);//再调用属性；
 aq.play();//调用方法；


