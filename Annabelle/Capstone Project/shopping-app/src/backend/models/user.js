const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

name: { type: String, trim: true, required: true },
email: { type: String, trim: true, required: true, unique: true },
password: { type: String },

createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }

});
module.exports = mongoose.model("user", userSchema);
