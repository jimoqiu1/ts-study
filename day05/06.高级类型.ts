function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U> {}
  for(let property in first) {
    (<any>result)[property] = first[property]
  }
  return result
}

class Animal {
  name: string
  constructor(name: string) {
    this.name= name
  }
}

interface Action {
  eat: () => void
}

class ActionIpm implements Action {
  eat() {
    console.log('eat')
  }
}

let p = extend(new Animal('dog'), new ActionIpm())
let n = p.name
console.log(p)


// 联合类型
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
function getSmallPet(): Fish | Bird {
  let obj: Bird = {
    fly() {},
    layEggs() {}
  }
  return obj
}
let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // Property 'swim' does not exist on type 'Bird | Fish'.

// 要想访问swim()方法，需要做下面的判断
if ((<Fish>pet).swim) {
  (<Fish>pet).swim()
} else if ((<Bird>pet).fly) {
  (<Bird>pet).fly()
}

function isBird(pet: Fish | Bird): pet is Bird {
  return (<Bird>pet).fly !== undefined
}

if(isBird(pet)) {
  pet.fly()
} else {
  pet.swim()
}
