const express = require("express");
const app = express();

require("dotenv").config();
require("./dbConnect"); //example using Sequelize package

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my Star Wars application." });
});

let filmsRoutes = require('./routes/filmsRoutes')
app.use('/api/films', filmsRoutes)

let planetsRoutes = require('./routes/planetsRoutes')
app.use('/api/planets', planetsRoutes)

const Controllers = require('./controllers');

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    Controllers.filmsController.storeFilms();
    Controllers.planetsController.storePlanets();
});