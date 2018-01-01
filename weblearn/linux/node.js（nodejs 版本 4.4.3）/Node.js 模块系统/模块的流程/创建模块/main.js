var  appModule=require('./app');   //加载模块

     console.log(appModule.y)  //使用模块中的属性或者方法，访问的是模块中的module.exports.y
     
     
     
     
//   在引入的模块中会将需要输出的变量或者方法作为值赋给module.exports的一个属性.例如这个案例的引入的模块app.js中的变量x就赋值给了module.expotrs的y属性,作为他的值
     


    