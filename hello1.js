var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错
// 元祖
// let tom:[string, number] = ['Tom', 25];
// let tom: [string, number];
// tom[0] = 'Tom';
// tom[1] = 25;
// tom[0].slice(1);
// tom[1].toFixed(2);
var tom;
// tom[0] = 'Tom';
// tom = ['Tom', 25];
// tom = ['Tom']; // 报错
tom = ['Tom', 25];
tom.push('male');
;
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// class Animal {
//     static isAnimal(a){
//         return a instanceof Animal;
//     }
//     constructor(name) {
//       this.name = name;
//     }
//     get name() {
//       return 'Jack';
//     }
//     set name(value) {
//       console.log('setter: ' + value);
//     }
// }
// let a = new Animal('Kitty'); // setter: Kitty
// a.name = 'Tom'; // setter: Tom
// console.log(a.name); // Jack 
// console.log(Animal.isAnimal(a));
// class Animal{
//     static num = 42;
//     name = 'Jack';
//     constructor(){
//         // ...
//     }
// }
// let a = new Animal();
// console.log(a.name);
// console.log(Animal.num);
// public
// class Animal{
//     public name;
//     public constructor(name){
//         this.name = name;
//     }
// }
// let a = new Animal('Jack');
// console.log(a.name);
// a.name = 'Tom';
// console.log(a.name);
// private  只能在自己的类中访问，不能在类外面读取值、修改值；子类访问也会报错
// class Animal{
//     private name;
//     public constructor(name){
//         this.name = name;
//     }
// }
// let a = new Animal('Jack');
// console.log(a.name);  // 报错， 但是编译之后可运行
// a.name = 'Tom';  // 报错， 但是编译之后可运行
// private 子类访问也会报错
// class Animal{
//     private name;
//     public constructor(name){
//         this.name = name;
//     }
// }
// class Cat extends Animal{
//     public constructor(name){
//         super(name);
//         console.log(this.name);  // 子类访问 报错
//     }
// }
// protected
// class Animal{
//     protected name;
//     public constructor(name){
//         this.name = name;
//     }
// }
// class Cat extends Animal{
//     public constructor(name){
//         super(name);
//         console.log(this.name);  // 父类protected的属性，子类访问 不会报错
//     }
// }
// 构造函数 设置为 private ， 该类不允许被继承；也不允许被实例化
// class Animal{
//     public name;
//     private constructor(name){
//         this.name = name;
//     }
// }
// class Cat extends Animal{  // 报错 ，因为Animal 的构造函数标记为私有
//     constructor(name){
//         super(name);
//         console.log(this.name);
//     }
// }
// let a = new Animal('Jack');  // 报错，不能实例化
// 构造函数 设置为 protected， 该类只允许被继承
// class Animal{
//     public name;
//     protected constructor(name){
//         this.name = name;
//     }
// }
// class Cat extends Animal{  
//     constructor(name){
//         super(name);
//         console.log(this.name);
//     }
// }
// let a = new Animal('Jack');  // 报错, 因为Animal构造函数是protected，只能被继承
// class Animal{
//     // public name;
//     constructor(public name: string){
//         // this.name = name;
//     }
// }
// let a = new Animal('Jack');
// console.log(a.name);
// class Animal {
//     readonly name;
//     public constructor(name) {
//       this.name = name;
//     }
//   }
//   let a = new Animal('Jack');
//   console.log(a.name); // Jack
//   a.name = 'Tom';  // 报错
// class Animal{
//     constructor(public readonly name){  // readonly 需要写在其他修饰符的后面
//     }
// }
// 抽象类 抽象方法
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name);
    };
    return Cat;
}(Animal));
var c = new Cat('Tom');
