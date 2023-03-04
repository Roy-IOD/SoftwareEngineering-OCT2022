"use strict";
let models = require("../models"); //matches index.js

const Data = require('./models/api');
p.get('/', (req, res, next) => {
    request('https://api.disneyapi.dev/characters', function (error, response, body) {
        var result = JSON.parse(body);
        console.log('body:', result); 
        


module.exports = {
    getApis, createApis
}