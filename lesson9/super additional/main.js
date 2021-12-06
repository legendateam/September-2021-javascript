
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let usersMap = users.map(value => value.address);
console.log(usersMap);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let divMain = document.createElement("div");
// document.body.appendChild(divMain);
// users.forEach(value => {
//     let divElement = document.createElement("div");
//     divElement.innerText = value;
//     divMain.appendChild(divElement);
// })

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let divMain = document.createElement("div");
// document.body.appendChild(divMain);
// users.forEach(value => {
//     let divElement = document.createElement("div");
//     divMain.appendChild(divElement);
//     for (const k in value) {
//         let divElement2 = document.createElement("div")
//         divElement2.innerText = value[k];
//         divElement.appendChild(divElement2);
//     }
// })

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let divMain = document.createElement("div");
// document.body.appendChild(divMain);
// users.forEach(value => {
//     let divElement = document.createElement("div");
//     divMain.appendChild(divElement);
//     for (const k in value) {
//         let divElement2 = document.createElement("div");
//         if(typeof value[k] !== "object"){
//             divElement2.innerText = value[k];
//         }
//         divElement.appendChild(divElement2);
//         if(typeof value[k] === "object") {
//             for (const valueK in value[k]) {
//                 let divElement3 = document.createElement("div");
//                 divElement2.appendChild(divElement3);
//                     divElement3.innerText = value[k][valueK];
//                     console.log(value[k][valueK])
//             }
//         }
//     }
// })
//
//
//
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

//----------------вирішення у файлі rules.html
//

// -Є масив котрий характеризує правила.
//
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];
// Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цьому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let divWrapElement = document.createElement("div");
// document.body.appendChild(divWrapElement);
// rules.forEach(value => {
//     let divElement = document.createElement("div");
//     let h2Element = document.createElement("h2");
//     let pElement = document.createElement("p");
//     h2Element.innerText = value.title;
//     pElement.innerText = value.body;
//     divWrapElement.appendChild(divElement);
//     divElement.appendChild(h2Element);
//     divElement.appendChild(pElement);
// })