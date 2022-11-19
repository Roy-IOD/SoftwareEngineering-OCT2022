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
        const firstNumber = parts [0]
        const operator = parts [1]
        const lastNumber = parts [2]
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

//6

function unique(arr) {
    const result = values.filter(values => values.length > 6);
   }
   let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
   ];

//7
//8
//9
//10
/11
//12