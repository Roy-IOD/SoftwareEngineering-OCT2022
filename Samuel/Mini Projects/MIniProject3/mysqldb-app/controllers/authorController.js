const Models = require("../models");
const axios = require("axios");

const getAuthor = (res) => {
  Models.Author.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storeAuthor = (req, res) => {
  axios
    .get("https://gutendex.com/books/?topic=fantasy")
    .then((data) => {
      let apiData = data.data.results;
      let bookData = apiData.map((book) =>
        book.authors.map((author) => {
          return {
            name: author.name[0],
            birth_year: author.birth_year[0],
          };
        })
      );

      console.log(bookData);

      bookData.forEach((author) => {
        Models.Author.findOrCreate({
          where: {
            name: author.name,
          },
          defaults: {
            birth_year: author.birth_year,
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
  getAuthor,
  storeAuthor,
};
