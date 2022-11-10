//const delay = (func, ms) => (msg) => setTimeout(func, ms, msg)

const delay = (func, ms) => {
    return function(msg) { setTimeout(func, ms, msg); }
}


const hello = ( who ) => console.log('Hello ' + who );
const delayHello = delay(hello, 3000);

delayHello('world');
