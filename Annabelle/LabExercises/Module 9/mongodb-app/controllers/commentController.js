"use strict";
let Models = require("../models"); //matches index.js

const getComments = (res) => {
    //finds all users
    Models.Comment.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => console.log(err.message))
}

const createComment = (data, res) => {
    //creates a new user using JSON data POSTed in request body
    console.log(data)
    new Models.Comment(data).save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => console.log(err.message))    
}

module.exports = {
    getComments, createComment
}