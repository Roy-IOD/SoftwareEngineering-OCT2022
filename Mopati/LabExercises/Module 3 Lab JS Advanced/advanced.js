//Q1
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

// console.log(counter2()); // ? 0
// console.log(counter2()); // ? 1
// // Functions counter and counter2 are created by different invocations of makeCounter. So they have independent outer Lexical Environments, each one has its own count.

//Q2

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = (value) => (count = value);

//   counter.decrease = () => count--;

//   return counter;
// }

//Q3
//Using setInterval:
// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function () {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(2, 6);

//using nested setTimeout

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(2, 6);

//Q4
function debounce(func, ms) {
  let timeout;
  return function (msg) {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);

    //then reset the timer id for this most recent function call to happen after the ms delay
    timeout = setTimeout(() => func(msg), ms);

    //but better to use apply and keep the right number of arguments and the right context:
    //timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "John",
//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };
// //using a wrapper function
// askPassword(
//   () => user.login(true),
//   () => user.login(false)
// );
// // or create a partial function from user.login that uses user as the context and has the correct first argument:
// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// //Q6
// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(pockets.pen); // 3
// console.log(bed.glasses); // 1
// console.log(table.money); // undefined

// //Q7
// function User(name) {
//   this.name = name;
// }

// let user = new User("Mopati");
// let user2 = new user.constructor("Toteng");

// console.log(user2.name);

//Q8
Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, arguments), ms);
  };
};

// check it
function f(a, b) {
  console.log(a + b);
}

f.defer(2000)(3, 2);

//Q9
let dictionary = Object.create(null, {
  toString: {
    // define toString property
    value() {
      // the value is a function
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple and __proto__ is in the loop
for (let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// comma-separated list of properties by toString
console.log(dictionary); // "apple,__proto__"

//Q10
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

//Q11
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("formatting error");

console.log(err.message); // formatting error
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof SyntaxError);

//Q12
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("runs after 3 seconds"));

//Q13
async function loadJson(url) {
  // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404 (4)
