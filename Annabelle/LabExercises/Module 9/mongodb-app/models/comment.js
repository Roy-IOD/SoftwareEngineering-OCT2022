const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const comment = new Schema({
commentID: { type: Number, trim: true, required: true, unique: true  },
postID: { type: Number, trim: true, required: true, unique: true  },
userID: { type: Number, trim: true, required: true, unique: true  },
title: { type: String, trim: true, required: true },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }

});
module.exports = mongoose.model("comment", comment);