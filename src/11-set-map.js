function test11() {
  console.log("------------------set和map--------------");
  //Set（集合）数据结构，它类似于数组
  //数组中的相同值的元素可以重复
  //元素/成员的值不能重复出现，没有重复的值

  let set1 = new Set();
  console.log(set1, typeof set1); //"object"

  //add 添加set元素
  [1, 2, 3, 4, 4, 3, 2, 1].map(x => set1.add(x));
  console.log(set1); //Set {1, 2, 3, 4}

  set1 = new Set([1, 2, 3, 4, 5]);
  console.log(set1); //Set {1, 2, 3, 4, 5}
  //set转成数组
  console.log(Array.from(set1)); //[1, 2, 3, 4, 5]
  console.log([...set1]); //[1, 2, 3, 4, 5]
  //size set的长度
  console.log(set1.size); //5
  //delete 删除某个元素
  set1.delete(2);
  console.log(set1); //Set {1, 3, 4, 5}
  //clear 清空set
  set1.clear();
  console.log(set1); //Set {}

  let set2 = new Set([1, 2, 3]);
  let set3 = new Set([1, 3, 4]);

  //并集
  let set4 = new Set([...set2, ...set3]); //转数组合并，再转set
  console.log(set4); //Set {1, 2, 3, 4}

  //交集    filter过滤   has判断集合中是否有某个元素
  set4 = new Set([...set2].filter(x => set3.has(x)));
  console.log(set4); //Set {1, 3}

  //上面这种写法和下面这种写法等同
  let arr1 = [...set2].filter(function(x) {
    return set3.has(x);
  });
  set4 = new Set(arr1);
  console.log(set4); //Set {1, 3}

  //差集
  set4 = new Set([...set2].filter(x => !set3.has(x)));
  console.log(set4); //Set {2}

  //Map数据结构
  //传统的js对象的属性名都是字符串，为了弥补这个缺陷
  //Map和Object都是键值对的集合，Map可以把任何数据类型作为属性名
  //在Object中什么是数据咩？ 值才是数据，键（属性名）只是为了获取属性值（值）
  //把Map当成值-值的集合

  let map1 = new Map();
  console.log(map1, typeof map1); //Map {} "object"

  let obj = {
    name: "xiaoming"
  };

  //set设置键值对
  map1.set(obj, "这是一个数据");
  console.log(map1);
  //get 获取该键对应的值
  console.log(map1.get(obj));
  //has 是否有某个键
  console.log(map1.has(obj));
  //map的长度
  console.log(map1.size);
  //clear清空
  map1.clear();

  //创建map指定键值对
  let map2 = new Map([["name", "xiao"], ["age", "20"]]);
  //每一组都是键值对
  console.log(map2); // {"name" => "age", "xiao" => "20"}
}

export default test11;
