"use strict";
const Models = require("../models");

const getPosts = (res) => {
    Models.Post.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createPost = (data, res) => {
    Models.Post.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updatePost = (req, res) => {
    let postId = req.params.id;
    console.log('updating post #'+postId+' with data '+req.body)

    Models.Post.update(req.body, { where: { id: postId} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deletePost = (req, res) => {
    let postId = req.params.id;

    Models.Post.destroy({ where: { id: postId} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getPosts, createPost, updatePost, deletePost
}