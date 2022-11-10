const delay = (func, ms) => {
    return function (message) {
        setTimeout (func, ms, message)
    }
}

const hello = ( who ) => console.log ('Hello ' + who );
const delayHello = delay(hello, 5000);
delayHello('world');
