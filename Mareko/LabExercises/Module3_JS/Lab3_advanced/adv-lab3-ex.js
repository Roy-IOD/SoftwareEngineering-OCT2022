//3.1

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1

// console.log( counter2() ); // ? = 0
// console.log( counter2() ); // ? = 1
// console.log( counter2() ); // = 2
// console.log( counter2() ); // = 3
// console.log( counter2() ); // = 4
// console.log( counter2() ); // = 5

//3.2

function makeCounter2() {
    let count = 0;

    function counterA() {
        return count++;
    };

    counterA.set = function(resetValue) { count = resetValue;}
    counterA.decrease = function() { count--;}

    return counterA
}

let counter3 = makeCounter2();

counter3.set(10)
counter3.decrease(4)

//console.log (counter3())

//3.3

// 1. Using setInterval.

function printNumbers (from, to) {
    let counter = from;
    let intervalTest = setInterval(function numbers() {
        console.log('number count ' + counter++);
        if (counter > to) {clearInterval(intervalTest)}
    }, 1000)
}

//printNumbers(6, 21)

// 2. Using nested setTimeout.


function printNumbersCopy (from, to) {
    let counterCopy = from
    let counterId = setTimeout(function count() {
        console.log('count ' + counterCopy++);
        counterId = setTimeout(count, 1000);
        if (counterCopy > to) {clearTimeout(counterId)}
        }, 1000);

}

//printNumbersCopy(22,27)

//3.4

let f = str => console.log(str)
f = debounce(f, 1000)

//f("a");
//setTimeout( () => f("b"), 200);
//setTimeout( () => f("c"), 500);

function debounce(func, ms){
    let timeout;
    return function(msg) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(msg), ms);
    };
}


//3.5

const prompt = require('prompt-sync')();

function askPassword(ok, fail) {
    let password = prompt("Password? ", '');
    if (password == "rockstar") ok();
    else fail();
}
    
let user = {
    name: 'John',
    login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }   
};
    
//askPassword(() => user.login (true), () => user.login(false) );

//3.6

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

// console.log(pockets.pen);
// console.log(bed.glasses);

    // 3.6B
    // console.time(pockets.glasses)
    // console.timeEnd(pockets.glasses)

    // console.time(head.glasses)
    // console.timeEnd(head.glasses)
    
    //head.glasses is faster than pockets.glasses


//3.7

function Team(name){
    this.name = name;
}

let team = new Team('Manchester United');
let team2 = new team.constructor('Liverpool'); //let obj2 = new obj.constructor();

//console.log(team2.name)

//3.8



//3.9



//3.10
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
}

class ExtendedClock extends Clock {
    constructor(template) {
        super(template)
    }
}

let extClock = new ExtendedClock({template: 'h:m:s', precision: 2000})
//extClock.start()


//3.11
class FormatError extends SyntaxError {
    constructor(message){
        super(message);
        this.name = this.constructor.name; 
    }
}

let err = new FormatError("formatting error");
// console.log( err.message ); // formatting error
// console.log( err.name ); // FormatError
// console.log( err.stack ); // stack
// console.log( err instanceof FormatError ); // true

// console.log( err instanceof SyntaxError ); // true (because inherits from SyntaxError)

//3.12

function delay(ms) { 
    let promise = new Promise(function(resolve, reject) {
        resolve = setTimeout(resolve, ms);
        reject = null
    });
    return promise
}
//delay(1000).then(() => console.log('runs after 3 seconds'));

//3.13

// import fetch from 'node-fetch'

// async function loadJson(url) {
//     return fetch(url)
//     .then(response => {
    
//         if (response.status == 200) {
//     return response.json();
//     } else {

//     throw new Error(response.status);
//     }
//     });
// }

//     loadJson('https://jsonplaceholder.typicode.com/posts/1')
//     .catch(alert); // Error: 404


async function loadJson(url) {
    let response = await fetch(url)
        if (response.status == 200){
            return await response.json();
        } else {
            throw new Error(response.status);
        }
}

loadJson()
    .then