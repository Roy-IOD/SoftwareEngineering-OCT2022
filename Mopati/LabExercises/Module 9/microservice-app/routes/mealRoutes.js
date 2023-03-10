const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/mealController");

router.get("/", (req, res) => {
  Controllers.mealController.getMeals(req, res);
});

router.get("/randommeal", (req, res) => {
  Controllers.mealController.getRandomMeal(res);
});

module.exports = router;
