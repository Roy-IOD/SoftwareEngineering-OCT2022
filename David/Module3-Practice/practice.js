// // console.log('hello'); console.log('world');

// // console.log('hello')
// // console.log('world')

// // console.log('world'); // This comment follows the statement

// // /* commenting out the code block
// //  function foo() {
// //  alert('i am commented out');
// //  }
// // */

// // console.log( 1/0 ); // Infinity
// // console.log( -1/0 ); // -Infinity
// // console.log( "not a number" / 2 ); //NaN, such division is erroneous

// // const bigInt = 123456789012345678912345n;
// // console.log (bigInt);

// // console.log (typeof undefined) // "undefined"
// // console.log(typeof 0) // "number"
// // console.log(typeof 10n) // "bigint"
// // console.log(typeof true) // "boolean"
// // console.log(typeof "foo") // "string"
// // console.log(typeof Symbol("id")) // "symbol"
// // console.log(typeof Math) // "object"
// // console.log(typeof null) // "object"
// // console.log(typeof console) // "function"

// // function returnUndefined() {
// //     return;
// // }

// // console.log(returnUndefined)

// // function checkAge(age) {
// //     if ( age > 18 ) {
// //     return 'adult';
// //      }
// //     return 'non-adult';
// // }

// // console.log(checkAge(7))
// // console.log(checkAge(29))

// // const sayHi = function () {
// //     console.log('Hello');
// //    }

// // sayHi('John'); // Hello, John
// // function sayHi (name) {
// //  console.log( `Hello, ${name}`);
// // }

// // sayHi('John'); // error
// // const sayHi = function (name) {
// //  console.log( `Hello, ${name}`);
// // }

// // const sum = function(a, b) {
// //     return a + b;
// //    };

// // const sum = (a, b) => a + b;

// // console.log(sum(2,4))




// function getColor(phrase){
//    if (phrase === 'stop') {
//    console.log('red')
//    }  else if (phrase === 'slow'){
//        console.log('yellow')
//    }   else if (phrase === 'go'){
//        console.log('green')
//    }   else console.log('purple')
// }

// getColor('stop')
// getColor('slow')
// getColor('go')
// getColor('speed')


// create an object called dog, with properties for name, breed, colour, age, and a function or two to do things like print a message
// then create a constructor function version, and a class version, and use them to create some different dogs



// const dog = {
//     name : 'Bluey',
//     breed : 'Sheep Dog',
//     color : 'Blue',
//     age: '3',
//     greeting: function() {
//         console.log(`This is a  ${ this.breed } named ${ this.name }.`);
//     }
// }


// delay function

// const delay = (func, ms) => {
//     return function (message) {
//         setTimeout (func, ms, message)
//     }
// }

// const hello = ( who2 ) => console.log ('Hello ' + who2 );
// const delayHello = delay(hello, 5000);
// delayHello('world2');

