const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const post = new Schema({
postID: { type: Number, trim: true, required: true, unique: true  },
user: { type: String, trim: true, required: true, unique: true  },
title: { type: String, trim: true, required: true },
likes: { type: Number },
location: { type: String, trim: true, required: false},
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }

});
module.exports = mongoose.model("post", post);