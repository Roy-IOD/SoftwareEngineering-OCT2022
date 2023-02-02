function sum(a,b){
    return a+b
}

if(sum(2,3)!=5){
    throw new Error('failed test')
}

if(sum(7,11)!=18){
    throw new Error('failed test')
}

console.log('all tests passed')