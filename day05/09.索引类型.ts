// interface Person {
//   name: string
//   age: number
// }

// let p2: Person = {
//   name: 'esng',
//   age: 14
// }

// console.log(p2)

// let personPros: keyof Person   // 'name' | 'age'

// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//   return names.map(n => o[n]);
// }

// interface Person {
//     name: string;
//     age: number;
// }

// let person: Person = {
//     name: 'Jarid',
//     age: 35
// };
// let strings = pluck(person, ['name', 'age']); // ok, string[]
// console.log(strings);

// interface Person {
//   name: string
//   age: number
// }

// let o: Person = {
//   name: 'wang',
//   age: 12
// }

// function getProperty<T, K extends keyof T>(o: T, prop: K): T[K] {
//   return o[prop]
// }

// let pname = getProperty(o, 'name')
// console.log(pname)

// type ReadonlyProp<T> = {
//   readonly [K in keyof T]: T[K]
// }

// type PartialProp<T> = {
//   [K in keyof T]? : T[K]
// }

// type PersonReadonly = ReadonlyProp<Person>
// type PersonPatial = PartialProp<Person>


// type Nullable<T> = { [P in keyof T]: T[P] | null }
// type Partial2<T> = { [P in keyof T]?: T[P] }


interface Objs<T> {
  [key: string]: T
}

let keys2: keyof Objs<number> //number | string
keys2 = 1
keys2 = 'cyang'

// let keys: Objs<number>['name'] //number

