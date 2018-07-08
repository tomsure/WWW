  var a=1

   export {a as aa}
   export {a as at}

   function fn(q,w){
   	 return q +w
   }

    export {fn as fn1}
    export {fn as fn2}

//模块导出的时候,无论是函数还是变量,都可以导出多次,并使用as重写多个不同的变量名进行导出