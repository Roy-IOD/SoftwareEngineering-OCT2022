function sum(a, b) {
    return a+b
}

//this checks if the function returns the expected result, and if not, throws a custom error with a message saying why

if (sum(9,8) != 9+8) throw new Error('sum test 9+8 failed') //this shorthand without the curly braces only works because there is a single statement to run for the if
if (sum(1,4) != 1+4) throw new Error('sum test 1+4 failed')
if (sum(0,0) != 0+0) throw new Error('sum test 0+0 failed')
if (sum(-1,4) != -1 + 4) {
    throw new Error('sum test -1+4 failed') //this is a more complete way of writing an if statement that can handle multiple statements inside the curly braces
}
if (sum(-1,-4) != -1 + -4) throw new Error('sum test -1 + -4 failed') 

//if any of the tests failed, the above errors will halt the script. so if it gets here, they all passed
console.log('all tests passed')