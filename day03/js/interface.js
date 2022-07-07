(function () {
    const obj = {
        name: 'wang',
        age: 33
    };
    const obj2 = {
        name: 'wang',
        age: 44
    };
    /**
     * 定义类的时候可以去实现这个接口
     *  实现接口就是让类满足这个接口的要求
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayhello() {
            console.log('ahhaha');
        }
    }
})();
