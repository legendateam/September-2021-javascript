let localIdPost = localStorage.getItem("postId");
let localIdUser = localStorage.getItem("user");
let postID = JSON.parse(localIdPost);
let userID = JSON.parse(localIdUser);

let elementByPostsDetails = document.getElementsByClassName("posts-details")[0];

let btn = document.createElement("button");
btn.innerText = "comments";

let postDetails = document.createElement("div");

let commentsDiv = document.createElement("div");
commentsDiv.classList.add("comments", "hidden");

postDetails.innerHTML = `<h2>user: ${userID.name} - post: ${postID.id}</h2> 
<h2>title: ${postID.title}</h2>  <p>body: ${postID.body}</p>`;

elementByPostsDetails.append(postDetails, btn)


btn.onclick = () => {
    let commentsClass = document.getElementsByClassName("comments");
    commentsDiv.classList.toggle("hidden");
    if(!commentsClass.length) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID.id}/comments`)
            .then(response => response.json())
            .then(comments => {
                comments.forEach(comment => {
                    let commentDiv = document.createElement("div");
                    commentDiv.className = "comment"
                    commentDiv.innerHTML = `<p><strong>name:</strong> ${comment.name} <br> 
                    <strong>email:</strong> ${comment.email} <br> <strong>comment:</strong> ${comment.body}</p>`;
                    commentsDiv.appendChild(commentDiv)
                    elementByPostsDetails.appendChild(commentsDiv)
                })
            })
    }
}
