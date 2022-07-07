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
   * 接口中的所有属性都不能有实际的值
   * 抽象中的方法都是抽象方法，而抽象类中的方法可以是普通方法
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