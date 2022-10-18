// Prints out Hello World plus the name value
function myName(Name) {
    return('Hello World'+ Name) 
}

console.log(myName(' Isaac'));


var Sentiment = require('sentiment');
var Sentiment = new Sentiment();
var result = Sentiment.analyze('You are a silly person');
console.dir(result); // Score: -2, Comparitive: -0.666




let helloText = "say Hi";
let check = 4;
if (check > 3) {
let hello = "say Hello instead";
console.log(hello);// "say Hello instead"
}
console.log(helloText)

let cars = ['Audi', 'BMW', 'Mclaren', 'Toyota', 'Honda']
cars[0] = 'Ferrari'
cars[3] = 'Subaru'
cars.unshift('Mercedes')
cars.pop()


console.log(cars)