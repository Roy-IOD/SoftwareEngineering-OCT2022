// console.log('Hello World');

// function helloName(name){
//     console.log ('Hello ' + name)
// }

// function sum1(A,B){
//     console.log (A+B)
// }

// // This is the multiplication example
// function sum2(a,b){
//     return a*b
// }

// // This is the subtraction example
// function sum3(a,b){
//     return a-b
// }

// // This is the division exanple
// function sum4(a,b){
//     return a/b
// }

// helloName("Harry")

// sum1(11,89)

// console.log(sum2(5,2))

// console.log(sum3(42,59))

// console.log(sum4(6,3))

// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
// var result = sentiment.analyze('Cats are stupid.');
// console.dir(result);    // Score: -2, Comparative: -0.666

// let helloText = "say Hi Mareko";
// let check = 4;
// if (check > 3) {

// let hello = "say Hello instead";
// console.log(hello);// "say Hello instead"
// }
// console.log(helloText) // hello is not defined

// let helloText2 = "say Hi";
// helloText2 = "say Goodbye instead";
// console.log(helloText2);

// let myArray = ["hello", "goodbye", "see you soon"]

// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])

// myArray[3] = 25

// console.log(myArray)

//PUSH EXAMPLE (add to end of array)
// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
// console.log(mountains[0]); // 'Everest'
// console.log(mountains[1]); // 'Fuji'
// console.log(mountains[2]); // 'Nanga Parbat'

// mountains[1] = 'White'
// mountains.push('Black')

// console.log(mountains)

//UNSHIFT EXAMPLE (W/PUSH) (add to beginning of ray)
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// console.log(seas);
// seas.unshift('Red Sea');
// seas.push('North Sea')
// console.log(seas);

//POP EXAMPLE (removes end of array)
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// const lastElement = seas.pop();
// console.log(lastElement);
// console.log(seas);

//SHIFT EXAMPLE (remove beginning of array)
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// const firstElement = seas.shift();
// console.log(firstElement);
// console.log(seas);

//INDEXOF EXAMPLE
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas.indexOf('North Sea');

console.log(index); // 2