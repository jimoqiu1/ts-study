type TypeName<T> = 
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T extends undefined ? undefined :
    T extends () => void ? () => void :
    Object 

type Type1 = TypeName<() => void>

let person: Type1 = () => {
  console.log('jsjsj');
}

type Diff<T, U> = T extends U ? never : T

type Test = Diff<string | number | boolean, undefined | number>
// type Test = string | boolean

type Type<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

interface Part {
  id: number,
  name: string,
  subparts: Part[],
  undatePart(newName: string): void
}

type Test2 = Type<Part>
