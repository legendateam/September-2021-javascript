// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let hello = "hello";
// let owu = "owu";
// let com = "com";
// let ua = "ua";
// let one = 1;
// let ten = 10;
// let minusnine = -999;
// let onetwotree = 123;
// let pi = 3.14;
// let twoseven = 2.7;
// let sixteen = 16;
// let t = true;
// let f = false;
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(one);
// console.log(ten);
// console.log(minusnine);
// console.log(onetwotree);
// console.log(pi);
// console.log(twoseven);
// console.log(sixteen);
// console.log(t);
// console.log(f);

// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(one);
// alert(ten);
// alert(minusnine);
// alert(onetwotree);
// alert(pi);
// alert(twoseven);
// alert(sixteen);
// alert(t);
// alert(f);

// document.write(hello);
// document.write(owu);
// document.write(com);
// document.write(ua);
// document.write(one);
// document.write(ten);
// document.write(minusnine);
// document.write(onetwotree);
// document.write(pi);
// document.write(twoseven);
// document.write(sixteen);
// document.write(t);
// document.write(f);

// - Переприсво
// їти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// hello = "bye";
// owu = "lviv";
// com = "london";
// ua = "united kingdom";
// one = "skills js";
// ten = 700;
// minusnine = 333;
// onetwotree = "sevensixfive";
// pi = 999999;
// twoseven = 100500;
// sixteen = 123456789;
// t = false;
// f = true;

// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(one);
// console.log(ten);
// console.log(minusnine);
// console.log(onetwotree);
// console.log(pi);
// console.log(twoseven);
// console.log(sixteen);
// console.log(t);
// console.log(f);

// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(one);
// alert(ten);
// alert(minusnine);
// alert(onetwotree);
// alert(pi);
// alert(twoseven);
// alert(sixteen);
// alert(t);
// alert(f);

// document.write(hello);
// document.write(owu);
// document.write(com);
// document.write(ua);
// document.write(one);
// document.write(ten);
// document.write(minusnine);
// document.write(onetwotree);
// document.write(pi);
// document.write(twoseven);
// document.write(sixteen);
// document.write(t);
// document.write(f);



// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let name = "vasya";
// let age = 25;
// let lastname = "pupkin";
//
// let person = `${name} ${age} ${lastname}`;
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let users = prompt("Ім'я") + prompt("По батькові") + prompt("Вік");
// console.log(users)
// let name = prompt("Вкаажіть ім'я");
// let surname = prompt("Вкажіть як вас по-батькові");
// let lastname = prompt("Ваш вік");
// let user = `${name} ${surname} ${lastname}`;
// console.log(user);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

    // a - number
    // b - string
    // c - boolean

    // console.log(typeof a);
    // console.log(typeof b);
    // console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(10 == 10);
// console.log(10 >= 10);
// console.log(10 != 10);
// console.log(10 < 10);
// console.log(10 > 10);
// console.log(123 === "123");
// console.log(123 == "123");
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
let a = 5;
// document.write(str + a + "<br/>");       ******-------- 205   стрінга + намбер прирівнює намбер до стрінги, а не як числа
// document.write(str - a + "<br/>");       ******-------- 15   при відніманні, множенні, діленні стрінгу вже прирівнює до намбера, здається так
// document.write(str * "2" + "<br/>");     ******-------- 40
// document.write(str / 2 + "<br/>");       ******-------- 10

// © 2021 GitHub, Inc.
//     Terms
// Privacy
// Security
// Status