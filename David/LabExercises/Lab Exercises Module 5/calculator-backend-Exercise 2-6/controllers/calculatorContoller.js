const Calculator = require('../libraries/Calculator')
// const Logger = require('../libraries/Logger')
let myCalc = new Calculator()
// let loggingID = new Logger

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let add = myCalc.add(number1, number2)
  // let log = loggingID()

  res.status(200);
  res.json({ result: add });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let subtract = myCalc.subtract(number1, number2) 

  res.status(200);
  res.json({ result: subtract });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let multiply = myCalc.multiply(number1, number2)

  res.status(200);
  res.json({ result: multiply });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let divide = myCalc.divide(number1, number2)

  // if (Math.abs(divide) === Infinity) {
  // throw new Error("Division by zero")}

  res.status(200);
  res.json({ result: divide });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
