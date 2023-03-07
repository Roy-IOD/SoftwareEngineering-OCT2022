"use strict";
const User = require("./user");
const Post = require("./post");
const Comment = require("./comments");

async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
}

init();

module.exports = {
  User,
  Post,
  Comment,
};
