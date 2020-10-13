function sayHello(person) {
    return 'Hello, ' + person;
}
// let user = 'Tom';
// console.log(sayHello(user));
var isDone = false;
var createByNewBoolean = new Boolean(1);
var createByBoolean = Boolean(1);
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var notNumber = NaN;
var infinityNumber = Infinity;
var myName = 'Tom';
var myAge = 25;
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
function alertName() {
    console.log('My name is Tom.');
}
var unusable = undefined;
// let n: null = null;
// let u: undefined = undefined;
// let num: number = undefined;
// let u: undefined;
// let num: number = u;
// let myFavoriteNumber: any = 'seven';
// myFavoriteNumber = 7;
// 在任意值上访问任何属性都是允许的：
// let anyThing: any = 'Tom';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
// 在任意值上也允许调用任何方法
var anyThing = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
// 未声明类型的变量：变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
// let something;
// something = 'seven';
// something = 7;
var something;
something = 'seven';
something = 7;
something.setName('Tom');
// 联合类型
var myFavoriteNumber;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length);
myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length);  // 报错
// myFavoriteNumber = true;
// function getLength(something: string | number): number {
//     return something.length;
// }
function getString(something) {
    return something.toString();
}
var person = {
    id: 95767,
    name: 'Tom',
    age: 25,
    gender: 'male'
};
var fibonacci = [1, 1, 2, 3, 5];
// function sum() {
//     let args: {
//         [index: number]: number;
//         length: number;
//         callee: Function;
//     } = arguments;
// }
// function sum() {
//     let args: IArguments = arguments;
// }
var list = ['xcatliu', 25, { website: 'http:///xcatliu.com' }];
// 函数的类型
function sum(x, y) {
    return x + y;
}
// sum(5, 7, 9);
// sum(5);
sum(5, 7);
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
// mySum(5, 7, 9);
// mySum(5);
mySum(5, 7);
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function getName(animal) {
    return animal.name;
}
// function isFish(animal: Cat | Fish){
//     if(typeof animal.swim === 'function'){
//         return true;
//     }
//     return false;
// }
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function swim(animal) {
    animal.swim();
}
var tomCat = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
swim(tomCat); // 运行时报错
// function isApiError(error: Error){
//     if(error instanceof ApiError){  // 报错
//         return true;
//     }
//     return false;
// }
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
window.foo = 1;
function testCat(cat) {
    return cat;
}
function toBoolean(something) {
    return Boolean(something);
}
toBoolean(1);
// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }
// const animal: Animal = {
//     name: 'tom'
// };
// let tom: Cat = animal;  //报错
//类型断言 VS 泛型
// function getCacheData(key: string): any{
//     return (window as any).cache[key];
// }
// interface Cat{
//     name: string;
//     run(): void;
// }
// const tom = getCacheData('tom') as Cat;
// tom.run();
// 改成泛型的写法
// function getCacheData<T>(key: string): T{
//     return (window as any).cache[key];
// }
// interface Cat{
//     name: string;
//     run(): void;
// }
// const tom = getCacheData<Cat>('tom');
// tom.run();
