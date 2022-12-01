// const date = Date.now();

// console.log(date)

// const myBirthday = new Date('January 2, 1984');
// const myBirthday2 = new Date('1984-01-02');
// const myBirthday3 = new Date(1984, 00, 02);
// const myBirthday4 = new Date(1984, 01, 02, 4, 30, 0);
// const myBirthday5 = new Date(628021800000);

// console.log(myBirthday)
// console.log(myBirthday2)
// console.log(myBirthday3)
// console.log(myBirthday4)
// console.log(myBirthday5)

// const todaysDate = new Date();

// console.log('Today is ' + todaysDate)

// 2. Intermediate

//1. 
function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(ucFirst("capitalised"));

//2. Truncate the text

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let shortString = str.substring(0, maxlength);
        shortString = shortString + '…';
        return shortString;
    } else {
        let fullString = str;
        return fullString;
    }
}
console.log(truncate("What I want to talk about is the fact that",28))
 

//3. Array Operations. 

const styles = ["Jazz", "Blues"];
console.log(styles)
styles.push("Rock-n-roll");
console.log(styles)
styles.splice(1, 1, "Classics"); // "your code for finding the middle value should work for any arrays with odd length"
console.log(styles)
styles.shift(0);
console.log(styles)
styles.unshift("Rap", "Reggae");
console.log(styles)

//4. Translate border-left-width to borderLeftWidth

function camelize(str) {
     return str
     .split("-")
     .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
     )
     .join(""); //write out this function as a longhand function to understand better
 }

 console.log(camelize("border-left-width"))

 // I don't understand any of the above or how it's constructed!!



// Question 5. Look at bottom of fundamental_exercises in Jo's VScode - PersonConstructor is good example, properties and a function
// I followed along with this but I'm not sure exactly what is going on here and it's still not working properly anyway so :-/

function Calculator() {
    this.methods={
        '-':(x,y)=>x - y,
        '+':(x,y)=>x + y
}


this.calculate=function(expression){
    const parts = expression.split(" ");
    const firstNumber = parseInt(parts[0]);
    const operator = parts[1];
    const lastNumber = parseInt(parts[2]);
    const func = this.methods[operator];
    return func(firstNumber, lastNumber);
}

this.addMethod=function(name,func){
    this.methods[name] = func
}
}

let calc = new Calculator();
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

let result = calc.calculate("2 * 3");

console.log(calc.calculate("7 + 9"))


//6. Filter unique array members

function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", 
"Krishna", "Krishna", "Krishna", "Hare", ":-O"
];

console.log(unique(values));

//7. Iterable keys

let map = new Map();

map.set("name", "John");
map.set("age", "25");
console.log(map.keys());
let keys = Array.from(map.keys()); // convert map.keys() into an array 

keys.push("more"); // error: keys.push is not a function. How can we fix the code to make keys.push work?

console.log(keys);

//8. Store unread flags - look at slide 52/53/54 (skip over this for now)

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

//two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMEssages has 2 elements

//...let's read the first message again!
readMessages.add(messages[0]);
//readMessages still has 2 unique elements

console.log("Read message 0: " + readMessages.has(messages[0]));


//9. Sum the properties

function sumSalaries(salaries) {
    let sum = 0; // if salaries is empty, result must be 0
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
    };

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
console.log(Object.values(salaries));
console.log(sumSalaries(salaries));

//10. The maximal salary

let salaries2 = {
    "Bruce": 300,
    "Sheila": 500,
    "Annie": 450
};

function topSalary(salaries2) {
    
    let maxSalary = 0; //if salaries is empty is should return null
    let maxName = null; //apparently maxName is not defined though??

    for (const [name, salary] of Object.entries(salaries2)) {
        console.log(name+' gets paid $' +salary)
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;

}
console.log(topSalary(salaries2));


//11. How many seconds have passed today? 

function getSecondsToday() {
    let d = new Date();

    let secondsInHours = d.getHours() * 60 * 60; //get the hour part of the current time, e.g. 15:00:00, and then muliply by 60 to get it in minutes, and again to get it in seconds
    let secondsInMinutes = d.getMinutes() * 60; //get mins part of time, then * by 60
    let seconds = d.getSeconds(); //get the seconds part of the current time

    return secondsInHours + secondsInMinutes + seconds;
}

console.log(getSecondsToday() + ' seconds have passed today');


//12. Look at json stringify slides near end - slides 74 & 75

let room = {
    number: 23
    };
    let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
    };
    // circular references
    room.occupiedBy = meetup;
    meetup.self = meetup;
    console.log( JSON.stringify(meetup, function replacer(key,
    value) {
    /* your code */
    }));
    /* result should be:
    {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
    }
    */

   console.log('\nQuestion 12:\n----------')