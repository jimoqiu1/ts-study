(() => {
  function fn <T>(x: T): void {
    // console.log(x.length)  // error,这里的x是泛型，可能所给的参数没有length这个属性
  }

  // 可以使用接口来解决这个问题
  interface Lengthwise {
    length: number;
  }
  
  // 指定泛型约束
  function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)
  }
  fn2('abc')   //3
  // fn2(34343)  //报错。数字类型没有length属性
})()