function test17() {
  console.log("------------------async--------------");
  //async 函数是什么？一句话，它就是 Generator 函数的语法糖。

  //   function timeout(ms) {
  //     return new Promise(resolve => {
  //       setTimeout(resolve, ms);
  //     });
  //   }

  //   async function asyncPrint(value, ms) {
  //     await timeout(ms);
  //     console.log(value);
  //   }

  //   asyncPrint("world", 5000);

  async function timeout(ms) {
    await new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }

  asyncPrint("hello world", 50);
  // sync函数返回一个 Promise 对象。

  // async函数内部return语句返回的值，会成为then方法回调函数的参数。
  async function f() {
    return "hello world";
  }

  f().then(v => console.log(v));
}

export default test17;
