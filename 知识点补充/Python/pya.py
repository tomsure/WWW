
#coding=utf-8  
      
import urllib2  
from bs4 import BeautifulSoup  
import os  
import re      
      
      
url="http://www.polytheatresz.com"#指定的URL  
           
def download(url_1,name):#下载函数  
    if(url_1==None):#地址若为None则跳过  
        pass
    headers = {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'}
    req = urllib2.Request(url_1,headers = headers)          
    result=urllib2.urlopen(req)#打开链接  
        #print result.getcode()  
    if(result.getcode()!=200):#如果链接不正常，则跳过这个链接  
        pass  
    else:  
        data=result.read()#否则开始下载到本地  
        with open(name, "wb") as code:  
            code.write(data)  
            code.close()  
      
      
res=urllib2.urlopen(url)#打开目标地址  
respond=res.read()#获取网页地址源代码  
print "获取网页地址源代码", respond
      
count=0#计数君  
soup=BeautifulSoup(respond,'html.parser',from_encoding='utf-8')#实例化一个BeautifulSoup对象  
lst=[]#创建list对象  
      
for link in soup.find_all('img'):#获取标签为img的内容  
    address="http://www.polytheatresz.com"+link.get('src')#获取标签属性为data-original的内容，即图片地址  
    lst.append(address)#添加到list中  
    print "图片地址:",address
      
s=set(lst)#去重  
for address in s:  
    if(address!=None):  
        pathName="/Users/apple/Desktop/2016-12-10/"+str(count+1)+".jpg"#设置路径和文件名  
        print "设置路径和文件名", pathName
        print "正在下载第：",count  
        print "address：",address      
        download(address,pathName)#下载  
        count=count+1#计数君+1  
        