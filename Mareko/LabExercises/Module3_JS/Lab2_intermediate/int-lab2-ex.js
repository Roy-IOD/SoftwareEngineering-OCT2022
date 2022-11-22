//2.1

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//console.log(ucFirst('europe')); // should return 'Europe'

//2.2

function truncate(str, maxLength) {
    if (str.length > maxLength){
        return str.substring(0, maxLength) + '...';
    }
    
    return str;

}

//console.log(truncate('This is a pulic service announcement', 20))

//2.3

const styles = ["Jazz", "Blues"]; //NORMAL
//console.log(styles);

const stylesA = ["Jazz", "Blues"]; //APPEND
stylesA.push("Rock-n-Roll");
//console.log(stylesA); 

const stylesB = ["Jazz", "Blues", "Rock-n-Roll"];  //Replace middle value
stylesB.splice(1, 1,  "Classics");
//console.log(stylesB);

const stylesC = ["Jazz", "Classics", "Rock-n-Roll"];  //Strip off the first value and show the array
let cutJazz = stylesC.slice(1);
//console.log(cutJazz);

cutJazz.unshift("Rap", "Reggae"); //PREPEND
//console.log(cutJazz);

//or

const styles0 = ["Jazz", "Blues"]; //NORMAL
// console.log(styles0);

styles0.push("Rock-n-Roll"); //APPEND
// console.log(styles0); 

styles0.splice(1, 1,  "Classics"); //Replace middle value
// console.log(styles0);

let cutJazzA = styles0.slice(1); //Strip off the first value and show the array
// console.log(cutJazzA);

cutJazzA.unshift("Rap", "Reggae"); //PREPEND
// console.log(cutJazzA);

//2.4

function camelize(str) {
    return str
      .split('-') //removes dashes
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) //index will leave first word the same, any following words will have their first letter appear and capitilised only ('E'), with .slice adding the remainder of the word in lowercase letters ('xample').
      .join(''); //joins words with empty space
  }

//console.log(camelize("border-left-width"))

//2.5

function Calculator(str) {
    
    this.methods = {
        '-': (x,y) => x - y,
        '+': (x,y) => x + y
    }    // this is telling javascript to add or subtract the two values if a string with +/- appears


    this.calculate = function(expression){
        let splitUp = expression.split(" ") // splits the array up into different parts
        const firstNumber = parseInt(splitUp[0]) // refers to the fisrt index in the string (the first number of the equation), and turns from a string into a number
        const operatorInCalc = splitUp[1] // refers to the second index in the string, which is the operator
        const secondNumber = parseInt(splitUp[2]) // refers to the third index in the string (the last number of the equation), and turns from a string into a number
        const func = this.methods[operatorInCalc] // 
        return func(firstNumber, secondNumber) //
    }

    this.addMethod = function(nameA, func) {
        this.methods[nameA] = func
    }

}

let calc = new Calculator();
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

//console.log(calc.calculate("1 + 2"))
// console.log(calc.calculate("1 - 2"))
// console.log(calc.calculate("4 * 2"))
// console.log(calc.calculate("100 / 4"))
// console.log(calc.calculate("2 ** 4"))


//2.6

function unique(arr) {
        return Array.from(new Set(arr))
    }
    
    let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"];
    
    //console.log( unique(values) ); // Hare, Krishna, :-O

//2.7

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

//console.log(keys)
//console.log(map.entries())

//2.8

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
    ];

let seenMessages = new WeakMap();
seenMessages.set(messages[0], true)
seenMessages.set(messages[1], true)
seenMessages.set(messages[2], false)

if (seenMessages.set == true) {
    console.log ('This message has been read')
}
else {
    console.log ('This message has been sent, but not read')
}

console.log(seenMessages.has(messages[1]))

//2.9

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
}

//2.10


//2.11

//2.12 sildes 74, 75, 76