// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User (id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
let users = [
    new User(1, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(2, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(3, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(4, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(5, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(6, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(7, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(8, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(9, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123"),
    new User(10, "vasya", "pupkin", "pupkin@gmail.com", "+38(067)12-12-123")
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let usersFiltetsId = users.filter(user => user.id % 2 === 0);
console.log(usersFiltetsId);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let usersSort = usersFiltetsId.sort((a, b) => b.id - a.id);
console.log(usersSort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [
    new Client (1,"joe","doe", "joedoe@gmail.com","+38(066)83-83-338", ["bread", "water", "soda","milk","potato","pepper","tomato"]),
    new Client (2,"oleg","leskiv", "leskiv@gmail.com","+38(066)83-83-338", ["beer", "bread","milk","potato","pepper","tomato"]),
    new Client (3,"alex","protsenko", "protsenko@gmail.com","+38(066)83-83-338", ["bread", "water", "soda"]),
    new Client (4,"andrew","rybytski", "ruba@gmail.com","+38(066)83-83-338", ["soda","milk","potato","pepper","tomato"]),
    new Client (5,"andrew","djychkp", "gyga@gmail.com","+38(066)83-83-338", ["beer","pepper"]),
    new Client (6,"yura","cheban", "chypa@gmail.com","+38(066)83-83-338", ["beer", "bread", "water", "soda","milk","potato","pepper","tomato"]),
    new Client (7,"natalia","oprit", "natalia@gmail.com","+38(066)83-83-338", ["bread", "water", "soda","milk","potato"]),
    new Client (8,"krisitna","pupkina", "kristina@gmail.com","+38(066)83-83-338", [ "bread", "soda","milk","potato","pepper","tomato"]),
    new Client (9,"olga","bogomolova", "dsfds@gmail.com","+38(066)83-83-338", ["bread", "water", "milk","potato","pepper","tomato"]),
    new Client (10,"karina","lider", "karina@gmail.com","+38(066)83-83-338", ["bread", "water","pepper","tomato"]),
]
console.log(clients);
// - Взяти sмасив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsSort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clientsSort);