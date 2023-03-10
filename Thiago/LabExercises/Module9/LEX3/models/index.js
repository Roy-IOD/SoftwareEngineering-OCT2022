"use strict";
const User = require("./user");
const Comment = require("./comment");
const Post = require("./post");

async function init() {
  await User.sync();
  await Comment.sync();
  await Post.sync();
}
init();

module.exports = { User, Comment, Post };
