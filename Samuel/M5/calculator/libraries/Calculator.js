const Logger = require('../libraries/Logger')
log = new Logger()


class Calculator {
    constructor() {
    this.id= Math.round(Math.random()*10000000000)
    this.log = new Logger()
    }
    
    add(num1, num2) {
    const value=num1+num2
    this.Logger.Logger(logged)
    return value;
    }

    subtract(num1, num2) {
    const value=num1-num2
    this.Logger.Logger(logged)
    return value;
    }

    multiply(num1, num2) {
    const value=num1*num2
    this.Logger.Logger(logged)
    return value;
    }

    divide(num1, num2) {
    const value=num1/num2
    this.Logger.Logger(logged)
    return value;
        } 
    }

    module.exports=Calculator