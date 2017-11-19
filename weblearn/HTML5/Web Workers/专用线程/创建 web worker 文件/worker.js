//这个就是worker文件

var num=0;
function count(){
	num++;
	postMessage(num);
	
	setTimeout(count,1000)
	}
count()

//这里通过postMessage()方法配合定时器将累加的数据传到前端页面
