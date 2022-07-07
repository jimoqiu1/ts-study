class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class CRUDUser {
    constructor() {
        this.data = [];
    }
    add(user) {
        user.id = Date.now() + Math.random();
        this.data.push(user);
        return user;
    }
    getUserId(id) {
        return this.data.find(user => user.id === id);
    }
}
const user = new CRUDUser();
user.add(new User('wang', 23));
user.add(new User('hua', 22));
user.add(new User('wwwg', 24));
user.add(new User('gggg', 26));
console.log(user.data);
