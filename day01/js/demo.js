// 1.字符类型
var herName = 'hahaha';
// 2、数值类型
var age = 12;
age = 34.33;
// 3.布尔
var isMom = false;
// 注意布尔值在ts中不能写0/1
// undefined/null
var str = undefined;
var nullStr = null;
// 5、数组,
/*
  1、let 数组名:类型[] = [值1，值2]  :设置数组中元素的类型
  2、let 数组名:Array<类型> = [值1，值2]
*/
var arr1 = ['wang', 'wu', 'chen'];
var arr2 = [1, 2, 3, 4];
// 6、元组:规定了元素个数和类型的类型
// let 元祖名:[类型1，类型2] = [值1，值2]
var tup1 = ['wang', 34, 'ahhahaha'];
tup1 = ['wu', 35, 'heheheh'];
// 7、枚举
/*  enum 枚举名{
  枚举项 = 枚举值
}
枚举可以自动赋值，从0开始
*/
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
})(Gender || (Gender = {}));
var userSex = Gender.Boy;
console.log(userSex);
// & 表示同时
var j = { name: 'wang', age: 34 };
var k;
k = 4;
// 8、any
/*
  类型声明时一般不用----它可以复制给任何变量
  一般在dom时使用
  unknown类型：不能直接赋值给其他类型的变量
*/
var e;
e = true;
e = 'hello';
var s;
// s = e  报错
if (typeof e === 'string') {
    s = e;
}
// 类型断言:告诉解析器实际的变量类型
/**
 * 语法形式：
 * 变量 as 类型
 * <类型> 变量
 */
s = e;
s = e;
// 9、never
/**
 * 代表不存在的值的类型， 一般用于抛出异常和无限循环
 * 任何类型都是never的父类，所以never类型的值可以赋给任何类型的变量
 */
// 10、void 空类型，一般在无返回值的函数时用
///11、类型推断
var much = 555;
// much = 'jdj'  // ts会判断出much是number类型的
// 12、联合类型 表示取值可以为多种类型中的一种
// let 变量名：类型1|类型2 = 值
var aaa = 43;
// 13、对象object   一般不适用
// 一般使用对象注解 属性后加? 表示可选
// [propName: string]: any表示任意类型的属性
// (n1:string,n2:number) => number 表示函数结构的类型声明
var a;
a = {};
var b = {
    name: 'wang',
    age: 44,
    score: 55,
    gender: false
};
