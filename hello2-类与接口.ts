// 类与接口

// 类实现接口-----------1

// 定义公共特性，提取成接口
// interface Alarm{
//     alert(): void
// }

// class Door{

// }

// class SacurityDoor extends Door implements Alarm{  // implements 实现
//     alert() {
//         console.log('SacurityDoor alert!')
//     }
// }

// class Car implements Alarm{
//     alert() {
//         console.log('Car alert!')
//     }
// }

// 一个类可以实现多个接口----------2
// interface Alarm{
//     alert(): void
// }

// interface Light{
//     lightOn(): void;
//     lightOff(): void;
// }

// class Car implements Alarm, Light{
//     alert(){
//         console.log('Car alert!');
//     }
//     lightOn(){
//         console.log('Car light on!')
//     }
//     lightOff(){
//         console.log('Car light off!')
//     }
// }

// 接口继承接口
interface Alarm{
    alert(): void;
}
interface LightableAlarm extends Alarm{  //接口继承了 Alarm，除了拥有alert，还拥有两个新方法
    lightOn(): void;
    lightOff(): void;
}

// 接口继承类
// class Point{
//     x: number;
//     y: number;
//     constructor(x: number, y: number){
//         this.x = x;
//         this.y = y;
//     }
// }

// interface Point3d extends Point{
//     z: number;
// }

// let point3d: Point3d = {x: 1, y: 2, z: 3};

// const p = new Point(1, 2);

// interface PointInstanceType{
//     x: number;
//     y: number;
// }

// function printPoint(p: PointInstanceType){
//     console.log(p.x, p.y);
// }
// printPoint(new Point(1, 2));

// 接口继承类 只会继承实例属性 和 实例方法
class Point{
    static origin = new Point(0, 0);
    static distanceOrigin(p: Point){
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    x: number;
    y: number;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    printPoint(){
        console.log(this.x, this.y);
    }
}

interface PointInstanceType{
    x: number;
    y: number;
    printPoint(): void;
}

let p1: Point;
let p2: PointInstanceType;








