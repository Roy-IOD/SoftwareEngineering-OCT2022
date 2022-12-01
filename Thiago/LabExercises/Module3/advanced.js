// //1

// function makeCounter() {
//      let count = 0;
//      return function() {
//     return count++;
//     };
//    }
//     let counter1 = makeCounter();
//     let counter2 = makeCounter();

//  console.log( counter1() ); // 0
//  console.log( counter2() ); // 0
   
//  // 2

// function makeCounter() {
//   let count = 0;
//  function counter() {
//       return count++;
//   };
//   counter.set = function(resetValue) {
//       count = resetValue
//   };
//   counter.decrease = function() {
//       count--;
//   };
//   return counter
  
// }
// let counter = makeCounter();
// counter.set(6);
// counter.decrease(); 
// console.log(counter()); 


// // 3

//  function printNumbers (from, to) {
//     let counter = from;
//     let intervalNumb = setInterval ( function numbers() {
//   console.log(counter++);
//   if (counter > to) {clearInterval(intervalNumb)}
//    }, 1000)
//  }
//  printNumbers(1, 10)
 
//  // 4

// let f = str => console.log(str);
// f = debounce(f, 1000);
// f("a");
// setTimeout( () => f("b"), 200)
// setTimeout( () => f("c"), 500)
// function debounce(func, ms) {
//     let timeout;
//     return function(msg) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func(msg), ms);
//     };
// }

// // 5
// //const prompt = require("prompt-sync")();
// //copy the above line and run 'npm init' (accept all defaults) and then 'npm install prompt-sync' to get the prompt function working in node.js

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
//  }
//  let user = {
//   name: 'John',
//   login(result) {
//   console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
//  };
//  askPassword(() => user.login(true), () => user.login(false));


// // 6

// let head = {
//   glasses: 1
// };
// let table = {
//   pen: 3,
//   __proto__: head
// };
// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };
// let pockets = {
//   money: 2000,
//   __proto__: bed
// };
// console.time("pocket.glasses test")
// console.log(pockets.glasses)
// console.timeEnd("pocket.glasses test")
// // Average Time: 3.5ms
// console.time("head.glasses test")
// console.log(head.glasses)
// console.timeEnd("head.glasses test")
// // Average Time: 0.15ms
// //head.glasses is faster because the code doesnt have to go through each proto variable

// // 7

// //This constructor function works
// function Person(name) {
//   this.name = name;
//   console.log(name)
// }
// let person1 = new Person("Thiago")
// let person2 = new person.constructor("Taujiro");

// //This constructor function doesn't work
// function Person(name) {
//   this.name = name;
//   console.log(name)
// }
// Person.prototype = {}
// let person3 = new Person("Jo")
// let person4 = new person.constructor("Batkin");

// 8

// Function.prototype.defer = function(ms) {
//   let myFunction = this;
//   return function(...args){
//     setTimeout(() => myFunction.apply(this, args), ms);
// }
// };

 // function myFunction (a, b) {
 //   console.log( a + b );
 // };

 // myFunction.defer(1000)(1, 2); // shows 3 after 1 second

 // 9

// let dictionary = Object.create(null, {
//   toString: { // define toString property
//     value() { // the value is a function
//       return Object.keys(this).join();
//     }
//   }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// apple and __proto__ is in the loop
// for(let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

 // comma-separated list of properties by toString
// console.log(dictionary); // "apple,__proto__

 // 10

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//     }

//    render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//      let mins = date.getMinutes();
//      if (mins < 10) mins = '0' + mins;

//      let secs = date.getSeconds();
//      if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//      .replace('m', mins)
//      .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//      clearInterval(this.timer);
//    }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//    }
// }

// class ExtendedClock extends Clock {
//   constructor( template ) {
//    super(template)
//    //console.log(template)

//    let precision  = template.precision ? template.precision : 1000
//    console.log(precision)
//     this.precision = precision
    
// }

//   start() {
//    this.render();
//    this.timer = setInterval(() => this.render(), this.precision);
//    }
//  }

//  let extClock = new ExtendedClock({template: 'h : m : s', precision: 5000}) extClock.start()

// 11

// let err = new FormatError("formatting error");

// console.log( err.message ); // formatting error
// console.log( err.name ); // FormatError
// console.log( err.stack ); // stack

// console.log( err instanceof FormatError ); // true
// console.log( err instanceof SyntaxError ); // true (because inherits from SyntaxError)

// class FormatError extends SyntaxError {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// let err = new FormatError("formatting error");

// console.log( err.message ); // formatting error
// console.log( err.name ); // FormatError
// console.log( err.stack ); // stack

// console.log( err instanceof SyntaxError ); // true

 // 12

//  function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

//  delay(3000).then(() => console.log('runs after 3 seconds'));

// 13

// import fetch from 'node-fetch'

// async function loadJson(url) { 
//    let response = await fetch(url); 
  
//     if (response.status == 200) {
//      let json = await response.json(); 
//      return json;
//      }
  
//      throw new Error(response.status);
//    }
  
//   loadJson('https://jsonplaceholder.typicode.com/myposts/')
//   .then(json => console.log(json))
//   .catch(console.log); // Error: 404 (4)
