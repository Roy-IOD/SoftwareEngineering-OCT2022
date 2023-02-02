let express = require('express');
let calculatorController = require('../controllers/calculatorController');
let router = express.Router();


router.get('/add', (req, res) => {
      calculatorController.addNumbers(req,res)
})

module.exports = router;