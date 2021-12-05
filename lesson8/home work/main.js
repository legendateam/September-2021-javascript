// //     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // -- отримує текст з параграфа з id "content"
let pElementContentById = document.getElementById("content");
console.log(pElementContentById.innerText);
// // -- отримує текст з блоку з id "rules"
let elementRulesById = document.getElementById("rules");
console.log(elementRulesById.innerText);
// // -- замініть текст параграфа з id 'content' на будь-який інший
pElementContentById.innerText = "asd-qwe._zxc?";
// // -- замініть текст параграфа з id 'rules' на будь-який інший
elementRulesById.innerText = "?cxz._ewq-dsa";
// // -- змініть кожному елементу колір фону на червоний
pElementContentById.style.backgroundColor = "red";
elementRulesById.style.backgroundColor = "red";
// // -- змініть кожному елементу колір тексту на синій
pElementContentById.style.backgroundColor = "blue";
elementRulesById.style.backgroundColor = "blue";
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classListElementRulesById = elementRulesById.classList;
console.log(classListElementRulesById);
// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsByClassNameFcRules = document.getElementsByClassName("fc_rules");
for (let elementByClassNameFcRule of elementsByClassNameFcRules) {
    let elementByClassFcRuleBgRed = elementByClassNameFcRule.style.backgroundColor = "red";
}