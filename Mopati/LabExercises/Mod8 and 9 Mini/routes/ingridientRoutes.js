const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.ingridientController.getIngridients(res);
});

router.post("/create", (req, res) => {
  Controllers.ingridientController.createIngridient(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.ingridientController.updateIngridient(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.ingridientController.deleteIngridient(req, res);
});

module.exports = router;
