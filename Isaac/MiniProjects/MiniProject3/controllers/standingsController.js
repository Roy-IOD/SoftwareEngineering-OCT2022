"use strict";
const Models = require("../models");
const axios = require("axios");

const getStandings = (res) => {
  Models.Standing.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateStandings = (req, res) => {
  let standingId = req.params.id;
  Models.Standing.update(req.body, { where: { id: standingId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storeStandings = (req, res) => {
  axios
    .get("https://api.squiggle.com.au/?q=standings;year=2022;round=final")
    .then((data) => {
      let apiData = data.data.standings;
      let standingsData = apiData.map((standing) => {
        return {
          rank: standing.rank,
          name: standing.name,
          pts: standing.pts,
          percentage: standing.percentage,
        };
      });

      standingsData.forEach((standing) => {
        Models.Standing.findOrCreate({
          where: { name: standing.name },
          defaults: {
            rank: standing.rank,
            name: standing.name,
            pts: standing.pts,
            percentage: standing.percentage,
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
  getStandings,
  updateStandings,
  storeStandings,
};
