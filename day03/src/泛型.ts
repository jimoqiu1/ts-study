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

function createArray2 <T> (value: T, count: number) {
  const arr: Array<T> = []
  for (let index = 0; index < count; index++) {
    arr.push(value)
  }
  return arr
}
const arr3 = createArray2<number>(11, 3)
console.log(arr3[0].toFixed())
const arr4 = createArray2<string>('aa', 3)
console.log(arr4[0].split(''))

