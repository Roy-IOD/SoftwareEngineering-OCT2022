"use strict";
const Models = require("../models");

const getUsers = (res) => {
    Models.User2.findAll().then(function (data) {
        res.send({ result: 200, data: data[0] })
    }).catch(err => {
        throw err
    })
}

const createUser = (data, res) => {
    console.log(data)
    Models.User2.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateUser = (req, res) => {
    let userId = req.params.id;
    console.log('updating user #'+userId+' with data '+req.body)

    Models.User2.update(req.body).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteUser = (req, res) => {
    let userId = req.params.id;

    Models.User2.destroy(userId).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getUsers, createUser, updateUser, deleteUser
}