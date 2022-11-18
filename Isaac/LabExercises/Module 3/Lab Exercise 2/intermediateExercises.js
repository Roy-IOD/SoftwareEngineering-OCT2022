// Exercise 2.1
function ucFirst(string) { 
    return string.charAt(0).toUpperCase() + string.slice(1)
};

console.log(ucFirst("Reggie"));

// Exercise 2.2

function truncate(string, maxlength) {
    if (string.length > maxlength) 
    return (string.slice(0, maxlength - 1) + '...')
    else string;
}
console.log(truncate("My name is Isaac and i am a student", 15));

function truncate(string, maxlength) {
    return (string.length > maxlength) ? (string.slice(0, maxlength - 1) + '...') : string;
}
console.log(truncate("My name is Isaac and i am a student", 15));


// Exercise 2.3

let arrayStyles = ["Jazz", "Blues"];
//Adds Rock'n'Roll to end
arrayStyles.push("Rock'n'Roll");
console.log(arrayStyles)
//Replaces value in the middle
arrayStyles[Math.floor((arrayStyles.length - 1)/ 2)] = "Classics";
console.log(arrayStyles)
//Takes off first value of strin
console.log(arrayStyles.shift());
console.log(arrayStyles)
//Adds Rap and Reggae to beginning of array
arrayStyles.unshift("Rap", "Reggae");
console.log(arrayStyles)


//Exercise 2.4

function camelize(string) {
    return string.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
};
console.log(camelize("my-name-is-Isaac-Heslop"))


//Exercise 2.5

/*Create an extendable calculator 
Create a constructor function Calculator that creates “extendable” calculator objects. 
The task consists of two parts. 

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. 
Should understand plus + and minus -. 
Usage example: 

let calc = new Calculator();
alert( calc.calculate("3 + 7") ); // 10

Then add the method addMethod(name, func) that teaches the calculator a new operation. 
It takes the operator name and the two-argument function func(a,b) that implements it. 
For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

● No parentheses or complex expressions in this task. 
● The numbers and the operator are delimited with exactly one space. 
● There may be error handling if you’d like to add it. 
● Create an extendable calculator
*/



//Exercise 2.6
