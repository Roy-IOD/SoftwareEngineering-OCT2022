"use strict";
const axios = require("axios");
const Models = require("../models");

const getMeals = (req, res) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((data) => {
      let apiData = data.data;
      //console.log(apiData);

      // create meals in database
      let mealData = apiData.meals.map((meals) => {
        return {
          name: meals.strMeal,
          category: meals.strCategory,
          area: meals.strArea,
          instructions: meals.strInstructions,
          thumbnail: meals.strMealThumb,
          tags: meals.strTags,
          video: meals.strYoutube,
        };
      });
      res.send({ result: 200, data: mealData });
    })
    .catch((err) => {
      throw err;
    });
};

const createMeal = (data, res) => {
  Models.Meal.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateMeal = (req, res) => {
  let mealId = req.params.id;
  console.log("updating meal #" + mealId + " with data " + req.body);

  Models.Meal.update(req.body, { where: { idMeal: mealId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteMeal = (req, res) => {
  let mealId = req.params.id;

  Models.Meal.destroy({ where: { idMeal: mealId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//findorcreate will create an entry in the table as per sequelize.org docs
const storeMeals = (data, res) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((data) => {
      let apiData = data.data;
      //console.log(apiData);

      apiData.meals.forEach(async (meal) => {
        const [mealobject, created] = await Models.Meal.findOrCreate({
          where: { idMeal: meal.idMeal },
          defaults: {
            name: meal.strMeal,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            thumbnail: meal.strMealThumb,
            video: meal.strYoutube,
            idMeal: meal.idMeal,
          },
        });
      });

      //  res.send({ result: 200, data: "mealsinserted" });
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getMeals,
  createMeal,
  updateMeal,
  deleteMeal,
  storeMeals,
};
