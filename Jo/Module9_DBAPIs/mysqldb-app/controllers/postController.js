"use strict";
const Models = require("../models");

const getPosts = (res) => {
    Models.Post.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, data: err.message })
    })
}

const createPost = (data, res) => {
    Models.Post.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, data: err.message })
    })
}

module.exports = {
    getPosts, createPost
}