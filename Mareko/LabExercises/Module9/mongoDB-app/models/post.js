const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    imageURL: { type: String, trim: true, required: false, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", post);

//The "post" mentioned in the above line should be in the
//singular form ..whereas the actual collection name in
//mongodb will be in the plural form.

//Refer to mongoose documentation for more: https://www.npmjs.com/package/mongoose

//The first argument is the singular name of your collection.
//Mongoose automatically looks for the lowercase plural version. For example, if you use
//const MyModel = mongoose.model('Ticket', mySchema);
//Then MyModel will use the tickets collection, not the Ticket collection.