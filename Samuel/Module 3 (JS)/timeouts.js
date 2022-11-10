//the setTimeout function is a built-in javascript function which allows you to delay execution of code until a period of time has passed
//https://developer.mozilla.org/en-US/docs/Web/API/setTimeout


//first we write the function that contains the code we want to delay, for example:

function delayMsg(msg)
{
    console.log(`This message will be printed after a delay: ${msg}`)
}

//we could write this as an arrow function as well:

const delayMsgArrow = (msg) => console.log(`This message will be printed after a delay using arrow: ${msg}`)


//then we use setTimeout to execute the function and specify the delay time in milliseconds

//the first argument is the function reference - so just put the fuction name and NOT the brackets after it (which would execute it instead of pass a reference to it)
//the second argument is the number of milliseconds to delay
//the third argument (and subsequent) arguments are any parameters to pass to the function
setTimeout(delayMsg, 1000, 'i am so delayed')
setTimeout(delayMsgArrow, 5000, 'i am so delayed')

//how does setTimeout get executed in compiled code?


//the setInterval function is another built-in javascript function allowing code execution to be delayed.
//https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//instead of running once after the delay, it will run repeatedly at an interval
//it goes hand-in-hand with clearInterval, which is used to stop the repeating code

//setInterval will return a reference to the interval so that you can clear/cancel it later on

const interval = setInterval(delayMsg, 1000, 'interval function')
setTimeout(() => clearTimeout(interval), 10*1000) 

//so we could set it to stop the interval after 10s like this:


//we can also replicate a similar effect to setInterval by calling setTimeout recursively, ie. by making it call itself
//complicated, but it works
function repeatTimeout(delay, limit)
{
    let counter = 1;
    setTimeout(function repeatThis(current) {
        console.log('repeatTimeout: repeated '+current+' of '+limit+' times')
        if (current < limit) setTimeout(repeatThis, delay, current+1)
    }, delay, counter)

    counter++;
    
}

//repeatTimeout(1000, 10)