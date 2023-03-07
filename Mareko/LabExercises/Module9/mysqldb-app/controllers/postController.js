"use strict";

const Models = require("../models");

const getPosts = (res) => {
    Models.Post.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const createPosts = (data, res) => {
    Models.Post.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getPosts, createPosts
}