(function() {
  class Person {
    /**
     * public 修饰的属性可以在任意位置访问
     * private 私有属性，只能在类的内部访问
     *  可以在类的内部添加方法，让外部可以访问
     * protected 受保护的属性，只能在当前类和当前类的子类中访问
     * 可以直接在构造函数中定义属性
     */
    // private _name: string
    // private _age: number
    // constructor(name:string, age: number) {
    //   this._name = name
    //   this._age = age
    // }
    // 上面写法的简写
    constructor(private _name: string, private _age: number) {}
    /**
     * getter 方法用来读取属性
     * setter 方法用来设置属性（存取器）
     */
    // 定义方法，用来获取name属性
    // getName() {
    //   return this._name
    // }
    // // 定义方法，设置属性的值
    // setName(name: string) {
    //   this._name = name
    // }
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
  // per._name = 'zhu'
  // per._age = -33    //不能直接改变属性值了，需要通过getter 和setter来对属性的值进行获取和设置
  // console.log(per.getName());
  // per.setName('zhu')
  // console.log(per.getName());
  per.name = 'zhu'
  console.log(per.name);
  per.age = -33
  console.log(per.age);

  class A {
    protected num: number     // protected 在子类中也可以使用
    constructor(num:number) {
      this.num = num
    }
  }
  class B extends A {
    test() {
      console.log(this.num);
      
    }
  }
  
})()