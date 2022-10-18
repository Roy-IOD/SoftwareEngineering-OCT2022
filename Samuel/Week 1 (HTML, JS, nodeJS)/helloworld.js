console.log('hello world')

function ThisIsTheName(Signature){
    Body
    }
    function SayHello(){
    console.log('Hello')
    }

    function Sum(A,B){
        return A+B
    }
   console.log(Sum(5,1))

   function Minus(A,B){
    return A-B
   }
   
   console.log(Minus(5,1))

   function Multiply(A,B){
    return A*B
   }
   
   console.log(Multiply(5,2))

   function Divide(A,B){
    return A/B
   }
   
   console.log(Divide(20,10))

   function helloName(name) {
    console.log("Hello, " + name + ", I am node!");
}
helloName("Sam")


var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result);    // Score: -2, Comparative: -0.666
