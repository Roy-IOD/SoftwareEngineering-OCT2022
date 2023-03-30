const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.mealController.getMeals(res);
});

router.post("/create", (req, res) => {
  Controllers.mealController.createMeal(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.mealController.updateMeal(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.mealController.deleteMeal(req, res);
});

module.exports = router;
