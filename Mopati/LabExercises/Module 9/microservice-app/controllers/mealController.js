"use strict";
const axios = require("axios");

const getMeals = (req, res) => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then((data) => {
      let apiData = data.data;
      console.log(apiData);

      //we can modify the data here to just return what we need:
      let mealData = apiData.meals.map((meals) => {
        return {
          name: meals.strMeal,
          url: meals.strMealThumb,
          category: meals.strCategory,
          mealId: meals.idMeal,
        };
      });

      res.send({ result: 200, data: mealData });
    })
    .catch((err) => {
      throw err;
    });
};

const getRandomMeal = (res) => {
  let mealId = Math.floor(Math.random() * 10);
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((data) => {
      console.log(data.data);
      res.send({ result: 200, data: data.data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  mealController: { getMeals, getRandomMeal },
};
