// const Calculator = require("../libraries/Calculator")
class Logger {
    constructor(referer) {
        this.id = Math.round(Math.random()*10000000000)
        this.referer = referer
    }

    log = (message) => {
        console.log(`[${this.referer}:${this.id}]:${message}`)
    }
}

module.exports = Logger


