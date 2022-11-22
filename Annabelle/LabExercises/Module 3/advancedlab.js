//3.1
/*
function makeCounter() {
    let count = 0;
    return function() {
    return count++;
    };
    }
    let counter = makeCounter();
    let counter2 = makeCounter();
    console.log( counter() ); // 0
    console.log( counter() ); // 1
    console.log( counter2() ); // ?
    console.log( counter2() ); // ?
    
    The answer is that they are independant as they have their own counters. It shows 0,1 */

    //3.2
    function makeCounter() {
        let count = 0;
      
        function counter() {
          return count++;
        }
    
  counter.set = function(value){
    return count = value;
  } 
 

  counter.decrease = function() {
    return count--;
  }

  return counter;
    }