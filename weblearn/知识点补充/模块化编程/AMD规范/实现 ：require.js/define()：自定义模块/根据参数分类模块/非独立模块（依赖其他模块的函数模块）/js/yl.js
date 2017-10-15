

define(['jquery'],function($){  
	//这里数组里的参数的路径是根据paths里设置的jquery的路径
	
	return {
		  play:function(){
		      alert('yl的第一个方法')
		      $('body').css('background','red')
		     //yl模块里面又使用了jquery，所以他就依赖jquery
    },
	
	     show:function(){
		alert('yl的第二个方法')
	}
	
	
	}
})

// 当main.js加载的其他模块(如这里的yl.js)还依赖其他模块的时候,在define()方法括号里设置第一个数组作为第一个参数,数组里面设置的就是yl.js依赖的模块,这里yl.js里面使用了$()方法所以就依赖jquery,所以就在define()方法第一个参数里设置jquery，
//  在define()方法里面设置数组参数的话,表示整个模块都可以依赖这个文件,例如,上面的例子中,play方法里面可以使用jquery的$方法,表示它依赖了jquery,由于在define()里设置了数组参数,所以show方法里面也可以使用jquery的$方法,如果不是所有的方法都要使用jquery,只是某一个方法依赖jquery,则可以单独的在那一个方法里面使用require()方法加载当前依赖的文件,例如:
    
    define(function(){
    	return{
    		ww:function(){
    			require(['jquery'],function(){
    				$('body').css('background','blue')
    			})
    		},
    		dd:function(){
    			alert(1)
    		}
    	}
    	
    })
    
//  上面例子中,ww方法依赖jquery,而dd方法不依赖jquery,则就可以不用在define()方法里面设置数组,里面写jquery,只在ww方法里面用require()方法加载依赖的jquery即可
    
