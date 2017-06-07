window.onload = function() {

	alert(BrowserDetect)

}

var flag = true;//可以设置为开关，如果为false就不会执行后面if语句
if(flag) {

	loadScript('BrowserDetect.js')

}

function loadScript(url) {
	var script = document.createElement('script')
	script.type = 'text/javascript';
	script.src = url
	document.getElementsByTagName('head')[0].appendChild(script)

}

//执行顺序的问题,由于这个脚本是外置js脚本,在HTML中从html开始执行html语句,执行完加载demo.js的时候,继续加载后面的HTML代码,如果是把demo.js放在head标签下面的script里面去执行的话,就必须使用window.onload函数语句,就会是这里第一句,要把这个demo.js里面的语句全部放在window.onload的函数里面,而window.onload语句又是当文档加载完毕之后再执行的语句,所以可以把if语句也就是创建script标签这个语句放在window.onload语句外面,当html执行第一个script标签(也就是demo.js语句后)后会继续执行下面的html标签,最后才会执行window.onload语句,这时候就可以读取创建的js标签了,所以就可以读出BrowserDetect.js中的内容