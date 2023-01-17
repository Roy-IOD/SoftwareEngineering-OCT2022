const Calculator = require("../Libraries/calculator");
const myLogger = require("../Libraries/Logger");

let myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let sum = myCalc.add(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};
const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let divide = myCalc.divide(number1, number2);
  console.log(divide);
  res.status(200);
  res.json({ result: divide });
};
const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let subtract = myCalc.subtract(number1, number2);
  console.log(subtract);
  res.status(200);
  res.json({ result: subtract });
};
const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let multiply = myCalc.multiply(number1, number2);
  console.log(multiply);
  res.status(200);
  res.json({ result: multiply });
};
module.exports = {
  addNumbers,
  divideNumbers,
  subtractNumbers,
  multiplyNumbers,
};
