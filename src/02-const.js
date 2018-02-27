function test2() {
  console.log("------------------const--------------");
  //const 不可变  声明只读的常量
  const a = 10;
  //只读的常量，不能修改
  //a = 20;// 报错
  console.log(a);

  //所以声明的就得赋值，否则会报错
  //const b;// 报错
  //console.log(b);

  const obj1 = {
    name: "jack"
  };
  obj1.name = "小明";
  console.log(obj1.name);
  //obj1 对象的地址/指针，不能变的是它的值，属性的值是可以修改的
  //obj1 = {};//报错

  const arr = [];
  arr.push("1");
  arr[1] = 10;
  console.log(arr);
  //通对象一样，元素可以修改，变量不能改变
  //arr = [1,2,3];//报错
}

export default test2;
