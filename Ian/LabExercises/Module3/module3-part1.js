// MODULE 3 - 1. FUNDAMENTALS
// 2. What are the results of these expressions?
// const n = "" + 1 + 0 // 10
// const o = "" - 1 + 0 // -1
// const p = true + false // 1
// const q = 6 / "3" // 2
// const r = "2" * "3" // 6
// const s = 4 + 5 + "px" // 9px
// const t = "$" + 4 + 5 // $45
// const u = "4" - 2 // 2
// const v = "4px" - 2 // NaN
// const w = " -9 " + 5 // -9 5
// const x = " -9 " - 5 // -14
// const y = null + 1 // 1
// const z = undefined + 1 // NaN
// const a = " \t \n" - 2 // -2

// 3. Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt
//     values).
//     Why? Fix it. The result should be 3.

    // let a = Number(prompt("First number?", 1));
    // let b = Number(prompt("Second number?", 2));
    // console.log(a + b); // 12
//the above doesn't work. Prompt is not defined? But in theory I think this should work!

// //Question 4. What will be the result for these expressions?

// (5 > 4) // true
// ("apple" > "pineapple") // false
// ("2" > "12") // true because ?
// (undefined == null) // true
// (undefined === null) // false
// (null == "\n0\n") // false
// (null === +"\n0\n") // false

// 5. Will an alert be shown? a: Yes
if ("0") {
    console.log( 'Hello' );
    }

// 6. Rewrite this if using the conditional operator'?':

// let result;

// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

let a = 3;
let b = 1;
let result = (a + b < 4) ? "Below" : "Over";

console.log(result)

// 7. Write the delay method with arrow function, delay(fun,ms)
// Should work like:

// const hello = ( who )=> console.log(‘Hello ’ + who );
// const delalyHello = delay(hello, 300);
// delayHello(‘world’);

const delay = (func, ms) => {
    return function (message) {
        setTimeout(func, ms, message)
    }
}

const hello = ( who ) => console.log(`Bonjour ` + who );
const delayHello = delay(hello, 5000);
delayHello(`world`);

// 8. Write the function isEmpty(obj) which returns true if the object has no properties,
// false or otherwise. 
// Should work like:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// I am not sure on this one, will need to ask about it on Tuesday


// 9. 

// There’s a ladder object that allows to go up and down

let ladder = {
    step: 0,
    up() {
    this.step++;
    return this;
},
down() {
    this.step--;
    return this;
},
showStep: function() { // shows the current step
console.log( this.step );
return this;
}
};
// Modify the code of up, down and showStep to make the
// calls chainable, like this:
ladder.up().up().up().up().down().showStep(); // 3

// 10. Create New Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value =+ +prompt('Add user-entered value', 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

// I don't really understand this or why it doesn't work