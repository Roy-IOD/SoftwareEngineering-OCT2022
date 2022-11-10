console.log ("" + 1 + 0)
console.log ("" - 1 + 0)
console.log (true + false)
console.log (6 / "3")
console.log ("2" * "3")
console.log (4 + 5 + "px")
console.log ("$" + 4 + 5)
console.log ("4" - 2)
console.log ("4px" - 2)
console.log (" -9 " + 5)

//3.
// let a = prompt("First Number?", 1);
// let b = prompt("Second Number?", 2);

// alert(a + b);

//4.
console.log(5 > 4) //T
console.log("apple" > "pineapple")//F
console.log("2" > "12")//T
console.log(undefined == null)//T
console.log(undefined === null)//F
console.log(null == "\n0\n")//F
console.log(null === +"\n0\n")//F

//5.
// if ("0") {
//     alert( 'Hello' );
//     }


//6.
function sumA(a,b) {
    return ( a + b < 4 ? 'Below' : 'Over')
}

console.log(sumA(2,1))
console.log(sumA(5,2))

// //7. 

const delay = (func, ms) => {
  return function(message) {
    setTimeout(func, ms, message)
  }
}

const hello = ( who ) => console.log('hello ' + who ); 
const delayHello = delay(hello,1000);
delayHello('world I am alive');


//8.
// let schedule = {}; 
// alert( isEmpty(schedule) ); // true 
// schedule["8:30"] = "get up"; 
// alert( isEmpty(schedule) ); // false

let schedule = {};

schedule[8.30] = "get up";

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  console.log(isEmpty(schedule))

  //9.

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep(){
    console.log(`current number of steps is ${this.step} steps`);
    return this;
  }
}

ladder.up().down().up().up().showStep();