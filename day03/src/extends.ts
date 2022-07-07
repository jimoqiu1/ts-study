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
    
    // const li = new Fruits('ping')  报错,抽象类是不是能被实例的
    const apple = new Apple('苹果')
    console.log(apple);
    apple.getPrice()
    
})()