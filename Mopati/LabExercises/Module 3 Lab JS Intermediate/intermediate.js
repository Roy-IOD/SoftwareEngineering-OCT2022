//Q1 - code below; retrieve character at index 0, change it to Upperchase then slice out the string at index 1.

// const str = "john";
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);

//Q2

// text_truncate = function (str, length, ending) {
//   if (length == null) {
//     length = 100;
//   }
//   if (ending == null) {
//     ending = "...";
//   }
//   if (str.length > length) {
//     return str.substring(0, length - ending.length) + ending;
//   } else {
//     return str;
//   }
// };
// console.log(text_truncate("We are doing JS string exercises."));
// console.log(text_truncate("We are doing JS string exercises.", 19));
// console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));

// Q3
const styles = ["Jazz", "Blues"]; //3.1
styles.push("Rock-n-Roll"); // 3.2
console.log(styles);
styles.splice(styles.length / 2, 1, "Classics"); //3.3
console.log(styles);
styles.shift(); //3.4
console.log(styles);
styles.unshift("Rap", "Reggae"); //3.5 prepend => unshift
console.log(styles);

//Q4
function camelize(str) {
  return str
    .split("-")
    .map(function (word, index) {
      return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Q5
// function Calculator() {
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }
//Q6

function unique(arr) {
  let values = arr.filter(
    (element, index, array) => array.indexOf(element) === index
  );
  return values;
}
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(unique(values)); // ['Hare', 'Krishna', ':-O']

//Q7
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());

// Error: keys.push is not a function - occurs when the push method is called on a value that is not an array

keys.push("more");

//Q8
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log("Read message 0: " + readMessages.has(messages[0]));

messages.shift();

//Q9
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

//Q10
const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

//Q11
function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}

console.log(getSecondsToday());

//Q12
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
