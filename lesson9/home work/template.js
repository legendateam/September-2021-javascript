//  Є масив:
// ['Main','Products','About us','Contacts']
// <Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// <Завдання робити через цикли.

let strings = ['Main', 'Products', 'About us', 'Contacts'];

for(const string of strings) {
    let liElement = document.createElement("li");
    liElement.innerText = string;
    let menu = document.body.getElementsByClassName("menu");
    menu[0].appendChild(liElement)
}