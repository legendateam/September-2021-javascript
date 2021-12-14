let favorites = localStorage.getItem("favorites");
let ul = document.getElementsByTagName("ul")[0];
let favoritesList = JSON.parse(favorites);
console.log(favoritesList);
favoritesList.forEach(value => {
    let li = document.createElement("li");
    li.innerText = value;
    ul.appendChild(li);
    console.log(value);
})