let express = require("express");
let router = express.Router();

router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let add = number1+number2

  console.log(add)

  res.status(200)
  res.json({result:add})
});

router.get("/subtract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let subtract = number1-number2

  console.log(subtract)
  
  res.status(200)
  res.json({result:subtract})
});

router.get("/multiply", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let multiply = number1*number2

  console.log(multiply)
  
  res.status(200)
  res.json({result:multiply})
});

router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let divide = number1/number2

  console.log(divide)
  
  res.status(200)
  res.json({result:divide})
});

module.exports = router;
