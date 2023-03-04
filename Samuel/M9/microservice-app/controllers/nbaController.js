"use strict";
const axios = require("axios");

const getTeams = (res) => {
  axios
    .get("https://www.balldontlie.io/api/v1/teams")
    .then((data) => {
      console.log(data.data);
      res.send({ result: 200, data: data.data });
    })
    .catch((err) => {
      throw err;
    });
};

const getCity = (res) => {
  axios
    .get("https://www.balldontlie.io/api/v1/teams")
    .then((data) => {
      let apiData = data.data;
      console.log(apiData);

      //we can modify the data here to just return what we need:
      let cityData = apiData.map((city) => {
        return {
          city: city.city,
        };
      });

      res.send({ result: 200, data: cityData });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  nbaController: { getTeams, getCity },
};
