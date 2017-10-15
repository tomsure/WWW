function fangzi(mianji,jiaqian,gongneng){
	this.mianji=mianji;
	this.jiaqian=jiaqian;	
};
fangzi.prototype.gongneng=function(){
alert("住人")
}
var zz=new fangzi("100平米","1万一平米");
alert(zz.mianji);
alert(zz.jiaqian);
zz.gongneng()
