"use strict";
const Meal = require("./meal");
const MealIngredient = require("./mealIngredient");
const Ingridient = require("./ingridient");

async function init() {
  await Meal.sync();
  await MealIngredient.sync();
  await Ingridient.sync();
}

init();

module.exports = {
  Meal,
  MealIngredient,
  Ingridient,
};
