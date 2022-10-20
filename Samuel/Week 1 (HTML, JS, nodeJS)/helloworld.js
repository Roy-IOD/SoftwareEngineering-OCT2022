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

function SentenceAnalyse(sentence){
    return sentiment.analyze(sentence)
}

console.log(SentenceAnalyse("Isaac is stupid"))
  









let myArray = ["ford", "volvo", "honda"]

console.log(myArray[2])

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

mountains[1] = 'Kilamanjaro'
mountains.push('Kosciusko')

console.log(mountains)

mountains.unshift('Ben Nevis')
console.log(mountains[0])

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);

const lastElement = seas.pop();
console.log(lastElement);
console.log(seas);

const firstElement = seas.shift();
console.log(firstElement);
console.log(seas);

let index = seas.indexOf('North Sea');
console.log(index);

console.log(Array.isArray(seas));

let nbaArray = ["Bucks", "Nuggets", "76ers", "Heat", "Timberwolves"]

console.log(nbaArray)

nbaArray[0] = "Suns"
nbaArray[3] = "Celtics"

console.log(nbaArray)



const user {
  "first_name" : "Sammy",
  "last_name" : "Shark",
  "age" : 25,
  "followers" : 987
  "address" : {
      "street-name" : "17 Test Street"
      "suburb" : "Code State"
      ""
  }
  }
  
   console.log(user.first_name);
   console.log(user.age)

   