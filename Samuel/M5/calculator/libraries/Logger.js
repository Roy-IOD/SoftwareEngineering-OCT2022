const Calculator = require('../libraries/Calculator')
calc = new Calculator()

class Logger {
    constructor() {
        logged = console.log(`Calculator:${calc.id}:${calc.value}`)
    }
}

module.exports = Logger


