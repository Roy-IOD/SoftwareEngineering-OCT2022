const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Breed = new Schema({
  id: { type: Number, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  life_span: { type: String, trim: true, required: true },
  origin: { type: String, trim: true },
  url: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("breed", Breed);
