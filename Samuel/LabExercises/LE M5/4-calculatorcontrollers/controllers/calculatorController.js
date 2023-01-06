const addNumbers = (req, res) => {
    let number1 =parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = number1 + number2;
    console.log(sum)
    res.status(200)
    res.json({result:sum})

}

const subtractNumbers = (req ,res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum = number1 - number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const multiplyNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum = number1 * number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const divideNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum = number1 / number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

module.exports = {
    addNumbers, 
    subtractNumbers, 
    multiplyNumbers, 
    divideNumbers
}