//Part 3 : Create a generic library for logging - pass a message to be logged, this will contain
//at least the ID of the caller, and the result. Log to the console every call made.

class Logger {

    //constructor function is called every time a new Logger is created
    constructor(referer) {
        this.id = Date.now() //change to random number
        this.referer = referer //stores the name of the referring code using this logger instance
    }

    log = (message) => {
        console.log(`[${this.referer}:${this.id}]: ${message}`)
    }
}

module.exports = Logger