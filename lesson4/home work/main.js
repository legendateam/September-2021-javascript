// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function formulaS (a,b) {
   return  a * b
}
let p = formulaS(5,10);
console.log(p);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function formulaR (r) {
    let PI = 3.14;
    return PI * r**2;
}
let r = Math.floor(formulaR(6));
console.log(r);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function formulaHR (h,r) {
    return 2 * h * r;
}
let s = formulaHR(14,6);
console.log(s);
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrfunc (arr) {
    for(element of arr) {
        console.log(element);
    }
    return arr;
}
let arr = [234,5656,876544,"hhty", true, 2,765,7,-654,"name"];
arrfunc(arr)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function someParagraph (text) {
    document.write(`<p>${text}</p>`)
}
someParagraph("some text P")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function funcUL (text) {
    document.write("<ul>")
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write("</ul>")
}
funcUL("li champions")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function funcULup(text,linumber) {
    document.write("<ul>")
    for(let i = 0; i < linumber; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write("</ul>")
}
funcULup("upgrade function li", 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function primitiveelements(arr) {
    for(element of arr) {
        document.write(`<ul><li>${element}</li></ul>`)
    }
}
primitiveelements(["dfdsf", true, false, 333,0,"yes","no",29,true])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function linkelement(arr) {
    for (element of arr) {
        document.write(`<div>${element.id} ${element.name} ${element.age}</div>`)
    }
}
let anyarr = [
    {id:1, name:"vasya", age:24},
    {id:2, name:"petya", age:40},
    {id:3, name: "natalia", age: 28},
    {id:4, name: "yura", age: 19},
    {id:5, name: "karina", age: 15}
]
linkelement(anyarr);
