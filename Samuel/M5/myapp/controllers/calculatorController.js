const addNumbers = (res, req) => {
    let number1 =parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = number1 + number2;
    console.log(sum)
    res.status(200)
    res.json({result:sum})

}

const subtractNumbers = (res,req) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum = number1 - number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const multiplyNumbers = (res, req) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum = number1 * number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const divideNumbers = (res, req) => {
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