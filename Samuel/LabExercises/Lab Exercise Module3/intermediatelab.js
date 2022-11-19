
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

console.log([map])