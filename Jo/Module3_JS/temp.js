//const delay = (func, ms) => (msg) => setTimeout(func, ms, msg) //a more condensed version of the below

const delay = (func, ms) => {
    return function(msg) { setTimeout(func, ms, msg); }  //returns a function which calls setTimeout to delay the given function
}


const hello = ( who ) => console.log('Hello ' + who );
const delayHello = delay(hello, 3000);

delayHello('world');