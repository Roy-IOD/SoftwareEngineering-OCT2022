// Exercise 2.1
function ucFirst(string) { 
    return string.charAt(0).toUpperCase() + string.slice(1)
};

console.log(ucFirst("reggie"));

// Exercise 2.2

function truncate(string, maxlength) {
    if (string.length > maxlength) 
    return (string.slice(0, maxlength - 1) + '...')
    else string;
}
console.log(truncate("My name is Isaac and i am a student", 15));
   
//Or this
function truncate(string, maxlength) {
    return (string.length > maxlength) ? (string.slice(0, maxlength - 1) + '...') : string;
}
console.log(truncate("My name is Isaac and i am a student", 15));


// Exercise 2.3

let arrayStyles = ["Jazz", "Blues"];
    //Adds Rock'n'Roll to end
arrayStyles.push("Rock'n'Roll");
console.log(arrayStyles)
    //Replaces value in the middle
arrayStyles[Math.floor((arrayStyles.length - 1)/ 2)] = "Classics";
console.log(arrayStyles)
    //Takes off first value of strin
console.log(arrayStyles.shift());
console.log(arrayStyles)
    //Adds Rap and Reggae to beginning of array
arrayStyles.unshift("Rap", "Reggae");
console.log(arrayStyles)


//Exercise 2.4

function camelize(string) {
    return string.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
};
console.log(camelize("my-name-is-Isaac-Heslop"))


//Exercise 2.5

function Calculator() {

    this.methods = {
      "-": function (a, b) {
        return a - b;},
      "+": function (a, b) {
        return a + b;},
    };
  
    this.calculate = function(string) {
  
        let split = string.split(' ')
        let firstNumber = +split[0]
        let operator = split[1]
        let lastNumber = +split[2];
  
      if (!this.methods[operator] || isNaN(firstNumber) || isNaN(lastNumber)) {
        return NaN;
      }
      let operatorFunction = this.methods[operator]
      return operatorFunction(firstNumber, lastNumber);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
let myCalculator = new Calculator();
console.log(myCalculator.calculate("3 + 4"))

myCalculator.addMethod("*", function(a, b) {return a * b})
console.log(myCalculator.calculate("6 * 4"))

//Exercise 2.6

function unique(array) {
    return Array.from(new Set(array))
};

console.log(unique(["Embiid", "Jokic", "Jokic", "Embiid", "Bones", "Tyrese", "Tyrese", "Bones"]));


//Exercise 2.7

let map = new Map(); 
map.set("name", "John");
let keys = Array.from(map.keys()); 
keys.push("more");
console.log(keys)


//Exercise 2.8

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
console.log("Was it read?: " +readMessages.has(messages[0]));
messages[0] = null;
console.log("Was it read?: " +readMessages.has(messages[0]));


//Exercise 2.9

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
    };

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
console.log(sumSalaries(salaries))


//Exercise 2.10

 const maxSalaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}; 

function topSalary(maxSalaries) {
    let maxSalary = 0;
    let topName = null;

    for (let [name, salary] of Object.entries(maxSalaries)) {
    if (maxSalary < salary) {
        maxSalary = salary;
        topName = name;
    }}
    return topName;
};
console.log(topSalary(maxSalaries));

//Exercise 2.11

function getSecondsToday() {
    let currentTime = new Date();
    let todaysTime = new Date(currentTime.getFullYear() + currentTime.getMonth() + currentTime.getDate());
    let timeDifference = currentTime.getTime() - todaysTime.getTime();
    return timeDifference / 1000;
}

console.log(getSecondsToday());

//Exercise 2.12

let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;


console.log(JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup) 
    return undefined;
    else return value;
}));