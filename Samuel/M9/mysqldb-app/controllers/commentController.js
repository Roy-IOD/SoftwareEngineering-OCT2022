"use strict";
const Models = require("../models");

const getComments = (res) => {
  Models.Comment.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createComment = (data, res) => {
  Models.Comment.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateComment = (req, res) => {
  let commentId = req.params.id;
  console.log("updating post #" + commentId + " with data " + req.body);

  Models.Comment.update(req.body, { where: { id: commentId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteComment = (req, res) => {
  let commentId = req.params.id;

  Models.Comment.destroy({ where: { id: commentId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
