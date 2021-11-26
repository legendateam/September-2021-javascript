// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let s = (w, h) => w * h;
console.log(s(10, 20));

// - створити функцію яка обчислює та повертає площу кола

let scircle = (r) => Math.PI * Math.pow(r, 2);
let ss = scircle(9);
console.log(Math.round(ss));
// - створити функцію яка обчислює та повертає площу циліндру


let sc = (h, r) => 2 * h * r;
let cylinder = sc(5, 4)
console.log(cylinder);

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [23, "hello", true, 35, "true", 94, "okten", "asus", 4, false];
let itarArr = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}
itarArr(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createTagP = (text) => {
    document.write(`<p>${text}</p>`)
}
createTagP("hello okten")

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl = (text) => {
    document.write("<ul>")
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write("</ul>")
}
createUl("java script the best in the world language")

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є
// числовим (тут використовувати цикл)

let creatUlItar = (text, limit) => {
    document.write("<ul>")
    for(let i = 0; i < limit; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write("</ul>")
}
creatUlItar("js, nodejs,v8", 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = ["string", false, 1, true, "str", 29, 0, 666, true];

let createList = (arr) => {
    document.write("<ul>");
    for(const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write("</ul>");
}
createList(array);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let newArr = [
    {id: 1, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 2, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 3, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 4, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 5, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 6, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 7, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 8, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 9, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 10, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 11, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 12, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 13, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 14, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true},
    {id: 15, name: "vasya", lastname: "pupkin", age: 18, wife:false, car: false, jsskil: true}
]

let fnItarArr = (users) => {
    for (const user of users) {
        for (let k in user) {
        document.write(`<div><p>${user[k]}</p></div>`)
        }
    }
}
fnItarArr(newArr);