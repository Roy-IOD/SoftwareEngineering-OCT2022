const express = require("express");
const app = express();
require("dotenv").config();
require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

let gamesRoutes = require("./routes/gamesRoutes");
let teamsRoutes = require("./routes/teamsRoutes");
let standingsRoutes = require("./routes/standingsRoutes");

app.use("/api/games", gamesRoutes);
app.use("/api/teams", teamsRoutes);
app.use("/api/standings", standingsRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

const Controllers = require("./controllers");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  Controllers.gamesController.storeGames();
  Controllers.teamsController.storeTeams();
  Controllers.standingsController.storeStandings();
});
