const express = require("express")
const app = express();
require("dotenv").config();

let dbConnect = require ("./dbConnect");

// parsse requests of content-type - application/json

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to my MongoDB application"});
});

let userRoutes = require('./routes/userRoutes')
let postRoutes = require('./routes/postRoutes')
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
//set port, listen for requests
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}`)
});

