const Calculator = require('../libraries/Calculator')

let myCalc = new Calculator()

const addNumbers = (req, res) => {
    let number9=parseInt(req.query.num9);
    let number10=parseInt(req.query.num10);

    let sum = myCalc.add(number9, number10)

    // let sum=number9+number10
    // console.log(sum)

    res.status(200)
    res.json({result:sum})
}

const subtractNumbers = (req, res) => {
    let number9=parseInt(req.query.num9);
    let number10=parseInt(req.query.num10);

    let result = myCalc.subtract(number9, number10)

    res.status(200)
    res.json({result:result})
}

const multiplyNumbers = (req, res) => {
    let number9=parseInt(req.query.num9);
    let number10=parseInt(req.query.num10);

    let result = myCalc.multiply(number9, number10)

    res.status(200)
    res.json({result:result})
}

const divideNumbers = (req, res) => {
    let number9=parseInt(req.query.num9);
    let number10=parseInt(req.query.num10);

    let result = myCalc.divide(number9, number10)

    res.status(200)
    res.json({result:result})
}



module.exports = {
    addNumbers,
    subtractNumbers,
    divideNumbers,
    multiplyNumbers
}