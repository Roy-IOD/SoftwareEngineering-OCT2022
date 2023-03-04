"use strict";
const axios = require('axios');

const getHouses = (res) => {
    axios.get('https://wizard-world-api.herokuapp.com/Houses')
    .then(data => {
        console.log(data.data);
        res.send({ result: 200, data: data.data })
    })
    .catch(err => { throw err })
};

module.exports = { 
    getHouses,
}