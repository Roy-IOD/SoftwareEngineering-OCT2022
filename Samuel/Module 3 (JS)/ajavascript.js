// console.log ("" + 1 + 0)
// console.log ("" - 1 + 0)
// console.log (true + false)
// console.log (6 / "3")
// console.log ("2" * "3")
// console.log (4 + 5 + "px")
// console.log ("$" + 4 + 5)
// console.log ("4" - 2)
// console.log ("4px" - 2)
// console.log (" -9 " + 5)


// console.log(typeof 0)

// const onetwotwo = "1" + 2 + 2
// const twotwoone = 2 + 2 + "1"

// console.log(parseInt(twotwoone))

// console.log(onetwotwo) //'122'
// console.log(typeof onetwotwo)
// console.log(twotwoone)

// console.log(5/"2") //all these are numbers
// console.log("5"/2)
// console.log("5"/"2")

// console.log("5" * "2")

// const div10 = onetwotwo / 10
// console.log(div10)
// console.log(typeof div10)

// function
// returnUndefined(){

// }

// console.log(returnUndefined())

// function checkAge(age){
// if( age >18) {
// return 'adult';
// }
// return 'non-adult';
// }

// console.log(checkAge(19))

const set = new Set (["oranges", "apples", "bananas"])
for (let value of set) console.log(value);

set.forEach((value, valueAgain, set) => {
    console.log(value);
});
