function test6() {
  console.log("------------------数值扩展--------------");

  //ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示
  console.log("B", 0b111110111);
  console.log(0o767);

  //Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
  console.log("15", Number.isFinite(15));
  console.log("NaN", Number.isFinite(NaN));
  console.log("1/0", Number.isFinite("true" / 0));
  //Number.isNaN()用来检查一个值是否为NaN。
  console.log("NaN", Number.isNaN(NaN));
  console.log("0", Number.isNaN(0));

  //Number.isInteger()用来判断一个数值是否为整数。
  console.log("25", Number.isInteger(25));
  console.log("25.0", Number.isInteger(25.0));
  console.log("25.1", Number.isInteger(25.1));
  console.log("25.1", Number.isInteger("25"));

  //JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
  //ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  //Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
  console.log("10", Number.isSafeInteger(10));
  console.log("a", Number.isSafeInteger("a"));

  //Math.trunc方法用于去除一个数的小数部分，返回整数部分。
  console.log(4.1, Math.trunc(4.1));
  console.log(4.9, Math.trunc(4.9));

  //Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
  console.log("-5", Math.sign(-5));
  console.log("0", Math.sign(0));
  console.log("5", Math.sign(5));
  console.log("50", Math.sign("50"));
  console.log("foo", Math.sign("foo"));

  //Math.cbrt方法用于计算一个数的立方根。
  console.log("-1", Math.cbrt(-1));
  console.log("8", Math.cbrt(8));
}

export default test6;
