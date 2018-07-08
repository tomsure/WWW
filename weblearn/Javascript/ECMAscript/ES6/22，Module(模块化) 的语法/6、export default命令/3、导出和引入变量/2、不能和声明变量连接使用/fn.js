 var a=123;
    export default  var a=123;  //报错

// export default 不能连接声明变量一起使用,因为default就是一个特殊的变量名,代表默认变量,使用export default就表示导出默认变量名,如果后面再连接var声明的变量,则就会冲突