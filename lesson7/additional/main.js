// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
//  },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//  }
// }


class User {
    constructor(id, name, username, email, street, suite, city, zipcode, geo, lat, lng, phone, website, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name,
            catchPhrase,
            bs
        }
    }
}


let user = new User(1, "Leanne Graham", "Bret", "Sincere@april.biz", "Kulas Light", "Apt. 556", "Gwenborough", "92998-3874",
    "-37.3159", "81.1496", "1-770-736-8031 x56442", "hildegard.org", "Romaguera-Crona", "Multi-layered client-server neural-net",
    "harness real-time e-markets");
console.log(user);

//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class TagDescription {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfTag2, actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [
            {titleOfTag: titleOfTag, actionOfAttr: actionOfAttr},
            {titleOfTag: titleOfTag2, actionOfAttr: actionOfAttr2}
        ];
    }
}

let tagA = new TagDescription("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.",
    "accesskey", "Активация ссылки с помощью комбинации клавиш.", "href", "Задает адрес документа, на который следует перейти.");
console.log(tagA);
let tagDiv = new TagDescription("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",
    "align", "Задает выравнивание содержимого тега <div>.", "title", "Добавляет всплывающую подсказку к содержимому.");
console.log(tagDiv);
let tagHone = new TagDescription("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ",
    "align", "Определяет выравнивание заголовка.", "onmousemove", "Перемещение курсора мыши.");
console.log(tagHone);
let tagSpan = new TagDescription("span", "Тег <span> предназначен для определения строчных элементов документа.",
    "class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением.", "onreset", "Форма очищена.");
console.log(tagSpan);
let tagInput = new TagDescription("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ",
    "accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.",
    "src", "Адрес графического файла для поля с изображением.");
console.log(tagInput);
let tagForm = new TagDescription("form", "Тег <form> устанавливает форму на веб-странице. ",
    "action", "Адрес программы или документа, который обрабатывает данные формы.", "name", "Имя формы.");
let tagOption = new TagDescription("option", "ег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ",
    "value", "начение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.",
    "disabled", "Заблокировать для доступа элемент списка.");
console.log(tagOption);
let tagSelect = new TagDescription("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.",
    "size", "Количество отображаемых строк списка.", "form\n", "Связывает список с формой.");
console.log(tagSelect);


// link for additional https://github.com/GrayHead/js_demos/blob/master/js/preview/lesson7/lesson7_tasks/additional/%D1%81losures.pdf



let dateFn = () => {
    let date = new Date;
    let dateandtimes = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return dateandtimes;
}

let getOperation = (operationType, credits, operationTime) => {
    return {
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
    };
};

function userCard(number) {
    let balance = 100;
    let transactionLimit = 100;
    let key = number;
    let historyLogs = []
    if(number <= 3 && number !== 0) {
        return {
            putCredits: money => {
                balance += money;
                historyLogs.push(getOperation("received credits", money, dateFn()));
            },
            takeCredits: money => {
                if (transactionLimit > money && balance > money) {
                    balance -= money;
                    historyLogs.push(getOperation("Withdrawal of credits", money, dateFn()));
                } else {
                    console.error("wrong value, please check balance card, thank you")
                }
            },
            setTransactionLimit: limit => {
                transactionLimit = limit;
                historyLogs.push(getOperation("Transaction limit change", limit, dateFn()))
            },
            transferCredits: (money, recipient) => {
                let commission = 0.05;
                if (balance > money && transactionLimit > money) {
                    balance -= money + (money * commission);
                    recipient.putCredits(money);
                    historyLogs.push({operationType: "Withdrawal of credits", credits: money, operationTime: dateFn()})
                } else {
                    console.error("lack of funds or limit exceeded, check your balance and card limit, thank you")
                }
            },
            getCardOptions: () => {
                return {
                    key, balance, transactionLimit, historyLogs
                }
            }
        }
    }
        console.error("not the correct value 'Key', Key must be 1-3")
}

let card1 = userCard(1);
let card2 = userCard(2);
card1.putCredits(15);
card1.setTransactionLimit(110)
card1.transferCredits(10, card2);
card1.transferCredits(10, card2);
card1.transferCredits(10, card2);
card2.setTransactionLimit(200)
card2.takeCredits(100)
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());



class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = []
    }
    addCard(card) {
        if(this.cards.length <= 3) {
           return  this.cards.push(card);
        } else {
            console.error("value exceeded");
        }
    }
    getCardByKey(key) {
        if(key <= 3) {
            return this.cards[key-1]
        } else {
            console.error("value exceeded");
        }
    }
}

let userBob = new UserAccount("Bob");
userBob.addCard(userCard(1));
userBob.addCard(userCard(2));
let cardBob1 = userBob.getCardByKey(1);
let cardBob2 = userBob.getCardByKey(2);
cardBob1.putCredits(500);
cardBob1.setTransactionLimit(800);
cardBob1.transferCredits(300,cardBob2);
cardBob2.takeCredits(50);
console.log(cardBob1.getCardOptions());
console.log(cardBob2.getCardOptions());







