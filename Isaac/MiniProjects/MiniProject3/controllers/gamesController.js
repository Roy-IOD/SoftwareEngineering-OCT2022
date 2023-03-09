"use strict";
const Models = require("../models");
const axios = require("axios");

const getGames = (res) => {
  Models.Game.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createGames = (data, res) => {
  Models.Game.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateGames = (req, res) => {
  let gameId = req.params.id;
  Models.Game.update(req.body, { where: { id: gameId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteGames = (req, res) => {
  let gameId = req.params.id;

  Models.Game.destroy({ where: { id: gameId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storeGames = (req, res) => {
  axios
    .get("https://api.squiggle.com.au/?q=games&year=2022")
    .then((data) => {
      let apiData = data.data.games;
      let gameData = apiData.map((game) => {
        return {
          gameId: game.id,
          ateam: game.ateam,
          hteam: game.hteam,
          ascore: game.ascore,
          hscore: game.hscore,
        };
      });
      console.log(gameData);

      gameData.forEach((game) => {
        Models.Game.findOrCreate({
          where: { gameId: game.gameId },
          defaults: {
            gameId: game.id,
            ateam: game.ateam,
            hteam: game.hteam,
            ascore: game.ascore,
            hscore: game.hscore,
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
  getGames,
  createGames,
  updateGames,
  deleteGames,
  storeGames,
};
