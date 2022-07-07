// printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性
// 我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 接口：就好比是一个名字用于描述上面的过程
interface LabelledValue {
  label: string;
}

function printLabel2(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj2 = {size: 10, label: "Size 10 Object"};
printLabel2(myObj);

// 可选选项
interface studentLabelValue {
  name?: string,
  score: number,
  gender?: boolean
}

// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
function getStudnetScore(student: studentLabelValue): {score: number; result: string} {
  let grade = {score: student.score, result: ''}
  if(student.score > 85) grade.result='优秀'
  else if(student.score >=75) grade.result = '良好'
  else grade.result = '及格'
  return grade
}
let studentResult = getStudnetScore({name: 'wang', score: 88})
console.log(studentResult)

interface Point {
  readonly x: number,
  y: number
}
let p: Point = {x: 10, y: 20}
// p.x = 44


// 对象注解，约束对象的属性类型
let person: {
  name: string;
  age: number
}

person={
  name: 'wang',
  age: 44
}

let p1: {
  sayHi: () => void
}
p1 = {
  sayHi: ()=>{
    console.log('ahahahah');
    
  }
}

let p2: {
  sing:(name: string) => void
} = {
  sing: (name: string) => {
    console.log('i am sing'+ name);
  }
}

interface IUser {
  name: string
  age: number
  sayHi: () => void
}

let user1: IUser = {
  name: 'wang',
  age: 34,
  sayHi: () => {
    console.log("hahahah");
    
  }
}

// function add(a, b) {
//   console.log(a+b);
  
// }