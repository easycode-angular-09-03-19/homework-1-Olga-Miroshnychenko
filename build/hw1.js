//Задание 1
function getFactorial(n) {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}
console.log(getFactorial(5));
//Задание 2
function multiply() {
    let num = 1;
    if (!arguments.length)
        return 0;
    for (let i = 0; i < arguments.length; i++)
        num *= arguments[i];
    return num;
}
//Задание 3
function reverseString(str) {
    return str.split('').reverse().join('');
}
const singleAdmin = {
    name: 'Olga',
    email: 'olgamir@gmail.com',
    password: '12345678',
    type: 'admin'
};
//Занятие 2 
//Задание 1,2,3
//Создаем абстрактный класс
class Car {
    constructor(mileage, fuel) {
        this._mileage = mileage;
        this._fuel = fuel;
    }
    drive() {
    }
    refuel(value) {
    }
}
//Наследуемся от абстрактного класса Car
class MyCar extends Car {
    constructor(mileage, fuel) {
        super(mileage, fuel);
    }
    //Реализуем метод абстрактного класса drive(ехать)
    drive() {
        if (this._fuel <= 0) {
            return console.log('Количество бензина ' + this._fuel + ' .Нужно заправиться');
        }
        this._mileage++;
        this._fuel--;
    }
    //Реализуем метод абстрактного класса refuele(заправка)
    refuel(value) {
        this._fuel += value;
    }
    get fuel() {
        return this.fuel;
    }
    get mileage() {
        return this.mileage;
    }
}
let car = new MyCar(10, 10);
