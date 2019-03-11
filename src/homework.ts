//Задание 1
function getFactorial(n: number): number {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}
console.log(getFactorial(5));

//Задание 2
function multiply(): number {
    let num: number = 1;
    if (!arguments.length) return 0;
    for (let i = 0; i < arguments.length; i++) num *= arguments[i];
    return num;
}

//Задание 3
function reverseString(str: string): string {
    return str.split('').reverse().join('')
}

//Задание 4

interface AdminInterface {
    name: string;
    email: string;
    password: string;
    type?: string;
}
const singleAdmin: AdminInterface = {
    name: 'Olga',
    email: 'olgamir@gmail.com',
    password: '12345678',
    type: 'admin'
}
//Занятие 2 
//Задание 1,2,3
//Создаем абстрактный класс
abstract class Car {
    protected _mileage: number;
    protected _fuel: number;
    constructor(mileage: number, fuel: number) {
        this._mileage = mileage;
        this._fuel = fuel;
    }
    drive() {
    }
    refuel(value: number) {
    }
}
//Наследуемся от абстрактного класса Car
class MyCar extends Car {
    constructor(mileage: number, fuel: number) {
        super(mileage, fuel);
    }
    //Реализуем метод абстрактного класса drive(ехать)
    drive() {
        if (this._fuel <= 0) {
            return console.log('Количество бензина ' + this._fuel + ' .Нужно заправиться')
        }
        this._mileage++;
        this._fuel--;
    }
    //Реализуем метод абстрактного класса refuele(заправка)
    refuel(value: number) {
        this._fuel += value;
    }
    public get fuel(): number {
        return this.fuel;
    }
    public get mileage(): number {
        return this.mileage;
    }
}
let car = new MyCar(10, 10);