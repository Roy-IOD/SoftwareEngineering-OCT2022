"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
    //finds all posts
    Models.Post.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => console.log(err.message))
}

const createPost = (data, res) => {
    //creates a new post using JSON data POSTed in request body
    console.log(data)
    new Models.Post(data).save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => console.log(err.message))    
}

module.exports = {
    getPosts, createPost
}