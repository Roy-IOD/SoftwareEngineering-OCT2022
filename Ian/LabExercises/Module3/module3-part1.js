// 2. What are the results of these expressions?
// const n = "" + 1 + 0 // 10
// const o = "" - 1 + 0 // -1
// const p = true + false // 1
// const q = 6 / "3" // 2
// const r = "2" * "3" // 6
// const s = 4 + 5 + "px" // 9px
// const t = "$" + 4 + 5 // $45
// const u = "4" - 2 // 2
// const v = "4px" - 2 // NaN
// const w = " -9 " + 5 // -9 5
// const x = " -9 " - 5 // -14
// const y = null + 1 // 1
// const z = undefined + 1 // NaN
// const a = " \t \n" - 2 // -2

// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt
//     values).
//     Why? Fix it. The result should be 3.

    // let a = prompt("First number?", 1);
    // let b = prompt("Second number?", 2);
    // console.log(a + b); // 12
//the above doesn't work!

//Question 4. What will be the result for these expressions?

console.log(5 > 4) // true

"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"

null === +"\n0\n"
