function sayHello(person: string) {
    return 'Hello, ' + person;
}

// let user = 'Tom';
// console.log(sayHello(user));

let isDone: boolean = false;

let createByNewBoolean: Boolean = new Boolean(1);

let createByBoolean: boolean = Boolean(1);

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notNumber: number = NaN;
let infinityNumber: number = Infinity;

let myName: string = 'Tom';
let myAge: number = 25;

let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

function alertName(): void {
    console.log('My name is Tom.');
}

let unusable: void = undefined;

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
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

// 未声明类型的变量：变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
// let something;
// something = 'seven';
// something = 7;

let something: any;
something = 'seven';
something = 7;
something.setName('Tom');


// 联合类型
let myFavoriteNumber: string | number; 
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length);
myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length);  // 报错
// myFavoriteNumber = true;

// function getLength(something: string | number): number {
//     return something.length;
// }

function getString(something: string | number): string {
    return something.toString();
}

// 对象的类型 —— 接口 interface 可选属性 任意属性 
interface Person {
    readonly id: number,
    name: string,
    age?: number, 
    [propName: string]: any
}

let person: Person = {
    id: 95767,
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// person.id = 9987;

// 数组的类型
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push(8);

// let fibonacci: Array<number> = [1, 1, 2, 3, 5];  // 数组泛型

interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

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

let list: any[] = ['xcatliu', 25, {website: 'http:///xcatliu.com'}];

// 函数的类型
function sum(x: number, y: number): number{
    return x+y;
}

// sum(5, 7, 9);
// sum(5);
sum(5, 7);

// 函数表达式
let mySum: (x: number, y: number) => number = function(x: number, y: number): number{
    return x+y;
}

// mySum(5, 7, 9);
// mySum(5);
mySum(5, 7);

// 接口
interface SearchFunction{
    (source: string, subString: string): boolean
}

let mySearch: SearchFunction;
mySearch = function(source: string, subString: string){
    return source.search(subString) !== -1;
}


// 可选参数
// function buildName(firstName: string = 'Tom', lastName: string){
//     return firstName + lastName;
// }

// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName(undefined, 'Cat');

// function push(array: any[], ...items: any[]) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }

// let a = [];
// push(a, 1, 2, 3);

// function reverse(x: number | string): number | string{
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     }else if (typeof x === 'string'){
//         return x.split('').reverse().join('');
//     }
// }

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string{
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }else if (typeof x === 'string'){
        return x.split('').reverse().join('');
    }
}

// 类型断言

interface Cat{
    name: string;
    run(): void;
}

interface Fish{
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish){
    return animal.name;
}

// function isFish(animal: Cat | Fish){
//     if(typeof animal.swim === 'function'){
//         return true;
//     }
//     return false;
// }

function isFish(animal: Cat | Fish){
    if(typeof (animal as Fish).swim === 'function'){
        return true;
    }
    return false;
}

function swim(animal: Cat | Fish){
    (animal as Fish).swim();
}

const tomCat: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};

swim(tomCat);  // 运行时报错

// 将一个父类断言为更具体的子类
// class ApiError extends Error{
//     code: number = 0;
// }

// class HttpError extends Error{
//     statusCode: number = 200;
// }

// // function isApiError(error: Error){
// //     if(typeof (error as ApiError).code === 'number'){
// //         return true;
// //     }
// //     return false;
// // }

// function isApiError(error: Error){
//     if(error instanceof ApiError){
//         return true;
//     }
//     return false;
// }

interface ApiError extends Error{
    code: number;
}

interface HttpError extends Error{
    statusCode: number;
}

// function isApiError(error: Error){
//     if(error instanceof ApiError){  // 报错
//         return true;
//     }
//     return false;
// }

function isApiError(error: Error){
    if(typeof (error as ApiError).code === 'number'){
        return true;
    }
    return false;
}

(window as any).foo = 1;

// function getCacheData(key: string): any{
//     return (window as any).cache[key];
// }

// interface Cat{
//     name: string;
//     run(): void;
// }

// const tomCat2 = getCacheData('tom') as Cat;
// tomCat2.run();

// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }

// let tom: Cat = {
//     name: 'Tom',
//     run: () => { console.log('run') }
// };
// let animal: Animal = tom;

// function testAnimal(animal: Animal){
//     return (animal as Cat);
// }

// function testCat(cat: Cat){
//     return (cat as Animal);
// }

// 双重断言
interface Cat{
    run(): void;
}

interface Fish{
    swim(): void;
}

function testCat(cat: Cat){
    return (cat as any as Fish);
}

function toBoolean(something: any): boolean{
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























