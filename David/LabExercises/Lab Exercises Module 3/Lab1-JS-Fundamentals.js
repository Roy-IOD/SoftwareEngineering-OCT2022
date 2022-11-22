// 1. Fundamentals
const prompt = require("prompt-sync")();

// 2

console.log("" + 1 + 0) //10
console.log("" - 1 + 0) //-1
console.log(true + false) //1
console.log(6 / "3") //2
console.log("2" * "3") //6
console.log(4 + 5 + "px") //9px
console.log("$" + 4 + 5) //$45
console.log("4" - 2) // 2
console.log("4px" - 2) //NaN
console.log(" -9 " + 5) // -9 5
console.log(" -9 " - 5) //-14
console.log(null + 1) //1
console.log(undefined + 1) //NaN
console.log(" \t \n" - 2) //-2

// 3

let a = parseInt(prompt("First number?", 1));
let b = parseInt(prompt("Second number?", 2));
console.log (a + b); // 12

// 4

console.log(5 > 4) //true
console.log("apple" > "pineapple") //false
console.log("2" > "12") //true
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log(null == "\n0\n") //false
console.log(null === +"\n0\n") //false

// 5

if ("0") {
    console.log('Hello');
}

// 6

// let result;

// if (a + b < 4) {
// result = 'Below';
// } else {
// result = 'Over';
// }


function result(a,b) {
return (a + b < 4 ? 'Below' : 'Over')
}
console.log(result(1,2))
console.log(result(5,7))

// 7

const delay = (func, ms) => {
    return function (message) {
        setTimeout (func, ms, message)
    }
}

const hello = ( who ) => console.log ('Hello ' + who );
const delayHello = delay(hello, 3000);
delayHello('World');


// 8

function isEmpty (obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log (isEmpty(schedule)); // true
schedule ["8:30"] = "get up";
console.log (isEmpty(schedule)); // false

// 9

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

ladder.up().up().down().showStep(); // 1

// 10 

// const prompt = require("prompt-sync")();

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values

console.log(5 > 4)