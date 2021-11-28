// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let helloworld = "hello world";
let lorenIpsum = "loren ipsum";
let javascriptIsCool = "javascript is cool";

console.log(helloworld.length);
console.log(lorenIpsum.length);
console.log(javascriptIsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase = helloworld.toUpperCase();
console.log(toUpperCase);

let toUpperCase1 = lorenIpsum.toUpperCase();
console.log(toUpperCase1);

let toUpperCase2 = javascriptIsCool.toUpperCase();
console.log(toUpperCase2);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
let toLowerCase = toUpperCase1.toLowerCase();
console.log(toLowerCase);

let toLoverCase1 = toUpperCase1.toLowerCase();
console.log(toLowerCase);

let toLowerCase2 = toUpperCase2.toLowerCase();
console.log(toLowerCase2);

let str = " dirty string   ";
let trim = str.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
let hunter = "Каждый охотник желает знать";

let stringSplitToChangeArr = str => str.split(" ");
console.log(stringSplitToChangeArr(hunter));

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
//
let delete_characters = (str,length) => str.substr(0,length);
console.log(delete_characters(hunter,7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//

let academy = "HTML JavaScript PHP";
let insertDash = str => str.replaceAll(" ", "-").toUpperCase();

console.log(insertDash(academy));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
let anyString = "anystring"
let xxx = str => {
    let split = str.split("");
    let shift = split.shift();
    let upper = shift.toUpperCase();
    let unshift = split.unshift(upper);
    let join = split.join("");
    return join
};
console.log(xxx(anyString));
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    let arrSplit = str.split(" ");
    let split1= "";
    let arr = []
    for(let i = 0; i < arrSplit.length;i ++) {
        split1 = arrSplit[i].split("");
        let upper = split1[0].toUpperCase();
        let shift = split1.shift();
        let unshift = split1.unshift(upper);
        let join = split1.join("");
        arr[i] = join;
    }
    return arr
}

console.log(capitalize(hunter));

