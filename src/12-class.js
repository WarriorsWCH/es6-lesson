function test12() {
  console.log("------------------类class--------------");
  //class类
  //传统面向语言都有类的概念，想创建必须要有类
  //ES5中，使用构造函数创建对象（构造函数相等于类/模板）

  //创建类    Animal类名(最好是首字母大写)
  class Animal {
    //方法  ---  类的实例的方法 -- 对象的方法
    eat() {
      console.log("吃啥别吃我");
    }
  }
  //创建对象      创建也是用new关键字
  var ani = new Animal();
  //调用方法
  ani.eat();

  //ES5中构造函数上有prototype --- 指向对象的原型
  //ES6中的类上面也有prototype属性，在类里面所有方法的定义都在这个prototype上
  //其实class就是个语法糖(糖衣)，是一种包装，更简便的书写方式
  //所以ES6中的class和传统面向对象的class完全不同
  //ES6中类的实现，内部原理还是ES5中原型的实现
  //1.写起来更简便 2.看起来更容易理解 3.其他语言程序猿转js更容易上手

  class Dog {
    //constructor ---- 构造函数
    constructor(sex, age) {
      //给对象定义属性，在constructor方法中，也可设置传递参数
      this.sex = sex;
      this.age = age;
    }
  }
  var dog = new Dog("公", 4);
  console.log(dog.sex);
  //类名Dog可以直接使用 ，class本质上还是一个function，也是个对象
  console.log(dog.constructor == Dog.prototype.constructor); //true
  console.log(Dog.prototype.constructor);
  //类本质上和构造函数没有什么差别
  console.log(Dog.prototype.constructor === Dog); //true

  var run = "run";
  class Cat {
    eat() {
      console.log("eat");
    }
    [run]() {
      //方法的名字也可以使用表达式,要用[]括起来
      console.log("run");
    }
  }
  //new Class 会自动调用constructor方法，如果没有写constructor方法
  //会默认创建一个空的constructor方法

  class Pig {
    constructor() {
      //默认没有return，返回的说就是Pig类型对象
      //如果有return，返回的就是return的对象
      return new Cat();
    }
  }

  //会自动调用constructor   返回了一个cat对象
  var pig = new Pig();
  console.log(pig instanceof Pig); //false
  console.log(pig instanceof Cat); //true

  //相同类型的对象共享一个原型
  var cat1 = new Cat();
  var cat2 = new Cat();
  console.log(cat1.__proto__ === cat2.__proto__); //true

  //使用表达式
  var MyClass = class Stu {
    //Stu只能在类内部使用
    getname() {
      //在class内部可以使用stu这个变量，代表的就是当前类
      console.log(Stu.name);
    }
  };

  var cl = new MyClass();
  //var cl = new Stu();//Stu is not defined
  cl.getname();

  //立即执行,立即调用class创建对象
  var tiger = new class {
    constructor(name) {
      this.name = name;
    }
    eat() {
      console.log("让你逃票");
    }
  }("泰森");

  tiger.eat();

  //class中this指针的指向
  class Mythis {
    constructor() {
      // 第一种
      // this.printName = function(name){
      //   this.printText(name);
      // }
      // 第二种
      this.printName = name => {
        this.printText(name);
      };
    }

    printText(text) {
      console.log(text);
    }
  }

  var me = new Mythis();
  me.printName("xxxx"); //xxx
  //把方法提取出来
  var print = me.printName;
  print("YYYYY"); //上面第一种会报错

  //继承

  //ES5 --- 原型链
  Dog.prototype = new Animal();

  //ES6中使用extends关键字来实现继承
  class Color {
    constructor(color) {
      this.color = color;
      this.x = 0;
    }
    printColor() {
      console.log("父类的方法：", this.color);
    }
  }
  //RedColor继承自Color
  //子类就是RedColor  父类就是Color
  class RedColor extends Color {
    constructor(w, h, color) {
      //子类是根据父类的实例的一种加工，在父类是实例的基础上创建的子类
      //否则找不到this指针，super返回/创建父类的实例
      //super()方法要在子类使用this之前调用
      super(color); //调用的是父类的constructor方法
      //子类独有的属性
      this.w = w;
      this.h = h;
      this.x = 1;
    }
    //子类独有的方法
    printAll() {
      //调用父类的printColor的方法
      super.printColor(); //super是对象，代表的是父类对象
      console.log(this.w, this.h, this.x);
    }
  }
  //创建子类的对象
  var red = new RedColor("200", "200", "red");
  red.printAll();

  // 静态方法
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }

  Parent.tell();
  Parent.type='test';
  console.log('静态属性',Parent.type);
}

export default test12;
