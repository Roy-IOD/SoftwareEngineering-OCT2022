const express = require("express");
const app = express();

require("dotenv").config();
require("./dbConnect"); //example using Sequelize package

let dbConnect = require("./dbConnect");
dbConnect.connectMysql()


// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

let studentRoutes = require('./routes/studentRoutes')
app.use('/api/students', studentRoutes)

let houseRoutes = require('./routes/houseRoutes')
app.use('/api/houses', houseRoutes)

let charmRoutes = require('./routes/charmRoutes')
app.use('/api/charms', charmRoutes)

let curseRoutes = require('./routes/curseRoutes')
app.use('/api/curses', curseRoutes)

let jinxRoutes = require('./routes/jinxRoutes')
app.use('/api/jinxs', jinxRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8000;

const Controllers = require("./controllers");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    Controllers.charmController.storeCharms();
    Controllers.curseController.storeCurses();
    Controllers.jinxController.storeJinxs();
    Controllers.houseController.storeHouses();

});

