// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)\
function minnumber (a,b,c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a  && b < c) {
        console.log(b);
    } else if (c < b && c < a) {
        console.log(c);
    }
}
minnumber(29,9,99);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxnumber (a,b,c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    }
}
maxnumber(40,2,100500)

// - створити функцію яка повертає найбільше число з масиву
let arr = [439,55,1,4,5474,4,8,6,6735,8335,566,4,544,874,37,25,85,544,85,9];
function maxnumofarr(arr) {
    for (let i= 0 ; i < arr.length; i++) {

    }
}

maxnumofarr(arr);

// - створити функцію яка повертає найменьше число з масиву


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sumanum(numbers) {
//     let sum = 0;
//     for (num of numbers) {
//         sum  += num;
//     }
//     return sum;
// }
//
// console.log(sumanum([1, 2, 10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);



// - створити функцію яка заповнює масив рандомними числами
function randomnum(arr,max) {
    for (let i = 0; i < max; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
    console.log(arr);
}
randomnum([],100)
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomnumlimit(arr, max, limit) {
    for (let i = 0; i < max; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    console.log(arr);
}
randomnumlimit([], 25,500)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
function reversearr(arr) {
    let newarr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newarr[i] = arr[i];
        console.log(newarr[i]);
    }
}
reversearr([1,2,3]);
