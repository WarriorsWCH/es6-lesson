function test9() {
  console.log("------------------对象扩展--------------");
  //ES5中对象属性的设置
  var obj = {
    name: "rose",
    age: 10,
    jump: function() {
      console.log("你跳我不跳");
    }
  };
  //name变量
  var name = "jack";
  //使用name变量作为对象的name属性
  var obj2 = { name }; //等价于 var obj2 = {name : name};
  //这是一种简写方式，只有当属性名和变量一样的时候，才可以这样写
  console.log(obj2);

  var age = 20;
  //ES6中如果属性的值是一个函数，也可以简写
  var obj3 = {
    jump() {
      console.log("你跳我不跳");
    },
    //age :age
    age
  };
  obj3.jump();
  console.log(obj3.age); //20

  //私有属性
  var obj4 = {
    _sex: "未知", //或者var _sex = '未知';

    get sex() {
      //getter取值器
      return this._sex;
    },
    set sex(s) {
      //setter赋值器
      this._sex = s;
    }
    //使用set和get方法定义的方法名字会作为属性
    //不能直接这样使用obj4.sex('男');
  };
  //赋值
  obj4.sex = "男";
  //取值
  console.log(obj4.sex);

  var obj5 = {};
  //点语法只是在[]基础上的简便方式
  obj5.name = "name";
  obj5["age"] = "20";

  //ES6中设置属性名可以使用表达式
  obj5["s" + "ex"] = "男";
  console.log(obj5["sex"]);

  var prop1 = "xxxx";
  var obj6 = {
    //在定义对象属性的名字需要运算,可以使用[]，[]内使用表达式
    [prop1]: "YYYY",
    //				prop1 : 'YYYY',
    ["s" + "ex"]: "女",
    ["ju" + "mp"]() {
      console.log("jump");
    }
  };
  obj6.jump();

  var pro1 = { a: 1 };
  var pro2 = { b: 2 };
  var obj7 = {
    [pro1]: "第一个属性值",
    [pro2]: "第二个属性值"
  };
  console.log(obj7); //Object {[object Object]: "第二个属性值"}
  //如果属性名通过运算的来是对象的话，他会转成字符串[object Object]
  //ES5中/传统的对象的属性名都是字符串，不是字符串会转成字符串
  var obj8 = {
    name: "小明",
    0: "1"
  };
  //遍历对象for in 遍历的是属性名
  for (let p in obj8) {
    console.log(typeof p); //string
  }

  //ES6中方法内置的name属性，可以获得方法的名字
  function fn() {}
  //方法的name属性
  console.log(fn.name);

  //判断方式  == === Object.is()
  //NaN === NaN
  console.log(NaN === NaN); //false
  console.log(+0 === -0); //true

  console.log(Object.is(NaN, NaN)); //true
  console.log(Object.is(+0, -0));//false

  //Object.assign 对象的合并
  var ob1 = { a: 1, b: 1 },
      ob2 = { b: 2, c: 2 },
      ob3 = { c: 3 };

  Object.assign(ob1, ob2, ob3);
  console.log(ob1); //{a: 1, b: 2, c: 3}
  //第一个参数：目标对象（最终合并后的对象）
  //其他参数：来源对象
  //如果有重复的属性，后者会替换前者

  console.log(Object.assign(2)); //非对象会转成对象
  //Number {[[PrimitiveValue]]: 2}

  //console.log(Object.assign(null));
  //console.log(Object.assign(undefined));
  //null undefined不能转成对象，所以会报错

  var o1 = "xxx",
      o2 = 20,
      o3 = true;
  var o4 = Object.assign(o1, o2, o3);
  //这种情况后面两个非对象不会合并到对象中
  console.log(o4);

  //Object.assinge的合并是浅拷贝
  var objt = { a: { b: 1 } };
  var objt2 = Object.assign({}, objt);
  console.log(objt2);
  //修改的是objt2.a.b的值
  objt2.a.b = 10;
  console.log(objt2.a.b, objt.a.b); //10 10
  //浅拷贝：拷贝的只是地址/指针，并不是开辟了一个新的空间
  //深拷贝：开辟了一个新的空间存储数据，值是一样的，但是地址不一样

  //遍历对象属性·
  //第一种
  for (let p in obj) {
    console.log(p);
  }

  //第二种  Object.keys获取对象的属性名
  for(let key of Object.keys(obj)){
    console.log('key:',key);
  }
  for(let value of Object.values(obj)){
    console.log('val:',value);
  }
  for(let [key,value] of Object.entries(obj)){
    console.log('key-val:',[key,value]);
  }
  //第三种  包括本身，不包括继承
  for(let key of Object.getOwnPropertyNames(obj)){
    console.log('key:',key);
  }
}

export default test9;
