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

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: 'John',

//     login(result) {
//         console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };

// askPassword(() => user.login(true), () => user.login(false)); // ?
//Your changes should only modify the highlighted fragment in the line above
// Why does this not work? Says prompt is not defined but I'm only meant to modify line 99?

//6. Searching algorithm

let head = {
    glasses: 1
    };

let table = {
    pen: 3
    };
    
let bed = {
    sheet: 1,
    pillow: 2
    };
    let pockets = {
    money: 2000
    };
                         