console.log('hello world')

    function SayHello(){
    console.log('Hello')
    }

    SayHello()

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
    return('Hello, ' + name + ', I am node!');
}
console.log(helloName('Sam'))

let addition = Sum(44,77)
console.log(addition)

var Sentiment = require('sentiment');
var options = {
    extras: {
      'cats': 5,
      'are': 2,
      'amazing': 2
    }
  };
var sentiment = new Sentiment();
  var result = sentiment.analyze('cats are stupid.', options);
  console.dir(result);   

  var Sentiment = require('sentiment');
var options = {
    extras: {
      'jokic': 5,
      'goat': 2,
    }
  };
var sentiment = new Sentiment();
  var result = sentiment.analyze('Jokic is the GOAT', options);
  console.dir(result);   