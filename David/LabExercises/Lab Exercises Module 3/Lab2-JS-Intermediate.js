// 2. Intermediate

// 1

function ucFirst(str) {
    
    return str ? str.charAt(0).toUpperCase() + str.slice(1): ""

}

console.log(ucFirst('david')) //David
console.log(ucFirst("david") == "David"); //true

// 2

function truncate(str, maxlength) {
    if (str.length > maxlength)
    {
    let startString = str.substring(0, maxlength);  //create new variable 'startString' and us substring to get values between 0 and maxlength
    startString = startString + '...'; // add ... to the end of startString
    return startString; //return the value
    }  
    else {
        return(str); //otherwise return the string
    }
}

console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))

// 3

const styles = ['Jazz','Blues']
console.log(styles)

styles.push ("Rock n Roll")
console.log(styles)

styles.splice (1,1, 'Classics')
console.log(styles)

styles.shift(styles)
console.log(styles)

styles.unshift('Rap', 'Reggae')
console.log(styles)

// 4 

function camelize(str) {
    //search for and remove '-' split function
    
    let parts = str.split("-")
    let result = ""
    for (let i = 0; i < parts.length; i++) 
    {
        if (i == 0) result += parts[i]
        else {result += ucFirst(parts[i]) }
    }       
    return result    
}

// try for of and forEach loop



console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

//5 

function Calculator()
{
        this.methods={
        '-':(x,y) => x - y,
        '+':(x,y) => x + y,
    }
    
    this.calculate = function(expression)
    {
        const parts = expression.split(" ")
        const firstNumber = parseInt(parts [0])
        const operator = parts [1]
        const lastNumber = parseInt (parts [2])
        const func = this.methods[operator]
        return func(firstNumber, lastNumber)
    }

    this.addMethod = function(name, func)
    {
        this.methods [name] = func
    }

}

let calc = new Calculator();

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
let result = calc.calculate("2 ** 3");
console.log( result ); // 8

console.log(calc.calculate("5 + 7"))
console.log(calc.calculate("5 - 7"))
console.log(calc.calculate("5 * 7"))
console.log(calc.calculate("5 / 7"))

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