//  Все робити за допомоги js.
// створити блок,

let divElement = document.createElement("div");

// додати йому класи wrap, collapse, alpha, beta

divElement.classList.add("wrap", "collapse", "alpha", "beta");
console.log(divElement);

// додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

let redBgDiv = divElement.style.backgroundColor = "red";
let grayTextDiv = divElement.style.color = "gray";
let textSieDiv = divElement.style.fontSize = "large";
// додати цей блок в body.
document.body.appendChild(divElement);
// клонувати його повністю, та додати клон в body.
document.body.appendChild(divElement.cloneNode(true));


//-------------------------- вирішення є у файлі template1.html до нього підключений template js
//  Є масив:
// ['Main','Products','About us','Contacts']
// <Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// <Завдання робити через цикли.
//-------------------------- вирішення є у файлі template1.html до нього підключений template js

//  Є масив
/*let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];*/

//  Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//  Завдання робити через цикли.

// for (const element of coursesAndDurationArray) {
//      let divElement = document.createElement("div");
//      document.body.appendChild(divElement);
//      divElement.append(element.title, element.monthDuration)
// }

//
//   Є масив
let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for(const course of coursesAndDurationArray) {
    let divElement = document.createElement("div");
    let h1Element = document.createElement("h1");
    let pElement = document.createElement("p");
    divElement.classList.add("item");
    h1Element.classList.add("heading");
    pElement.classList.add("description");
    h1Element.innerText = course.title
    pElement.innerText = course.monthDuration
    document.body.appendChild(divElement);
    divElement.append(h1Element, pElement);
}




// це якщо потрібно було класи створити heading = title і description = mountDuration
// for (const course of coursesAndDurationArray) {
//     let titileReplace = course.title.replaceAll(" ","");
//     let divElement = document.createElement("div");
//     let h1Element = document.createElement("h1");
//     let pElement = document.createElement("p");
//
//     divElement.classList.add("item");
//     h1Element.classList.add(`${titileReplace}`);
//     pElement.classList.add(`${course.monthDuration}`);
//
//     document.body.appendChild(divElement);
//     divElement.append(h1Element, pElement);
// }