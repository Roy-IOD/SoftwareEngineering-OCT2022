"use strict";
let Models = require("../models"); //matches index.js

const getUsers = (res) => {
    //finds all users
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

const updateUser = (req, res) => {
    //updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => { 
            console.log(err); 
            res.send({result: 500, error: err.message}) 
        })   
}

const deleteUser = (req, res) => {
    //deletes the user matching the ID from the param
    Models.User.findByIdAndRemove(req.params.id, req.body, { useFindAndModify: false })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => { 
            console.log(err); 
            res.send({result: 500, error: err.message}) 
        })    
}

module.exports = {
    getUsers, createUser, updateUser, deleteUser
}