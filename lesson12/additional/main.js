// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let usersClassElements = document.getElementsByClassName("users")[0];



fetch("https://jsonplaceholder.typicode.com/users")
    .then(responseUsers => responseUsers.json())
    .then(usersArr => {
        usersArr.forEach(user => {
            let userDiv = document.createElement("div");
            let userBtn = document.createElement("button");
            userDiv.classList.add("user");
            userDiv.innerText = `${user.id}.  ${user.name} `;
            userBtn.innerText = "show posts";
            userDiv.appendChild(userBtn);
            usersClassElements.appendChild(userDiv);

            userBtn.onclick = () => {
                if(userDiv.children.length < 2) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(responsePosts => responsePosts.json())
                        .then(posts => {
                            let postsDiv = document.createElement("div");
                            postsDiv.classList.add("posts");
                            userDiv.appendChild(postsDiv);
                            posts.forEach(post => {
                                let postDiv = document.createElement("div");
                                postDiv.classList.add("post")
                                let postBtn = document.createElement("button");
                                postBtn.innerText = "show comments";
                                postDiv.innerText = `${post.userId}. ${post.id} - ${post.title} `;
                                postDiv.appendChild(postBtn);
                                postsDiv.appendChild(postDiv);

                                postBtn.onclick = () => {
                                    if(postDiv.children.length < 2 ) {
                                        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                            .then(responseComments => responseComments.json())
                                            .then(comments => {
                                                let commentsDiv = document.createElement("div");
                                                commentsDiv.classList.add("comments");
                                                postDiv.appendChild(commentsDiv);
                                                comments.forEach(comment => {
                                                    let commentDiv = document.createElement("div");
                                                    commentDiv.classList.add("comment");
                                                    commentDiv.innerText = `${comment.postId}.${comment.id} : ${comment.name}  ${comment.body}`;
                                                    commentsDiv.appendChild(commentDiv);
                                                })
                                            })
                                    } else {
                                        let commentsClass = document.getElementsByClassName("comments");
                                        postDiv.removeChild(commentsClass[0])
                                    }
                                }
                            })
                        })
                } else {
                    let postsClass = document.getElementsByClassName("posts");
                    userDiv.removeChild(postsClass[0]);
                }
            }
        })
    })