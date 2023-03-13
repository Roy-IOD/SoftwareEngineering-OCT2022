const Models = require("../models");
const axios = require("axios");

const getAuthors = (res) => {
  Models.Author.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const storeAuthors = (req, res) => {
  let authorCount = 0;

  axios
    .get("https://gutendex.com/books/?topic=fantasy")
    .then((data) => {
      let apiData = data.data.results;
      let bookData = new Map();
      apiData.forEach((book) => //forEaches instead of maps, to build up list of all authors
        book.authors.forEach((author) => {
          bookData.set(author.name, author.birth_year);
        })
      );

      console.log(bookData); //all unique authors mapped to birth year

      bookData.forEach((birthDate, author) => {

        Models.Author.findOrCreate({
          where: {
            name: author,
          },
          defaults: {
            birth_year: birthDate,
          },
        })
          .then(([author,created]) => {
            created ? console.log("Author added to database") : null;
          })
          .catch((err) => {
            throw err;
          });
      });
    })
    .catch((err) => {
      throw err;
    })
};

module.exports = {
  getAuthors,
  storeAuthors,
};
