function test7() {
  console.log("------------------数组扩展--------------");

  //类数组对象
  let arrObj = {
    "0": "a",
    "1": "b",
    "2": "c",
    length: 3
  };

  //把类数组对象转成真正的数组 from
  let arr1 = Array.from(arrObj);
  //from 是构造器Array/类，类方法
  console.log(arrObj);
  console.log(arr1);

  //arguments 也是类数组对象
  function func() {
    var args = Array.from(arguments);
    console.log(args);
  }
  func(1, 2, 3, 4, 5);

  function func1() {
    //...扩展运算符，可以把某些数组结构转成数组
    var args = [...arguments];
    console.log(args);
  }
  func1(6, 7, 8, 9, 0);

  //from 可以传第二个参数，对第一个参数的每个元素进行特定的操作
  var arr2 = Array.from([1, 2, 3, 4, 5, 6], function(x) {
    //参数是数组的元素
    return x * x;
  });
  console.log(arr2); //[1, 4, 9, 16, 25, 36]

  //[1,2,,3]
  arr2 = Array.from([1, 2, , 3], function(x) {
    return x || 0; //把数组元素的值为false返回0
  });
  console.log(arr2);

  //创建数组的方式
  var arr3 = [1, 2, 3];
  console.log(arr3);
  arr3 = new Array(1, 2, 3);
  console.log(arr3);
  arr3 = Array(1, 2, 3);
  console.log(arr3);
  //只传一个参数
  arr3 = Array(3); //只有一个参数，代表数组的长度
  console.log(arr3); //[ , , ]

  //Array.of 创建数组/转成数组
  console.log(Array.of(1, 2, 3));
  console.log(Array.of(3)); //[3]
  //Array.of 它的目的就是弥补Array方法的不足
  //Array.of 可以完全替代Array这个方法

  //copyWithin在当前数组内部，将指定位置的成员赋值到其他的位置
  //它会覆盖原有成员，返回当前数组
  arr3 = [1, 2, 3, 4, 5].copyWithin(0, 3);
  //第一个参数（必）：从该位置开始替换数据
  //第二个参数（可）：从该位置开始读数据，如果为负数，就是倒数
  //读到的数据作为要替换的数据（没有第三个参数代表，会读到数组的尾部）
  console.log(arr3); //[4, 5, 3, 4, 5]

  arr3 = [1, 2, 3, 4, 5].copyWithin(1, 3, 4);
  //第三个参数：读取数组数据的结束位置，如果为负数，就是倒数
  console.log(arr3); //[1, 4, 3, 4, 5]

  //find查询符合条件的数组成员,只会返回匹配第一个成功的成员/元素
  arr3 = [1, 2, 3, 4].find(function(n) {
    return n > 2;
  });
  console.log(arr3); //[3]

  arr3 = [1, 2, 3, 4].find(function(value, index, arr) {
    //value 当前元素  index当前索引 arr当前数组
    console.log(value, index, arr);
    return value > 0;
  });

  //findIndex 查找符合条件的元素的位置,只会返回匹配第一个成功的位置
  var num = [1, 4, 6, 8].findIndex(function(v, i, a) {
    return v > 7;
  });
  console.log(num); //3

  //fill 填充一个数组,使用参数替换当前数组的所有元素
  arr3 = [1, 2, 3, 4].fill(1);
  console.log(arr3); //[1, 1, 1, 1]

  arr3 = ["a", "b", "c"].fill(5, 1, 2);
  //第一个参数：要替换/填充的元素
  //第二个参数：被替换/填充的元素的开始位置
  //第三个参数：被替换/填充的元素的结束位置
  console.log(arr3); //["a", 5, "c"]

  //ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

export default test7;
