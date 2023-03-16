"use strict";
const Models = require("../models");
const axios = require("axios");

const getPlanets = (res) => {
  Models.Planet.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createPlanets = (data, res) => {
  Models.Planet.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updatePlanets = (req, res) => {
  let name = req.params.name;
  Models.Planet.update(req.body, { where: { name: name } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deletePlanets = (req, res) => {
  let name = req.params.name;

  Models.Planet.destroy({ where: { name: name } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storePlanets = (req, res) => {
  axios
    .get("https://swapi.dev/api/planets/")
    .then((data) => {
      let apiData = data.data.results;
      console.log(data.data)
      let planetData = apiData.map((planet) => {
        return {
          name: planet.name,
          population: planet.population,
        //   characters: film.characters,
        //   planets: film.planets,
          rotationPeriod: planet.rotation_period,
          orbitalPeriod: planet.orbital_period,
        };
      });
      console.log(planetData);

      planetData.forEach((planet) => {
        Models.Planet.findOrCreate({
          where: { name: planet.name },
          defaults: {
            population: planet.population,
            rotationPeriod: planet.rotationPeriod,
            orbitalPeriod: planet.orbitalPeriod,
          },
        })
          .then((created) => {
            created ? console.log("Planet data being added to database...") : null;
          })
          .catch((err) => {
            throw err;
          });
      });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getPlanets,
  createPlanets,
  updatePlanets,
  deletePlanets,
  storePlanets,
};