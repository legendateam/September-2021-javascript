// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let contentID = document.getElementById("content");
let h2Collection = document.getElementsByTagName("h2");
let ulElement = document.createElement("ul");

for (const h2 of h2Collection) {
    let liElement = document.createElement("li");
    liElement.innerText = h2.innerText;
    ulElement.appendChild(liElement);
}
contentID.appendChild(ulElement);