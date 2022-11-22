// //1

// function makeCounter() {
//     let count = 0;
//     return function() {
//     return count++;
//     };
//    }
//    let counter = makeCounter();
//    let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter2() ); // 0
   
// 2

function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }

  console.log (counter ());


// 3

function printNumbers (from, to) {
    let counter = from;
    let intervalNumb = setInterval ( function numbers() {
  console.log(counter++);
  if (counter > to) {clearInterval(intervalNumb)}
   }, 1000)
}
printNumbers(1, 10);



// 4


// 5
//const prompt = require("prompt-sync")();
//copy the above line and run 'npm init' (accept all defaults) and then 'npm install prompt-sync' to get the prompt function working in node.js




// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
