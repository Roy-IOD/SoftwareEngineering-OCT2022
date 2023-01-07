//Part 3 : Create a generic library for logging - pass a message to be logged, this will contain
//at least the ID of the caller, and the result. Log to the console every call made.

class Logger {

    constructor(referer) {
        this.id = Date.now()
        this.referer = referer
    }

    log = (message) => {
        console.log(`[${this.referer}:${this.id}]:${message}`)
    }
}

module.exports = Logger