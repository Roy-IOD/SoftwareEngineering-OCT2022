var express = require('express');
var calculatorController = require('../controllers/calculatorController')
var router = express.Router();
router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
    })
router.get('/subtract', (req, res) => {
    calculatorController.minusNumbers(req,res)
    })
router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req,res)
    })
router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req,res)
    })
module.exports = router;