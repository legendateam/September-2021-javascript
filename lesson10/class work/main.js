// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//

let f1 = document.createElement("form");
f1.setAttribute("id","firstF");
f1.setAttribute("action","/firstaction");
let f2 = document.createElement("form");
f2.setAttribute("id","secondF");
f2.setAttribute("action","/secondaction");
let inp1 = document.createElement("input");
inp1.setAttribute("type","text");
inp1.setAttribute("name","firstInp");
let inp2 = document.createElement("input");
inp2.setAttribute("type","text");
inp2.setAttribute("name","secondInp");
let btn = document.createElement("button");
btn.innerText = "click";
f1.appendChild(inp1);
f2.appendChild(inp2);
document.body.append(f1,f2,btn);
let text1 = " ";
let text2 = " ";

document.forms.firstF.firstInp.onkeypress = (e) => {
    let text = e.key;
    text1 += text;
}
document.forms.secondF.secondInp.onkeypress = (e) => {
    let text = e.key;
    text2 += text;
}
btn.onclick = () => {
    console.log(text1, text2);
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

let saveInfo = document.createElement("form");
saveInfo.setAttribute("action", "/actions");
saveInfo.setAttribute("id", "master");

let numbersOfLines = document.createElement("input");
numbersOfLines.setAttribute("type", "number");
numbersOfLines.setAttribute("name", "linesI");
let numbersOfCell = document.createElement("input");
numbersOfCell.setAttribute("type","number");
numbersOfCell.setAttribute("name","cell");

let contentInp = document.createElement("input");
contentInp.setAttribute("type", "text");
contentInp.setAttribute("name", "contentI");

let btnForTable = document.createElement("button")
btnForTable.innerText = "click";

let tableElement = document.createElement("table");


saveInfo.append(numbersOfLines,numbersOfCell,contentInp, btnForTable);
document.body.appendChild(saveInfo);

saveInfo.onsubmit = e => e.preventDefault();


btnForTable.onclick = () => {
    document.body.appendChild(tableElement);

    for(let i = 0; i < document.forms.master.linesI.value; i++) {
        let tr = document.createElement("tr");
        tableElement.appendChild(tr);
    }
    let trO = tableElement.getElementsByTagName("tr");
    for (const trElement of trO) {
        for (let i = 1; i <= document.forms.master.cell.value; i++) {
            let td = document.createElement("td");
            trElement.appendChild(td);
        }
    }

    let tdElements = tableElement.getElementsByTagName("td");
    for (const tdElement of tdElements) {
        tdElement.innerText = document.forms.master.contentI.value;
    }

}


//
// - Сворити масив не цензцрних слів.

let arrCensored = ["сука","блядь","блять", "ебать","епта", "єбать","єбав","їбу","єбатися","їбатися","їбав","вєбав", "йобана","піздец","пиздец", "піздєц", "пиздата","пиздато",
    "пизда","пезда","пізда", "ахуеть", "ахуєно", "ахуенно", "ахуено", "ахуєть", "підар", "педар", "пидр", "пидар", "пидор","підарас","пыдор","підор","пиздюк",
    "піздюк", "шалава", "хуй","хуйовий","хуйня","fuck","shit","bitch"];
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//

let formCensored = document.createElement("form");
formCensored.setAttribute("action","/actions");
formCensored.setAttribute("id","formCensored");
let inpCensored = document.createElement("input");
inpCensored.setAttribute("type","text");
inpCensored.setAttribute("name","censoredInp");
let btnCensored = document.createElement("button");
btnCensored.innerText = "click";
formCensored.append(inpCensored,btnCensored);

document.body.appendChild(formCensored);
formCensored.onsubmit = e => e.preventDefault()
btnCensored.onclick = () => arrCensored.some(value => value === document.forms.formCensored.censoredInp.value)? alert("за мати бан!") : null;

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку



let senCensored = document.createElement("form");
senCensored.setAttribute("action","/censored");
senCensored.setAttribute("id","senCensored");
let senInpCensored = document.createElement("input");
senInpCensored.setAttribute("type","text");
senInpCensored.setAttribute("name","inpCensored");
let senBtnCensored = document.createElement("button");
senBtnCensored.innerText = "click";
senCensored.append(senInpCensored,senBtnCensored);

document.body.appendChild(senCensored);
senCensored.onsubmit = (e) => {
    e.preventDefault()
}

let saveInpCensored = [];
senBtnCensored.onclick = () => {
    saveInpCensored.push(document.forms.senCensored.inpCensored.value.split(" "));
    for(const censored of saveInpCensored) {
        for(let i = 0; i < censored.length; i++) {
           if(arrCensored.some(value => value === censored[i])) {
               alert("видали матюки з речення!")
           }
        }
    }
};

