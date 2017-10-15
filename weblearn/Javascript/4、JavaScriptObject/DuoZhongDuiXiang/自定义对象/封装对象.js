
 //例1，直接把对象封装成类
 
 function girl(name,height,age,play){
	this.name=name;
	this.height=height;
	this.age=age;
	this.play=function (){
		alert("谈恋爱")
	}
	
}
var ss=new girl("钱琼","160cm","25")
alert(ss.name);
alert(ss.height);
alert(ss.age);
ss.play()
//例2：把方法放在函数外边，用prototype方法为类添加成员
 function fangzi(mianji,jiaqian,gongneng){
	this.mianji=mianji;
	this.jiaqian=jiaqian;	
};//前面属性和方法一写法一样
fangzi.prototype.gongneng=function(){
alert("住人")
}//这里把方法写在外边,prototype这里的语句表示类外边的this
var zz=new fangzi("100平米","1万一平米");
alert(zz.mianji);
alert(zz.jiaqian);
zz.gongneng()//调用方法一样


	

