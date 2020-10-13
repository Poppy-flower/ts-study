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
function swap<T, U>(tuple: [T, U]): [U, T]{
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']);


//泛型约束： 在函数内部因为不知道泛型是哪种类型，所以不能随意的操作参数的方法
// function loggingIdentity<T>(arg: T): T{
//     console.log(arg.length);  //报错
//     return arg;
// }

// 泛型约束
interface lengthwise{
    length: number;
}

function loggingIdentity<T extends lengthwise>(arg: T): T{
    console.log(arg.length);
    return arg;
}

// loggingIdentity(7);  // 7不包含length属性，编译阶段报错

// 多个类型参数之间也可以互相约束
function copyFields<T extends U, U>(target: T, source: U): T{
    for(let id in source){
        target[id] = (<T>source)[id];
    }

    return target;
}
let x = {a: 1, b: 2, c: 3, d: 4};
copyFields(x, {b: 11, c: 13});
console.log(x);

// 泛型接口
// 可以使用接口的形式定义函数需要符合的形状
interface SearchFunc{
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean{
    return source.indexOf(subString) !== -1;
}

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
class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y){return x+y;}

//从ts2.3开始可以为泛型参数指定默认类型
function createArray<T = string>(length: number, value: T): Array<T>{  // T = string 指定默认的泛型类型
    let result: T[] = [];
    for(let i=0; i<length; i++){
        result[i] = value;
    }
    return result;
}