
  function aa(){
  	console.log(123)
  }

 function bb(){
 	console.log(456)
 }

 export default aa
   export default bb    //报错，因为上面已经使用export default设置了默认变量

// export default设置并导出默认变量只能使用一次,否则会报错