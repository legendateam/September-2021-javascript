// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random()*60);
if (time <= 15) {
    console.log("1 четверть");
} else if (time > 15 && time <= 30) {
    console.log("2 четверть");
} else if (time > 30 && time <= 45) {
    console.log("3 четвверть");
} else {
    console.log("4 четверть");
}
console.log(time);
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.round(Math.random(1) * 31);
if (day < 11) {
    console.log("1 половина місяця");
} else if (day > 10 && day < 21) {
    console.log("2 половина місяця");
} else if (day > 20 && day < 32) {
    console.log("3 половина місяця");
}
console.log(day);

//
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = "";
if (test) {
    console.log("Вірно");
} else {
    console.log("Неправильно");
};
if (!test) {
    console.log("Вірно");
} else {
    console.log("Неправильно");
};

test = test ? console.log("Вірно") : console.log("Неправильно");
test = !test ? console.log("Вірно") : console.log("Неправильно");


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 0;
// let a = 1;
// let a = -3;
if (a === 0) {
    console.log("Невірно");
} else {
    console.log("Вірно");
};

a = 0 ? console.log("Вірно") : console.log("Невірно");
a = 1 ? console.log("Вірно") : console.log("Невірно");
a = -3 ? console.log("Вірно") : console.log("Невірно");
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let anyday = +prompt("Ведіть будь ласка день тижня")
switch (anyday) {
    case 1 :
        console.log("Я весь день працюю на новій пошті");
        break;
    case 2 :
        console.log("Я працюю до обіду на новій пошті, а потім вчуся");
        break;
    case 3 :
        console.log("У цей день займаюсь йогою");
        break;
    case 4 :
        console.log("Я працюю охоронцем в бібліотеці");
        break;
    case 5 :
        console.log("Працюю на новій пошті до обіду, потім я вчуся");;
        break;
    case 6 :
        console.log("Не забувай поприбирати!!!");
        break;
    case 7 :
        console.log("Потрібно присвятити день навчаню, але вечером пиво і кіно");
        break;
    default :
        console.log("якась нісенітниця");
};

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// let year = +prompt("Будь ласка напишіть рік щоб дізнатись чи був він високосним");
// if (year % 4) {
//     console.log("Нi");
// } else {
//     console.log("Ура високосний");
// };

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let js = prompt("Яка офіційна назва JavaScript?");
if (js === "ECMAScript") {
    console.log("Правильно!");
} else {
    console.log("не знаєте? ECMAScript!");
}


// js = (js === "ECMAScript") ?  console.log("Правильно!") : console.log("Не знаєте? ECMAScript");
