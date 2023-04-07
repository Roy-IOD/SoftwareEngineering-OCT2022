let dbConnect = require("./dbConnect");
const cors = require('cors')

const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type -application/json
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
res.json({ message: "Welcome to myMongoDB application." });});
// set port, listen for requests
const PORT = process.env.PORT || 8081;


let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});