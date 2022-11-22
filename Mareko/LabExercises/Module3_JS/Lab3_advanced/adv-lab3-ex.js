//3.1

/*Here we make two counters: counter and counter2 using the same
makeCounter function.

Are they independent? What is the second counter going to show? 0,1 or 2,3
or something else?*/

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ? = 0
console.log( counter2() ); // ? = 1
console.log( counter2() ); // = 2
console.log( counter2() ); // = 3
console.log( counter2() ); // = 4
console.log( counter2() ); // = 5

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

console.log (counter3())

//3.3

function printNumbers (from, to) {
    let counter = 1
    let printInterval = setInterval()
}

console.log(printNumbers(0, 10))