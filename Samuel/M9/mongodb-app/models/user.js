const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  userID: { type: String, trim: true, required: true },
  userName: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true, unique: true },
  email: { type: String },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", user);
