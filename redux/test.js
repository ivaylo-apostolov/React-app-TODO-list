let arr = 
    [{
        name: "Ivo"
    },
{
    name: "Dani"
}]




//1 * 2 * 3 * 4 * 5

function factoriel(n) {
    // 5 * 4 * 3 * 2 * 1
    if(n === 1) {
        return 1
    }
    return n * factoriel(n - 1)
}
console.log(factoriel(5))


//1,1,2,3,5,8,13,21,34,55
function fibonaci(n) {
    //6
    if(n === 2 || n === 1) {
        return 1
    }
    return fibonaci(n - 1) + fibonaci(n - 2)
}

console.log(fibonaci(20))
// count(arr);

// console.log(obj);
