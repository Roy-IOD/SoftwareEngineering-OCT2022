let express = require('express');
const calculateController = require('../controllers/calculatorController')
let router = express.Router();

router.get('/add', (req, res) => {
    calculateController.addNumbers(req,res)
})

router.get('/subtract', (req, res) => {
   calculateController.subtractNumbers(req,res)
})

router.get('/multiply', (req, res) => {
   calculateController.multiplyNumbers(req, res)
})

router.get('/divide', (req, res) => {
    calculateController.divideNumbers(req, res)
})

module.exports = router;

