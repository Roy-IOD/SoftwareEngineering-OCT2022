"use strict";
const Book = require("./books");
const Fantasy = require("./fantasy");
const Author = require("./author");

async function init() {
  await Author.sync();
  await Book.sync();
  await Fantasy.sync();
}

init();

module.exports = {
  Book,
  Fantasy,
  Author,
};
