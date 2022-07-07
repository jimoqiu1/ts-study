# 初体验

## 安装与运行

全局安装：

> npm install -g typescript

运行：

+ 后缀名：.ts
+ ts 编译成js    （tsc ./xxx.ts）
+ 在浏览器或node中运行

自动编译：

设置vscode：  

+ > tsc --init,   创建  tsconfig.json  文件夹

+ 修改tsconfig.json 文件夹，设置js文件夹："outDir": "./js/"

+ 设置vscode 监视任务

## 编译

tsconfig.json 文件用来配置文件，ts编译器来对它的信息进行编译。

+ include：

# ts变量

ts必须声明数据类型

js  

> let 变量名 = 值；

ts

> let 变量名：变量类型 = 值；

在ts中，为变量指明了变量类型，就只能给这个变量设置相同数据类型的值。

## 数据类型

原有类型：

string/number/boolean/null/undefined/Symbol/Array/Object

```ts
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
```

## 函数

```ts
// 函数
function sayhi(): string{
  return 'haahahah'
}
let res = sayhi()
console.log(res)

// ts 中实参和形参的类型必须一致，数量也必须一致

function jump(position: string) {
  return 'ahhaha' + position
}
console.log(jump('p城'))
// 可选参数 在形参后面加个问号，表示可传可不传
function jump2(position?:string) {
  return 'kkkk'
}
// 默认值,带默认值的参数，本身就是可选参数
function jump3(position: string = 'Pcheng') {
  return '去不?'
}
// 剩余参数 ...
// 只能有一个，只能定义为数组，只能放最后
function jump4(...args:[]) {

}
```

 箭头函数能保存函数创建时的 `this`值，而不是调用时的值： 

**unknown类型：**

typeScript 3.0引入了一个顶级的`unknown`类型。 对照于`any`，`unknown`是类型安全的。

**1.unknown可以赋值给任意类型**

```ts
let value1: unknown
value1 = 'cyang'
value1 = 1
value1 = false
value1 = undefined
value1 = Symbol()
```

**2.如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型此时他只能赋值给unknown和any类型**

```ts
let value1: unknown
let value2: unknown
let value3: string
value3 = value1 //Error不能将类型“unknown”分配给类型“string”。
value2 = value1 //OK
```

**3.如果没有类型断言或基于控制流的类型细化时，不能在他上面进行任何操作**

```ts
let value1: unknown
value1 += 1 //Error对象的类型为 "unknown"。
```

**4.unknown与任何其他类型的交叉类型都等于其他类型**

```ts
type type1 = string & unknown
// type type1 = string

type type2 = never & unknown
// type type2 = never
```

**5.unknown与任何其他类型（any）组成的联合类型都等于unknown类型**

```ts
type type1 = unknown | string
// type type1 = unknown
type type2 = unknown | any
// type type2 = any
```

**6.never类型是unknown的子类型**

```ts
type type1 = never extends unknown ? true : false
```

这里使用了条件类型，下面的条件类型知识会讲到。

**7.keyof unknown 等于类型 never**

```ts
type type1 = keyof unknown
```

**8.unknown 类型的值不能访问它的属性也不能作为函数调用和作为类创建实例**

```ts
let value1: unknown

value1.age //Error对象的类型为 "unknown"。
new value1() //ErrorError对象的类型为 "unknown"。
```

**9.使用映射类型时如果遍历的是unknown类型则不会映射任何属性**

```ts
type Type1<T> = {
    [P in keyof T]: number
}
type type1 = Type1<unknown>
// type type1 = {}
```





## 类型推论

常见的场景：1、声明变量时，2、函数返回值

如果对变量的声明和赋值是同时的，则ts会自动进行类型检测

# 接口

interface

## 对象注解

对象的注解：建立一种契约，约束对象的属性类型

```ts
// 对象注解，约束对象的属性类型
let person: {
  name: string,
  age: number
}

person={
  name: 'wang',
  age: 44
}
```

对象方法的注解

```ts
let person: {
	sayhi: () => void
	sing: (name: string) => void
	talk: (name: string) => string
}
```

=> 左边是参数的类型

=> 右边是方法返回的数据类型

## 接口使用

接口：为对象注解命名，并建立契约来约束对象的属性

```ts
interface LabelledValue {
  label: string;
}
```

# webpack打包

> npm i webpack webpack-cli typescript ts-loader -D   安装webpack、ts相应的包

```js
// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack 中的配置信息都应该写在module.exports中
module.exports = {
  // 入口文件
  entry: './src/index.ts',

  // 指定打包文件所在的目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的名字
    filename: 'bundle.js',
    // 告诉webpack不适用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  // 指定webpack打包时需要使用的模块
  module: {
    // 指定要加载的规则
    rules:[
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome":"88",
                      'ie': "11"
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用corejs的方式，usage表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 打包html 的模板
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}
```

> webpack-dev-server    webpack开发服务器，可以根据项目的变化自动的变化

babel 

[官网](https://www.babeljs.cn/docs/)

> npm i @babel/core @babel/preset-env babel-loader core-js -D

less/css

>  npm i less less-loader css-loader style-loader -D

postcss

>  npm i postcss postcss-loader post-preset-env -D

# 面向对象

## 类

```ts
// 定义类

class Person {
/**
 * 直接定义的属性是实例属性，需要通过对象的实例去访问
 * 
 * 使用static开头的是静态属性（类属性），可以直接通过类去引用
 * 
 */
   name: string = 'sun';
   static age:number = 500
}

const p = new Person()

console.log(p.name);
console.log(Person.age);

class Dog {
  name: string
  age: number
  // constructor 被称为构造函数
  // 构造函数会在对象创建时调用
  constructor(name: string, age: number) {
    // 在实例方法中，this 表示当前的实例
    // 在构造函数中当前对象就是当前新建的那个对象
    // 可以通过this向新建的对象上添加属性
    console.log('const', this);    //this -Dog{}
    
    this.name = name
    this.age = age
  }
  bark() {
    // 在方法中可以通过this来表示调用方法的对象
    console.log(this.name); // wang
    
    // console.log('wanwawng');
    
  }
}
const dog = new Dog('wang', 2)
const dog2 = new Dog('wu', 1)
console.log(dog);
console.log(dog2);
dog.bark()

```

**constructor 里面的this指向实例对象, 方法里面的this 指向这个方法的调用者**

## 继承

```ts
(function(){
  class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHi() {
      console.log('叫');
      
    }
  }
  /**
   * 继承：子类可以继承父类的所有属性和方法
   * 如果父类和子类有相同的方法，子类可以覆盖父类中的方法（重写）
   */
  // 定义狗类
  // 使dog类继承Animal类
  class Dog extends Animal{
    run() {
      console.log(`${this.name}在跑`);
    }
    sayHi() {
      // console.log('wangnnwanwnes');
      // 在类方法中使用super表示调用了父类的方法
      super.sayHi()
    }
  }
  // 定义猫类
  class Cat extends Animal {
    sex: string
    constructor(name: string, age: number, sex: string) {
      // 在子类中写了构造函数，在子类构造函数中必须对父类构造函数进行调用
      super(name,age);
      this.sex = sex
    }
    sayHi() {
      console.log('miaomaio');
    }
  }

  const dog = new Dog('wang', 2)
  console.log(dog);
  dog.sayHi()
  dog.run()

  const cat = new Cat('mimi',1, 'female')
  console.log(cat);
  cat.sayHi()
})()
```

抽象类

```ts
 /**
   * abstract： 抽象类
   * 抽象类不能用来创建对象
   * 抽象类是专门用来被继承的
   * 
   * 抽象类中可以添加抽象方法,子类必须对这个方法进行重写
   * 
   */

    abstract class Fruits {
      name: string
      constructor(name: string) {
        this.name = name
      }
      //  定义抽象方法
      abstract getPrice():void
    }

    class Apple extends Fruits {
      getPrice(): void {
        console.log('12yaun');
        
      }
    }
    
    // const li = new Fruits('ping')  报错,抽象类是不能被实例的
    const apple = new Apple('苹果')
    console.log(apple);
    apple.getPrice()
    
```

## 接口

```ts
(function() {
  type myType = {
    name: string,
    age: number
  }
  const obj: myType = {
    name: 'wang',
    age: 33
  }
  /**
   * 接口用来定义一个类结构, 说明一个类中包含哪些属性和方法
   * 
   */
  interface myInterface {
    name: string
    age: number
  }
  const obj2: myInterface = {
    name: 'wang',
    age: 44
  }

  /**
   * 接口可以在定义类的时候去限制类的结构
   * 接口中的所有属性都不能有实际的值--接口只定义对象的结构，而不考虑实际值
   * 接口中的方法都是抽象方法，而抽象类中的方法可以是普通方法
   */
  interface myInter {
    name: string
    sayhello():void
  }
  /**
   * 定义类的时候可以去实现这个接口
   *  实现接口就是让类满足这个接口的要求
   */
  class MyClass implements myInter{
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayhello(): void {
      console.log('ahhaha');
    }
  }
})()
```

## 属性的封装

```ts
(function() {
  class Person {
    /**
     * public 修饰的属性可以在任意位置访问（默认的）
     * private 私有属性，只能在类的内部访问
     *  可以在类的内部添加方法，让外部可以访问
     */
    private _name: string
    private _age: number
    constructor(name:string, age: number) {
      this._name = name
      this._age = age
    }
    /**
     * 
     * getter 方法用来读取属性
     * setter 方法用来设置属性（存取器）
     */
    // 定义方法，用来获取name属性
    getName() {
      return this._name
    }
    // 定义方法，设置属性的值
    setName(name: string) {
      this._name = name
    }
  }

  const per = new Person('wang', 23)

  /**
   * 现在属性是在对象中设置的，属性的值可以任意修改，这将会导致对象中的数据变得非常不安全
   */
  // per._name = 'zhu'
  // per._age = -33    //不能直接改变属性值了，需要通过getter 和setter来对属性的值进行获取和设置
  console.log(per.getName());
  per.setName('zhu')
  console.log(per.getName());
})()
```

```ts
(function() {
  class Person {
    /**
     * public 修饰的属性可以在任意位置访问
     * private 私有属性，只能在类的内部访问
     *  可以在类的内部添加方法，让外部可以访问
     * protected 受保护的属性，只能在当前类和当前类的子类中访问
     */
    private _name: string
    private _age: number
    constructor(name:string, age: number) {
      this._name = name
      this._age = age
    }
      // 简写
      // constructor(private _name: string, private _age: number) {}
    /**
     * 
     * getter 方法用来读取属性
     * setter 方法用来设置属性（存取器）
     */
    // ts中设置getter和setter方法
    get name() {
      return this._name
    }
    set name(value: string) {
      this._name = value
    }
    get age() {
      return this._age
    }
    set age(value: number) {
      if(value >= 0) {
        this._age = value
      }
    }
  }

  const per = new Person('wang', 23)

  /**
   * 现在属性是在对象中设置的，属性的值可以任意修改，这将会导致对象中的数据变得非常不安全
   */
  per.name = 'zhu'
  console.log(per.name);
  per.age = -33
  console.log(per.age);  //无法设置，值仍然是23
})()
```

# 泛型

```ts
/**
 * 定义函数或者类时，在不确定类型时可以使用泛型
 */

function fn<T>(a:T):T {
  return a
}
let a = fn(10)   // 调用时不指定泛型，ts会自动进行类型推断
let b = fn<string>('hello')   // 指定泛型

function fn2<T, k>(a: T, b: k): T {
  console.log(b);
  return a
}

fn2<number, string>(123,'eeee')  // 最好在调用的时候指定泛型

interface Inter {
  length:number
}

// T extends Inter 表示泛型T必须是Inter的实现类或者子类
function fn3<T extends Inter>(a:T): number {
  return a.length
}

console.log(fn3('jajaja'));

```

泛型类

```ts
class GenericNumber<T> {
  zeroValue: T | undefined
  add: ((x: T, y: T) => T) | undefined
}

let myGenericNumber: GenericNumber<number> = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y 
}

let myGenericString: GenericNumber<string> = new GenericNumber<string>()
myGenericString.zeroValue = 'abc'
myGenericString.add = function(x, y) { 
  return x + y
}

console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
```

泛型约束：

```js
function fn <T>(x: T): void {
    // console.log(x.length)  // error,这里的x是泛型，可能所给的参数没有length这个属性
  }

  // 可以使用接口来解决这个问题
  interface Lengthwise {
    length: number;
  }
  
  // 指定泛型约束
  function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)
  }
  fn2('abc')   //3
```

# 高级类型

## 交叉类型

 将多个类型合并为一个类型。

```ts
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
```

## 联合类型

当一个函数传入的参数可以是两种类型或以上时，我们可以使用联合类型。

```ts
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
    // ...
}

let indentedString = padLeft("Hello world", true); // errors during compilation
```

这里如果padding类型是any,则在传入参数的时候可以传任何类型，导致错误。

 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。 

```ts
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
```

这里getSmallPet()可以返回Bird或者Fish类型的结果，当利用pet去调用私有方法时，会报错，因为ts并不知道返回的具体是什么类型。

## 类型保护与区分类型

 联合类型适合于那些值可以为不同类型的情况。但有时候我们需要确切知道值的类型，这样就需要用到类型保护。

当然我们可以使用断言来做，但是当私有属性一多，就不得不使用多次断言。

```ts
let pet = getSmallPet();

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}
```

**1、自定义类型保护**

 **类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型**。 要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 *类型谓词*： 

```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
```

在这个例子里， `pet is Fish`就是类型谓词。 谓词为 `parameterName is Type`这种形式， `parameterName`必须是来自于当前函数签名里的一个参数名。

每当使用一些变量调用 `isFish`时，TypeScript会将变量缩减为那个具体的类型，只要这个类型与变量的原始类型是兼容的。(其实类型保护就是为了缩减类型)

```ts
// 'swim' 和 'fly' 调用都没有问题了

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
```

**2、typeof类型保护**

**3、instanceof类型保护**



## 类型别名

 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。 

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
```

起别名不会新建一个类型 - 它创建了一个新 *名字*来引用那个类型。 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用。

同接口一样，类型别名也可以是泛型 - 我们可以添加类型参数并且在别名声明的右侧传入：

```ts
type Container<T> = { value: T };
```

注意： 类型别名不能出现在声明右侧的任何地方。 

类型别名与接口的区别：

1、接口创建了一个新的名字，可以在其它任何地方使用。  类型别名并不创建新名字—比如，错误信息就不会使用别名。 

2、 类型别名不能被 `extends`和 `implements`（自己也不能 `extends`和 `implements`其它类型） 

3、 如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。 



## 索引类型

 使用索引类型，编译器就能够检查使用了动态属性名的代码。 例如，一个常见的JavaScript模式是从对象中选取属性的子集。 

```js
function pluck(o, names) {
    return names.map(n => o[n]);
}
```

ts中需要通过索引类型查询和索引访问操作符来实现该功能：

```ts
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]
```

 `keyof T`， **索引类型查询操作符**。 对于任何类型 `T`， `keyof T`的结果为 `T`上已知的公共属性名的联合。 

```ts
let personProps: keyof Person; // 'name' | 'age'
```

 `T[K]`， **索引访问操作符** 。 在这里，类型语法反映了表达式语法。 这意味着 `person['name']`具有类型 `Person['name']` — 在我们的例子里则为 `string`类型。 然而，就像索引类型查询一样，你可以在普通的上下文里使用 `T[K]`，这正是它的强大所在。 你只要确保类型变量 `K extends keyof T`就可以了。 例如下面 `getProperty`函数的例子： 

```ts
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}
```

索引类型与索引签名

 由于`key`值会默认转化为number类型，所以可以定义一个string类型的`key`值 。 `keyof`和 `T[K]`与字符串索引签名进行交互。 如果你有一个带有字符串索引签名的类型，那么 `keyof T`会是 `string`。 并且 `T[string]`为索引签名的类型： 

```ts
interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string | string
let value: Map<number>['foo']; // number
```

## 映射类型

 **TypeScript提供了从旧类型中创建新类型的一种方式** — **映射类型**。 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。 例如，你可以令每个属性成为 `readonly`类型或可选的。 

```ts
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

使用：

```ts
type PersonPartial = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;
```

应用：封装属性

```ts
type Proxy<T> = {
  get(): T,
  set(value: T): void,
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

// 封装属性
function proxify<T>(obj: T): Proxify<T> {
  let result = {} as Proxify<T>
  for(const key in obj) {
    result[key] = {
      get() {
        return obj[key]
      },
      set(val) {
        obj[key] = val
      }
    }
  }
  return result
}

let props = {
  name: 'cyang',
  age: 18,
}
let proxyProps = proxify(props)
console.log(proxyProps);//
console.log(proxyProps.name.get()); //cyang
console.log(proxyProps.name.set('yangc')); //yangc

// 拆包
function unproxify<T>(t: Proxify<T>): T {
  let result = {} as T
  for(const k in t) {
      result[k] = t[k].get()
  }
  return result
}
let originalProps = unproxify(proxyProps)
console.log(originalProps);
```

## 条件类型

TypeScript 2.8引入了*有条件类型*，它能够表示非统一的类型。 有条件的类型会以一个条件表达式进行类型关系检测，从而在两种类型中选择其一：

```text
T extends U ? X : Y
```

 `extends` 是一个 **条件类型关键字，** 下面的代码可以理解为：**如果 T 是 U 的子类型，那么结果为 X，否则结果为 Y** 。

 当 T 是联合类型时，叫做分布式条件类型（Distributive conditional types）。类似于数学中的因式分解。

```ts
type Diff<T, U> = T extends U ? never : T;

let demo: Diff<"a" | "b" | "d", "d" | "f">;

// result: "a" | "b"
```



补充：遍历union、array 、tuple方式：

```
[P in T]: P
[P in T[number]]: P
[P in keyof T]: P
```

