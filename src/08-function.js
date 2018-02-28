function test8() {
  console.log("------------------函数扩展--------------");
  //ES6之前，不能直接为函数指定默认值的
  function fn(x, y) {
    y = x || 10; //通过||或运算符设置默认值
    console.log(y);
  }
  //ES6允许直接设置函数的默认值
  function fn1(x = 10, y) {
    console.log(x, y);
  }

  //ES6可以是用解构的方式设置参数
  function fn2({ x, y = 10 }) {
    console.log(x, y);
  }

  //下面这两种写法有什么区别
  function fn3({ x = 10, y = 10 } = {}) {
    console.log(x, y);
  }
  function fn4({ x, y } = { x: 10, y: 10 }) {
    console.log(x, y);
  }
  //没有区别
  fn3({ x: 2, y: 3 }); // 2 3
  fn4({ x: 2, y: 3 }); // 2 3
  //没有区别
  fn3(); // 10 10
  fn4(); // 10 10
  //有区别
  fn3({ x: 1 }); // 1 10
  fn4({ x: 1 }); // 1 undefined
  //有区别
  fn3({}); // 10 10
  fn4({}); // undefined undefined

  //报错函数
  function throwErr() {
    //throw 抛出  new Error错误对象
    throw new Error("参数必须传递");
    //抛出一个错误信息：参数必须传递
  }
  //设置参数的默认值，是抛出异常的函数
  function fn5(arg = throwErr()) {
    console.log(arg);
  }

  fn5(1);
  //fn5();//Uncaught Error: 参数必须传递
  //使代码更加规范，也方便程序员更好的调试

  //ES6引入了箭头函数
  var f1 = function(a) {
    return a;
  };
  console.log(f1(100));

  //箭头 =>   第一个a是函数的参数，第二个a是函数的返回值
  let f2 = a => a;
  console.log(f2(100));

  //函数没有参数要有()
  f2 = () => 100; //等价于function(){return 100}
  console.log(f2());

  //多个参数，用()括起来
  f2 = (num1, num2) => num1 + num2;

  //右侧实现复杂的情况下（不是单单一个返回值），
  //需要{}括起来,返回值使用return
  f2 = (x, y) => {
    x++;
    y--;
    return x + y;
  };

  //返回值是对象,没有return的情况下，需要使用()括起来
  f2 = (name, age) => ({ name: name, age: age });
  //参数也可以是用解构的方式
  f2 = ({ a1, a2 }) => a1 + a2;

  //箭头函数和传统函数最大的区别
  var id = 123456;
  function F3() {
    this.id = "012345";
    setTimeout(function() {
      console.log('函数：',this.id); //这个id是全局的id
    }, 100);
  }

  new F3();

  function F4() {
    this.id = "012345";
    //定义一个变量存储当前对象的this指针
    var self = this;
    setTimeout(function() {
      //如果想要获得当前对象的id使用变量self调用
      console.log('函数：',self.id);
    }, 100);
  }
  new F4();

  function F5() {
    this.id = "8888888";
    setTimeout(() => {
      //箭头函数中的this，指向的是当前的对象
      console.log('函数：',this.id);
    }, 100);
  }
  new F5();
}
export default test8;
