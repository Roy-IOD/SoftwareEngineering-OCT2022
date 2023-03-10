"use strict";
const Models = require("../models");
const axios = require("axios");

const getTeams = (res) => {
  Models.Team.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createTeams = (data, res) => {
  Models.Team.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateTeams = (req, res) => {
  let teamId = req.params.id;
  Models.Team.update(req.body, { where: { id: teamId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteTeams = (req, res) => {
  let teamId = req.params.id;

  Models.Team.destroy({ where: { id: teamId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storeTeams = (req, res) => {
  axios
    .get("https://api.squiggle.com.au/?q=teams")
    .then((data) => {
      let apiData = data.data.teams;
      let teamData = apiData.map((team) => {
        return {
          name: team.name,
          debut: team.debut,
          abbrev: team.abbrev,
          logo: team.logo,
        };
      });
      console.log(teamData);

      teamData.forEach((team) => {
        Models.Team.findOrCreate({
          where: { name: team.name },
          defaults: {
            name: team.name,
            debut: team.debut,
            abbrev: team.abbrev,
            logo: team.logo,
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
  getTeams,
  createTeams,
  updateTeams,
  deleteTeams,
  storeTeams,
};
