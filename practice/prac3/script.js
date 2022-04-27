// const a = Array
//             .from({length: 200000},
//             () => Math.floor(Math.random() * 10000));

// const b = Array
//             .from({length: 200000},
//             () => Math.floor(Math.random() * 10000));

// console.time('first');

// a.filter((el) => {
//     return b.includes(el);
// })

// console.timeEnd('first');

// console.time('second');

// const map = new Map();

// a.forEach((el) => {
//     map.set(el, null);
// })

// b.filter((el) => {
//     return map.has(el);
// })

// console.timeEnd('second');

// function factorial(n) {
//     if (n < 0) return -1;
//     if (n === 1 || n === 0) return 1;

//     return n * factorial(n - 1);
// }

// console.log(factorial(4));

// function fibonacii(n) {
//     if (n === 0) return 0;
//     if(n <= 2) return 1;

//     return fibonacii(n - 1) + fibonacii(n - 2);
// }

// console.log(fibonacii(3));

// function sum(arr, start = 0) {
//     if (start === arr.length) return 0; 
   
//     return arr[start] + sum(arr, ++start);
// }

// console.log(sum([1,2,3,4,5]));

// function reverse(num) {
//     if (num < 10) return num;

//     return num % 10 + String(reverse(Math.round(num / 10)));
// }

// console.log(reverse(1243));

// function secNum(arr, num, start = 0, count = 0) {
//     if (start >= arr.length) return -1;

//     if (arr[start] === num && count === 1) return start;

//     else if(arr[start] === num) secNum(arr, num, ++start, count++)
    
//     return secNum(arr, num, ++start, count)
// }

// const a = [1, 2, 2, 3, 5, 4, 5, 1];

// console.log(secNum(a, 1));

// function countRep(str, substr, start = 0) {
//     if (substr === str) return 1;

//     const index = str.indexOf(substr, start);

//     if (index === -1) return 0;

//     return 1 + countRep(str, substr, index + substr.length);
// }

// console.log(countRep("barev barevasdbarev", "barev"));

function replacePi(str) {
    const index = str.indexOf('pi');
    if (index === -1) return str;

    const tmp = str.substring(0, index)  + '3.14' + str.substring(index + 2);
    return replacePi(tmp);    
}

console.log(replacePi("pi124piasd"));