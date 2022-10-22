
function mySum (A,B){
    return A + B
}

if(mySum)

if(mySum(9,8) != 17) throw new Error('sum test 9+8 failed')
if(mySum(1,4) != 5) throw new Error('sum test 1+4 failed')
if(mySum(0,0) != 0) throw new Error('sum test 0+0 failed')



console.log('all tests passed')

// Function to generate random number 
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
  
console.log("Random Number between 1 and 10: ") 
  
// Function call
console.log( randomNumber(1, 10) ); 