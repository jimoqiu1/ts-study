/**
 * 定义函数或者类时，在不确定类型时可以使用泛型
 */
function fn(a) {
    return a;
}
let a = fn(10); // 调用时不指定泛型，ts会自动进行类型推断
let b = fn('hello'); // 指定泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'eeee'); // 最好在调用的时候指定泛型
// T extends Inter 表示泛型T必须是Inter的实现类或者子类
function fn3(a) {
    return a.length;
}
console.log(fn3('jajaja'));
function createArray2(value, count) {
    const arr = [];
    for (let index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}
const arr3 = createArray2(11, 3);
console.log(arr3[0].toFixed());
const arr4 = createArray2('aa', 3);
console.log(arr4[0].split(''));
