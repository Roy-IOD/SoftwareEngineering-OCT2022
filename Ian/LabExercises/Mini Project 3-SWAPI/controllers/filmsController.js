"use strict";
const Models = require("../models");
const axios = require("axios");

const getFilms = (res) => {
  Models.Film.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createFilms = (data, res) => {
  Models.Film.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateFilms = (req, res) => {
  let episodeId = req.params.id;
  Models.Film.update(req.body, { where: { episodeId: episodeId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteFilms = (req, res) => {
  let episodeId = req.params.id;

  Models.Film.destroy({ where: { episodeId: episodeId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storeFilms = (req, res) => {
  axios
    .get("https://swapi.dev/api/films/")
    .then((data) => {
      let apiData = data.data.results;
      console.log(data.data)
      let filmData = apiData.map((film) => {
        return {
          episodeId: film.episode_id,
          title: film.title,
        //   characters: film.characters,
        //   planets: film.planets,
          openingCrawl: film.opening_crawl,
          releaseDate: film.release_date,
        };
      });
      console.log(filmData);

      filmData.forEach((film) => {
        Models.Film.findOrCreate({
          where: { episodeId: film.episodeId },
          defaults: {
            episodeId: film.episodeId,
            title: film.title,
            // characters: film.characters,
            // planets: film.planets,
            openingCrawl: film.openingCrawl,
            releaseDate: film.releaseDate,
          },
        })
          .then((created) => {
            created ? console.log("Data being added to database...") : null;
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
  getFilms,
  createFilms,
  updateFilms,
  deleteFilms,
  storeFilms,
};