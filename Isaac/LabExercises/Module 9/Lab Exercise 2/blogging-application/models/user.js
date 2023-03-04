const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
        firstName: { type: String, trim: true, required: true },
        lastName: { type: String, trim: true, required: true },
        emailId: { type: String, trim: true, required: true, unique:true },
        password: { type: String, trim: true, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", user);