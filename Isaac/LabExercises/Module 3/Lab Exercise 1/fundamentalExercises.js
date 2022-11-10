
const pleasePrompt = require("prompt-sync")();

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

let a = pleasePrompt("First number?", 1);
let b = pleasePrompt("Second number?", 2);
console.log(+a + +b); // 12

//or//

const prompt = require("prompt-sync")();
let c = +prompt("First number?", 1);
let d = +prompt("Second number?", 2);
console.log(c + d); // 12


//Fundamentals Exercise 1.4 //

5 > 4 // true
"apple" > "pineapple"; // false
"2" > "12" // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false



//Fundamentals Exercise 1.5 //

if ("0") {
    alert( 'Hello' );
    }

    //This is true, because "0" is not an empty string//


//Fundamentals Exercise 1.6 //

let result;
if (a + b < 4) {
result = 'Below';
} else {
result = 'Over';
}

// Answer below //
let e = 1;
let f = 1;

let answer = ( (e + f < 4) ? "Below" : "Over")

console.log(answer)


//Fundamentals Exercise 1.7 //

function delayMessage(msg)
{
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMessage, 2000, "Delayed Message")



const delay = (func, ms) => {
    return function(message) {
        setTimeout (func, ms, message) 
    }
}

const helloWorld = (delay) => console.log("Im late " + delay);
const delayHello = delay(helloWorld, 3000)
delayHello("to work");


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

class fantasyPoints {
    constructor(newPlayer)
    {
        this.player = newPlayer;
        this.score = 0;
    }

    madefreeThrow() {
        this.score += 1;
        return this;
    }
    missedfreeThrow() {
        this.score -= 1;
        return this;
    }
    madethreePointer() {
        this.score += 3.5;
        return this;
    }
    missedthreePointer() {
        this.score -= 1;
        return this;
    }
    madetwoPointer() {
        this.score += 2;
        return this;
    }
    missedtwoPointer() {
        this.score -= 1;
        return this;
    }
    turnOver() {
        this.score -= 2;
        return this;
    }
    assist() {
        this.score += 2;
        return this;
    }
    rebound() {
        this.score += 1;
        return this;
    }
    steal() {
        this.score += 4;
        return this;
    }
    block() {
        this.score += 4;
        return this;
    }
    finalScore() {
        console.log(this.player + ' scored ' + this.score + ' fantasy points')
        return this;
    }
}

const luoDort = new fantasyPoints ('Luo Dort')
luoDort.madethreePointer().madethreePointer().missedthreePointer().missedthreePointer().missedthreePointer().missedthreePointer().madetwoPointer().madetwoPointer().madetwoPointer().missedtwoPointer().missedtwoPointer().missedtwoPointer().missedtwoPointer().missedtwoPointer().steal().steal().steal().steal().assist().assist().assist().rebound().rebound().rebound().rebound().rebound().rebound().rebound().finalScore()


//Fundamentals Exercise 1.10 //


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

