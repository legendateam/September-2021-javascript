// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let arr = [];
    for( let i = 0; i < str.length; i++) {
        if(i%n === 0) {
            let slice = str.substr(i, n);
            arr.push(slice);
        }
    }
    return arr;
}
let cutString1 = cutString('наслаждение', 3);
console.log(cutString1);
//
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати
// в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше
// ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
let testemalValid = email => {
    let includes = email.includes("@");
    console.log(includes, "символ @");
    let indexOf = email.indexOf("@");
    let slice = email.slice(0,indexOf);
    console.log(slice, "значеня перед @");
    let secondindexof = indexOf+2;
    let includes1 = email[secondindexof].includes(".");
    console.log(includes1, "крапочка знаходиться менше ніж 2 символи після равлика");
}

testemalValid("someemail@gmail.com");
testemalValid("someeMAIL@gmail.com");
testemalValid("someeMAIL@i.ua");
testemalValid("some.email@gmail.com");

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'git',
            'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'sass']
    }
];


//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules


let sort = coursesArray.sort((a,b) => b.modules.length - a.modules.length);
console.log(sort);
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//

let str = "Астрономия это наука о небесных объектах";
let symb = "о";
let count = (str, stingsearch) => {
    let num = 0;
    for(let i = 0; i < str.length; i++) {
        let includes = str[i].includes(stingsearch);
        num += includes;
    }
    return num;
}
let count1 = count(str,symb);
console.log(count1);
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str2 = "Сила тяжести приложена к центру масс тела";
let cutString22 = (str, n) => {
    let split = str.split([" "]);
    let slice = split.slice(0,n);
    let join = slice.join(" ");
    return join;
}
let cutString2 = cutString22(str2, 5);
console.log(cutString2);