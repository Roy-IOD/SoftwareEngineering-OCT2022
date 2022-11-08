/*

//Fundamentals Exercise 1.2 //

("" + 1 + 0); // 10
("" - 1 + 0); // -1
(true + false); // 1
(6 / "3"); // 2
("2" * "3"); // 6
(4 + 5 + "px"); // 9px
("$" + 4 + 5); // $45
("4" - 2); // 2
("4px" - 2); // NaN
(" -9 " + 5); // -9 5
(" -9 " - 5); // -14
(null + 1); // 1
(undefined + 1); // NaN
(" \t \n" - 2); // -2


//Fundamentals Exercise 1.3 //

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
console(a + b); // 12


//Fundamentals Exercise 1.4 //

Boolean(5 > 4); // true
Boolean("apple" > "pineapple"); // false
Boolean("2" > "12"); // true
Boolean(undefined == null); // true
Boolean(undefined === null); // false
Boolean(null == "\n0\n"); // false
Boolean(null === +"\n0\n"); // false



//Fundamentals Exercise 1.5 //

if ("0") {
    alert( 'Hello' );
    }
    


//Fundamentals Exercise 1.6 //

let result;
if (a + b < 4) {
result = 'Below';
} else {
result = 'Over';
}


let a = 1;
let b = 1;

let result = ( (a + b < 4) ? "Below" : "Over")

console.log(result)



//Fundamentals Exercise 1.7 //

const hello = ( who )=> console.log("Hello " + who ); const delayHello = delay(hello, 300); delayHello(‘world’);


//Fundamentals Exercise 1.8 //

let schedule = {}; 
    alert( isEmpty(schedule) ); // true 
    schedule["8:30"] = "get up"; alert( isEmpty(schedule) ); // false



function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
  return true;
}

console.log(isEmpty("schedule"))

//Fundamentals Exercise 1.9 //


let ladder = {
    step: 0,
    up() {
    this.step++;
    },
    down() {
    this.step--;
    },
    showStep: function() { // shows the current step
    console.log( this.step );
    }
    };


//Fundamentals Exercise 1.10 //

let accumulator = new Accumulator(1); // initial value 1 
accumulator.read(); // adds the user-entered value 
accumulator.read(); // adds the user-entered value 
console.log(accumulator.value); // shows the sum of these values

*/