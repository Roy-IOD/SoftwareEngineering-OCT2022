const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
  postID: { type: Number, trim: true, required: true },
  userID: { type: String, trim: true, required: true },
  title: { type: String, trim: true, required: true, unique: true },
  content: { type: String, trim: true, required: true },
  image: { type: String },
  likes: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", post);
