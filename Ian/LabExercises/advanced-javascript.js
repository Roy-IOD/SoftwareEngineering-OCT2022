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
// const prompt = require("prompt-sync")();
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: 'Ian',

//     login(result) {
//         console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };

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

Function.prototype.defer - function(ms) {
    let functionContext = this;

    return function(...args) {
        console.log(arguments)
        console.log(args)
        console.log(this)
        setTimeout(() => functionContext.apply(this, args), ms)
    }
}

function sum(a, b) {
    console.log(a+b);
}

const multiply = (a,b) => console.log(a*b)

function sumAll(a,b,c,d,e,f) {
    console.log(a+b+c+d+e+f)
}

// sum.defer(1000)(1, 2); //shows 3 after 1 second or does it? "sum.defer is not a function"


//9. Add toString to the dictionary
console.log('\nQuestion 9:\n----------')

let dictionary = Object.create(null, {
    toString: { // define toString property
      value() { // the value is a function
        return Object.keys(this).join();
      }
    }
  });

   // your code to add dictionary.toString method
    // add some data
dictionary.apple = "Apple";
dictionary.orange = "Orange";

// dictionary.__proto__ = "test"; 
// __proto__ is a regular property key here

// only apple and __proto__ are in the loop

for(let key in dictionary) {
    console.log(key); // "apple", then "__proto__"
}
// your toString in action

console.log(dictionary+""); // "apple,__proto__"

//q 10. Extended Clock
// console.log('\nQuestion 10:\n----------')
// class Clock {

//     constructor({ template }) {
//         this.template = template;
//     }
//     render() {
//         let date = new Date();
    
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
    
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
    
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
    
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
        
//         console.log(output);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//         }
//     }
// //
// class ExtendedCLock extends Clock {
//     constructor(template) {
//         super(template)
//         //console.log(template)

//         let precision = template.precision ? template.precision : 1000
//         console.log(precision)
//         this.precision = precision
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
// }

// let extClock = new ExtendedCLock({template: 'h : m : s', precision: 1000})
// extClock.start()

// 11. Inherit from SyntaxError
console.log('\nQuestion 11:\n----------')
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("formatting error")

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof SyntaxError);

//12. Delay with a promise
console.log('\nQuestion 12:\n----------')
function delay(ms) {

    return new Promise((resolve,reject) => {
        if (ms <0){
            reject ("Less than zero")       
        } else {
            setTimeout(resolve, ms);
        }
    })
}

delay(4000).then(() => console.log('runs after 4 seconds'));
delay(-4000).then(() => console.log('runs after 4 seconds')).catch((message) => console.log(message));

// //13.Rewrite using async/await
// //Rewrite this example code from the chapter Promises chaining using
// //async/await instead of .then/catch:
import fetch from 'node-fetch'
async function loadJson(url) {
    let response = await fetch(url)
            if (response.status == 200) {

            return await response.json();
            } else {
            throw new Error(response.status);
        }

}

loadJson('https://jsonplaceholder.typicode.com/posts/1')
    .then((message) => console.log(message))
    .catch(console.log); // Error: 404