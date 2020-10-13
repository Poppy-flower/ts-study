// 函数的合并
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口的合并
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}

// 相当于
interface Alarm {
    price: number;
    weight: number;
}

// 声明合并的类型必须是一样的
interface Alarm {
    price: number;
}
interface Alarm {
    price: number;  // 虽然重复了，但是类型都是 `number`，所以不会报错
    weight: number;
}

interface Alarm {
    price: number;
}
interface Alarm {
    // price: string;  // 类型不一致，会报错
    weight: number;
}

// 接口中方法的合并 与 函数一致
interface Alarm {
    price: number;
    alert(s: string): string;
}
interface Alarm {
    weight: number;
    alert(s: string, n: number): string;
}
// 相当于
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}

// 类的合并与接口一致


