
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

let f = debounce(console.log, 1000);
f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);


    
   



