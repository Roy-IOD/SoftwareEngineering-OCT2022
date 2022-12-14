//the setTimeout function is a built-in javascript function which allows you to delay execution of code until a period of time has passed
//https://developer.mozilla.org/en-US/docs/Web/API/setTimeout


//first we write the function that contains the code we want to delay, for example:

function delayMsg(msg)
{
    console.log(`This function message will be printed after a delay: ${msg}`)
}

//we could write this as an arrow function as well:

const delayMsgArrow = (msg) => console.log(`This arrow message will be printed after a delay: ${msg}`)

//then we use setTimeout to execute the function and specify the delay time in milliseconds

//the first argument is the function reference - so just put the fuction name and NOT the brackets after it (which would execute it instead of pass a reference to it)
//the second argument is the number of milliseconds to delay
//the third argument (and subsequent) arguments are any parameters to pass to the function
// const soDelayedTimer = setTimeout(delayMsg, 5000, 'i am so delayed')
// const lessDelayedTimer = setTimeout(delayMsgArrow, 2000, 'i am less delayed') //this will happen first because the delay is shorter
// const neverHappenTimer = setTimeout(delayMsg, 10*1000, 'this will never happen')

// //setTimeout returns a reference to the timeout so you can use clearTimeout to cancel it before the delay expires
// console.log(neverHappenTimer)
// clearTimeout(neverHappenTimer)

// //how does setTimeout get executed in compiled code?
// //it's taken out of the normal flow and added to a separate call stack
// //so even with delay = 0, a function called using setTimeout will happen AFTER any other code in the normal flow
// console.log('this prints before all the timeout functions')

// //the setInterval function is another built-in javascript function allowing code execution to be delayed.
// //https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// //instead of running once after the delay, it will run repeatedly at an interval
// //it goes hand-in-hand with clearInterval, which is used to stop the repeating code

// //setInterval will return a reference to the interval so that you can clear/cancel it later on

// //so we could set it to stop the interval after 10s like this:

// const interval = setInterval(delayMsg, 5*1000, 'interval function') //will print 'interval function' every 5 seconds
// setTimeout(() => clearInterval(interval), 11*1000) //will cancel the interval after 10 seconds


//we can also replicate a similar effect to setInterval by calling setTimeout recursively, ie. by making it call itself
//complicated, but it works
function repeatTimeout(delay, limit)
{
    let counter = 1;
    setTimeout(function repeatThis(current) { //NFE so we can refer to it later on line 54
        console.log('repeatTimeout: repeated '+current+' of '+limit+' times')
        if (current < limit) setTimeout(repeatThis, delay, current+1)
    }, delay, counter)

    counter++;
}

//repeatTimeout(1000, 10)


//another example of a nested/recursive setTimeout call:
//let timerId = setTimeout(function tick() {
//        console.log('tick timer');
//        timerId = setTimeout(tick, 2000); // passes the tick function to setTimeout again, always with the same 2s delay
//    }, 2000);

//setTimeout(() => clearTimeout(timerId), 20*1000); //clears the timer after 20 seconds of ticking

//how could we change the above so it clears the timer after ticking exactly n times?
function repeatTick(numTimes, delay)
{   
    let counter = 1;
    setTimeout(function tick() {
        console.log('tick timer #' + counter++);
        if (counter <= numTimes) { timerId = setTimeout(tick, delay); } // passes the tick function to setTimeout again, always with the same delay
    }, delay);
}
//repeatTick(8, 1000)

//November 23 is Fibonacci Day (the 23rd of the 11th). The Fibonacci sequence is a repeating set of numbers where the next one is the sum of the previous two.
//we could write a function in JS to print these fibonacci numbers, both using setInterval and nested setTimeouts:
function countFibonacciInterval(limit = 10, delay = 1000) {
    let first = 0;
    let second = 1;
    let counter = 0;
    //let [first, second, counter] = [0, 1, 0] //shortcut
    console.log(first)
    console.log(second)

    let timer = setInterval(function printNext() { 
        let next = first+second; 
        console.log(next)

        first = second;
        second = next;
        counter++;

        if (counter == limit) clearInterval(timer)
    }, delay)
}

//countFibonacciInterval(20);

function countFibonacciTimeouts(limit = 10, delay = 1000) {
    let [first, second, counter] = [0, 1, 0]
    console.log(first)
    console.log(second)  
    
    setTimeout(function printNext(first, second, counter) { 
        let next = first+second;
        console.log(next)

        if (counter < limit) setTimeout(printNext, delay, second, next, ++counter)
    }, delay, first, second, counter);
    
}

countFibonacciTimeouts()