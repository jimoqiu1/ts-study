// 定义类
class Person {
    constructor() {
        /**
         * 直接定义的属性是实例属性，需要通过对象的实例去访问
         *
         * 使用static开头的是静态属性（类属性），可以直接通过类去引用
         *
         */
        this.name = 'sun';
    }
}
Person.age = 500;
const p = new Person();
console.log(p.name);
console.log(Person.age);
class Dog {
    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name, age) {
        // 在实例方法中，this 表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象上添加属性
        console.log('const', this);
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可以通过this来表示调用方法的对象
        console.log(this.name);
        // console.log('wanwawng');
    }
}
const dog = new Dog('wang', 2);
const dog2 = new Dog('wu', 1);
console.log(dog);
console.log(dog2);
dog.bark();
