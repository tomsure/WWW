var flag = true;
if (flag) {
var style = document.createElement('style');
style.type = 'text/css';
//var box= document.createTextNode(#box{background:red}'); IE 不支持
//style.appendChild(box);
document.getElementsByTagName('head')[0].appendChild(style);
insertRule(document.styleSheets[0], '#box', 'background:red', 0); //执行下面的函数
}


 /****************封装兼容性函数创建style样式*****************/

function insertRule(sheet, selectorText, cssText, position) {
//如果是非 IE
if (sheet.insertRule) {
sheet.insertRule(selectorText + "{" + cssText + "}", position);
//如果是 IE
} else if (sheet.addRule) {
sheet.addRule(selectorText, cssText, position);
}
}