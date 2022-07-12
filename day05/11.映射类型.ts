type Proxy<T> = {
  get(): T,
  set(value: T): void,
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

// 封装属性
function proxify<T>(obj: T): Proxify<T> {
  let result = {} as Proxify<T>
  for(const key in obj) {
    result[key] = {
      get() {
        return obj[key]
      },
      set(val) {
        obj[key] = val
      }
    }
  }
  return result
}

let props = {
  name: 'cyang',
  age: 18,
}
let proxyProps = proxify(props)
console.log(proxyProps);//
console.log(proxyProps.name.get()); //cyang
console.log(proxyProps.name.set('yangc')); //yangc

// 拆包
function unproxify<T>(t: Proxify<T>): T {
  let result = {} as T
  for(const k in t) {
      result[k] = t[k].get()
  }
  return result
}
let originalProps = unproxify(proxyProps)
console.log(originalProps);



type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean]
type promiseTuple = MapToPromise<Tuple>

let tuple: promiseTuple = [
  new Promise((resolve, reject) => resolve(1)),
  new Promise((resolve, reject) => resolve('cyang')),
  new Promise((resolve, reject) => resolve(false)),
]

tuple.forEach(p => {
  p.then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
})