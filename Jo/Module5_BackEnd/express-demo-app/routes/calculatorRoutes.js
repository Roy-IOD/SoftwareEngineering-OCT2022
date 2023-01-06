let express = require('express');
let router = express.Router();

router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = number1+number2

    console.log(sum)
    
    res.status(200)
    res.json({result:sum})
})

//add new routes for multiply, subtract, divide

module.exports = router;