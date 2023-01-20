// //the below examples and explanations only apply to const and let variables. var is another story, best avoided.
// //see https://javascript.info/closure for more info

// //variable scope examples
// //-----------------------
// console.log('\nVariable scope:\n')

// //any variable created outside of curly brackets is in global scope, available to all functions/closures
// let globalCat = "cat" //exists in memory as long as the script is running

// function printCat()
// {
//     console.log(globalCat + ' inside function')

//     if (true)
//     {
//         console.log(globalCat + ' inside function inside if')
//     }
// }

// printCat();
// console.log(globalCat) //works both inside and outside the function - global scope
// console.log(typeof printCat)

// //any variable created inside curly braces is in lexical scope, available to only other variables in that same scope

// function printDog()
// {
//     let lexicalDog = "dog" //only exists while the function needs it, not stored in memory otherwise
//     console.log(lexicalDog + ' inside function')
// }

// printDog();
// //console.log(lexicalDog) //not defined. only works inside function - lexical scope

// console.log('\nFunction scope:\n')

// //gets interesting with nested functions, or 'closures' : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// function makeNameDisplayerFunc(browserName) { //this function essentially 'makes' (or returns) another function using its parent scope
//     const name = browserName;

//     function displayName() {
//         console.log(`My name is ${name}`);
//     }
//     return displayName; //returns a reference to the inner/nested function
// }

// const myMozillaFunc = makeNameDisplayerFunc('Mozilla');
// myMozillaFunc();

// //we could make other functions with different names:
// const myChromeFunc = makeNameDisplayerFunc('Chrome');
// myChromeFunc()

// //function scope (closure) examples
// //---------------------------------

// // taken from https://builtin.com/software-engineering-perspectives/what-is-scope-closure-javascript

// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}

// //how to write a shorthand arrow function for the above function definitions?

// const plus = (x) => (num) => num + x
// const minus = (x) => (num) => num - x
// const times = (x) => (num) => num * x
// const dividedBy = (x) => (num) => num / x

// //how to write a longhand function definition for the above shorthand arrow functions?

// const dividedBy2 = function(x) {
//     return function(num) {
//         return num / x
//     }
// }

// console.log(three(plus(four())))
// console.log(nine(times(nine())))
// console.log(six(dividedBy2(two())))
// console.log(eight(minus(five())))
// console.log(one(dividedBy(zero())))

// //Functions in JS are effectively objects
// //so we can use the dot . to set properties, pass them by reference, etc

// // .name and .length always exist by default, you can use them like this:

// console.log(one.name) //the name of the function
// console.log(one.length) //the number of paramters in the function

// //we can also add custom properties called anything we like

// function sayHi() {
//     console.log("Hi");
//     // let's count how many times we run
//     sayHi.counter++;
// }
// sayHi.counter = 0;
// sayHi()
// sayHi()
// sayHi()
// console.log(sayHi.counter)

// //example from lab exercise 3.2
// function makeCounter() {
//     let count = 0;

//     function internalCounter() {
//         return count++;
//     };

//     internalCounter.set = function(resetValue) { count = resetValue; } // arrow function style:   (resetValue) => count = resetValue;
//     internalCounter.decrease = function() { count--; } //super short arrow function!   () => count--

//     return internalCounter;
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1

// console.log( counter2() ); // ?
// console.log( counter2() ); // ?

// //Modify the code of makeCounter() so that the counter can also decrease and set the number:
// //counter() should return the next number (as before).
// counter.set(10) // should set the counter to value.
// counter.decrease() //should decrease the counter by 1.

// console.log( counter() ); // 9
// console.log( counter() ); // 10

// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }

//   const myFunc = makeFunc();
//   myFunc();

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// let x = 1;

// const parentFunction = () =>
// {
//   //local scope
//   let myValue = 2;
//   console.log(x);
//   console.log(myValue);

//   const childFunction = () => {
//     console.log(x += 5);
//     console.log(myValue += 1);
//   }

//   return childFunction;
// }

// //parentFunction()

// const result = parentFunction();
// console.log(result)

// result()
// result()

// function f() {
//     const value = 123;
//     return function() {
//      console.log(value);
//      }
//     }
//     const g = f(); // g.[[Environment]] stores a reference to the Lexical Environment of the corresponding f() call

// g()

// function sayHi() {
//     console.log("Hi");
// }

// sayHi()
// console.log(sayHi.name); // sayHi

// const sayHi = function() {
//     console.log("Hi");
// };

// console.log(sayHi.name); // sayHi
// sayHi()

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, c, d) {}

// console.log(f1.length); // 1
// console.log(f2.length); // 2
// console.log(many.length); // 2

// function sayHi() {
//     console.log("Hi");
//    // let's count how many times we run
//     sayHi.counter++;
//    }
//    sayHi.counter = 0; // initial value
//    sayHi(); // Hi
//    sayHi(); // Hi
//    console.log( `Called ${sayHi.counter} times` ); // Called 2 times

// let sayHi = function func(who) {
//     if (who) {
//      console.log(`Hello, ${who}`);
//      }
//      else {
//      func("Guest"); // Error: sayHi is not a function
//      }
//     };

//     const welcome = sayHi;
//     sayHi = null;
//     welcome();
//     console.log(sayHi)

//const func = new Function ([arg1, arg2, ...argN], functionBody);
//example
// const sum = new Function('a', 'b', 'return a + b');
// console.log( sum(1, 2) ); // 3

// function sayHi(phrase, who) {
//     console.log( phrase + ', ' + who );
//    }
//    setTimeout(sayHi, 5000, "Hello", "John"); // Hello, John

// let timerId = setTimeout(() => alert("never happens"), 0);
// console.log(timerId); // timer identifier
// clearTimeout(timerId);

// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log('tick'), 1000);
// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5500);

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/
// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 1000); // (*)
//    }, 0);

// setTimeout(() => { clearInterval(timerId); console.log('stop'); },5000)

// function slow(x) {
//     // there can be a heavy CPU-intensive job here
//     return x;
//     }
//     function cachingDecorator(func) {
//     const cache = new Map();
//     return function(x) {
//     if (cache.has(x)) { // if there's such key in cache
//     return cache.get(x); // read the result from it
//     }
//     let result = func.call(this, x);
//     cache.set(x, result); // and cache (remember) the result
//     return result;
//     };
//     }
//     slow = cachingDecorator(slow);
//     console.log( slow(1) ); // slow(1) is cached and the result returned
//     console.log( "Again: " + slow(1) ); // slow(1) result returned from cache
//     console.log( slow(2) ); // slow(2) is cached and the result returned
//     console.log( "Again: " + slow(2) ); // slow(2) result returned from cache

// let wrapper = function(func) {
//     return function() {
//     return func.apply(this, arguments);
//      }
//     };
//     //let wrapper = (func) => (...args) => func.apply(this, args); // with arrow function
//     const sum = (a, b) => a + b;
//     const sumWrapper = wrapper(sum);
//     console.log(sumWrapper(1, 2)); //3

// function hash() {
//     console.log([].join.call(arguments) ); // Error: arguments.join is not a function
//    }
//    hash(1, 2);

// const user = {
//     firstName: 'John',
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`)
//     }
// }

// const sayHi2 = user.sayHi.bind(user);
// setTimeout(sayHi2,1000)

// function mul(a, b) {
//     return a * b
// }

// const triple = mul.bind(5, 3)

// //console.log(mul (3,3))
// console.log(triple(4))

// function partial(func, ...argsBound) {
//   return function (...args) {
//     return func.call(this, ...argsBound, ...args);
//   };
// }

// const user = {
//   firstName: "John",
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   },
// };

// user.sayNow = partial(
//   user.say,
//   new Date().getHours() + ":" + new Date().getMinutes()
// );
// user.sayNow("Hello"); // [10:00] John: Hello!

// an object literal
//const foo = { bar: 1 };
//its getter and setter

// const foo = {
// get bar() {
// return this._bar || 1;
//  },
// set bar(value) {
// this._bar = value;
//  }
// }

// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
//   Object.defineProperty(this, "age", {
//     get() {
//       return new Date().getFullYear() - this.birthday.getFullYear();
//     },
//   }
//   );
// }
// const john = new User("John", new Date(1992, 6, 1));
// console.log(john.age); // 29

// console.log(new Date().getFullYear())

// class User{
//     constructor(firstName, lastName, birthday) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.birthday = birthday
//     }
//     get age() {
//         return new Date().getFullYear() - this.birthday.getFullYear()
//     }
// }

// const john = new User ("John", "Smith", new Date(1993,6,1))

// console.log(john.lastName)
// console.log(john.age)

// const animal = {
//   eats: true,
// };
// function Rabbit(name) {
//   this.name = name;
// }
// function Human(name) {
//     this.name = name
// }

// Rabbit.prototype = animal;
// Human.prototype = animal;

// const rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ == animal
// const human = new Human("Human")

// console.log(rabbit.eats); // true
// console.log(animal.eats)

// const obj = {
//   0: "Hello",
//   1: "world!",
//   length: 2,
// };

// obj.join = Array.prototype.join;
// // or make it look like more native
// Object.defineProperty(obj.__proto__, "join", {
//   value: function join() {
//     return Array.prototype.join.apply(obj, arguments);
//   },
// });

// console.log(obj.join(",")); // Hello,world!

// const animal = {
//   eats: true,
// };

// const rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//   }
// });

// const human = Object.create(animal, {
//     jumps: {value: true,}
// }
//     )

// console.log(rabbit.jumps); // true
// console.log(human.jumps)

// const animal = {
//   eats: true,
// };
// // create a new object with animal as a prototype
// const rabbit = Object.create(animal);
// console.log(rabbit.eats); // true

// console.log(Object.getPrototypeOf(rabbit) === animal); // true
// Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
// console.log(Object.getPrototypeOf(rabbit) === animal);

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }
// const rabbit = new Rabbit("White Rabbit");
// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.stop()
// rabbit.hide(); // White Rabbit hides!

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }
// class Rabbit extends Animal {
//   stop() {
//     super.stop(); // call parent stop
//     this.hide(); // and then hide
//   }
// }
// const rabbit = new Rabbit("White Rabbit");
// rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
// }
// const rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit.name); // White Rabbit
// console.log(rabbit.earLength); // 10
// console.log(rabbit.speed)

// class Animal {
//   name = "animal";
//   showName() {
//     console.log(this.name);
//   }
// }
// class Rabbit extends Animal {
//   name = "rabbit";
// }
// new Animal().showName(); // animal
// new Rabbit().showName(); // 'rabbit'

// class User {
//   static staticMethod() {
//     console.log(this === User);
//   }
// }
// User.staticMethod(); // true

// class Article {
//     static publisher = "Ilya Kantor";
//     }
//     console.log(Article.publisher) // Ilya Kantor
//     //the same as
//     //Article.publisher = "Ilya Kantor";

// class User {
//     static age = 40;
//     static sayHi() {
//      console.log('Hi')
//      console.log(User.age)
//      }
//     }

//     //class Admin extends User {}
//     //console.log(Admin.age) // 40
//     //Admin.sayHi() // 'Hi'

//     User.sayHi()

// class CoffeeMachine {
//   _waterAmount = 0;
//   set waterAmount(value) {
//     this._waterAmount = value;
//   }
//   get waterAmount() {
//     return this._waterAmount;
//   }
//   constructor(power) {
//     this._power = power;
//   }
// }

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating!`;
//   }
// }

// class Cat extends Pet {
//   meow() {
//     return "MEOWWW!";
//   }
// }

// const monty = new Cat("monty", 9);
// console.log(monty);
// console.log(monty.eat());

// class Dog extends Pet {
//   eat() {
//     return `${this.name} is eating!`;
//   }
//   bark() {
//     return "WOOOF!";
//   }
// }

// const wyatt = new Dog("Wyatt", 13);
// console.log(wyatt);
// console.log(wyatt.eat());

// console.log(wyatt.bark());

