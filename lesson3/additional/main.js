// 1. Створити пустий масив та :
    let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.

// for (let i = 1; i <= 100 ; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);


//     b. заповнити його 50 непарними числами за допомоги циклу.
//
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 1) {
//         arr.push(i);
//     }
// }
// console.log(arr);



//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for(let i = 0; i < 20; i++) {
//     arr[i] = Math.round(Math.random()*20);
// }
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr[i] = Math.round(Math.random()*(732-8) + 8);
}
console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 2; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//
//
// let arrNew = [];
// //
// for (i = 2; i < 20; i+=3) {
//     if (arr[i]%2 === 0) {
//         arrNew = arr[i];
//         console.log(arrNew);
//     }
// }


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let numbers = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         let p = i - 1;
//         console.log(numbers[p]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let check = [100,250,50,168,120,345,188];
// let total = 0;
// for (let i = 0; i < check.length; i++) {
//     total += check[i];
// }
// let result = total / check.length;
// console.log(result);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let numberarr = [5, 5456, 66, 6, 2000, 987, 2, 1, 65, 354];
// let otherarr = [];
// for (let i = 0; i < numberarr.length; i++) {
//     otherarr[i] = numberarr[i] * 5;
// }
// console.log(otherarr);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// let anytype = ["hello", true, "world", 25, "sergio", 18, -999, false, false, "yurez"];
// let arrnumb = [];
// for  (let i = 0; i < anytype.length; i++) {
//     if (typeof anytype[i] === "number") {
//         arrnumb = anytype[i];
//         console.log(arrnumb);
//     }
// }

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];

    let usersWithCities = [];
    for (let user of usersWithId) {
        for (let city of citiesWithId) {
            if (user.id === city.user_id) {
                let obj = user;
                obj.address = city;
                usersWithCities.push(obj);
            }
        }
    }
    console.log(usersWithCities);

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of arrARR) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrnull = [];
for (let i = 0; i< arrARR.length; i++) {
    arrnull[i] = arrARR[i];
}
console.log(arrnull);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let sting = ["a", "b", "c"];
let onestring = [];
// for (let i = 0; i < sting.length; i++) {
//     onestring += sting[i];
// }
// console.log(onestring);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i = 0;
// while (i < sting.length) {
//     onestring += sting[i];
//     i++;
// }
// console.log(onestring);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (let stin of sting) {
//     onestring += stin;
// }
// console.log(onestring);
