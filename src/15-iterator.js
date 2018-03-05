function test15() {
  console.log("------------------Iterator--------------");
  let it = makeIterator(["a", "b"]);

  console.log(it.next()); // { value: "a", done: false }
  console.log(it.next()); // { value: "b", done: false }
  console.log(it.next()); // { value: undefined, done: true }

  function makeIterator(array) {
    let nextIndex = 0;
    return {
      next: function() {
        return nextIndex < array.length
          ? { value: array[nextIndex++], done: false }
          : { value: undefined, done: true };
      }
    };
  }
  // Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环。
  // 当使用for...of循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。
  // 一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）
  let obj = {
    start: [1, 3, 2],
    end: [7, 9, 8],
    [Symbol.iterator]() {
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      return {
        next() {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            };
          } else {
            return {
              value: arr[index++],
              done: true
            };
          }
        }
      };
    }
  };
  for (let key of obj) {
    console.log(key);
  }
}

export default test15;
