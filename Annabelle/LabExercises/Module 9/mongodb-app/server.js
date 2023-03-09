let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes')
let postRoutes = require('./routes/postRoutes')
let commentRoutes = require('./routes/commentRoutes')
let apiRoutes = require('./routes/apiRoutes')

const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type -application/json
app.use(express.json());
app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });});


app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/users', userRoutes)
app.use('/api/apis', apiRoutes)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});


