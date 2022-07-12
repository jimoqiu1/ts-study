// type Alias = { num: number }
// interface Interface {
//     num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;

// interface Square {
//   kind: "square"
//   size: number
// }
// interface Rectangle {
//   kind: "rectangle"
//   width: number
//   height: number
// }
// interface Circle2 {
//   kind: "circle"
//   radius: number
// }

// type Shape = Square | Rectangle | Circle2

// function area(s: Shape): number {
//   switch (s.kind) {
//       case "square": return s.size * s.size;
//       case "rectangle": return s.height * s.width;
//       case "circle": return Math.PI * s.radius ** 2;
//       default: return 0
//   }
// }

// let square: Square = {
//   kind: 'square',
//   size: 134
// }

// let mianji = area(square)
// console.log(mianji)


type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

let res = getName('aaaa')
let res2 = getName(() => {
  return 'cccc'
})
console.log(res)
console.log(res2);


interface Person4 {
  name: string
}
interface Person4 {
  age: number
}

let p4: Person4 = {
  name: 'wang',
  age: 44
}

