const express = require("express");
const app = express();
require("dotenv").config();
require("./dbConnect")

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
      res.json({ message: "Welcome to my MongoDV application"})
});

let userRoutes = require('./routes/userRoutes')
let postRoutes = require('./routes/postRoutes')
let commentRoutes = require('./routes/commentRoutes')
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)


//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
});