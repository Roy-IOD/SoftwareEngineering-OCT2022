"use strict";
const axios = require("axios");

const getBreweries = (res) => {
  axios
    .get("https://api.openbrewerydb.org/breweries")
    .then((data) => {
      let apiData = data.data;
      console.log(apiData);

      //we can modify the data here to just return what we need:
      let breweryData = apiData.map((brewery) => {
        return {
          name: brewery.name,
          type: brewery.brewery_type,
          country: brewery.country,
          url: brewery.website_url,
        };
      });

      res.send({ result: 200, data: breweryData });
    })
    .catch((err) => {
      throw err;
    });
};

const getRandomBrewery = (res) => {
  axios
    .get("https://api.openbrewerydb.org/breweries/random?size=1")
    .then((data) => {
      console.log(data.data);
      res.send({ result: 200, data: data.data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  breweryController: { getBreweries, getRandomBrewery },
};
