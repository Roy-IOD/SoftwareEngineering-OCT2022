const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comment = new Schema({
        postId: { type: String, trim: true, required: true },
        userId: { type: String, trim: true, required: true },
        content: { type: String, trim: true, required: true},
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("comment", comment);