var date=new Date();
alert(date);


alert(date.getFullYear());//年
alert(date.getMonth()+1);//月
alert(date.getDate());//日

var dt=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
document.write(dt+"<br/>");
document.write(date.getHours()+"<br/>");
document.write(date.getMinutes()+"<br/>");
document.write(date.getSeconds());

var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
alert(time);
