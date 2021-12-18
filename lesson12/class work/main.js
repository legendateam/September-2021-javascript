// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(value => {
        value.forEach(post => {
            let div = document.createElement("div");
            let btn = document.createElement("button");
            btn.innerText = "comments post";
            div.innerText = `${post.id} ${post.title} `;
            div.appendChild(btn);
            document.body.appendChild(div);

            btn.onclick = () => {
                let commentsDiv = document.createElement("div");
                if(div.children.length === 1) {
                    commentsDiv.innerText = `${post.body}`;
                    div.appendChild(commentsDiv);
                } else {
                   let child = div.getElementsByTagName("div")[0];
                    div.removeChild(child)
                }
            }
        })
    })