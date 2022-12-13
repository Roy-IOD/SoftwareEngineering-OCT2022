
//1.

// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter.decrease());

// console.log(counter2());
// console.log(counter2());

// //2.

// function makeCounter() {
//         let count = 0;

//         return function counter() {
//             counter.set = function(resetValue){count =resetValue} // = (resetValue) => count = resetValue;
//             counter.decrease = function(){count--;} // = () => count--;

//             return count++;
//         };
//     }
    
//     let counter = makeCounter();
//     let counter2 = makeCounter();
    
//     console.log(counter());
//     console.log(counter());
//     console.log(counter());
//     counter.set(10);
//     counter.decrease();
//     counter.decrease();
//     console.log(counter());

// // //3. SetInterval

// function printNumbers(from, to){ 
//     let number = from;

//     let cycle = setInterval(function() {
//         console.log(number);
//         if (number == to){
//             clearInterval(cycle);
//         } else {
//         number++;
//         }},1000);
//     }   

// printNumbers(1, 7)


// //SetTimeout

// function printNumbers2(from, to){
//     let number = from;

//     setTimeout(function tick(){
//         console.log(number);
//         if (number < to){
//             setTimeout(tick, 1000);
//         }
//         number++;
//     },1000);
// }

// printNumbers2(1,5)

//4. 

// let f = str => console.log(str)

// f = debounce(f, 1000);
// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 5000);
// let intervalTimer = setInterval(() => f("e"), 50)
// setTimeout(() => clearInterval(intervalTimer), 3 * 1000);

// function debounce(func, ms) {
//     let timeout;
//     return function(msg) {
//         clearTimeout(timeout);

//         timeout = setTimeout(() => func(msg), ms);
//     };
// }

    
// //5.

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//     }
//     let user = {
//     name: 'John',
//     login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//     };

// askPassword(() => user.login(true), () => user.login(false));

//6. 

// let head = {
//     glasses: 1
//     };

// let table = {
//     pen: 3,
//     __proto__: head
//     };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: head
//     };

// let pockets = {
//     money: 2000,
//     __proto__: head
//     };

// //test
// console.time("pockets.glasses test")
// console.log(pockets.glasses)
// console.timeEnd("pockets.glasses test")

// console.time("head.glasses test")
// console.log(head.glasses)
// console.timeEnd("head.glasses test")

// //7.

// function Obj(func){
//     this.func = func;
//     console.log(func)
// }


// let obj = new Obj("func");

// let obj2 = new obj.constructor("func also")


// //8.

// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(...funcarg) {
//       setTimeout(() => f.apply(this, funcarg), ms);
//     }
//   };

//   function f(a, b) {
//     console.log( a + b );
//   }
  
//   f.defer(1000)(1, 2);
//   f.defer(2000)(50, 60);


// //9.

// let dictionary = Object.create(null, {
//     toString: {
//         value(){
//             return Object.keys(this).join();
//         }
//     }
// });



// // add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

// // your toString in action
// console.log(dictionary); // "apple,__proto__"


// //10.

// class Clock {
// constructor({ template }) {
//     this.template = template;
//     }
// render() {
//     let date = new Date();
    
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;
    
//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;
    
// let output = this.template
//     .replace('h', hours)
//     .replace('m', mins)
//     .replace('s', secs);

//     console.log(output);
// }

// stop() {
//     clearInterval(this.timer);
//     }

// start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// class ExtendedClock extends Clock {
//     constructor(template){
//         super(template);
//         console.log(template)

//         let precision = template.precision ? template.precision : 1000
//         console.log(precision)
//         }
//         start() {
//             this.render();
//             this.timer = setInterval(() => this.render(), this.precision);
//         }
// };

// let time = new ExtendedClock({template: 'h: m : s'});

// time.start();

// //11.

// class FormatError extends SyntaxError {
//     constructor(message) {
//       super(message);
//       this.name = this.constructor.name;
//     }
//   }
  
//   let err = new FormatError("formatting error");
  
//  console.log( err.message ); // formatting error
//  console.log( err.name ); // FormatError
//  console.log( err.stack ); // stack
  
//  console.log( err instanceof SyntaxError ); // true

// //12.

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
  
// }

// delay(3000).then(() => console.log('runs after seconds'));

//13.
import fetch from 'node-fetch'
async function loadJson(url) { 
    let response = await fetch(url); 
  
    if (response.status == 200) {
      let json = await response.json(); 
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('https://jsonplaceholder.typicode.com/myposts')
    .then((message) => console.log(message))
    .catch(console.log); 