// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let elementH1ByMainHeader = document.getElementById("main_header");
// elementH1ByMainHeader.style.backgroundColor = "green";

// b) робить шириниу елементу ul 400px

// let elementByUl = document.getElementsByTagName("ul");
// elementByUl[0].style.width = "400px";

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassLinkList = document.getElementsByClassName("linkList");
// for (let elementByClassLinkList of elementsByClassLinkList) {
//     elementByClassLinkList.style.width = "50%";
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let elementsByClassListElement2 = document.getElementsByClassName("listElement2");
// for (let elementByClassListElement2 of elementsByClassListElement2) {
//     let innerText = elementByClassListElement2.innerText;
//     console.log(innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsByTagLi = document.getElementsByTagName("li");
// for (let elementByTagLi of elementsByTagLi) {
//     elementByTagLi.style.backgroundColor = "gray";
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsByTagA = document.getElementsByTagName("a");
// for (let elementByTagA of elementsByTagA) {
//     elementByTagA.className = "anchor";
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (let elementByTagA of elementsByTagA) {
//     elementByTagA.innerText === "link3" ? elementByTagA.style.fontSize = "40px" : "";
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (let elementByTagAElement of elementsByTagA) {
//     elementByTagAElement.className = `element_${elementByTagAElement.innerText}`
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementsByClassSubHeader = document.getElementsByClassName("sub-header");
// let promptBgForElementsClassSubHeader = prompt("ведіть колір фону який забажаєте для елементів");
// for (let elementByClassSubHeader of elementsByClassSubHeader) {
//     elementByClassSubHeader.style.backgroundColor = promptBgForElementsClassSubHeader;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елементу = content 2 segment . Колір отримати з prompt()

// let promptBgForElementsClassSubHeader2 = prompt("content 2 segment");
// for (let elementByClassSubHeader of elementsByClassSubHeader) {
//     elementByClassSubHeader.innerText === "content 2 segment" ? elementByClassSubHeader.style.backgroundColor = promptBgForElementsClassSubHeader2 : "";
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let promptSomeText = prompt("ведіть довільний текст");
// let elementsByClassContent1 = document.getElementsByClassName("content_1");
// for (let elementByClassContent1 of elementsByClassContent1) {
//     let elementsByTagP = elementByClassContent1.getElementsByTagName("p");
//     for (let elementByTagP of elementsByTagP) {
//             elementByTagP.innerText = promptSomeText;
//         }
// }

// l) отримати елементи p та змінити їм padding на 20px

// let pElements = document.getElementsByTagName("p");
//
// for (let pElement of pElements) {
//     pElement.style.padding = ("20px")
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementsByClassText2 = document.getElementsByClassName("text2");
// for (let elementByClassText2 of elementsByClassText2) {
//     elementByClassText2.innerText = ("september-2021")
// }