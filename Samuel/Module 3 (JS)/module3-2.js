
const n = 1.23456;
const number_n = n.toFixed(2)
const object_n = new Number(1.23456).toFixed(2)

console.log(number_n == object_n)


//String-like object
const user = {
    name: 'John',
    toString() {
        return this.name;
    }
};
console.log('Hello ' + user);


//Number like object
const apple = {
    price: 100,
    valueOf() {
        return this.price;
    }
};
console.log(apple*3)


//Decimal Numbers
const billion1 = 1000000000;
const billion2 = 1_000_000_000;
const billion3 = 1e9;

//Hexadecimal

//Tests: is Finite and is NaN

let notanumber = "Seven"

let invalidResult= notanumber / 7 
console.log(invalidResult == NaN)
console.log(isNaN(invalidResult))

//if NaN == NaN still = False that is why we use isNan()
//another one called isFinite()

//parseInt and parseFloat()

console.log(+"100px");
console.log(parseInt('100px'));
console.log(parseFloat('12.5em'));
console.log(parseFloat('12.3.4'));
console.log(parseInt('a123'));

console.log(parseInt('0xff', 16));

//STRINGS
const guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);

//ARRAYS
const arr = new Array(1,2,3); // constructor method
const arr2 = [1,2,3] // array literal

const fruits = ["Apple", "Orange", "Pear"];
fruits.pop(); //removes "pear"
console.log(fruits);

fruits.unshift('Bananas')
console.log(fruits)

//SHIFT and UNSHIFT = extract and append first element
//POP and PUSH = extract and append last element

const teams = ["Nuggets", "76ers", "Heat"];
teams.push("Bulls");
console.log(teams);

let firstTeam = teams.shift();
console.log(firstTeam)

let lastTeam = teams.pop();
console.log(lastTeam)
console.log(teams)
teams.unshift(firstTeam)
console.log(teams)
teams.push(lastTeam)
console.log(teams)

//Multidimensional arrays for example to store matrices.

const matrix = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]) //6 

//splice(start, deleteCount, elem1, ... , elemN) - Insert, Remove and Replace items in an array
const sentence = ["I", "study", "JavaScript", "right", "now"];
sentence.splice(0, 3, "let's", "dance");
console.log(sentence)

//sets

const set = new Set (["oranges", "apples", "bananas"])
for (let value of set) console.log(value);

set.forEach((value, valueAgain, set) => {
    console.log(value);
});

//destructuring

const arr6 = ["john", "smith"]
const [firstName, lastName] = arr6
console.log(firstName)

//date
const birthday = new Date(1998,7,8)
console.log(birthday)

const today = new Date()
console.log(today)

console.log(`I am ${today.getFullYear() - birthday.getFullYear()} years old`)

const exactTOB = new Date(1998,7,8,20,8)
console.log(exactTOB)