function test5() {
  console.log("------------------字符串扩展--------------");
  //字符串
  //遍历 let ... of
  for (let c of "abcdefg") {
    console.log(c);
  }

  //ES6字符串新增的方法
  var str = "abcdfjfglgl";
  console.log(str.includes("a")); //是否包含某个字符串

  console.log(str.startsWith("abc"));//判断字符串是否以某个字符串开头

  console.log(str.endsWith("l"));//判断字符串是否以某个字符串结尾

  // startsWith endsWith都可以传第二个参数
  console.log(str.includes("c", 2));//第二个参数是搜索的索引/开始的位置

  console.log('1'.padStart(2,'0'));//用于头部补全
  //第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
  //如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
  //如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
  //如果省略第二个参数，默认使用空格补全长度。
  console.log('1'.padEnd(2,'0'));//用于尾部补全
  
  //repeat 重复/返回一个重复多少次的字符串
  console.log("A".repeat(3));
  console.log("A".repeat(0)); //''空字符串

  //如果是小数就是向下取整/省略小数
  console.log("A".repeat(2.5));

  //如果是负数（小于等于-1的负数），会报错
  //如果是大于-1的负数，取0
  console.log("A".repeat(-0.5)); //''

  //模板字符串(``反引号)
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);


  //模板字符串中使用运算
  let x = 10;
  let y = 20;
  console.log(`${x} + ${y} = ${x + y}`); //10 + 20 = 30

  console.log(String.raw`Hi\n${1+2}`);
  //往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。
  console.log(`Hi\n${1+2}`);

}
export default test5;
