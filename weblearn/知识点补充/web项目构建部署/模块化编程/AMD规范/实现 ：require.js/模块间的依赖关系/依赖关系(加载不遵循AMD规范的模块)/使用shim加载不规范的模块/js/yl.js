
define(function(){
	$(document).click(function(){
		$('body').css('background','red')
	}) //点击页面背景变色
})

 //这里没有设置jquery依赖，就可以使用jquery，因为main.js已经使用shim设置了依赖