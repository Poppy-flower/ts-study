// function createArray(length: number, value: any): Array<any> {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
// createArray(3, 'x'); // ['x', 'x', 'x']
// 输入什么类型值，结果就是什么类型的数组
// function createArray<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
// createArray(3, 'x'); // ['x', 'x', 'x']
//泛型可以 -- 定义多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// loggingIdentity(7);  // 7不包含length属性，编译阶段报错
// 多个类型参数之间也可以互相约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 11, c: 13 });
console.log(x);
var mySearch;
mySearch = function (source, subString) {
    return source.indexOf(subString) !== -1;
};
// 也可以使用含有泛型的接口定义函数的形状
// interface CreateArrayFunc{
//     <T>(length: number, value: T): Array<T>
// }
// let createArray: CreateArrayFunc;
// createArray = function <T>(length: number, value: T): Array<T>{
//     let result: T[] = [];
//     for(let i=0; i<length; i++){
//         result[i] = value;
//     }
//     return result;
// }
// createArray(3, 'x');
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
//从ts2.3开始可以为泛型参数指定默认类型
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
