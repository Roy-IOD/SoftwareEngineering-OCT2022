'use strict'
const User = require('./user')

async function init() {
    await User.sync();
};

init();

module.exports = {
    User
};