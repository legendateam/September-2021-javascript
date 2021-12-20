// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


let divWrap = document.createElement("div");
divWrap.setAttribute("id", "main");
document.body.appendChild(divWrap);


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(responsePosts => responsePosts.json())
    .then(posts => {
        posts.forEach(post => {
            let postDiv = document.createElement("div");
            postDiv.classList.add("post");
            let postBtn = document.createElement("button");
            postBtn.innerText = "show comments";
            postDiv.innerHTML = `<hr> ${post.id}. ${post.title} <br>${post.body} `
            postDiv.appendChild(postBtn);
            divWrap.appendChild(postDiv);

            postBtn.onclick = () => {
                if(postDiv.children.length < 4) {
                    fetch("https://jsonplaceholder.typicode.com/comments")
                        .then(responseComments => responseComments.json())
                        .then(comments => {
                            let commentsDiv = document.createElement("div");
                            commentsDiv.classList.add("comment-main")
                            postDiv.appendChild(commentsDiv);
                            comments.forEach(comment => {
                                if(comment.postId === post.id) {
                                    let commentDiv = document.createElement("div");
                                    commentDiv.classList.add("comment");
                                    commentDiv.innerHTML = `<p style="background-color: cadetblue">${comment.name}</p> <p style="background-color: beige">${comment.body}</p>`;
                                    commentsDiv.appendChild(commentDiv);
                                }
                            })
                        })
                } else {
                    let commentsElements = document.getElementsByClassName("comment-main");
                        postDiv.removeChild(commentsElements[0]);
                }
            }
        })
    })

