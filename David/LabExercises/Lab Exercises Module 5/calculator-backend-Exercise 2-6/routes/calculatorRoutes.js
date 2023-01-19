let express = require("express");

const calculatorController = require("../controllers/calculatorContoller");
let router = express.Router();

router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

router.get("/subtract", (req, res) => {
  calculatorController.subtractNumbers(req, res);
});

router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

router.get("/divide", (req, res) => {
  calculatorController.divideNumbers(req, res);
});

module.exports = router;
