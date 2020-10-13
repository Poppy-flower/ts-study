// 类与接口
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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.distanceOrigin = function (p) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    };
    Point.prototype.printPoint = function () {
        console.log(this.x, this.y);
    };
    Point.origin = new Point(0, 0);
    return Point;
}());
var p1;
var p2;
