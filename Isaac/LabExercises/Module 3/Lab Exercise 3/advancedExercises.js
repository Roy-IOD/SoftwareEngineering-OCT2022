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


//Exercise 3.4

let f = str => console.log(str);
f = debounce(f, 1000);
f("a");
setTimeout( () => f("b"), 200)
setTimeout( () => f("c"), 500)

function debounce(func, ms) {
    let timeout;
    return function(msg) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(msg), ms);
    };
}


//Exercise 3.5

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
   }
   let user = {
    name: 'John',
    login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
   };
   askPassword(() => user.login(true), () => user.login(false));


//Exercise 3.6

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

console.time("pocket.glasses test")
console.log(pockets.glasses)
console.timeEnd("pocket.glasses test")
// Average Time: 3.5ms

console.time("head.glasses test")
console.log(head.glasses)
console.timeEnd("head.glasses test")
// Average Time: 0.15ms

//head.glasses is faster because the code doesnt have to go through each proto variable




//Exercise 3.7

//This constructor function works
function Person(name) {
    this.name = name;
    console.log(name)
}

let person = new Person("Isaac")
let person2 = new person.constructor("Tyrese");

//This constructor function doesn't work i think??? Had to google this

function Person(name) {
    this.name = name;
    console.log(name)
}
Person.prototype = {}

let person = new Person("Isaac")
let person2 = new person.constructor("Tyrese");


//Exercise 3.8

Function.prototype.defer = function(ms) {
    let myVariable = this;
    return function(...args) {
      setTimeout(() => myVariable.apply(this, args), ms);
    }
  };

function myFunction(a, b) {
    console.log( a + b );
};

myFunction.defer(1000)(1, 2);



//Exercise 3.9

let dictionary = Object.create(null, {
    toString: {value(){
        return Object.keys(this).join();
    }
}});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; 

for(let key in dictionary) {
 console.log(key);
}

console.log(dictionary);




//Exercise 3.10

We’ve got a Clock class. As of now, it prints the time every second.
Create a new class ExtendedClock that inherits from Clock and adds the
parameter precision – the number of ms between “ticks”. Should be 1000
(1 second) by default.
● Your code should be in the file extended-clock.js
● Don’t modify the original clock.js. Extend it.
*/
class Clock {
    constructor({ template }) {
    this.template = template;
    }
render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
    console.log(output);
}
stop() {
    clearInterval(this.timer);
    }
start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
    }
};
let myTimer = new Clock("New Template")
myTimer.start()





class ExtendedClock extends Clock {

};

