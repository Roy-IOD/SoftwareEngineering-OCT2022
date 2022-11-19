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
*/


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