const fetch = require("node-fetch")

// let prm = new Promise(function(res, rej) {
//     setTimeout((() => res("ala-bala")), 1);
// })

// prm.then(function(result) {
//     console.log(result);
// })

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ];

// // map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests)
//     .then(responses => responses.map(response => {
//         console.log(response.status)
//     }) );

fetch('https://api.github.com/users/iliakan')
    .then(res => res.json())
    .then(res => console.log(typeof(res)))
// console.log('ala-bala1')

// async function showAvatar() {
//     try {
//         let response = await fetch('https://api.github.com/users/iliakan');
//         let user = await response.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// showAvatar();

// function first() {
//     console.log("inside first");
//     return function second() {
//         console.log("inside second");
//         return function third() {
//             console.log("inside third");
//         }
//     }
// }

// first()()();

var info = {
    age: 16
};

var age1 = 10;


function print(age) {
    age = 36;
}

print(age1);
console.log(info.age);


