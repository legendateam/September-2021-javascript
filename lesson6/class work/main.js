// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//

let normalizatorfn = username => {
    if (typeof username === "string") {
        for (let user of username) {
            if(user === "-" || user === "." || user === "_" || user === "@" || user === "!"
                || user === "#" || user === "$" || user === "%" || user === "^" || user === "&"
                || user === "*" || user === "=" || user === "|" || user === "{" || user === "}"
                || user === "[" || user === "]" || user === "'" || user === "`" || user === "?"
                || user === ">" || user === "<" || user === "." || user === "," || user === "/"
                || user === "(" || user === ")" || user ===":") {
                let replaceAll = username.replaceAll(user, " ");
                let split = replaceAll.split(" ");
                let map = split.map(value => {
                    if(value !== "") {
                        return value
                    }
                });
                let arr = [];
                map.forEach(value => {
                    if(value !== undefined) {
                        arr.push(value)
                    }

                })
                let join = arr.join(" ");
                username = join;
            }}
    } else {
        console.log("будь ласка введіть коректне значення, буквами, наприклад: Юра Чебан");
    }
    return username;
}
let normalizatorfn1 = normalizatorfn(n1);
let normalizatorfn2 = normalizatorfn("Yura.Cheban{}js$okten^love&job@novaposhta-no)developer:yes)");
console.log(normalizatorfn1);
console.log(normalizatorfn2);


// let callbackfnNormalize = (symb) => {
//     let split = symb.split(" ");
//     let map = split.map(value => {
//         if(value !== "") {
//             return value;
//         }
//     });
//     let arr = []
//     map.forEach(value => {
//         if(value !== undefined) {
//             arr.push(value);
//         }
//     })
//     let join = arr.join(" ");
//     return join;
// }
// let normalizatorswitch = (username, callback) => {
//     if(typeof username === "string") {
//         let split = username.split("");
//         split.forEach(value => {
//             switch (value) {
//                 case "." :
//                     let a = username.replaceAll(".", " ");
//                      username = callback(a);
//                     break;
//                 case "-" :
//                     let b = username.replaceAll("-", " ");
//                     username = callback(b);
//                     break;
//                 case "_" :
//                     let c = username.replaceAll("_", " ");
//                     username = callback(c);
//                     break;
//             }
//         })
//     } else {
//         console.log("ведіть коректне значення будь ласка");
//     }
//     return username;
// }
// let normalizatorswitch1 = normalizatorswitch(n3,callbackfnNormalize);
// console.log(normalizatorswitch1);

//

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

 let genereteRandomNumfn = (limit,max) => {
     let arr = [];
     for(let i = 0; i < limit; i++) {
         arr.push(Math.round(Math.random() * max));
     }
     return arr;
 }
let randomhunternumbers = genereteRandomNumfn(100,100);
console.log(randomhunternumbers);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sort1 = randomhunternumbers.sort((a, b) => a - b);
console.log(sort1);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filter1 = sort1.filter(value => value % 2 === 0);
console.log(filter1);
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrToStrings = filter1.map(value => value + "");
console.log(arrToStrings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
let sortNums = (numbers, direction) => {
    if(direction === "ascending") {
        numbers.sort((a, b) => a - b);
    } else if (direction === "descending") {
        numbers.sort((a,b) => b - a);
    } else {
        console.log("no valid")
    }
    return numbers;
}

let sortNums1 = sortNums(genereteRandomNumfn(100,100), "ascending");
console.log(sortNums1);
let sortNums2 = sortNums(genereteRandomNumfn(100,100), "descending");
console.log(sortNums2);
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray
    .sort((montDuration1, montDuration2 ) => montDuration2.monthDuration - montDuration1.monthDuration);
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = sort.filter(value => value.monthDuration > 5);
console.log(filter);
