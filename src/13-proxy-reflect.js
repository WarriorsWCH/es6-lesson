function test13() {
  console.log("------------------Proxy和Reflect--------------");
  {
    let obj = {
      time: "2017-03-11",
      name: "net",
      _r: 123
    };

    let monitor = new Proxy(obj, {
      // 拦截对象属性的读取
      get: function(target, key) {
        if (key in target) {
          return target[key];
        } else {
          throw new ReferenceError('Property "' + key + '" does not exist.');
        }
      },
      // 拦截对象设置属性
      set(target, key, value) {
        if (key === "age") {
          if (!Number.isInteger(value)) {
            throw new TypeError("The age is not an integer");
          }
          if (value > 200) {
            throw new RangeError("The age seems invalid");
          }
          return (target[key] = value);
        } else {
          return (target[key] = value);
        }
      },
      // has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。
      // 拦截key in object操作
      has(target, key) {
        if (key === "name") {
          return target[key];
        } else {
          return false;
        }
      },
      // deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
      // 拦截delete
      deleteProperty(target, key) {
        if (key.indexOf("_") > -1) {
          delete target[key];
          return true;
        } else {
          return target[key];
        }
      },
      // ownKeys方法用来拦截对象自身属性的读取操作
      // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
      ownKeys(target) {
        return Object.keys(target).filter(item => item != "time");
      }
    });

    console.log("get--", monitor.time);

    monitor.age = 20;
    // monitor.age=2000;
    console.log("set--", monitor.age);
    console.log("set--", obj.age);

    console.log("has--", "name" in monitor, "time" in monitor);

    // delete monitor._r;
    // console.log('delete',monitor);

    console.log("ownKeys", Object.keys(monitor));
  }

  {
    let obj = {
      time: "2017-03-11",
      name: "net",
      _r: 123
    };

    console.log("Reflect get", Reflect.get(obj, "time"));
    Reflect.set(obj, "name", "mukewang");
    console.log(obj);
    console.log("has", Reflect.has(obj, "name"));
  }
}

export default test13;
