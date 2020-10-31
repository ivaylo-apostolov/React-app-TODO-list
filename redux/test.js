let arr = [1,4,7,2,4];
let obj = {name: "Ivo",
age:36};

let obj2 = {name: "Kiro",
position: "dev",
age:36};

let obj3 = {
    gender: "male"
}

function newObject(obj, obj2, obj3) {
    return Object.assign({}, obj, obj2, obj3,  /*{name: "Daniel"}*/)
}

function newObjectSpread(obj, obj2, obj3) {
    return {...obj, ...obj2, ...obj3, name: "Tarzan"}
}

let newObj = newObjectSpread(obj, obj2, obj3)

console.log(obj);
console.log(newObj);

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
