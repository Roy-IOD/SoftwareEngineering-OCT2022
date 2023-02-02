const Calculator = require('../libraries/Calculator');
let myCalc=new Calculator()

const addNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.add(number1,number2)
    res.status(200)
    res.json({result}) 
}

const subtractNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.subtract(number1,number2)
    res.status(200)
    res.json({result}) 
}

const multiplyNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.multiply(number1,number2)
    res.status(200)
    res.json({result}) 
}

const divideNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.divide(number1,number2)
    res.status(200)
    res.json({result}) 
}

module.exports = {
    addNumbers,
    subtractNumbers,
    divideNumbers,
    multiplyNumbers
}