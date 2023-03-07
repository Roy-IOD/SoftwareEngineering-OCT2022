"use strict";
let Models = require("../models"); //matches index.js

const getApis = (res) => {
    axios.get('https://api.disneyapi.dev/characters').then(data => {
        console.log(data.data);
        res.send({result:200, data: data.data})
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getApis, createApis
}