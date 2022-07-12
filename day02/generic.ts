// 泛型类
(() => {
  class GenericNumber<T> {
    zeroValue: T | undefined
    add: ((x: T, y: T) => T) | undefined
  }
  
  let myGenericNumber: GenericNumber<number> = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y 
  }
  
  let myGenericString: GenericNumber<string> = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) { 
    return x + y
  }
  
  console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
})()