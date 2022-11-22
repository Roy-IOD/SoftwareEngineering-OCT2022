//the below examples and explanations only apply to const and let variables. var is another story, best avoided.
//see https://javascript.info/closure for more info

//variable scope examples
//-----------------------
console.log('\nVariable scope:\n')

//any variable created outside of curly brackets is in global scope, available to all functions/closures
let globalCat = "cat" //exists in memory as long as the script is running

function printCat()
{
    console.log(globalCat + ' inside function') 

    if (true)
    {
        console.log(globalCat + ' inside function inside if') 
    }
}

printCat();
console.log(globalCat) //works both inside and outside the function - global scope
console.log(typeof printCat)

//any variable created inside curly braces is in lexical scope, available to only other variables in that same scope

function printDog()
{
    let lexicalDog = "dog" //only exists while the function needs it, not stored in memory otherwise
    console.log(lexicalDog + ' inside function')
}

printDog();
//console.log(lexicalDog) //not defined. only works inside function - lexical scope

console.log('\nFunction scope:\n')

//gets interesting with nested functions, or 'closures' : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeNameDisplayerFunc(browserName) { //this function essentially 'makes' (or returns) another function using its parent scope
    const name = browserName;

    function displayName() {
        console.log(`My name is ${name}`);
    }
    return displayName; //returns a reference to the inner/nested function
}
  
const myMozillaFunc = makeNameDisplayerFunc('Mozilla');
myMozillaFunc();

//we could make other functions with different names:
const myChromeFunc = makeNameDisplayerFunc('Chrome');
myChromeFunc()

//function scope (closure) examples
//---------------------------------

// taken from https://builtin.com/software-engineering-perspectives/what-is-scope-closure-javascript

function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

//how to write a shorthand arrow function for the above function definitions?

const plus = (x) => (num) => num + x
const minus = (x) => (num) => num - x
const times = (x) => (num) => num * x
const dividedBy = (x) => (num) => num / x

//how to write a longhand function definition for the above shorthand arrow functions?

const dividedBy2 = function(x) {
    return function(num) {
        return num / x
    }
}

console.log(three(plus(four())))
console.log(nine(times(nine())))
console.log(six(dividedBy2(two())))
console.log(eight(minus(five())))
console.log(one(dividedBy(zero())))


//Functions in JS are effectively objects
//so we can use the dot . to set properties, pass them by reference, etc

// .name and .length always exist by default, you can use them like this:

console.log(one.name) //the name of the function
console.log(one.length) //the number of paramters in the function

//we can also add custom properties called anything we like

function sayHi() {
    console.log("Hi");
    // let's count how many times we run
    sayHi.counter++;
}
sayHi.counter = 0;
sayHi()
sayHi()
sayHi()
console.log(sayHi.counter)

//example from lab exercise 3.2
function makeCounter() {
    let count = 0;
  
    function internalCounter() {
        return count++;
    };

    internalCounter.set = function(resetValue) { count = resetValue; } // arrow function style:   (resetValue) => count = resetValue;
    internalCounter.decrease = function() { count--; } //super short arrow function!   () => count--

    return internalCounter;
}
  
let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ?
console.log( counter2() ); // ?

//Modify the code of makeCounter() so that the counter can also decrease and set the number:
//counter() should return the next number (as before).
counter.set(10) // should set the counter to value.
counter.decrease() //should decrease the counter by 1.

console.log( counter() ); // 9
console.log( counter() ); // 10