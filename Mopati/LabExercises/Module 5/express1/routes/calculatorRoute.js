let express = require("express");
let calculatorController = require("../Controllers/calculatorController");
let router = express.Router();

router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});
router.get("/divide", (req, res) => {
  calculatorController.divideNumbers(req, res);
});
router.get("/subtract", (req, res) => {
  calculatorController.subtractNumbers(req, res);
});
router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

module.exports = router;
