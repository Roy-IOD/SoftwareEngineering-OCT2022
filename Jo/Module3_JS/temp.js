//const delay = (func, ms) => (msg) => setTimeout(func, ms, msg) //a more condensed version of the below

// const delay = (func, ms) => {
//     return function(msg) { setTimeout(func, ms, msg); }  //returns a function which calls setTimeout to delay the given function
// }


// const hello = ( who ) => console.log('Hello ' + who );
// const delayHello = delay(hello, 3000);

// delayHello('world');


//Question 8

Function.prototype.defer = function(ms) {
    let f = this; //here 'this' is the function which called defer ... the bit before the dot in f.defer on line 32
    //console.log(arguments) //these are the arguments for calling 'defer', ie the number of ms to delay
    return function() { //we need to return a function which will do the deferring
        //console.log(this) //here 'this' is any context for f itself, if it was part of an object for example
        //console.log(arguments) //these are the arguments for f, ie the numbers to add
        setTimeout(() => f.apply(this, arguments), ms) //we need to use apply since it takes the context and the array of args as params
        
        //could we use f.call? or just run f directly? no, because they don't allow for arguments as single array 
    }
};

function f(a, b) {
    console.log( a + b );
}

const multiply = (a,b) => console.log(a*b)

f.defer(1000)(5,6)
multiply.defer(1500)(3,4)


// let dictionary = Object.create(null, {
//     toString: {
//         value: function() {
//             return Object.keys(this).join(',')
//         }
//     }
// })

//we could do it this way, but then toString is listed in the keys on line 57
// let dictionary = {
//     toString: function() {
//         return Object.keys(this).join(',')
//     }
// }

// your code to add dictionary.toString method
// add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here
// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }
// // your toString in action
// console.log(dictionary + ''); // "apple,__proto__". needs the + '' because console.log doesn't automatically call toString, whereas alert does