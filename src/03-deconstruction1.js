function test3() {
  console.log("------------------解构--------------");
  //解构 -- 是一种赋值方式

  //常规的变量赋值方式
  let a1 = 10;
  let a2 = 20;
  //一种简化
  let a3 = 10,
      a4 = 20;

  //ES6允许这样给变量赋值，这种形式称之为解构
  let [a, b, c] = [10, 20, 30];
  // a = 10,b = 20, c = 30
  console.log(a, b, c);
  //这种赋值方式是一种模式匹配
  //等号左右的模式必须一样

  //类似数组的嵌套
  let [b1, [[b2], b3]] = [1, [[2], 3]];
  console.log(b1, b2, b3); //1 ,2 ,3

  let [, , b4] = [4, 5, 6];
  console.log(b4); //6

  let [c1, c2] = [7, 8, 9];
  console.log(c1, c2); //7 8
  //解构不一定要一一对应

  let [c3, ...arr] = [0, 1, 2, 3, 4, 5];
  console.log(c3, arr);
  //... 数组 --- 把匹配剩余的值放在数组中

  let [c4, b5, ...arr1] = [1];
  console.log(c4, b5, arr1); //1 undefined []
  //匹配不够，普同变量undefined  数组是空数组

  let [d1, [[d2]], d3] = [1, [[2, 3]], 4];
  console.log(d1, d2, d3); //1 2 4

  let [e2 = 10] = [];
  console.log(e2); //10   --- e2的默认值，匹配不够的时候生效

  let [e3, e4 = "e4"] = ["e3", undefined];
  console.log(e3, e4); //e3 e4
  //模式匹配的判断是===undefined，代表匹配不成功

  let [e5 = 1] = [null];
  console.log(e5); //null  null !=== undefined

  function func() {
    return "str";
  }
  //默认值可以是一个方法
  let [f = func()] = [];
  console.log(f); //str

  //默认值可以是一个变量
  let [x1 = 1, y1 = x1] = [];
  console.log(x1, y1); // 1 1

  let [x2 = 2, y2 = x2] = [3];
  console.log(x2, y2); // 3 3

  let [x3 = 3, y3 = x3] = [1, 2];
  console.log(x3, y3); // 1 2
}

export default test3;
