class User {
  id?: number
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

interface IBaseCRUD<T> {
  data: Array<T>
  add: (t: T) => T
  getUserId: (id:number) => T
}


class CRUDUser implements IBaseCRUD<User> {
  data: Array<User> = []
  add(user: User): User {
    user.id = Date.now() + Math.random()
    this.data.push(user)
    return user
  }
  getUserId(id: number): User {
    return this.data.find(user => user.id === id)
  }
}


const user: CRUDUser = new CRUDUser()
user.add(new User('wang', 23))
user.add(new User('hua', 22))
user.add(new User('wwwg', 24))
user.add(new User('gggg', 26))
console.log(user.data);



