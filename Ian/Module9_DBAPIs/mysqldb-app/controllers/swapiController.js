"use strict";
const axios = require("axios");

const getFilms = (req, res) => {
    axios.get('http://swapi.dev/api/films/').then(data => {
        console.log(data.data);
        res.send({ result: 200, data: data.data })
    }).catch(err => {
        throw err
    })
}

// const getFilms = (req, res) => {
//     axios.get('http://swapi.dev/api/films/?s=${req.query.s}').then(data => {
//         console.log(data.data);
//         res.send({ result: 200, data: data.data })
//     }).catch(err => {
//         throw err
//     })
// }

const getPeople = (res) => {
    axios.get('http://swapi.dev/api/people/').then(data => {
        console.log(data.data);
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getPlanets = (res) => {
    axios.get('http://swapi.dev/api/planets/').then(data => {
        console.log(data.data);
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getFilms, getPeople, getPlanets
}