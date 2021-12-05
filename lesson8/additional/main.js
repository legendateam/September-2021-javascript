// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arr = []
function recCall(classlist) {
    if(classlist.children.length) {
        for (const element of classlist.children) {
            if(element.classList) {
                for (const e of element.classList) {
                   arr.push(e);
                }
            }
            recCall(element)
        }
    }
}

recCall(document.body);
console.log(arr);