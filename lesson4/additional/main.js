// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
function arg() {
    if (arguments[0] && !arguments[1]) {
        console.log(arguments[0]);
    } else if (arguments[0] && arguments[1]) {
        let result = arguments[0] + arguments[1];
        console.log(result);
    }
}
arg(10,20)
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
let arr1 = [10, 20, 30, 40];
let arr2 = [40, 30, 20, 10];

function additional(arr1, arr2) {
    let result = [];
    for(let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
        if (i === j) {
            result[i] = arr1[i] + arr2[j];
        }
    }
    return result
}
let sumaarr = additional(arr1,arr2);
console.log(sumaarr);
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
let arr = [
    {name: 'Dima', age: 30}, {model: 'Camry'},
    {name: 'Olya', age: 20}, {model: 'Corolla'},
    {name: 'Yura', age: 24}, {model: 'Camry'},
    {name: 'Natalia', age: 28}, {model: 'Corolla'},
    {name: 'Andrew', age: 24}, {model: 'Corolla'},
    {name: 'Alex', age: 18}, {model: 'Corolla'},
    {name: 'Tanya', age: 29}, {model: 'Camry'},
    {name: 'Anna', age: 23}, {model: 'Camry'}
];

function keyin(arr) {
    let keyarr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let k in arr[i]) {
            keyarr.push(k);
        }
    }
    return keyarr;
}

let newarr = keyin(arr);
console.log(newarr);
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arr3 = [
    {name: 'Dimas', age: 20}, {model: 'Corolla'},
    {name: 'Ivan', age: 30}, {model: 'Camry'},
    {name: 'Olena', age: 25}, {model: 'Corolla'},
    {name: 'Vasya', age: 54}, {model: 'Corolla'},
    {name: 'Inna', age: 44}, {model: 'Camry'},
    {name: 'Ira', age: 25}, {model: 'Camry'}
];

function valueofarr(arr) {
    let arrv = [];
    for (const user of arr) {
        for(let k in user) {
            arrv.push(user[k]);
        }
    }
    return arrv;
}
let arrv = valueofarr(arr3);
console.log(arrv);