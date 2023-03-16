"use strict";
let Models = require("../models");
const axios = require("axios");

const getBreeds = (res) => {
  Models.Breed.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => console.log(err.message));
};

const storeBreeds = (res) => {
  axios
    .get("https://api.thedogapi.com/v1/breeds")
    .then((data) => {
      let apiData = data.data;
      console.log(apiData);

      let breedsData = apiData.map((breeds) => {
        return {
          id: breeds.id,
          name: breeds.name,
          life_span: breeds.life_span,
          origin: breeds.origin,
          url: breeds.image.url,
        };
      });

      console.log(breedsData);
      breedsData.forEach((breed) => {
        var query = { id: breed.id };

        Models.Breed.findOneAndUpdate(query, breed, { upsert: true })
          .then((data) => console.log("addnewbreed"))
          .catch((err) => console.log(err.message));
      });

    })
    .catch((err) => {
      throw err;
    });
};

const getRandomBreeds = (res) => {
  axios
    .get("https://api.thedogapi.com/v1/breeds")
    .then((data) => {
      console.log(data.data);
      res.send({ result: 50, data: data.data });
    })
    .catch((err) => {
      throw err;
    });
};

const createBreed = (data, res) => {
  console.log(data);
  new Models.Breed(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => console.log(err.message));
};

const updateBreed = (req, res) => {
  console.log(req.body);
  Models.Breed.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteBreed = (req, res) => {
  Models.Breed.findByIdAndRemove(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  breedsController: {
    getBreeds,
    getRandomBreeds,
    storeBreeds,
    createBreed,
    updateBreed,
    deleteBreed
  },
};
