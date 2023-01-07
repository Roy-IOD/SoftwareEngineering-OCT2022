const Logger = require('../libraries/Logger')


class Calculator {
    constructor() {
    this.id= Math.round(Math.random()*10000000000)
    this.log = new Logger('Calculator')
    }
    
    add(num1, num2) {
    const value=num1+num2
    this.log.log(value)
    return value;
    }

    subtract(num1, num2) {
    const value=num1-num2
    this.log.log(value)
    return value;
    }

    multiply(num1, num2) {
    const value=num1*num2
    this.log.log(value)
    return value;
    }

    divide(num1, num2) {
    const value=num1/num2
    this.log.log(value)
    return value;
        } 
    }

    module.exports=Calculator