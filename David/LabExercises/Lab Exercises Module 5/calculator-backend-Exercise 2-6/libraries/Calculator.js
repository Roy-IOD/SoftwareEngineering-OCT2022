const Logger = require('./Logger')

class Calculator {

  constructor() {
    // this.id = Math.random();
    this.logger = new Logger('result')
  }

  add(num1, num2) {
    const value = num1 + num2;
    this.logger.log(value);
    return value;
  }
  subtract(num1, num2) {
    const value = num1 - num2;
    this.logger.log(value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.logger.log(value);
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.logger.log(value);
    return value;
  }
  
}

module.exports = Calculator;