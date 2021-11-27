// - Дано натуральное число n. Выведите все числа от 1 до n.

let vse = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
}
vse(10);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
let ab = (a,b) =>  {
    if( a < b ) {
        for(let i = a; i <= b; i++){
            console.log(i);
        }
    } else {
        for( let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}
ab(6,2);
ab(10,15)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

let foo = (arr, index) => {
    if (index<arr.length-1) {
        let krok = arr[index];

        arr[index] = arr[index + 1];

        arr[index + 1 ] = krok;

    }
    return arr
}

console.log(foo([9, 8, 0, 4], 0));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

 let arrNumberZero = [1,0,6,0,3,0,1,2,3,4,0,0,1,0]
let zeronumber = (arr) => {
  let zero = [];
  let numbers = [];
  for(const num of arr) {
    num === 0? zero.push(num) : numbers.push(num);
  }
  return numbers.concat(zero);
}
let avg  = zeronumber(arrNumberZero);
 console.log(avg);