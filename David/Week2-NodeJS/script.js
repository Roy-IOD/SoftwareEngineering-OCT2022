console.log('Hello World')

console.log ("----")
console.log ("----")
function sayHello(){
    console.log('Hello');
    console.log('Tuesday')
}


function sum1(a,b){
    console.log(a+b)
}

function sum2(a,b){
    return a+b
}    

sayHello()

console.log ("----")

sum1(5,2)
sum1(12,7)
sum1(478,658)

console.log(sum2(5,5))

let result =sum2(7,7)
console.log(result)

function sum(a,b){
    return a+b
}

function minus(a,b){
    return a-b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function printName (name){
    return "Hello " + name
}

function printName2 (firstName,lastName){
    return "Hello " + firstName + " " + lastName + "," + "how are you?"
}


console.log ("----")

console.log (sum(5,1))
console.log (minus(10,5))
console.log (divide(10,5))
console.log (multiply(5,2))

console.log ("----")

console.log (printName("David"))
console.log (printName2("David","Cook"))
console.log ("----")





// let Sentiment = require('sentiment'); 
// let sentiment = new Sentiment();
// let result1 = sentiment.analyze('Cats are stupid.');
// console.dir(result1);    // Score: -2, Comparative: -0.666

// let testSentence = 'Cats are amazing and I love them, but being allergic to cat hair is stupid and I hate it.'

// console.log('\nDefault analysis of test sentence:')
// console.log(sentiment.analyze(testSentence))

// //this function calls the sentiment analyzer internally and specifies certain custom weights for key words
// function weightedAnalyze(sentence)


// {
//     let options = {
//         extras: {
//           'cats': 5,
//           'amazing': 3,
//           'allergic': -4,
//           'hate': -5,
//           'stupid': -3,
//           'love': 5
//         }
//       };
//     let result = sentiment.analyze(sentence, options);

//     return result;
// }

// console.log('\nWeighted analysis of test sentence:')
// console.log(weightedAnalyze(testSentence))

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains);
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

mountains[1] = "Killamanjaro"
mountains.push('Kosciosko')

console.log(mountains)

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);

seas.unshift('Red Sea')
console.log(seas)


