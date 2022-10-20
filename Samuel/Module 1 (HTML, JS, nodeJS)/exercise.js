
function mySum (A,B){
    return A + B
}

if(mySum)

if(mySum(9,8) != 17) throw new Error('sum test 9+8 failed')
if(mySum(1,4) != 5) throw new Error('sum test 1+4 failed')
if(mySum(0,0) != 0) throw new Error('sum test 0+0 failed')



console.log('all tests passed')