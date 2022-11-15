const n = 1.23456;
const number_n = n.toFixed(2) //special method that works on primitive types
const object_n = new Number(1.23456).toFixed(2) //because internally it really does this and uses an Object wrapper

//console.log(number_n == object_n)

const str = 'hello world';
str.toUpperCase() === (new String(str)).toUpperCase(); // we can explicitly create a wrapper

const user = {
    name: 'John',
    toString() {
    
        return this.name;
    
    }
}
//console.log( 'hello ' +user )

const apple = {
    price: 100,
    valueOf() {
        return this.price;
    }
    };
//console.log( apple*3 ); //300


const billion1 = 1000000000;
const billion2 = 1_000_000_000;
const billion3 = 1e9;

//console.log(billion1 === billion2)


//using decimal numbers in javascript can lead to unexpected problems
//http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html explains it well

let point2 = 0.2
let point1 = 0.1


//console.log(point1 + point2)

let fixedpoint1 = point1.toFixed(2);
let fixedpoint2 = point2.toFixed(2);

//console.log(typeof fixedpoint1)
//console.log( fixedpoint1 + fixedpoint2)

//console.log(point1*100 + point2*100 == 0.3*100)


let notanumber = "not a number"

let invalidResult = notanumber / 7

//console.log(isNaN(invalidResult))


console.log(parseInt('100px'));// 100
console.log(parseInt('12.5em'));// 12.5
console.log(parseFloat('12.3.4')); //12.3
console.log(parseInt('a123')); // NaN


const guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList)


const fruits = ["Apple", "Orange", "Pear"];
let lastFruit = fruits.pop(); // remove "Pear"
console.log(lastFruit)
console.log( fruits ); // Apple, Orange
fruits.push(lastFruit)
console.log( fruits ); // Apple, Orange

let firstFruit = fruits.shift()
console.log(firstFruit)
console.log(fruits)
fruits.unshift(firstFruit)
console.log(fruits)