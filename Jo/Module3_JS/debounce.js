//4. Debounce decorator
//The result of debounce(f, ms) decorator is a wrapper that suspends calls to f until there’s ms milliseconds of inactivity (no calls, “cooldown period”),
//then invokes f once with the latest arguments.


let f = str => console.log(str) //super simple function f that just prints a message
f = debounce(f, 1000) //wrap that simple function in the debounce decorator so it looks and works the same, but now is a debounced version

f("a"); //testing calling our debounced function normally
setTimeout( () => f("b"), 200); //and after a 200ms delay
setTimeout( () => f("c"), 500); //and after a 500ms delay
///let intervalTimer = setInterval(() => f("e"), 50) //and repeatedly every 50ms for 3s
//setTimeout(() => clearInterval(intervalTimer), 3*1000);

// debounced function waits 1000ms after the last call and then runs: console.log("c")
function debounce(func, ms) {
  let timeout;
  return function(msg) {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);

    //then reset the timer id for this most recent function call to happen after the ms delay
    timeout = setTimeout(() => func(msg), ms);

    //but better to use apply and keep the right number of arguments and the right context:
    //timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}