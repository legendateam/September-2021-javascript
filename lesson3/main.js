// -створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

let arr = ["crip", 24, false, "object", 10, 2, "5 balls", true, 99999, false, "js", false, 100500, true, "okten"];
    console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
let array = [];
array[0] = "vasya";
array[1] = "natalia";
array[2] = 500;
array[3] = false;
array[4] = "oleg";

console.log(array)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write("<div>asdsadasdasdsad</div>")
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>qweqwewqeqwe - ${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write("<h1>h1</h1>");
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let index = 0;
while (index < 20) {
    document.write(`<h1>h1-index- ${index}</h1>`);
    index++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbarr = [4, 67, 0, -544645, 85, 378, 9, 378, 1, 200];
for (let somenumb of numbarr) {
    console.log(somenumb);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let stringbarr = ["1", "java", "js", "html", "css", "ruby", "python", "c++", "c#", "php"];
for (somestring of stringbarr) {
    console.log(somestring);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let anyarr = ["a++",true, 25,"forof", "forin", false, 999,"let", "var", 10000];
for (let i = 0; i < anyarr.length; i++) {
    console.log(anyarr[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let elementsarr = ["blin", true, "okten", true, 200, 18,"good",  false, 100500, "ssss"];

for (let i = 0; i < elementsarr.length; i++) {
    if (typeof elementsarr[i] === "boolean") {
        console.log(elementsarr[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи


let numbanarr = ["for", true, false, 325, "covid", false, 123, 432, " ggg", 0];
for (let somenumbarr of numbanarr) {
    if (typeof somenumbarr === "number") {
        console.log(somenumbarr);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
let elementsString = [3464356, false, "tak-tak", "gegefewf", 7556, "no", true, "string", true, 54]
for (let i = 0; i < elementsString.length; i++) {
    if (typeof elementsString[i] === "string") {
        console.log(elementsString[i]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let nularr = [];
nularr[0] = "acer";
nularr[1] = 500100;
nularr[2] = "asus";
nularr[3] = "hp";
nularr[4] = true;
nularr[5] = 666;
nularr[6] = false;
nularr[7] = 444;
nularr[8] = "lenovo";
nularr[9] = "kod";

for (let i = 0; i < nularr.length; i++) {
    console.log(nularr[i]);;
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for( let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <=100; i+=2) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log("*************************************************************");
console.log("*************************************************************");
console.log("*************************************************************");
for (let i = 0; i <= 100; i++ ) {
    if (i%2 === 0) {
        console.log(i);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log("*************************************************************");
console.log("*************************************************************");
console.log("*************************************************************");
for( let i = 0; i < 100; i++) {
    if (i%2 === 1) {
        console.log(i);
    }
}

// © 2021 GitHub, Inc.
//     Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
