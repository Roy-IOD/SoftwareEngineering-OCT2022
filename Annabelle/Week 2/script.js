function sum1(A,B){
    return A+B
}
var sum=sum1(10,15)

console.log(sum)

function helloName(name) {
    console.log("hello "+ name)
}
helloName('Annabelle')
helloName('John')


// working with variable types
let helloText = "say Hi";
let check = 4;
if (check > 3) {
let hello = "say Hello instead";
console.log(hello);
}
console.log(helloText)


// arrays & adding elements to an array

let dogs = ['border collie', 'poodle', 'chihuahua'];
console.log(dogs[0]); 
console.log(dogs[1]); 
console.log(dogs[2]);

dogs[1]= 'labrador'
dogs.push('schnauzer')
console.log(dogs)

 let cutestDog = 'border collie'

 console.log("The cutest dog is a " + cutestDog)