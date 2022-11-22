// let x = "" + 1 + 0;
// console.log(x);
// let y = "" - 1 + 0;
// console.log(y);
// let z = true + false;
// console.log(z);
// let a = 6 / "3";
// console.log(a);
// let b = "2" * "3";
// console.log(b);
// let c = 4 + 5 + "px";
// console.log(c);
// let d = "$" + 4 + 5;
// console.log(d);
// let e = "4" - 2;
// console.log(e);
// let f = "4px" - 2;
// console.log(f);
// let g = "-9" + 5;
// console.log(g);
// let h = "-9" - 5;
// console.log(h);
// let i = null + 1;
// console.log(i);
// let j = undefined + 1;
// console.log(j);
// let k = "\t \n" - 2;
// console.log(k);

//Q3 - it initially displayed 12 because it was missing parseInt
// const a = parseInt(prompt("First number?", 1));
// const b = parseInt(prompt("Second number?", 2));
// alert(a + b); // 3

//Q4
// console.log(5 > 4); // true
// console.log("apple" > "pineapple"); //false
// console.log("2" > "12"); //true
// console.log(undefined == null); //true
// console.log(undefined === null); //false
// console.log(null == "\n0\n"); //false
// console.log(null === +"\n0\n"); //false

//Q5 Yes an alert was shown
// if ("0") {
//   alert("Hello");
// }

//Q6

// function result(a, b) {
//   return a + b < 4 ? "Below" : "Over";
// }

//Q7
// setTimeout((who) => {
//   console.log("Hello" + who);
// }, 300);

//Q8 discuss in lab sessions

// function isEmpty(obj) {
//   for (let key in obj) {
//     // if the loop has started, there is a property
//     return false;
//   }
//   return true;
// }

//Q9

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
//Q10
//function chaining is when you can call functions straight after each other in a chain
//to achieve this, each function has to return the right/expected value for the next function to use

const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fullTime() {
    console.log("Fulltime final score is " + this.score);
    return this;
  },
};

//this is what function chaining looks like, but it won't work yet ...
basketballGame
  .basket()
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

//if we wanted to have one of these objects for each team what could we do?
//copy-paste and rename object; make a shallow clone/copy of the original in a new variable; rewrite as a constructor or class

function Team(name) {
  this.score = 0;
  this.name = name;

  this.freeThrow = function () {
    this.score++;
    return this;
  };
  this.basket = function () {
    this.score += 2;
    return this;
  };
  this.threePointer = function () {
    this.score += 3;
    return this;
  };
  this.halfTime = function () {
    console.log("Halftime score for " + this.name + " is " + this.score);
    return this;
  };
  this.fullTime = function () {
    console.log(`Fulltime final score for ${this.name} is ${this.score}`);
    return this;
  };
}

const bullets = new Team("bullets");
bullets.basket().threePointer().basket().freeThrow().basket().halfTime();

const celtics = new Team("celtics");
celtics
  .basket()
  .freeThrow()
  .threePointer()
  .basket()
  .basket()
  .basket()
  .halfTime();
