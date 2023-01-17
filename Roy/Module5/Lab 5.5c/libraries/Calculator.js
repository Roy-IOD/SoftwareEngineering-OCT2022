const Logger=require('./Logger')

class Calculator {
  constructor() {
    this.id = this.#getRandomInt(10000)
    this.Logger=new Logger()
  }
  #getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  #log = (value) => {
    this.Logger.log(this.id,value)
  }
  add(num1, num2) {
    const value = num1 + num2
    this.#log(value)
    return value;
  }
  subtract(num1, num2) {
    const value = num1 - num2
    this.#log(value)
    return value;
  }
  multiply(num1, num2) {
    const value = num1 * num2
    this.#log(value)
    return value;
  }
  divide(num1, num2) {
    const value = num1 / num2
    this.#log(value)
    return value;
  }
}

module.exports = Calculator
