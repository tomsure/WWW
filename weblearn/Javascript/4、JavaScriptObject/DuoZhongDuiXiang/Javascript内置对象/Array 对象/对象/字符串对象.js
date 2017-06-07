var str=new String("fouwehfsihfoisf")
document.write(str.length)
document.write("<br/>....................<br/>")
var str1="jfalsfjasjf";
document.write(str1.length)//属性length
//在字符串中每个字符占一个位置，类似于数组的下标，从零开始；以上两种写法是一样的
//使用字符串的方法:
//1:charAt()
var str2="flkjflkldsf";
alert(str2.charAt(30))//通过字符串的位置找字符；如果不存在的位置返回为空什么也不显示
//2,indexof
var str3="asoeaxiaffamofms";
 alert(str3.indexOf("z"))//通过字符查找字符串中第一次出现的位置。这里第一次出现时的位置是0号位
//3.lastIndexof  通过字符查找在字符串中最后一次出现的位置；
var str4="askfhmahfhsmlkfhs"
alert(str4.lastIndexOf("a"))//
//4 replace()用别的字符替换字符串中出现的字符；
var str5="dhaihmcsmcgjmsme";
alert(str5.replace("hmc","aaa"));//在括号里面前面写要替换前的字符，逗号后写替换后的字符
//5.substring(),截取字符串
var str6="ainhroixmecfmwref";
document.write(str6.substring(1,4))//这里要写字符串的位置
//6,substr;截取字符串与substring有区别

var str7="asihfmxofs"
document.write(str7.substr(1,4))//这里的1是指一号位，4是指4个
//7,toLowerCase;把字符串转换成小写；toUpperCase
var str8="asihfmxofs"
document.write(str8.toUpperCase())


//8,spilt();用固定的符号去切割字符串，返回一个数组
var str9="asi#hfm#xo#fs"
//alert(str9.split("#") instanceof Array)//这里可以用来检测是否是一个数组。
var ss=str9.split("#")//这里用变量ss表示 顺便将str9用# 切割,切割后已经返回成一个数组
document.write(ss[2])//这里输出的是xo
