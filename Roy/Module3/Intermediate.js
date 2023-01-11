// Exercise 2.1 Uppercase the first character
// Write a function ucFirst(str) that returns the string str with the capitalized first character, for instance:
function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
};

console.log(ucFirst("reggie"));

// Exercise 2.2 Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "...", to make its length equal to maxlength.

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '...' : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

// Exercise 2.3 Array operations

let arrayStyles = ["Jazz", "Blues"];
//Adds Rock'n'Roll to end
arrayStyles.push("Rock'n'Roll");
console.log(arrayStyles)
//Replaces value in the middle
arrayStyles[Math.floor((arrayStyles.length - 1) / 2)] = "Classics";
console.log(arrayStyles)
//Takes off first value of strin
console.log(arrayStyles.shift());
console.log(arrayStyles)
//Adds Rap and Reggae to beginning of array
arrayStyles.unshift("Rap", "Reggae");
console.log(arrayStyles)


//Exercise 2.4

function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        ).join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("background-color")); // == 'backgroundColor')


//Exercise 2.5

// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };

//     this.calculate = function (str) {
//         // Define the function ( a + b )
//         let split = str.split(' '),     // Split them based on ' ' 
//             a = +split[0],              // First number
//             operator = split[1],        // Operator
//             b = +split[2];              // Second number

//         if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
//             return NaN;                 // If any of them is empty return NaN
//         }
//         return this.methods[operator](a, b);
//     };

//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }

// let powerCalc = new Calculator();

// powerCalc.addMethod("*", (a, b) => a * b);      // Multiplication
// powerCalc.addMethod("/", (a, b) => a / b);      // Division
// powerCalc.addMethod("**", (a, b) => a ** b);    // To the power

// let result = powerCalc.calculate("2 - 3");
// alert( result ); 

// Exercise 2.6

let arr = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));


//Exercise 2.7

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
// Error: keys.push is not a function
keys.push("more");
console.log(keys);


//Exercise 2.8

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);

// Check if messages [] has been read
console.log("Read message 2: " + readMessages.has(messages[2]));


//Exercise 2.9

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Roy": 500
};

console.log("Total salaries " + sumSalaries(salaries));


//Exercise 2.10

function topSalaries(salaries) {
    let top = 0;
    for (let salary of Object.values(salaries)) {
        if (salary > top) {
            top = salary;
        }
    }
    return top;
}

console.log("Top Salary: " + topSalaries(salaries));

//Exercise 2.11

function getSecondsToday() {
    let now = new Date();
    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
}

console.log("Seconds today: " + getSecondsToday());

//Exercise 2.12

let room = { number: 23 };

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room         // Referemce room number from above
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log((JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
})));