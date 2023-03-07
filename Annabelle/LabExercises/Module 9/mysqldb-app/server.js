const express = require("express");
const app = express();
let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

require("dotenv").config();
require("./dbConnect"); //example using Sequelize package

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});