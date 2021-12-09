// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//

let h1Element = document.createElement("h1");
let button = document.createElement("button");
button.innerText = "click";
h1Element.innerText = "home work";
document.body.append(h1Element, button);

//
button.onclick = () => h1Element.style.display === "none" ? h1Element.style.display = "block" : h1Element.style.display = "none" ;

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn = document.createElement("button");
btn.innerText = "click me";
document.body.appendChild(btn);
btn.onclick = () => btn.innerText ? btn.innerText = "" : btn.innerText = "click me" ;

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let formElement = document.createElement("form");
let inputElement = document.createElement("input");
let inputBtn = document.createElement("button");
inputBtn.innerText = "SAVE"
inputElement.setAttribute("name", "age");
formElement.setAttribute("id", "formUser");
formElement.setAttribute("action", "/someaction");
formElement.append(inputElement, inputBtn);
document.body.appendChild(formElement);


let formAge = document.forms.formUser;
formElement.onsubmit = e => e.preventDefault();


formAge.age.onkeypress = () => {
    inputBtn.onclick = () => {
        formAge.age.value >= 18 ? alert("вітаємо") : alert("немає 18!");
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
// //
// let divElement1 = document.createElement("div");
// let divElement2 = document.createElement("div");
// let divElement3 = document.createElement("div");
//
// divElement3.append(divElement1, divElement2);
// document.body.appendChild(divElement3);
//
// divElement1.classList.add("target__menu");
// divElement1.classList.add("blue");
// divElement2.classList.add("target__menu");
// divElement2.classList.add("red");
// divElement3.classList.add("target");
//
//
// let targetClass = document.getElementsByClassName("target__menu");
// let targetClass2 = document.getElementsByClassName("red")[0];
//
// for (const element of targetClass) {
//     element.style.width = "200px";
//     element.style.height = "70px";
//     element.style.position = "absolute"
//     element.style.backgroundColor = "blue";
// }
// targetClass2.style.backgroundColor = "red";
// targetClass2.style.display = "none";
//
// divElement3.onclick = () => {
//     if(divElement1.style.position === "absolute") {
//         divElement1.style.position = "static";
//         divElement2.style.display =  "block"
//     } else {
//         divElement1.style.position = "absolute"
//         divElement2.style.display =  "none"
//     }
// }


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let formForLastTask = document.createElement("form");
let inputForLastTask = document.createElement("input");
// let btnFormLastTask = document.createElement("button");
let ulLastTask = document.createElement("ul");

// btnFormLastTask.innerText = "hide";
inputForLastTask.setAttribute("name", "comment");
formForLastTask.setAttribute("action", "/comments");
formForLastTask.setAttribute("id", "comments");

formForLastTask.appendChild(inputForLastTask);
document.body.append(formForLastTask,ulLastTask);

document.forms.comments.onsubmit = e => e.preventDefault();


inputForLastTask.onkeypress = (e) => {
    if(e.key === "Enter") {
        let titleObj = {title: inputForLastTask.value};
        let liLastTask = document.createElement("li");
        let btnHide = document.createElement("button");
        let btnOpen = document.createElement("button");
        btnHide.innerText = "hide";
        btnOpen.innerText = "open";
        btnOpen.style.display = "none";
        liLastTask.innerHTML = titleObj.title;

        ulLastTask.append(liLastTask, btnOpen, btnHide);

        btnHide.onclick = () => {
            liLastTask.innerText = "";
            btnHide.style.display = "none";
            btnOpen.style.display = "inline";
                btnOpen.onclick = () => {
                    liLastTask.innerText = titleObj.title;
                    btnOpen.style.display = "none";
                    btnHide.style.display = "inline";
                }
        }
    }
}

