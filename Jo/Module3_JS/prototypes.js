// const madridObject = {
//     city: "Madrid",
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
// };
  
// madridObject.greet(); // Greetings from Madrid
// console.log(madridObject.toString()) //exists even though we didnt write it
// console.log(madridObject.valueOf()) //exists even though we didnt write it

// console.log(Object.getPrototypeOf(madridObject)) //empty as it's based on the default empty Object

//-- Shadowing prototyped properties

// const myDate = new Date(1995, 11, 17);

// console.log(myDate.getYear()); // 95

// myDate.getYear = function () { //shadowing or overwriting the prototyped getYear function
//   return "something else!";
// };

// console.log(myDate.getYear()); // something else!

//-- Inheriting prototyped properties

let animal = {
    eats: true,
    sleeps: true,
    legs: 4,
    mammal: true
};

//let rabbit = {
//    jumps: true
//};

//rabbit.__proto__ = animal //sets the prototype of rabbit to animal
let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});

console.log(rabbit.eats) //true, because it now inherits from animal

// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) console.log(prop); // jumps, then animal properties as well

function Cat(name) {
    this.name = name;
}

Cat.prototype = animal;
const cat = new Cat("Tortoiseshell"); // cat.__proto__ == animal
console.log( cat.eats ); // true

for (let prop in cat) console.log(prop); // jumps, then animal properties as well
console.log(cat.constructor === Cat); // true (from prototype)

//-- Polyfilling functions to native types (https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)

String.prototype.show = function() {
    console.log(this);
};
"BOOM!".show(); // BOOM!

// polyfilling for String.prototype.string
if (!String.prototype.repeat) { // if there's no such method
    String.prototype.repeat = function(n) { //define it
        return new Array(n + 1).join(this); //using the string text as the glue to join empty array items together
    };
}
console.log( "La".repeat(3) ); // LaLaLa

const obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};
obj.join = Array.prototype.join;

// or make it look like more native
// Object.defineProperty(obj.__proto__, 'join', {
//     value: function join() {
//         return Array.prototype.join.apply(obj, arguments)
//     }
// });
console.log(obj.join(',')); // Hello,world!

