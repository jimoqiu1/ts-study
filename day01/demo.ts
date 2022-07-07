// 1.字符类型
let herName: string = 'hahaha'
// 2、数值类型
let age: number = 12
age = 34.33
// 3.布尔
let isMom: boolean = false
// 注意布尔值在ts中不能写0/1
// undefined/null
let str: undefined = undefined
let nullStr: null = null
// 5、数组,
/* 
  1、let 数组名:类型[] = [值1，值2]  :设置数组中元素的类型
  2、let 数组名:Array<类型> = [值1，值2]
*/
let arr1: string[] = ['wang','wu','chen']
let arr2: Array<number> = [1,2,3,4]
// 6、元组:规定了元素个数和类型的类型
// let 元祖名:[类型1，类型2] = [值1，值2]
let tup1: [string,number,string] = ['wang', 34, 'ahhahaha']
tup1 = ['wu', 35, 'heheheh']
// 7、枚举
/*  enum 枚举名{
  枚举项 = 枚举值
}
枚举可以自动赋值，从0开始
*/
enum Gender {
  Boy = 1,
  Girl = 2
}
let userSex: Gender = Gender.Boy
console.log(userSex);

// & 表示同时
let j: {name: string} & {age: number} = {name: 'wang', age: 34}
// type 类别的别名
type myType = 1 | 2 | 3| 4
let k: myType;
k = 4

// 8、any
/*
  类型声明时一般不用----它可以复制给任何变量
  一般在dom时使用
  unknown类型：不能直接赋值给其他类型的变量
*/
let e :unknown
e = true
e= 'hello'
let s: string
// s = e  报错
if(typeof e === 'string'){
  s = e
}
// 类型断言:告诉解析器实际的变量类型
/**
 * 语法形式：
 * 变量 as 类型
 * <类型> 变量
 */
s = e as string
s = <string> e
// 9、never
/**
 * 代表不存在的值的类型， 一般用于抛出异常和无限循环
 * 任何类型都是never的父类，所以never类型的值可以赋给任何类型的变量
 */
// 10、void 空类型，一般在无返回值的函数时用
///11、类型推断
let much = 555
// much = 'jdj'  // ts会判断出much是number类型的
// 12、联合类型 表示取值可以为多种类型中的一种
// let 变量名：类型1|类型2 = 值
let aaa: string | number = 43

// 13、对象object   一般不适用
// 一般使用对象注解 属性后加? 表示可选
// [propName: string]: any表示任意类型的属性
// (n1:string,n2:number) => number 表示函数结构的类型声明
let a: object
a = {}
let b: {
  name:string,
  age?: number,
  [propName:string]:any
} = {
  name: 'wang',
  age: 44,
  score: 55,
  gender: false
}