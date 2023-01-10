// Task 1
// Yes they are independent
function makeCounter() {
    let count = 0;

    // Task 1
    // return function () {
    //     return count++;
    // };

    // Task 2
    function counter() {
        return count++;
    }

    counter.set = value => count = value;      // Create function for set
    counter.decrease = () => count--;          // Create function for decrease

    return counter;
}

let counter = makeCounter();
let counter2 = makeCounter();

// Task 2 Modify task 1

// Task 3 Output number every second

function printNumbers(initialNum, seconds) {
    let current = initialNum;
    let timerId = setInterval(function () {
        console.log(current);
        if (current == seconds) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);

    // Set timeout function
    // setTimeout(function go() {
    //     alert(current);
    //     if (current < seconds) {
    //         setTimeout(go, 1000);
    //     }
    //     current++;
    // }, 1000);
}

printNumbers(5, 10);

// Task 4

let f = str => console.log(str);
f = debounce(f, 1000);
f("a");
setTimeout(() => f("b"), 200)
setTimeout(() => f("c"), 500)

function debounce(func, ms) {
    let timeout;
    return function (msg) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(msg), ms);
    };
}

// Task 5

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(
    () => user.login(true),     // Call comparison if true
    () => user.login(false)     // Call comparison if false
);

// Task 6 searching algo

let head = { glasses: 1 };
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

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

// Task 7

// Correct example
function Planet(name) {
    this.name = name;
}

let obj = new Planet('Moon');
let obj2 = new obj.constructor('Sun');

alert(obj2.name);

// Does not work
function User(name) {
    this.name = name;
}
User.prototype = {}; // (*)

let user2 = new User('John');
let user3 = new user.constructor('Pete');

alert(user3.name); // undefined

// Task 8

Function.prototype.defer = function (ms) {
    let myVariable = this;
    return function (...args) {
        setTimeout(() => myVariable.apply(this, args), ms);
    }
};

function myFunction(a, b) {
    console.log(a + b);
};

myFunction.defer(1000)(1, 2);

// Task 9

let dictionary = Object.create(null, {
    toString: { // define toString property
        value() { // the value is a function
            return Object.keys(this).join();
        }
    }
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple and __proto__ is in the loop
for (let key in dictionary) {
    alert(key);
}

// comma-separated list of properties by toString
alert(dictionary); // "apple,__proto__"

// Task 10

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
    constructor(options) {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};