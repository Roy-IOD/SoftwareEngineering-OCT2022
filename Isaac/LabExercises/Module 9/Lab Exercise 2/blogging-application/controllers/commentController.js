"use strict";
let Models = require("../models");

const getComments = (res) => {
  Models.Comment.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => console.log(err.message));
};

const createComment = (data, res) => {
  console.log(data);
  new Models.Comment(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => console.log(err.message));
};

module.exports = {
  getComments,
  createComment,
};
