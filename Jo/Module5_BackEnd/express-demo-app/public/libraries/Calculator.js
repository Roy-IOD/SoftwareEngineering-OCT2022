const Logger = require('./Logger')

class Calculator {

    constructor() {
        this.id = Date.now()
        this.logger = new Logger('Calculator')
    }

    add(num1, num2) {
        const value = num1+num2
        this.logger.log(value)
        return value;
    }
}

module.exports = Calculator