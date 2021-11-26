// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let treeNumMin = (a,b,c) => {
    if(a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    } else {
        console.log("не знаю що робити");
    }
}
treeNumMin(29,1001,39);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


let treeNumMax = (a,b,c) => {

    if(a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > b && c > a) {
        console.log(c);
    } else {
        console.log("нема такого");;
    }
}
treeNumMax(4, 2, 7);


// - створити функцію яка повертає найбільше число з масиву

let arrNumMax = (arr) => {
    let max = arr[0];
    for (let element of arr) {
        if(max < element) {
            max = element;
        }
    }
    return max;
}
let xxx = arrNumMax([1,2,10,6,100500,84,643,3,655,435,86,0,654,36,77]);
console.log(xxx);

// - створити функцію яка повертає найменьше число з масиву

let arrNumMin = (arr) => {
    let min = arr[0];
    for (const num of arr) {
        min > num ? min = num : null;
    }
    return min;
}
let minNumOFArr = arrNumMin([54, 75, 35, 22, 65, 435, 87, 58, 86, 43, 764, 3225, 78, 3422, 19, 543, 226, 73, 27, 8653, 58]);
console.log(minNumOFArr);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let fnRandom = (maxIter, MaxRandom) => {
    let arr = [];
    for(let i = 0 ; i < maxIter; i++) {
        arr[i] = Math.round(Math.random() * MaxRandom);
        // console.log(arr[i]); --- перевірка
    }
    return arr;
}

let fnIterSum = (numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

let fnSum = (a, b, callbackRandom, callbackIter) => callbackIter(callbackRandom(a, b));

let sumNum = fnSum(10, 10, fnRandom, fnIterSum);
console.log(sumNum);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let seredneArefmet = (numbers, fniter) =>  fniter(numbers) / numbers.length;
let serednenum = seredneArefmet([1,10,100,1000], fnIterSum);
console.log(serednenum);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let fnReturnMinlogMax = (numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for(const num of numbers) {
        if(max < num) {
            max = num;
        }
        if( min > num) {
            min = num;
        }
    }
    console.log(max);
    return min;
}
fnReturnMinlogMax([28,66,100,100500,5,942,5555,30]);
// - створити функцію яка заповнює масив рандомними числами

let fnrandomArr = (arr,limit, maximus) => {
    for (let i = 0; i < limit; i++) {
        arr[i] = Math.round(Math.random() * maximus)
    }
    return arr;
}
let randomarrnum = fnrandomArr([],20,50);
console.log(randomarrnum);

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let generateRandoms = (max) => Math.round(Math.random() * max);
let createNumbersArr = (numbers, limit) => {
    let result = [];
    for (let i = 0; i < limit; i++) {
         result[i] =  generateRandoms(numbers);
    }
    return result;
}
let fnCreateRandomsArr = (maxrandom, itar, maxiter) => itar(maxrandom,maxiter);
let fnCreateRandomNumInArr = fnCreateRandomsArr( 100, createNumbersArr, 10);
console.log(fnCreateRandomNumInArr);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let fnCreateRandomZeroHundret = (numbers,limit) => {
    for(let i = 0; i < limit; i++) {
        numbers[i] = generateRandoms(100);
    }
    return numbers
}
let zaparr = fnCreateRandomZeroHundret([],20);
console.log(zaparr);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


let fnReverseArrNumbers = (numbers) => {
    let newarr = [];
    for (let i = numbers.length-1, j = 0; i >= 0, j < numbers.length; i--, j++) {
        newarr[j] = numbers[i];
    }
    return newarr;
}
console.log(fnReverseArrNumbers([1,2,3,4,5,6,7,8,9,10]));

