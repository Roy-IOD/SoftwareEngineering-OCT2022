"use strict";
const axios = require("axios");
const Models = require("../models");

const getIngridients = (req, res) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    .then((data) => {
      let apiData = data.data;
      //console.log(apiData);

      // create meals in database
      let ingrdientData = apiData.ingridients.map((ingridient) => {
        return {
          name: ingridients.strIngridient,
          description: ingridients.strDescription,
          type: ingridients.strType,
          idIngridient: ingridients.idIngridient,
        };
      });
      res.send({ result: 200, data: ingridientData });
    })
    .catch((err) => {
      throw err;
    });
};

const createIngridient = (data, res) => {
  Models.ingridient
    .create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateIngridient = (req, res) => {
  let idIngridient = req.params.id;
  console.log(
    "updating ingridient #" + idIngridient + " with data " + req.body
  );

  Models.Ingridient.update(req.body, { where: { id: idIngridient } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteIngridient = (req, res) => {
  let idIngridient = req.params.id;

  Models.Ingridient.destroy({ where: { id: idIngridient } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//findorcreate will create an entry in the table as per sequelize.org docs
const storeIngridients = (req, res) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    .then((data) => {
      let apiData = data.data.meals;
      console.log(apiData);

      apiData.forEach((ingridient) => {
        Models.Ingridient.findOrCreate({
          where: { idIngridient: ingridient.idIngredient },
          defaults: {
            name: ingridient.strIngredient,
            idIngridient: ingridient.idIngredient,
          },
        });
      });

      res.send({ result: 200, data: "apiData" });
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getIngridients,
  createIngridient,
  updateIngridient,
  deleteIngridient,
  storeIngridients,
};
