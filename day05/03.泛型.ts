interface ILength {
  length: number
}

function printLength<T extends ILength>(arg: T) {
  console.log(arg.length)
  return arg.length
}

let num = printLength('gagagag')
console.log(num)

function getProperty(obj: T, key: K): any {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.