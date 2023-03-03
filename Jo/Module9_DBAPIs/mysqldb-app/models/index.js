'use strict'
const User = require('./user')
const User2 = require('./user_mysql2')

async function init() {
    await User.sync();
};

init();

module.exports = {
    User, User2
};