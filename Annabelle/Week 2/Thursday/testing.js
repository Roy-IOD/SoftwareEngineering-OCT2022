if(sum1(10,15)!=25){
    throw new Error('sum test failed')
  }
  // this is the test-first approach code

function sum1(A,B){
    return A-B
}
let sum=sum1(10,15)

console.log(sum)

/* 
Conditions that will make the test fail:
    1. Numbers that do not add to 25 are entered
    2. No numbers are entered
    3. I wrote the arithmetic symbol for the code wrong 
*/

