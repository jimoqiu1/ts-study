// printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性
// 我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
function getStudnetScore(student) {
    var grade = { score: student.score, result: '' };
    if (student.score > 85)
        grade.result = '优秀';
    else if (student.score >= 75)
        grade.result = '良好';
    else
        grade.result = '及格';
    return grade;
}
var studentResult = getStudnetScore({ name: 'wang', score: 88 });
console.log(studentResult);
var p = { x: 10, y: 20 };
// p.x = 44
// 对象注解，约束对象的属性类型
var person;
person = {
    name: 'wang',
    age: 44
};
var p1;
p1 = {
    sayHi: function () {
        console.log('ahahahah');
    }
};
var p2 = {
    sing: function (name) {
        console.log('i am sing' + name);
    }
};
var user1 = {
    name: 'wang',
    age: 34,
    sayHi: function () {
        console.log("hahahah");
    }
};
// function add(a, b) {
//   console.log(a+b);
// }
