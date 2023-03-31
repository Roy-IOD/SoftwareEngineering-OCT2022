"use strict";
const axios = require("axios");
const Models = require("../models");

const getCategories = (req, res) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((data) => {
      let apiData = data.data;
      //console.log(apiData);

      // create meals in database
      let categoryData = apiData.categories.map((categories) => {
        return {
          name: categories.name,
          description: categories.strCategory,
          thumbnail: categories.strCategoryThumb,
          idCategory: categories.idCategory,
        };
      });
      res.send({ result: 200, data: categoryData });
    })
    .catch((err) => {
      throw err;
    });
};

const createCategory = (data, res) => {
  Models.Category.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateCategory = (req, res) => {
  let idCategory = req.params.id;
  console.log("updating category #" + idCategory + " with data " + req.body);

  Models.Category.update(req.body, { where: { id: idCategory } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteCategory = (req, res) => {
  let idCategory = req.params.id;

  Models.Category.destroy({ where: { id: idCategory } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//findorcreate will create an entry in the table as per sequelize.org docs
const storeCategories = (data, res) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((data) => {
      let apiData = data.data;
      //console.log(apiData);

      if (apiData.categories) {
        apiData.categories.forEach(async (category) => {
          //add a check for undefined
          const [categoryobject, created] = await Models.Category.findOrCreate({
            where: { idCategory: category.idCategory },
            defaults: {
              name: category.name,
              description: category.strCategoryDescription,
              thumbnail: category.strCategoryThumb,
              idCategory: category.idCategory,
            },
          });
        });
      }
      //  res.send({ result: 200, data: "mealsinserted" });
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  storeCategories,
};
