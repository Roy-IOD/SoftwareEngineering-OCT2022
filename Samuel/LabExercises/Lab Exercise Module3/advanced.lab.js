
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

// let f = str => console.log(str)

// f = debounce(f, 1000);
// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 5000);
// let intervalTimer = setInterval(() => f("e"), 50)
// setTimeout(() => clearInterval(intervalTimer), 3 * 1000);

// function debounce(func, ms) {
//     let timeout;
//     return function(msg) {
//         clearTimeout(timeout);

//         timeout = setTimeout(() => func(msg), ms);
//     };
// }

    
// //5.

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//     }
//     let user = {
//     name: 'John',
//     login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//     };

// askPassword(() => user.login(true), () => user.login(false));

//6. 

// let head = {
//     glasses: 1
//     };

// let table = {
//     pen: 3,
//     __proto__: head
//     };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: head
//     };

// let pockets = {
//     money: 2000,
//     __proto__: head
//     };

// //test
// console.time("pockets.glasses test")
// console.log(pockets.glasses)
// console.timeEnd("pockets.glasses test")

// console.time("head.glasses test")
// console.log(head.glasses)
// console.timeEnd("head.glasses test")

//7.

function Obj(func){
    this.func = func;
    console.log(func)
}


let obj = new Obj("func");

let obj2 = new obj.constructor("func also")


//8.

Function.prototype.defer(ms){
    let f = this;
    setTimeout(() => f(a, b), ms)
}



function f(a, b){
    console.log(a + b);
    __proto__ = defer(ms);
}

f.defer(1000)(2,3);







