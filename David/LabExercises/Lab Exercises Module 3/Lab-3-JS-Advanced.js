//1

// function makeCounter() 
// {
//     let count = 0;
//     return function() {
//     return count++;
//     };
// }


// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter2() ); // ?
// console.log( counter2() ); // ?

//2

function makeCounter() 
{
    let count = 0;
    
    return function counter(){
    counter.set = function(resetValue) {count = resetValue} //(resetValue) => count = resetValue
    counter.decrease = function() {count--;} //() => count

    return count++;
    };
}

let counter = makeCounter();
counter.set(10)