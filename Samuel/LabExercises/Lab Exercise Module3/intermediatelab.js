
//INTERMEDIATE EXCERCISES

//1.

function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1)
  }
  
console.log(ucFirst("john"));
console.log(ucFirst("steve"));


//2.

function truncate(str,maxlength){
    if (str.length > maxlength){
    return str.slice(0,maxlength -1) + '...'
    } else {
    return str}
}

console.log(truncate("Does this work properly, I wonder", 20))
console.log(truncate("Hello",20))

//3.1


const styles = ["Jazz", "Blues"]
console.log(styles)

//3.2

styles.push("Rock-n-Roll")
console.log(styles)

//3.3
styles[Math.floor((styles.length -1) / 2)] = "Classics";
console.log(styles)

//3.4
styles.shift()
console.log(styles)


//3.5
styles.unshift("Rap", "Reggae")
console.log(styles)


//4.

function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

  console.log(camelize("background-color"))
  console.log(camelize("list-style-image"))
  console.log(camelize("-webkit-transition"))

//5.
function Calculator() {
  
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
   };

  this.calculate = function(equation) {

    let parts = equation.split(' '),
    a = +parts[0],
    op = parts[1],
    b = +parts[2];
  
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
    return NaN;
    }

  return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7"))

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 * 3"))

//6.

function unique(arr){
 return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

//7.

let map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());
let values1 = Array.from(map.values());

keys.push("more");
values1.push("names");

console.log(keys)

//8.
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
  ];

let messageRead = new WeakSet(); 

messageRead.add(messages[0])
messageRead.add(messages[2])

console.log("Read Message Number 2? " + messageRead.has(messages[1]))
console.log("Read Message Number 1? " + messageRead.has(messages[0]))


//9.
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
  };

function sumSalaries(salaries){

  let sum = 0
  for (let salary of Object.values(salaries)){
    sum += salary;
  }
  return sum;
  }



console.log(sumSalaries(salaries))

//10.
const wages = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
  };

function topSalary(wages){

  let maxWages = 0;
  let maxName = null;

  for(const [name, wage] of Object.entries(wages)){
  if (maxWages < wage) {
    maxWages = wage;
    maxName = name;
  } 
 }

 return maxName
}

  console.log(topSalary(wages))

  //11.

  function getSecondsToday(){
    let now = new Date();

    let startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let seconds = (now - startToday);
    return Math.round(seconds/1000)
  }

console.log(getSecondsToday())

//12.

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

  console.log(JSON.stringify(meetup, function replacer(key, value){
    if (key != "" && value == meetup) return undefined;
    else return value;
  }));
