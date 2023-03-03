const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
      postId: { type: Number, trim: true, required: true, unique: true },
      title: { type: String, trim: true, required: true },
      image: { data: Buffer, contentType: String },
      text: { type: String, trim: true, required: true },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", post);
