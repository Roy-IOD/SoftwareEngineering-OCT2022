//Decorating

// function slow(x) {
//     // there can be a heavy CPU-intensive job here
//     console.log(`Called with ${x}`);
//     return x;
//   }
  
//   function cachingDecorator(func) {
//     let cache = new Map();
  
//     return function(x) {
//       if (cache.has(x)) {    // if there's such key in cache
//         console.log('returned cached value for '+x)
//         return cache.get(x); // read the result from it
//       }
  
//       let result = func(x);  // otherwise call func
  
//       cache.set(x, result);  // and cache (remember) the result
//       console.log('generated new value'+result+'for'+x)
//       return result;
//     };
//   }
  
//   slow = cachingDecorator(slow);
  
// //   console.log( slow(1) ); // slow(1) is cached and the result returned
// //   console.log( "Again: " + slow(1) ); // slow(1) result returned from cache
  
// //   console.log( slow(2) ); // slow(2) is cached and the result returned
// //   console.log( "Again: " + slow(2) ); // slow(2) result returned from cache

// //Functions in objects w/context

// function sayHi() {
//     console.log(this.name);
//   }
  
//   let user = { name: "John" };
//   let admin = { name: "Admin" };
  
//   // use call to pass different objects as "this"
//   sayHi.call( user ); // John
//   sayHi.call( admin ); // Admin

//   //going multi-argument

//   let worker = {
//     slow(min, max) {
//       console.log(`Called with ${min},${max}`);
//       return min + max;
//     }
//   };
  
//   function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function() {
//       let key = hash(arguments); // (*)
//       if (cache.has(key)) {
//         return cache.get(key);
//       }
  
//       let result = func.call(this, ...arguments); // (**)
  
//       cache.set(key, result);
//       return result;
//     };
//   }
  
//   function hash(args) {
//     return args[0] + ',' + args[1];
//   }
  
//   worker.slow = cachingDecorator(worker.slow, hash);
  
//   console.log( worker.slow(3, 5) ); // works
//   console.log( "Again " + worker.slow(3, 5) ); // same (cached)
//   console.log(worker.slow(4,4))
//   console.log(worker.slow(4,4))


//   // GETTERS AND SETTERS

//   let user2 = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
//   };
  
// console.log(user2.fullName); // John Smith

// user2.fullName = 'James Smith'

// console.log(user2.fullName)

// //SMARTER GETTERS/SETTERS


// let user3 = {
//     get name() {
//       return this._name;
//     },
  
//     set name(value) {
//       if (value.length < 4) {
//         console.log("Name is too short, need at least 4 characters");
//         return;
//       }
//       this._name = value;
//     }
//   };
  
//   user3.name = "Pete";
//     console.log(user3.name); // Pete
  
//   user3.name = ""; // Name is too short..

//PROTOTYPE

const animal = {
  eats: true
};

const rabbit = {
  jumps: true,
  __proto__:animal
};

console.log(Object.keys(rabbit));

for(let prop in rabbit) console.log(prop)


const franchise = {
  plays: true
};
function Basketball(team){
  this.team = team;
}

Basketball.prototype = franchise;
const basketball = new Basketball("Denver Nuggets");

console.log( basketball.plays);


// //Coffee Machine Example

// class CoffeeMachine {
//   waterAmount = 0; // the amount of water inside

//   constructor(power) {
//     this.power = power;
//     console.log( `Created a coffee-machine, power: ${power}` );
//   }

// }

// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);

// // add water
// coffeeMachine.waterAmount = 200;

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
  get power() {
    return this._power;
  }
  }



// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10

console.log(coffeeMachine.waterAmount)
console.log(`Power is: ${coffeeMachine.power}W`)

// coffeeMachine.power = 25; //= ERROR (no Setter) Power is read only
// console.log(coffeeMachine.power)

