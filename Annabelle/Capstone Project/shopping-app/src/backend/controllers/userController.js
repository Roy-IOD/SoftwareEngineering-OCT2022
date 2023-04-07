"use strict";
let Models = require("../models");

const getUsers = (res) => {
  Models.User.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const createUser = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data)
  new Models.User(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const loginUser = (data, res) => {
  console.log(data)
  Models.User.findOne(data)
    .then(userData => res.send({result: 200, data: userData}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const updateName = (userId, newName, res) => {
  Models.User.findByIdAndUpdate(userId, { name: newName })
    .then(updatedUser => {
      res.send({ result: 200, data: updatedUser });
    })
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
}

const deleteUser = (userId, res) => {
    Models.User.findByIdAndDelete(userId)
      .then(deletedUser => {
        res.send({ result: 200, data: deletedUser });
      })
      .catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }
  
  module.exports = { getUsers, createUser, loginUser, updateName, deleteUser };