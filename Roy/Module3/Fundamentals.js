// 1

// "" + 1 + 0 //10
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // NaN
// " -9 " + 5 //’-9 5’
// " -9 " - 5 // -14
// null + 1 //1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// 2
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(+a + + b);// 12

// 3

// 5 > 4 // true
// "apple" > "pineapple" //false
// "2" > "12" //true
// undefined == null // true
// undefined === null //false
// null == "\n0\n" //false

// 4 Will an alert be shown?

// if ("0") {
//     alert('Hello');
// } //Yes

// 5

// let result;

// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

// Conditional ? instead of using if else

// let result = a + b < 4 ? ‘Below’: ‘Over’;

// 6 Write the delay method with arrow function, delay(func, ms)
// Should work like:

// const hello = (who) => console.log(`Hello` + who);
// const delalyHello = delay(hello, 300);
// delayHello(`world`);

// const delay = (func, ms) => (...arg) => setTimeout(() =>
//     func.apply(null, arg), ms)

// 7 Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let schedule = {};
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false

// function isEmpty(obj) {
//     for (let key in obj) {
//         // if the loop has started, there is a property

//         return false;
//     }
//     return true;
// }

// 8 There’s a ladder object that allows to go up and down

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert(this.step);
//         return this;
//     }
// };
// ladder.up().up().down().up().down().showStep(); // 1

// 9

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt('How much to add?', 0);
//     };
// }
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);