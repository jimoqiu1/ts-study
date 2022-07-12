enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  // kind: ShapeKind.Square,  // Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'
  kind: ShapeKind.Circle,
  radius: 100,
}

enum E {
  Foo,
  Bar,
}

function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
      //             ~~~~~~~~~~~
      // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
  }
}