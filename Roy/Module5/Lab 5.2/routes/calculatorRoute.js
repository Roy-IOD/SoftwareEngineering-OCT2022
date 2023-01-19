var express = require('express');
var router = express.Router();

router.get('/add', (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=number1+number2;
    res.status(200)
    res.json({result}) 
})



module.exports = router;
