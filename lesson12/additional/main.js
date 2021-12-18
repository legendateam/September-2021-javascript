// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let mainElement = document.createElement("div");
mainElement.setAttribute("class","wrap")
document.body.appendChild(mainElement);

let wrapClass = document.getElementsByClassName("wrap")[0];

let itarElements = (elements) => {
    for (const e of elements) {
        return e;
    }
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let userDiv = document.createElement("div");
            userDiv.setAttribute("class", "user");
            let userBtn = document.createElement("button");
            userBtn.innerText = "post";
            userDiv.innerText = `${user.name} `;
            userDiv.appendChild(userBtn);
            wrapClass.appendChild(userDiv);
            userBtn.onclick = () => {
                let postClass = document.getElementsByClassName("post");
                if(typeof itarElements(postClass) === "undefined") {
                    fetch("https://jsonplaceholder.typicode.com/posts")
                        .then(resp => resp.json())
                        .then(posts => {
                            posts.forEach(post => {
                                if(user.id === post.userId) {
                                    let postDiv = document.createElement("div");
                                    postDiv.setAttribute("class", "post");
                                    let postBtn = document.createElement("button");
                                    postDiv.innerText = `${post.title} `;
                                    postBtn.innerText = "comments";
                                    postDiv.appendChild(postBtn);
                                    userDiv.appendChild(postDiv);
                                    postBtn.onclick = () => {
                                        let commentClass = document.getElementsByClassName("comment");
                                        if (typeof itarElements(commentClass) === "undefined") {
                                            fetch("https://jsonplaceholder.typicode.com/comments")
                                                .then(someResponse => someResponse.json())
                                                .then(comments => {
                                                    comments.forEach(comment => {
                                                        if (post.id === comment.postId) {
                                                            let commentDiv = document.createElement("div");
                                                            commentDiv.setAttribute("class", "comment");
                                                            commentDiv.innerText = `${comment.body}`;
                                                            postDiv.appendChild(commentDiv);
                                                        }
                                                    })
                                                })
                                        } else {
                                            itarElements(postClass).removeChild(itarElements(commentClass));
                                        }
                                    }
                                }
                            })
                        })
                } else {
                    let userClass = document.getElementsByClassName("user");
                    itarElements(userClass).removeChild(itarElements(postClass));
                }
            }
        })
    })