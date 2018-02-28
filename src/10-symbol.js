function test10() {
  console.log("------------------Symbol--------------");
  //Symbol类型，新的数据类型
  //对象的属性名都是字符串，这容易照成属性命名的冲突，
  //比如，你使用一个他人提供的对象，但又想为这个对象添加的属性或方法
  //这个时候新的属性或方法的名字有可能和现有的一样
  //这个时候我们可以使用symbol类型数据作为对象的属性名

  //创建Symbol数据，就是调用Symbol()方法，不要是用new Symbol()
  let sy = Symbol();
  console.log(sy, typeof sy); //Symbol()

  let sy1 = Symbol();
  console.log(sy1, sy === sy1); //false
  //可以传参，参数可以作为symbol的标识，主要就是为了程序员调试方便
  let sy2 = Symbol("a");
  let sy3 = Symbol("b");
  console.log(sy2, sy3);
  //转成字符串
  console.log(sy2.toString(), sy3.toString());

  //不相等
  console.log(Symbol("c") === Symbol("c")); //false
  console.log("c" === "c"); //true

  //Symbol值不能与其他类型运算
  //console.log('a' + sy1);//convert a Symbol value to a string

  let sy5 = Symbol();
  //把symbol作为属性名
  let obj = {
    [sy5]: "symbol",
    name: "abc"
  };
  console.log(obj);
  console.log(obj[sy5], obj[Symbol()]); //undefined

  //Symbol.for 重复使用同一个symbol
  let sy6 = Symbol.for("s");
  let sy7 = Symbol.for("s");
  console.log(sy6 === sy7); //true
  //Symbol.keyFor 获取symbol的标识
  console.log(Symbol.keyFor(sy6)); //s

  //遍历 for in for of 都不能遍历出symbol类型的属性名
  for (let p in obj) {
    console.log(p); //name
  }
  //getOwnPropertyNames 也获取不到symbol类型的属性名
  let arr = Object.getOwnPropertyNames(obj);
  console.log(arr); //["name"]

  arr = Object.getOwnPropertySymbols(obj);
  console.log(arr); //[Symbol()]
}

export default test10;
