const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true, unique: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    likes: { type: Number },
    comments: { text: String, trim: true, required: false },//should I have comments here?
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", post);

