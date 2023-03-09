const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const api = new Schema({
name: { type: String},
_id: { type: Number},
Films: { type: String},
});
module.exports = mongoose.model("api", api);