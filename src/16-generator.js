function test16() {
  console.log("------------------Generator--------------");
  {
    // genertaor基本定义
    let tell = function*() {
      yield "a";
      yield "b";
      return "c";
    };

    let k = tell();

    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
  }

  {
    let obj = {};
    obj[Symbol.iterator] = function*() {
      yield 1;
      yield 2;
      yield 3;
    };

    for (let value of obj) {
      console.log("value", value);
    }
  }

  {
    let state = function*() {
      while (1) {
        yield "A";
        yield "B";
        yield "C";
      }
    };
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
  }
}

export default test16;
