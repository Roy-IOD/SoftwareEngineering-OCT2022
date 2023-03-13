"use strict";
const Book = require("./books");
const Fantasy = require("./fantasy");
const Author = require("./author");

async function init() {
  await Book.sync();
  await Fantasy.sync();
  await Author.sync();
}

init();

module.exports = {
  Book,
  Fantasy,
  Author,
};
