const Models = require("../models");
const axios = require("axios");

const getFantasy = (res) => {
  Models.Fantasy.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createFantasy = (data, res) => {
  Models.Fantasy.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateFantasy = (req, res) => {
  let bookId = req.params.id;
  Models.Fantasy.update(req.body, { where: { id: bookId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteFantasy = (req, res) => {
  let bookId = req.params.id;

  Models.Fantasy.destroy({ where: { id: bookId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storeFantasy = (req, res) => {
  axios
    .get("https://gutendex.com/books/?topic=fantasy")
    .then((data) => {
      let apiData = data.data.results;
      let fantasyData = apiData.map((book) => {
        return {
          bookId: book.id,
          title: book.title,
          authors: book.authors[0].name,
        };
      });

      fantasyData.forEach((book) => {
        Models.Fantasy.findOrCreate({
          where: { title: book.title },
          defaults: {
            bookId: book.id,
            author: book.authors,
          },
        })
          .then((created) => {
            created ? console.log("Data being added to database") : null;
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
  getFantasy,
  createFantasy,
  updateFantasy,
  deleteFantasy,
  storeFantasy,
};
