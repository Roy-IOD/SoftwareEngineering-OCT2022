//3.1

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1

// console.log( counter2() ); // ? = 0
// console.log( counter2() ); // ? = 1
// console.log( counter2() ); // = 2
// console.log( counter2() ); // = 3
// console.log( counter2() ); // = 4
// console.log( counter2() ); // = 5

//3.2

function makeCounter2() {
    let count = 0;

    function counterA() {
        return count++;
    };

    counterA.set = function(resetValue) { count = resetValue;}
    counterA.decrease = function() { count--;}

    return counterA
}

let counter3 = makeCounter2();

counter3.set(10)
counter3.decrease(4)

//console.log (counter3())

//3.3

// 1. Using setInterval.

function printNumbers (from, to) {
    let counter = from;
    let intervalTest = setInterval(function numbers() {
        console.log('number count ' + counter++);
        if (counter > to) {clearInterval(intervalTest)}
    }, 1000)
}

//printNumbers(6, 21)

// 2. Using nested setTimeout.


function printNumbersCopy (from, to) {
    let counterCopy = from
    let counterId = setTimeout(function count() {
        console.log('count ' + counterCopy++);
        counterId = setTimeout(count, 1000);
        if (counterCopy > to) {clearTimeout(counterId)}
        }, 1000);

}

//printNumbersCopy(22,27)

//3.4

let f = str => console.log(str)
f = debounce(f, 1000)

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);

function debounce(func, ms){
    let timeout;
    return function(msg) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(msg), ms);
    };
}


//3.5

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
    }
    
    let user = {
        name: 'John',
        login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
        }
    };
    
    // askPassword(rockstar, fail); // ?

//3.6


//3.7


//3.8

//3.9

//3.10

//3.11

//3.12


