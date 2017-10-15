//火狐和ie下都可以，但有可能ie新版本不兼容：
window.onload=function(event){
	alert(event)
}
//火狐，IE都兼容，正常应该这么些
window.onload=function(event){
	var evObj=event||window.event
}
