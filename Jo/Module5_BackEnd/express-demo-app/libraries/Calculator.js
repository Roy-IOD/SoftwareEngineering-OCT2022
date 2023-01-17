const Logger = require('./Logger')

class Calculator {

    constructor() {
        //this.id = Date.now() //the id is now moved to the Logger class instead
        this.logger = new Logger('Calculator') //create a new Logger for use by each Calculator
    }

    add(num1, num2) {
        const value = num1 + num2
        this.logger.log(`${num1} + ${num2} = ${value}`) //log the operation and result
        return value;
    }

    //add more functions for subtract, multiply, divide
}

module.exports = Calculator