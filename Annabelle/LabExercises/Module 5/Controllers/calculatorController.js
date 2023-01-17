const Calculator = require('../libraries/Calculator')
const Logger = require('../libraries/Logger')
let myCalc = new Calculator()
let myLogger = new Logger('Controller')


const addNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let myCalc=new Calculator()

    myLogger.log(req.query)

    let sum = myCalc.add(number1, number2)
   // console.log(sum)
    res.status(200)
    res.json({result:sum})
    }

    const minusNumbers = (req, res) => {
        let number1=parseInt(req.query.num1);
        let number2=parseInt(req.query.num2);
        let myCalc=new Calculator()
        myLogger.log(req.query)
        let sum = myCalc.minus(number1, number2)
       // console.log(sum)
        res.status(200)
        res.json({result:sum})
        }

    const multiplyNumbers = (req, res) => {
        let number1=parseInt(req.query.num1);
        let number2=parseInt(req.query.num2);
        let myCalc=new Calculator()
        myLogger.log(req.query)
        let sum = myCalc.multiply(number1, number2)
           // console.log(sum)
        res.status(200)
        res.json({result:sum})
    }

    const divideNumbers = (req, res) => {
        let number1=parseInt(req.query.num1);
        let number2=parseInt(req.query.num2);
        let myCalc=new Calculator()
        myLogger.log(req.query)
        let sum = myCalc.divide(number1, number2)
               // console.log(sum)
        res.status(200)
        res.json({result:sum})
    }

    module.exports = {
    multiplyNumbers, addNumbers, minusNumbers, divideNumbers
    }