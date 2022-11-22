
//1.

// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter.decrease());

// console.log(counter2());
// console.log(counter2());

//2.

function makeCounter() {
        let count = 0;

        return function counter() {
            counter.set = function(resetValue){count =resetValue} // = (resetValue) => count = resetValue;
            counter.decrease = function(){count--;} // = () => count--;

            return count++;
        };
    }
    
    let counter = makeCounter();
    let counter2 = makeCounter();
    
    console.log(counter());
    console.log(counter());
    console.log(counter());
    counter.set(10);
    counter.decrease();
    counter.decrease();
    console.log(counter());
    
    
   



