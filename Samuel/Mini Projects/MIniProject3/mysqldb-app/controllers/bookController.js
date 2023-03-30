"use strict";
const Models = require("../models");
const axios = require("axios");

const getBooks = (res) => {
  Models.Book.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storeBooks = (req, res) => {
  axios
    .get("https://gutendex.com/books/")
    .then((data) => {
      let apiData = data.data.results;
      console.log(apiData);
      let bookData = apiData.map((book) => {
        return {
          bookId: book.id,
          title: book.title,
        };
      });

      bookData.forEach((book) => {
        Models.Book.findOrCreate({
          where: { title: book.title },
          defaults: {
            id: book.id,
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
  getBooks,
  storeBooks,
};
