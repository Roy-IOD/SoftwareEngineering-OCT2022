const prompt = require("prompt-sync")();

// Exercise 3.1
/*
function makeCounter() {
    let count = 0;
    return function() {
    return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); // 0
console.log(counter2()); //1



// Exercise 3.2

function makeCounter() {
    let count = 0;

   function counter() {
        return count++;
    };
    counter.set = function(resetValue) {
        count = resetValue
    };
    counter.decrease = function() {
        count--;
    };
    return counter
    
}

let counter = makeCounter();
counter.set(6);
counter.decrease(); 
console.log(counter()); 


// Exercise 3.3

// Option 1
function printNumbers(from, to) {
    let number = from;
    let numberTimer = setInterval(function() {
        console.log(number);
        if (number == to) {
            clearInterval(numberTimer);
        }
        number++; 
    }, 1000);
}
printNumbers(5, 10)

//Option 2

function printNumbers(from, to) {
    let counter = from;
    setTimeout(function timer() {
        console.log(counter);
        if (counter < to) {
            setTimeout(timer, 1000);
        }
    counter++
    }, 1000) 
}
printNumbers(5, 10);
*/

//Exercise 3.4

