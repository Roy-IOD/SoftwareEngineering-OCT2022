var todaysDate= new Date()
var bday = new Date('2002-08-16')
console.log('I am'+ (todaysDate.getFullYear()-bday.getFullYear())+' years old')

//2.1
function capitaliseWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log(capitaliseWord('hello')); 

//2.2
function truncate(str,maxlength){
    if (str.length<=maxlength){
        return str
    }
    return str.slice(0,maxlength) + '...'
}
console.log(truncate('hello there my name is annabelle',10))
//2.3

let styles = ['jazz','blues']
styles.push('rock and roll')
console.log(styles)
var index = styles.indexOf('blues');

if (index !== -1) {
    styles[index] = 'classic';
}
console.log(styles)
console.log(styles.shift())
styles.unshift('rap','reggae')
console.log(styles)
//2.4

function camelize(str){
    str.split('-')
   // str.join('')//
}
console.log(camelize('hello-world'))


//2.5
function Calculator(){
    this.methods={
        '-':(x,y)=>x - y,
        '+':(x,y)=>x + y
}    
    
this.calculate=function(expression){
    const parts = expression.split(" ")
    const firstNumber= parseInt(parts[0])
    const operator = parts[1]
    const lastNumber = parseInt(parts[2])
    const func=this.methods[operator]
    return func(firstNumber, lastNumber)
}
this.addMethod=function(name,func){
this.methods[name]=func
}
    }
    
    let calc= new Calculator();
    calc.addMethod("*", (a, b) => a * b);
    calc.addMethod("/", (a, b) => a / b);
    calc.addMethod("**", (a, b) => a ** b);
    let result = calc.calculate("2 ** 3");

console.log(calc.calculate("7 + 9"))
console.log(calc.calculate("7 / 9"))
console.log(calc.calculate("7 * 9"))
console.log(calc.calculate("7 - 9"))

//2.6
function unique(arr){
    return Array.from(new Set(arr));
}
let strings=['hello', 'hello', 'my name is', 'my name is', 'annabelle']
console.log(unique(strings));

//2.7
let map=new Map();
map.set("name", "Annabelle");
let keys= Array.from(map.keys())
keys.push('more');
console.log(keys)

//2.8
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  const readMessages = new WeakSet();
  readMessages.add(messages[0])
  readMessages.add(messages[1])
  readMessages.add(messages[1])
  console.log("Was the message from john read? = " + readMessages.has(messages[0]))
  console.log("Was the second message from john read? = " + readMessages.has(messages[1]))
  console.log("Was the message from Alice read? = " + readMessages.has(messages[2]));


  //2.9

function sumSalaries(salaries){
    let sum=0
    for (salary of Object.values(salaries)){
        sum+=salary
    }
    return sum;
}
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
console.log(sumSalaries(salaries));

//2.10
function topSalary(salaries){
    let topSalary=0
    let topName=null
    for (let [name,salary] of Object.entries(salaries)){
        if (salary>topSalary){
            topSalary=salary
            topName=name
        }
    }
    return topName;
}

console.log('The person with the highest salary =' + topSalary(salaries))

//2.11
function getSecondsToday(){
    let now = new Date();
    let today= new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now.getTime()-today.getTime();
    return diff;
} 

console.log(getSecondsToday())

//2.12
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
    alert( JSON.stringify(meetup, function replacer(key,
    value) {
    
    }));
    /* result should be:
    {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
    }
    */
