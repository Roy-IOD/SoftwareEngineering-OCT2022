let express = require('express');
let controllerAddition = require('../controllers/controllerAddition');
let controllerSubtract = require('../controllers/controllerSubtract');
let controllerMultiply = require('../controllers/controllerMultiply');
let controllerDivide = require('../controllers/controllerDivide');
let router = express.Router();


router.get('/add', (req, res) => {
      controllerAddition.addNumbers(req,res)
})


router.get('/subtract', (req, res) => {
      controllerSubtract.subtractNumbers(req,res)
})


router.get('/multiply', (req, res) => {
      controllerMultiply.multiplyNumbers(req,res)
})

router.get('/divide', (req, res) => {
      controllerDivide.divideNumbers(req,res)
})

module.exports = router;