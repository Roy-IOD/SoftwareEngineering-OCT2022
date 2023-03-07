const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const post = new Schema({
  title: { type: String, trim: true, required: true },
  content: { type: String, trim: true, required: true },
  category: { type: String, trim: true, required: true },
  userID: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", post);

//The "user" mentioned in the above line should be in the
//singular form ..whereas the actual collection name in
//mongodb will be in the plural form.
//Refer to mongoose documentation for m https://www.npmjs.com/package/mongoose
//The first argument is the singular name of your collection.
//Mongoose automatically looks for the lowercase plural version. For example, if you use
//const MyModel = mongoose.model('Ticket', mySchema);
//Then MyModel will use the tickets collection, not the Ticket collection.
