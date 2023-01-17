const Logger = require('./Logger')

class Calculator {

    constructor() {
        //this.id=Date.now() //For part 2, slide 55, change this line to use a random number
        this.id=Math.floor((Math.random() * 100) + 1);
        this.logger = new Logger('Calculator')
    }


    add(num1, num2) {
        const value=num1+num2
        this.logger.log(value)
        return value;
    }

    subtract(num1, num2) {
        const value=num1-num2
        this.logger.log(value)
        return value;
    }

    multiply(num1, num2) {
        const value=num1*num2
        this.logger.log(value)
        return value;
    }

    divide(num1, num2) {
        const value=num1/num2
        this.logger.log(value)
        return value;
    }

}
    
    module.exports=Calculator

    //Part 3 - New file Logger.js
    // within the constructor, this.logger = new this.logger() within the constructor for Logger