function rec(item) {
    if(typeof item === "object") {
        for(const k in item ) {
            let users = document.getElementsByClassName("user");
            let element = document.createElement("div");
            element.className = "element";
            for(const user of users ) {
                if(typeof item[k]  !== "object") {
                    element.innerText = `${k}: ${item[k]}`;
                    user.appendChild(element);
                }
            }
            rec(item[k])
        }
    }
}

            let allUsersLocal = localStorage.getItem("user");
            let parseUsers = JSON.parse(allUsersLocal);

            let btn = document.createElement("button");
            btn.innerText = `post of ${parseUsers.name}`;
            btn.className = "btn-show-post";

            let btnBlock = document.createElement("div");
            btnBlock.className = "box-btn"

            let user = document.getElementsByClassName("user")[0];

            document.body.appendChild(btnBlock);
            btnBlock.appendChild(btn);

            rec(parseUsers);

            let divPosts = document.createElement("div");
            divPosts.classList.add("posts", "hidden");


            btn.onclick = () => {
                let postsEl = document.getElementsByClassName("posts");
                divPosts.classList.toggle("hidden")
                if(!postsEl.length) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${parseUsers.id}/posts`)
                        .then(value => value.json())
                        .then(posts => {
                            posts.forEach(post => {

                                let divPost = document.createElement("div");
                                let fromPost = document.createElement("form");
                                let btnPost = document.createElement("button");

                                divPost.className = "post";
                                divPost.innerText = post.title;


                                fromPost.setAttribute("action", "/September-2021-javascript/mini-project/post-details.html");
                                fromPost.setAttribute("target", "_blank");

                                btnPost.innerText = "post-details";
                                btnPost.className = "btn-post-details";

                                fromPost.appendChild(btnPost);
                                divPost.appendChild(fromPost);
                                divPosts.appendChild(divPost);
                                user.appendChild(divPosts);

                                btnPost.onclick = () => {
                                    localStorage.setItem("postId", JSON.stringify(post));
                                }
                            })
                        })
                }
            }







