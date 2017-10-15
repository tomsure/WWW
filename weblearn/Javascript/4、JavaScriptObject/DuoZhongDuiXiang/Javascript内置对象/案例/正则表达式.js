

var str = "wo hen ai guo";
var mode = /aaaa/;
var  reg = new RegExp(mode);
document.write(reg.test(str)); 
var   str1="aaffffffdytj";
var reg1=new RegExp('^aaffffffdytj$');
document.write(reg1.test(str1));

document.write("<br/>.................[]..................<br/>")

var   str2="aaffffffdytj";
var reg2=new RegExp('[fsagsh]');
document.write(reg2.test(str2));
 document.write("<br/>.................[]..................<br/>")
var   str3="aaffffffdytj";
var reg3=new RegExp('^(aa）[a-z]+(dytj)$)');//小括号内缺一不可才为true
document.write(reg3.test(str3));
document.write("<br/>................()...................<br/>")
var str4= "sdsfv1234567sljgdj"
var reg4=new RegExp("^sdsfv[0-9]{1,}(sljgdj)$")

document.write(reg4.test(str4))
document.write("<br/>................\\这里实际只输出一个\...................<br/>")
var str5="abc1234567abc";
var reg5=new RegExp("^(abc)[0-9]{1,}\\1$");//正则中的反向引用，第一个\为转义字符，为控制符。
document.write(reg5.test(str5));
document.write("<br/>................|...................<br/>")
var str6="com";
var reg6=new RegExp("(com|cn|org|net)");//这里可以用来匹配邮箱验证；
document.write(reg6.test(str6));
