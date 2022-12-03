//run 'npm init' to initialise an application with npm, create a package.json file, and use various npm packages
//run 'npm install' to install a new package from npm as a dependency in package.json for use with your application (see the sentiment section below)

// Slide 82-84
console.log('Exercises on slides 82-84:')
console.log('--------------------------\n') //the \n just adds a line break

function sayHello(name) { 
    console.log('Hello ' + name);
}

//this is a function to add two numbers and return the result
function sum(a,b) {
    return a+b
}

//this is a function to subtract two numbers and return the result
function subtract(a,b) {
    return a-b
}

//this is a function to multiply two numbers and return the result
function multiply(a,b) {
    return a*b
}

//this is a function to divide two numbers and return the result
function divide(a,b) {
    return a/b
}


let addition = sum(33, 44)
let subtraction = subtract(33, 44)
let division = divide(33, 44)
let multiplication = multiply(33, 44)

console.log('addition #1: ' + addition)
console.log('subtraction #1: ' + subtraction)
console.log('division #1: ' + division)
console.log('multiplication #1: ' + multiplication)

console.log('---')

sayHello('Jo')
sayHello('Big Bird')
sayHello('Frankenstein')

console.log('---')

let addition2 = sum(5, 5) //once a function is defined/created, we can call it multiple times with different arguments
let subtraction2 = subtract(8, 88)
let division2 = divide(333, 11)
let multiplication2 = multiply(123, 45)

console.log('addition #2: ' + addition2)
console.log('subtraction #2: ' + subtraction2)
console.log('division #2: ' + division2)
console.log('multiplication #2: ' + multiplication2)


// Slide 91
console.log('\n\nExercises on slide 91:')
console.log('--------------------------\n') 

let Sentiment = require('sentiment'); // 'require' relies on 'npm install sentiment' already having been run, and the sentiment package added to package.json
let sentiment = new Sentiment();
let result = sentiment.analyze('Cats are stupid.');
console.dir(result);    // Score: -2, Comparative: -0.666

let testSentence = 'Cats are amazing and I love them, but being allergic to cat hair is stupid and I hate it.'

console.log('\nDefault analysis of test sentence:')
console.log(sentiment.analyze(testSentence))

//this function calls the sentiment analyzer internally and specifies certain custom weights for key words
function weightedAnalyze(sentence)
{
    let options = {
        extras: {
          'cats': 5,
          'amazing': 3,
          'allergic': -4,
          'hate': -5,
          'stupid': -3,
          'love': 5
        }
      };
    let result = sentiment.analyze(sentence, options);

    return result;
}

console.log('\nWeighted analysis of test sentence:')
console.log(weightedAnalyze(testSentence))


// Slide 104-105
console.log('\n\nScope exercises on slides 104-105:')
console.log('--------------------------\n') 

let helloText = "say Hi";
let helloTest;
let check = 4;

if (check > 3) { //4 is greater than 3, so the if condition is true and it will run the statements inside these curly braces
    let hello = "say Hello inside check"; //the 'hello' variable only exists within these curly braces - it has limited/local scope
    helloTest = "testing scope of hello" //this variable was declared in global scope (using 'let') so we can access it both locally and globally
    console.log(hello); // "say Hello inside check"
}
//console.log(hello) // hello is not defined here outside of the above curly braces, so it's not defined and throws a Reference Error
console.log(helloText) // helloText was defined outside of curly braces, so it has a global scope and can be accessed here
console.log(helloTest) // helloTest was defined globally and assigned a value locally, so it still works globally


let helloText2 = "say Hi"; // we declare/create the variable and assign it a value all in one go
helloText2 = "say Hello instead"; // later on we can change the value, since we didn't use const
const helloTextConst = "say Hello instead"; //we can't change the value of this one later on as it's constant
console.log(helloText2)

let hello3; //we declare this variable but don't give it a value, so it exists but is undefined
console.log(hello3)


console.log('\n\Array demonstration on slide 107:\n')

let myArray = ["hello 1", "hello 2", "hello 3"] //arrays store multiple values, using square brackets and commas

console.log(myArray[0]) //array indexing starts at 0
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3]) //this is undefined since there are only 3 elements in the array

myArray[3] = 33 // we can set values to individual array elements using the index. arrays can store different types of variables

console.log(myArray[3]) //now this has a value since we set one
console.log(myArray)


// Slide 109-114
console.log('\n\nArray exercises on slides 109-114:')
console.log('--------------------------------------\n') 

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

// Array functions push and pop work on the END of the array. shift and unshift work on the BEGINNING of the array

mountains[1] = 'Kilimanjaro' //this changes the value of the particular array element at index 1
mountains.push('Kosciusko') //adds a new element to the end of the array

console.log(mountains)

let lastMountain = mountains.pop() //removes the last element of the array and returns it
console.log('last mountain = '+lastMountain)
console.log(mountains)
console.log('index of everest: '+mountains.indexOf('Everest')) //0 is the first index

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);
seas.unshift('Red Sea') //adds a new element to the start of the array
console.log(seas)
seas.push('Adriatic') //adds a new element to the end of the array
console.log(seas)

let firstSea = seas.shift() //removes the first element of the array and returns it
console.log('first sea = ' + firstSea)
console.log(seas)
console.log('index of north sea: '+seas.indexOf('North Sea'))
