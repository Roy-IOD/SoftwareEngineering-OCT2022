//3.1
/*
function makeCounter() {
    let count = 0;
    return function() {
    return count++;
    };
    }
    let counter = makeCounter();
    let counter2 = makeCounter();
    console.log( counter() ); // 0
    console.log( counter() ); // 1
    console.log( counter2() ); // ?
    console.log( counter2() ); // ?
    
    The answer is that they are independant as they have their own counters. It shows 0,1 */

    //3.2
    function makeCounter() {
        let count = 0;
      
        function counter() {
          return count++;
        }
    
  counter.set = function(value){
    return count = value;
  } 
   counter.decrease = function() {
    return count--;
  }

  return counter;
    }

// 3.3
//set interval
function printNumbers(from, to){
  let thisValue=from;

  let timerId=setInterval(function(){
    console.log(thisValue);
    if (thisValue == to){
      clearInterval(timerId)
      console.log('END COUNT')
    }
    thisValue++}, 1000);
}
printNumbers(5,10)

/*set timeout

function printNumbers(from, to){
  let thisValue=from;

  setTimeout(function go() {
    console.log(thisValue);
    if (current < to) {
      setTimeout(go, 1000);
      console.log('END COUNT')
    }
    thisValue++}, 1000);
}
printNumbers(5,10)

//3.4
let f = _.debounce(alert, 1000);
f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);

function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

//3.6
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log( pockets.pen, bed.glasses, table.money )
*/
//3.7
function Cat(breed){
  this.breed = breed;
}
let cat = new Cat('persian');
let cat2 = new cat.constructor('ragdoll')
console.log(cat.breed)
console.log(cat2.breed)

/*3.8
function.prototype.defer = function(ms){
}
*/

/*3.9
let dictionary = Object.create(null, {
  toString: {
    value(){
      Object.keys
    }
  }
});



dictionary.apple = "Apple";
dictionary.__proto__ = "test"; 

for(let key in dictionary) {
alert(key); 
}

alert(dictionary); 

//3.10

class Clock {

  constructor({ template }) {
  this.template = template;
  }
  render() {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  let mins = date.getMinutes();
  if (mins < 10) mins = '0' + mins;
  let secs = date.getSeconds();
  if (secs < 10) secs = '0' + secs;
  let output = this.template
  .replace('h', hours)
  .replace('m', mins)
  .replace('s', secs);
  console.log(output);
  }
  stop() {
  clearInterval(this.timer);
  }
  start() {
  this.render();
  this.timer = setInterval(() => this.render(), 1000);
  }
  }

  class ExtendedClock extends Clock {
    constructor(addedParameters){
      super(addedParameters)
      let (precision=1000)=addedParameters
      this.precision=precision;
    }
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);}
      
  }
*/
  //3.11
class FormatError extends SyntaxError{
constructor(message){
  super(message)
  this.name="FormatError"
}
  }

  let err = new FormatError("formatting error");
console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack
console.log( err instanceof FormatError ); // true

console.log( err instanceof SyntaxError ); // true (because

