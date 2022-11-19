// Question 1

// function makeCounter() {
//     let count = 0;
//     return function() {
//     return count++;
//     };
//     }
//     let counter = makeCounter();
//     let counter2 = makeCounter();
//     console.log('\nQuestion 1:\n----------')
//     console.log( counter() ); // 0
//     console.log( counter() ); // 1
//     console.log( counter() ); // 2
//     console.log( counter2() ); // 0 because counter2 is independent
//     console.log( counter2() ); // 1

// Question 2

console.log('\nQuestion 2:\n----------')

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    return function() {
    return count++;
    };
    }
    let counter = makeCounter();
    let counter2 = makeCounter();
    console.log( counter() ); // 0
    console.log( counter() ); // 1
    console.log( counter() ); // 2
    console.log( counter2() ); // 0 because counter2 is independent
    console.log( counter2() ); // 1

// Question 3 Output every second

function printNumbers(from, to) {
    let current = from;

    let timerID = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerID);
        }
        current++;
    }, 1000);
    }
printNumbers(6, 12);

