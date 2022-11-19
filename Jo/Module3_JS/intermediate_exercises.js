//Data types and conversions
console.log('Data Types & Conversions (numbers):')
const n = 1.23456;
const number_n = n.toFixed(2) //special method that works on primitive types
const object_n = new Number(1.23456).toFixed(2) //because internally it really does this and uses an Object wrapper

console.log(number_n) //1.23
console.log(object_n) //1.23
console.log(number_n == object_n) //true

console.log('\nData Types & Conversions (strings):')

const str = 'hello world';
console.log(str.toUpperCase() === (new String(str)).toUpperCase()); // we can explicitly create a wrapper

console.log('\nData Types & Conversions (objects):')

const user = {
    name: 'John',
    toString() {
        return this.name;
    }
}
console.log( 'hello ' +user )

const shoes = {
    price: 100,
    valueOf() {
        return this.price;
    }
};
console.log( shoes*3 ); //300

console.log('\nData Types & Conversions (big numbers):')

const billion1 = 1000000000;
const billion2 = 1_000_000_000; //same thing, just more readable
const billion3 = 1e9; //exponential format

console.log(billion1 === billion2) //true
console.log(billion2 === billion3) //true

console.log('\nData Types & Conversions (decimals):')

//using decimal numbers in javascript can lead to unexpected problems
//http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html explains it well

let point2 = 0.2
let point1 = 0.1

console.log(`${point1} + ${point2} = ${point1 + point2}`)

let fixedpoint1 = point1.toFixed(2);
let fixedpoint2 = point2.toFixed(2);

console.log('using toFixed creates a '+ typeof fixedpoint1)
console.log(`${fixedpoint1} + ${fixedpoint2} = ${fixedpoint1 + fixedpoint2}`)

//one way to get around this is to multiply all numbers by a common factor, eg. turn dollars into cents by multiplying by 100
console.log(`${point1*100} + ${point2*100} == ${0.3*100}`)

//takes two decimal (floating point) numbers, does the operation and keeps the required number of decimals
function safeDecimalOperation(float1, float2, operation = '+', numDecimals = 2) //sets some default values for arguments
{
    console.log(`Doing safe decimal operation : ${float1} ${operation} ${float2} with ${numDecimals} decimal places`)

    let factor = 10**numDecimals; //exponential, so for numDecimals=2, would be 10*10
    let result = 0;

    //use a switch when you want to check a variable for a number of different possible values
    switch (operation) {
        case '+': result = (float1*factor) + (float2*factor); break;
        case '-': result = (float1*factor) - (float2*factor); break;
        case '/': result = (float1*factor) / (float2*factor); break;
        case '*': result = (float1*factor) * (float2*factor); break;
    }

    console.log(`Used a factor of ${factor} to get result of ${result}`)

    //now round off any remaining decimals and divide by the same factor you multiplied by
    return Math.round(result) / factor;
}

console.log(`${point1} + ${point2} = ${safeDecimalOperation(point1,point2)}`)
console.log(`${1/3} + ${3.14159} = ${safeDecimalOperation(1/3,3.14159)}`)


console.log('\nData Types & Conversions (NaN and parsing):')

let notanumber = "not a number"

let invalidResult = notanumber / 7

console.log('isNaN(invalidResult) = ' +isNaN(invalidResult))

console.log(parseInt('100px'));// 100
console.log(parseInt('12.5em'));// 12.5
console.log(parseFloat('12.3.4')); //12.3
console.log(parseInt('a123')); // NaN

console.log('\nEscaping characters in strings:')

const guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList)

console.log('\nArray functions:')

const fruits = ["Apple", "Orange", "Pear"];
let lastFruit = fruits.pop(); // remove "Pear"
console.log('last fruit is '+lastFruit)
console.log( fruits ); // Apple, Orange
fruits.push(lastFruit)
console.log( fruits ); // Apple, Orange

let firstFruit = fruits.shift()
console.log('first fruit is '+firstFruit)
console.log(fruits)
fruits.unshift(firstFruit)
console.log(fruits)

console.log('\nDeconstructing:')

const arr = ["John", "Smith"]
const [firstName, surname] = arr;
console.log(firstName); // John
console.log(surname); // Smith

const [apple, orange, pear] = fruits;
console.log(apple)

// changed the order in let {...}
let { height, width, title } = { title: "Menu", height: 200, width: 100 };

console.log(height)

const options = {
     width: 100,
     height: 200
};
const { width: w, height: h } = options;

console.log(w)
console.log(h)
    
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    console.log( `${title} ${width} ${height}` ); // My Menu 200 100
    console.log( items ); // Item1, Item2
}
options.title = 'My Menu'
options.items = ['Item1', 'Item2']
showMenu(options);

console.log('\nDates:')

const today = new Date()
const birthday = new Date('1981-05-02') 

console.log(`I am ${today.getFullYear() - birthday.getFullYear()} years old`)

console.log(`I am ${today.getFullYear() - birthday.getFullYear()} years, ${today.getMonth() - birthday.getMonth()} months, ${today.getDate() - birthday.getDate()} days old`)

console.log('\nJSON stringify/parse:')

const userTest = {
    sayHi() { console.log("Hello");},
    [Symbol("id")]: 123,
    something: undefined
};
    
let jsonString = JSON.stringify(userTest, function(key, value) {
    console.log(key)
    console.log(value)

    if( typeof value === 'function') {
        return value.toString();
    }
    if( typeof value === 'undefined' ) {
        return ''; // convert undefined value to empty string
    }
    return value;
});

console.log(jsonString)
console.log(JSON.stringify(userTest))

console.log(typeof JSON.parse(jsonString))