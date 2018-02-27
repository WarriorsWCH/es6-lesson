function test4() {
  console.log("------------------解构--------------");
  //对象的解构赋值
  let { age, name } = { name: "jack", age: 20 };
  console.log(name, age);

  let { age1 } = { name: "jack" };
  console.log(age1); //undefined

  //name age 并不是变量，用来匹配数据，真正的变量n，a
  let { name: n, age: a } = { name: "rose", age: 18 };
  //如果属性名的后面没有其他变量的名字，会把属性名作为变量名
  console.log(n, a);

  let { age: a1 } = { age: 19 }; //let a1 = 19;
  console.log(a1);

  let obj = {
    name: "jack",
    arr: [
      "a",
      {
        age: 10
      }
    ]
  };
  //嵌套的层级要对应起来
  let { arr: [a2, { age: a3 }] } = obj;
  console.log(a2, a3);

  //设置默认值
  let { x = 3 } = {};
  console.log(x);

  let { x1, y = 2 } = { x1: 1 };
  console.log(x1, y);

  let { x: y1 = 4 } = {};
  console.log(y1);

  let { x2 = 3 } = { x2: undefined };
  console.log(x2);

  //数组也是对象
  let arr = [1, 2, 3, 4, 5];
  //数组的{}匹配，属性是索引,有运算需要[]括起来
  let { 0: i1, [arr.length - 1]: i2 } = arr;
  console.log(i1, i2);

  //字符串也是对象
  let [e1, e2, e3, e4] = "edfg";
  console.log(e1, e2, e3, e4);
  //length 是字符串的属性
  let { length: len } = "abcde";
  console.log(len);

  //函数的参数解构
  function func({ arg1, arg2 } = { arg1: 1, arg2: 2 }) {
    //{arg1:1,arg2:2} 参数的默认值
    console.log(arg1, arg2);
  }
  func({ arg1: 3, arg2: 4 }); // 3 4

  func({ arg1: 3 }); // 3 undefiend {arg1,arg2} = {arg1:3}

  func({}); //undefiend undefiend

  func(); // 1 2

  //解构的用途
  let l1 = 10;
  let l2 = 20;
  //1.交换两个变量的值
  //需要一个中间变量
  let tmp;
  tmp = l1;
  l1 = l2;
  l2 = tmp;
  console.log(l1, l2);
  //解构方式交换两个变量的值
  [l1, l2] = [l2, l1]; //右侧是数组
  console.log(l1, l2);

  //2.函数的返回值/返回多个值
  function func2() {
    var v1 = 1;
    var v2 = 2;
    var v3 = 3;
    return [v1, v2, v3];
  }
  //使用解构的方式拿到函数的多个返回值
  let [t1, t2, t3] = func2();
  //如果返回的是对象同理

  //3.函数的参数
  function func3({ ar1, ar2, ar3 }) {
    //是函数的参数变得无序，通过函数的名字传参
  }
  func3({ ar1: 1, ar3: 3 });

  //4.提取JSON数据
  let jsonData = {
    id: 100,
    url: "url",
    count: 1000
  };
  let { id, url, count } = jsonData;
}

export default test4;
