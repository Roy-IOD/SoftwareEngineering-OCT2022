//1.2
    console.log("" + 1 + 0) // this will be a string = 10
    console.log("" - 1 + 0) //this will be a number = -1
    console.log(true + false) //I did not know this --- 1* (true is == 1 and false == 0)
    console.log(6 / "3") // this will be a number = 2
    console.log("2" * "3") // this will = 6
    console.log(4 + 5 + "px") //this will = 9px 
    console.log("$" + 4 + 5) //this will = $45
    console.log("4" - 2) // this will = 2
    console.log("4px" - 2) // this will = 2px --- NaN* (because you are taking away a number from a string)
    console.log(" -9 " + 5) // this will = -4 --- -9 5* (this will be treated as a string)
    console.log(" -9 " - 5) // this will = -14
    console.log(null + 1) // this will = 1
    console.log(undefined + 1) //this will = NaN
    console.log(" \t \n" - 2) //I did not know this --- -2* ('\t \n' is converted by JS into a 0)

    /* Look into questions I answered wrong or didn't know */

//1.3
    const prompt = require('prompt-sync')();
    let a = +prompt("First number? ", 1);
    let b = +prompt("Second number? ", 2);
    console.log(a + b); // 12

//1.4
    console.log (5 > 4) // true
    console.log ("apples" > "pineapple") //false
    console.log ("2" > "12") // true
    console.log(undefined == null) // true
    console.log(undefined === null) //false
    console.log(null == "\n0\n") //false
    console.log(null === +"\n0\n") // false

1.5
    if ("0") {
    console.log( 'Hello' );
    }

    // this will print out 'Hello' as a string produces a truthful result. If there was nothing within the string quotation marks or the quotation marks around 0 were removed, then no alert or print-out would appear.

//1.6
    const c = 2;
    const d = 1;
    let result;

    c + d < 4 ? result = 'Below' : result = 'Over'; 

    console.log(result)


//1.7
    const delay = (func, ms) => {
        return function (string){
            setTimeout(func, ms, string)
        }
    }
    
    const hello = ( who )=> console.log('Hello ' + who );
    const delayHello = delay(hello, 3000);
    delayHello('Mareko');
    

//1.8
    function isEmpty(obj) {
        for(let key in obj){
            return false;
        }

        return true;
    }

    let schedule = {};
    console.log( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    console.log( isEmpty(schedule) ); // false

    

//1.9
    // There’s a ladder object that allows to go up and down

    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function() { // shows the current step
            console.log( this.step );
            return this; 
        }
    };
    //Modify the code of up, down and showStep to make the calls chainable, like this:
    ladder.up().up().down().showStep(); // 1


//1.10

function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('add to value ', 0);
    };

}

let accumulator = new Accumulator(0); // initial value 0
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values