'use strict'
//for each Sequelize model, do the 3 steps below:
const User = require('./user')
const User2 = require('./user_mysql2')

const Post = require('./post') //1. import

async function init() {
    await User.sync();
    await Post.sync(); //2. sync
};

init();

module.exports = {
    User, User2, Post //3. export
};