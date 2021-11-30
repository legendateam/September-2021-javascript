// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car (model,maker,year,maxspeed,enginecapacit) {
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.enginecapacit = enginecapacit;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         console.log(`Модель: ${this.model} - Виробник: ${this.maker} - Рік випуску: ${this.year} - Максимальна швидкість ${this.maxspeed} - Об`єм двигуна: ${this.enginecapacit}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//        this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car("corolla", "toyota", "2021","180","1.4");
// console.log(car);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// car.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// car.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// car.increaseMaxSpeed(200);
// console.log(car.maxspeed);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// car.changeYear(2022);
// console.log(car.year);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// console.log(car.driver);
// car.addDriver({name: "kostya", surname: "kovalov", age: 18});
// console.log(car.driver);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car {
    constructor(model, maker, year, maxspeed, enginemotors) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginemotors = enginemotors;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxspeed}км на годину`);
        }
        this.info = function () {
            console.log(`Модель: ${this.model}, Рік випуску: ${year}, Максимальна швидкість: ${maxspeed}, Об'єм лвигуна: ${enginemotors}`);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxspeed += newSpeed;
        }
        this.changeYear = function (newYear) {
            this.year = newYear;
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}
let car = new Car("x10","BMW", 2021, 240,2.0);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(10)
console.log(car.maxspeed);
car.changeYear(2022);
console.log(car.year);
car.addDriver({name: "dimas", surname: "hrygov", age: 55, wife: "no", drivecard: true});
console.log(car.driver);
console.log(car);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}
class Prince extends Cinderella {
    constructor(name, age, sizeFoot) {
        super(name, age, sizeFoot);
    }
}
let prince = new Prince("vlad", 22,36);
console.log(prince);
let cinderells = [
    new Cinderella("karina", 15, 35),
    new Cinderella("olga", 19, 40),
    new Cinderella("lilia",  17, 38),
    new Cinderella("olena", 48, 40),
    new Cinderella("kristina", 25, 38),
    new Cinderella("anna", 22, 37),
    new Cinderella("natalia", 28, 36),
    new Cinderella("ulia", 21, 35),
    new Cinderella("inna", 20, 39),
    new Cinderella("helga", 18, 37)
]
console.log(cinderells);

let cinderellaFind = cinderells.find(cindetella => cindetella.sizeFoot === prince.sizeFoot);
console.log(cinderellaFind);