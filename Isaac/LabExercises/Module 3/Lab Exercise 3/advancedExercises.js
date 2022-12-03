
// const prompt = require("prompt-sync")();

// Exercise 3.1

function makeCounter() {
    let count = 0;
    return function() {
    return count++;
    };
}
let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
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
/*
function Person(name) {
    this.name = name;
    console.log(name)
}
Person.prototype = {}

let person = new Person("Isaac")
let person2 = new person.constructor("Tyrese");
*/

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

class ExtendedClock extends Clock {
    constructor(template) {
        super(template)
        let precision = template.precision ? template.precision : 1000
        console.log(precision) 
        this.precision = precision
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
        }
};



let newClock = new ExtendedClock({template: 'h:m:s', precision: 2000})
newClock.start();
newClock.stop();



//Exercise 3.11

class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = "FormatError";
    }
  };

let err = new FormatError("Formatting Error");
console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack
console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true (because inherits from SyntaxError)


  
//Exercise 3.12

function delay(ms) {
    return new Promise(function(resolve){setTimeout(resolve, ms)} )
};

delay(3000).then(() => console.log('runs after 3 seconds'));




//Exercise 3.13


function loadJson(url) {
    return fetch(url)
    .then(response => {
    if (response.status == 200) {
    return response.json();
    } else {
    throw new Error(response.status);
    }
    });
   }

loadJson('no-such-user.json')
    .catch(alert); // Error: 404
 

import fetch from 'node-fetch'
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
         return await response.json();
    } 
    else {
        throw new Error(response.status);
    } 
};
loadJson('https://jsonplaceholder.typicode.com/posts/1')
    .then((message) => console.log(message))
    .catch(console.log); // Error: 404

//Lab Completed