//Intermediate Exercises

//1

let jo = "john";
function capFirst(str) {
    return str.charAt(0).toUpperCase() +str.slice(1);
}

console.log(capFirst(jo)) 

//2

function truncate(str, maxlength) { if (maxlength >= str.length)
    return str; if (maxlength <= 1) return str.slice(0, maxlength) + "...";
    return str.slice(0, maxlength - 1) + "...";
  }

  console.log (truncate("What I'd like to tell on this topic is:" , 20))

  //3

  let arrayStyles = ["Jazz", "Blues"];
  arrayStyles.push("Rock'n'Roll");
  console.log(arrayStyles)
  arrayStyles[Math.floor((arrayStyles.length - 1)/ 2)] = "Classics";
  console.log(arrayStyles)
  console.log(arrayStyles.shift());
  console.log(arrayStyles)
  arrayStyles.unshift("Rap", "Reggae");
  console.log(arrayStyles)  

  //4

  function camelize(string) {
    return string.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
};
console.log(camelize("hi-how-are-you-jo"))

  //5
function Calculator(){
    this.methods={
        '-':(x,y)=>x - y,
        '+':(x,y)=>x + y,
    }

    this.calculate=function(expression){
        const parts = expression.split (" ")
        const firstNumber = parseInt(parts[0])
        const operator = parts[1]
        const lastNumber = parseInt(parts[2])
        const func=this.methods[operator]
        return func(firstNumber, lastNumber)
    }

    this.addMethod=function(name,func){}
}

let calc= new Calculator();
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
let result = calc.calculate("2 ** 3");

console.log(calculate("7 + 9"))
console.log(calculate("7 / 9"))
console.log(calculate("7 * 9"))
console.log(calculate("7 - 9"))

// 6

function unique(arr) {
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
 "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) ); // Hare, Krishna, :-O

//7 

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys()); //add Array.from
keys.push("more");

console.log(keys)

//8

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
   ];

//9

function sumSalaries(salaries) {
    let total = 0 //the starting value
  for (let salary of Object.values(salaries)) { //Object.value returns an array of propert values
    total += salary; // total = total + salary
  }

  return total; //return the value
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
   };

console.log( sumSalaries(salaries) ); // 650

//10

function topSalaries(salaries) {
    let topSalary = 0
    let topName = null
    for (let [key, value] of Object.entries(salaries)) {
        if (topSalary < value) {
            topSalary = value
            topName = key
        }
    }

    return topName
}

const salaries2 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
   };

console.log(topSalaries(salaries2))

//11

function getSeondsToday() {
    let d = new Date();
    return d.getHours() *3600 + d.getMinutes() *60 + d.getSeconds();
}

console.log(getSeondsToday())


//12

let room = {
    number: 23
};
   let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
   };
   // circular references
   room.occupiedBy = meetup;
   meetup.self = meetup;

   console.log( JSON.stringify(meetup, function replacer(key,value) {
    if (key != "" && value == meetup) /* your code */
    return undefined;
    else {return value}
   }));
   
   
   /* result should be:
   {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
   }
   */