'use strict';

const Student = require('./student');
const House = require('./house');
const Charm = require('./charm');
const Curse = require('./curse');
const Jinx = require('./jinx');

async function init () {
    await Student.sync(),
    await House.sync(),
    await Charm.sync(),
    await Curse.sync(),
    await Jinx.sync()
};

init();

module.exports = {
    Student, House, Charm, Curse, Jinx
};