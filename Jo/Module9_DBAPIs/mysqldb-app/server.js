const express = require("express");
const app = express();

require("dotenv").config();
require("./dbConnect"); //example using Sequelize package
require("./dbConnect_mysql2"); //example using mysql2 package

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes) //sequelize

let userRoutes2 = require('./routes/userRoutes_mysql2')
app.use('/api/users2', userRoutes2) //mysql2

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});