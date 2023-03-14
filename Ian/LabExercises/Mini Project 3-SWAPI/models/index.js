'use strict'
const Film = require('./Film');
const Planet = require('./Planet');

async function init() {
    await Film.sync();
    await Planet.sync();
};

init();

module.exports = { 
    Film, Planet
};