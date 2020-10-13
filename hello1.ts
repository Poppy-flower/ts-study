// 类型别名 type 定义类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name{
    if(typeof n === 'string'){
        return n;
    }else {
        return n();
    }
}

// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
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

let tom: [string, number];

// tom[0] = 'Tom';
// tom = ['Tom', 25];
// tom = ['Tom']; // 报错

tom = ['Tom', 25];
tom.push('male');
// tom.push(true);

// enum Days  {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

// console.log(Days['Sun'] === 0);
// console.log(Days['Mon'] === 1);
// console.log(Days['Tue'] === 2);
// console.log(Days['Sat'] === 6);

// console.log(Days[0] === 'Sun');
// console.log(Days[1] === 'Mon');
// console.log(Days[2] === 'Tue');
// console.log(Days[6] === 'Sat');

// enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// console.log(Days['Sun'] === 7);
// console.log(Days['Mon'] === 1);
// console.log(Days['Tue'] === 2);
// console.log(Days['Sat'] === 6);

// enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// console.log(Days['Sun'] === 3);
// console.log(Days['Wed'] === 3);
// console.log(Days[3] === 'Sun');  // false
// console.log(Days[3] === 'Wed');


// enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S'};


// enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

// enum Color {Red, Green, Blue = 'blue'.length}; // 不报错

// enum Color {Red = 'blue'.length, Green, Blue};  // 报错

// 常数枚举 -- 会在编译阶段删除，且不能包含计算属性
// const enum Directions {Up, Down, Left, Right};

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

declare const enum Directions {Up, Down, Left, Right};

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

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
abstract class Animal{
    public name;
    public constructor(name){
        this.name = name;
    }
    public abstract sayHi();  // 抽象方法 不能自己实现，必须被子类实现
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }
    public sayHi(){ // 子类必须实现抽象方法
        console.log(`Meow, My name is ${this.name}`);
    }
}

let c = new Cat('Tom');

















