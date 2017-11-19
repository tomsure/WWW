var i=0
function count(){
   self.onmessage=function(){
   	 i++;
   		postMessage(i);
	
//	setTimeout(count,1000)
   }
}
count()
