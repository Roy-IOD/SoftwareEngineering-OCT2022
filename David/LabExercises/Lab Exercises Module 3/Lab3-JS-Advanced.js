const prompt = require("prompt-sync")();

//1

// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter2()); // 0
// console.log(counter2()); // 1

//2

// function makeCounter() {
//   let count = 0; //add 1 each time startign at 0
//   function counter() {
//     return count++;
//   }
//   counter.set = function (value) {
//     return (count = value);
//   };
//   counter.decrease = function () {
//     return count--;
//   };
//   return counter;
// }

// let counter = makeCounter();
// console.log(counter()); //should return the next number (as before).
// console.log(counter());
// console.log(counter());

// console.log(counter.decrease()); //should decrease the counter by 1.
// console.log(counter.decrease());
// console.log(counter.decrease());

// console.log(counter.set(12)); //should set the counter to value.

//3

// function printNumbers(from, to) {
//   let firstNumber = from; //starting number
//   let timerID = setInterval(function () //set and clear interval
//   {
//     console.log(`first function ${firstNumber}`);
//     if (firstNumber == to) {
//       clearInterval(timerID);
//     }
//     firstNumber++;
//   }, 1000);
// }

// printNumbers(1, 5);

// function printNumbers2(from, to) {
//   let firstNumber = from;
//   setTimeout(function start() {
//     console.log(`second function ${firstNumber}`);
//     if (firstNumber < to) {
//       setTimeout(start, 1000);
//     }
//     firstNumber++;
//   }, 1000);
// }

// printNumbers2(1, 5);

//4

// let f = (str) => console.log(str); //this is just any random function

// f = debounce(f, 1000); // replacing the function (from the question)

// function debounce(func, ms) {
//   let timerID;

//   return function (str) {
//     clearTimeout(timerID);
//     timerID = setTimeout(() => func(str), ms);
//   };
// }

// f("a"); //will not log
// setTimeout(() => f("b"), 200); //will not log
// setTimeout(() => f("c"), 500); //only c should log - last thing ti run before the timeout at 1000ms

//5

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "John",
//   login(result) {
//     console.log(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(
//   () => user.login(true),
//   () => user.login(false)
// );

//6

// let head = {
//   glasses: 1
//  };

//  let table = {
//   pen: 3,
//   __proto__:head
//  };

//  let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__ : table
//  };

//  let pockets = {
//   money: 2000,
//   __proto__ : bed
//  };

//  console.log(pockets.pen) //3
//  console.log(bed.glasses) //1

//  console.time('pocket.glasses time')
//  console.log(pockets.glasses)
//  console.timeEnd('pocket.glasses time') //slower

//  console.time('head.glasses time')
//  console.log(head.glasses)
//  console.timeEnd('head.glasses time') //quicker

//7

// function Name(name) {
//   this.name = name;
// }

// let obj = new Name("John");
// let obj2 = new obj.constructor("Pete");

// console.log(obj.name); //John
// console.log(obj2.name); //Pete

//8

Function.prototype.defer = function (ms) {
  let functionContext = this;
  return function (...args) {
    setTimeout(() => functionContext.apply(this, args), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}
f.defer(1000)(1, 2); // shows 3 after 1 second

//9

// let dictionary = Object.create(null, {   // your code to add dictionary.toString method

// });

// // add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop
// for (let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

// // your toString in action
// console.log(dictionary); // "apple,__proto__"

//10

//how to inherit from a class - extend keyword - / change how often the clock ticks

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }
//   render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;
//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;
//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;
//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);
//     console.log(output);
//   }
//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//     constructor(template, precision) {
//         super(template);
//         this.precision = precision;
//     }
// }

//11

//create new FormatError that inherits / class extends keywords / should be its own formatError

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}

let err = new FormatError("formatting error");
console.log(err.message); // formatting error
console.log(err.name); // FormatError
console.log(err.stack); // stack
console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (because inherits from SyntaxError)

//12

//uses promises
//return promise and then call it

//13

//uses promises
//async and await

