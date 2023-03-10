'use strict'
const User = require('./user')
const User2 = require('./user_mysql2')

const Post = require('./post')

async function init() {
    await User.sync();
    await Post.sync();
};

init();

module.exports = {
    User, User2, Post
};