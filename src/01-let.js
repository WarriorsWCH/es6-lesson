function test1() {
  console.log("------------------let--------------");
  {
    //let var命令，用来声明一个变量
    let a = 10;
    //let 声明的变量只能在他所在的作用域（代码块{}中间）内有效
    //ES6中作用域指的是{}内，用var声明的变量还是遵循以前的规则

    //ES5只有全局作用域和函数作用域
    var b = 20;
  }
  console.log(b); //20
  //console.log(a);//a is not defined

  //实例
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr[i] = function() {
      console.log(i);
    };
  }
  arr[5](); //10

  let arr1 = [];
  //j并不是全局变量
  //每次循环的时候都会创建一个变量j
  for (let j = 0; j < 10; j++) {
    arr1[j] = function() {
      //每个函数的中的j并不一样/是一个新的变量的j
      console.log(j);
      //js引擎中会把上一次j的值记录下来，作为下一次j的初始值
    };
  }
  arr1[5](); //5
}

export default test1;
