// Question 1

// function makeCounter() {
//     let count = 0;
//     return function() {
//     return count++;
//     };
//     }
//     let counter = makeCounter();
//     let counter2 = makeCounter();
//     console.log('\nQuestion 1:\n----------')
//     console.log( counter() ); // 0
//     console.log( counter() ); // 1
//     console.log( counter() ); // 2
//     console.log( counter2() ); // 0 because counter2 is independent
//     console.log( counter2() ); // 1

// Question 2

console.log('\nQuestion 2:\n----------')

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    return function() {
    return count++;
    };
    }
    let counter = makeCounter();
    let counter2 = makeCounter();
    console.log( counter() ); // 0
    console.log( counter() ); // 1
    console.log( counter() ); // 2
    console.log( counter2() ); // 0 because counter2 is independent
    console.log( counter2() ); // 1

// // Question 3 Output every second

// function printNumbers(from, to) {
//     let current = from;

//     let timerID = setInterval(function() {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timerID);
//         }
//         current++;
//     }, 1000);
//     }
// console.log('\nQuestion 3:\n----------')
// printNumbers(6, 12);

// // 4. debounced function waits 1000ms after the last call and then runs: alert("c")
// console.log('\nQuestion 4:\n----------')
// let f = str => console.log(str);
// f = debounce(f, 1000)

// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 500);

// function debounce(func,ms) {
//     let timeout;
//     return function(msg) {
//         //clear the timer to cancel the previously queued function call
//         clearTimeout(timeout);

//         //then reset the timer id for this most recent function call
//         timeout = setTimeout(() => func(msg), ms);
//         //but better to use apply and keep the right number of arguments
//         //timeout = setTimeout(() => func.apply(this, arguments), ms);
//     }
// }

// debounce(f, 1000)

//This works but it's mixed up with question 3

// 5. What should we pass askPassword in the code below, so that it calls
// user.login(true) as ok and user.login(false) as fail?
const prompt = require("prompt-sync")();
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'Ian',

    login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

// askPassword(() => user.login(true), () => user.login(false)); // commenting out for now
//Above works, just commented out so that I can run other questions without password


//6. Searching algorithm

let head = {
    glasses: 1
    };

let table = {
    pen: 3,
    __proto__: head
    };
    
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
    };
    
let pockets = {
    money: 2000,
    __proto__: bed
    };

//Use __proto__ to assign prototypes in a way that any property lookup
// will follow the path: pockets → bed → table → head. For instance,
// pockets.pen should be 3 (found in table), and bed.glasses
// should be 1 (found in head). 
console.log('\nQuestion 6:\n----------')
console.log(pockets.pen);
console.log(bed.glasses);
console.log(pockets.pillow);

//Is it faster to get to glases as pockets.glasses or head.glasses?
                         
//7. Create an object with the same constructor
// Imagine, we have an arbitrary object obj, created by a constructor function –
// we don’t know which one, but we’d like to create a new object using it.
// Can we do it like that?

// let obj2 = new obj.constructor();

// Give an example of a constructor function for obj which lets such code work
// right. And an example that makes it work wrong.

function Obj(name) {
    this.name = name;
}

let obj = new Obj("Table");
let obj2 = new obj.constructor("Chair");

console.log('\nQuestion 7:\n----------')
console.log(obj2.name);
console.log(obj.name);

//8. Add the decorating "defer()" to functions
//Add the prototype to all functions the method defer(ms), that returns a wrapper,
//delaying the call by ms milliseconds

// Here’s an example of how it should work:
// function f(a, b) {
// alert( a + b );

// }
// f.defer(1000)(1, 2); // shows 3 after 1 second
// Please note that the arguments should be passed to the original function.

