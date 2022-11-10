//Q1
    /*console.log("" + 1 + 0) // this will be a string = 10
    console.log("" - 1 + 0) //this will be a number = -1
    console.log(true + false) //I did not know this --- 1*
    console.log(6 / "3") // this will be a number = 2
    console.log("2" * "3") // this will = 6
    console.log(4 + 5 + "px") //this will = 9px 
    console.log("$" + 4 + 5) //this will = $9 --- $45*
    console.log("4" - 2) // this will = 2
    console.log("4px" - 2) // this will = 2px --- NaN*
    console.log(" -9 " + 5) // this will = -4 --- -9 5* (this will be a string)
    console.log(" -9 " - 5) // this will = -14
    console.log(null + 1) // this will = 1
    console.log(undefined + 1) //this will = NaN
    console.log(" \t \n" - 2) //I did not know this --- -2* */

    /* Look into questions I answered wrong and didn't know */

// //Q2
//     debugger

// //Q3
//     console.log (5 > 4) // true (boolean)
//     console.log ("apples" > "pineapple") //I 
//     console.log ("2" > "12")
//     console.log(undefined == null) 
//     console.log(undefined === null)
//     console.log(null == "\n0\n")


const delay = (func, ms) => {
    return function (string){
        setTimeout(func, ms, string)
    }
}

const hello = ( who )=> console.log('Hello ' + who );
const delayHello = delay(hello, 3000);
delayHello('Mareko');

// function delayMsg(msg)
// {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }

// setTimeout(delayMsg, 5000, 'i am so delayed')