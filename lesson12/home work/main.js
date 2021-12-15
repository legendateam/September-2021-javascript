// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
let divPosts = document.createElement("div");
divPosts.setAttribute("id", "posts");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            let divPost = document.createElement("div");
            divPost.setAttribute("id","post")
            let divID = document.createElement("div");
            let divTitle = document.createElement("div");
            let divBody = document.createElement("div");
            divID.innerText = post.id;
            divTitle.innerText = post.title;
            divBody.innerText = post.body;
            divPost.append(divID, divTitle, divBody);
            divPosts.appendChild(divPost);
            document.body.appendChild(divPosts)
        })
    })


//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let divComments = document.createElement("div");

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            let div = document.createElement("div");
            let id = document.createElement("div");
            id.innerText = comment.id;
            let name = document.createElement("div");
            name.innerText = comment.name;
            let email = document.createElement("div");
            email.innerText = email.name;
            let body = document.createElement("div");
            body.innerText = comment.body;
            div.append(id,name,email,body);
            divComments.appendChild(div);
            document.body.appendChild(divComments);
        })
    })
